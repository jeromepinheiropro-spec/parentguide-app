const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Disable caching for all routes (dev mode)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// ============================================================
// DATABASE SETUP - Persistent storage support
// ============================================================
const fs = require('fs');
const DB_DIR = process.env.DATABASE_DIR || __dirname;
if (DB_DIR !== __dirname && !fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}
const dbPath = path.join(DB_DIR, 'parentguide.db');
console.log('[DB] Using database at:', dbPath);
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS parents (
    id TEXT PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    passwordHash TEXT,
    avatar TEXT DEFAULT 'parent',
    createdAt TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS children (
    id TEXT PRIMARY KEY,
    parentId TEXT NOT NULL,
    firstName TEXT NOT NULL,
    birthDate TEXT NOT NULL,
    gender TEXT CHECK(gender IN ('boy', 'girl')) NOT NULL,
    photoUrl TEXT,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (parentId) REFERENCES parents(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS milestones (
    id TEXT PRIMARY KEY,
    childId TEXT NOT NULL,
    type TEXT NOT NULL,
    label TEXT NOT NULL,
    value TEXT,
    ageInMonths REAL,
    date TEXT,
    notes TEXT,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (childId) REFERENCES children(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS growth_records (
    id TEXT PRIMARY KEY,
    childId TEXT NOT NULL,
    date TEXT NOT NULL,
    weightKg REAL,
    heightCm REAL,
    headCircCm REAL,
    notes TEXT,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (childId) REFERENCES children(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS sleep_records (
    id TEXT PRIMARY KEY,
    childId TEXT NOT NULL,
    date TEXT NOT NULL,
    nightHours REAL,
    napHours REAL,
    quality TEXT CHECK(quality IN ('great', 'good', 'fair', 'poor')),
    notes TEXT,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (childId) REFERENCES children(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS vaccines (
    id TEXT PRIMARY KEY,
    childId TEXT NOT NULL,
    name TEXT NOT NULL,
    recommendedAge TEXT,
    recommendedDate TEXT,
    givenDate TEXT,
    reminderDate TEXT,
    status TEXT DEFAULT 'upcoming',
    notes TEXT,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (childId) REFERENCES children(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS agenda_events (
    id TEXT PRIMARY KEY,
    childId TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    reminderDate TEXT,
    completed INTEGER DEFAULT 0,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (childId) REFERENCES children(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS questionnaires (
    id TEXT PRIMARY KEY,
    childId TEXT NOT NULL,
    responses TEXT NOT NULL,
    summary TEXT,
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (childId) REFERENCES children(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS content_quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    author TEXT DEFAULT '',
    active INTEGER DEFAULT 1,
    sortOrder INTEGER DEFAULT 0,
    createdAt TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS content_guide_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    icon TEXT NOT NULL,
    color TEXT NOT NULL,
    bgColor TEXT NOT NULL,
    sortOrder INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS content_guide_tips (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoryKey TEXT NOT NULL,
    title TEXT NOT NULL,
    ageRange TEXT NOT NULL,
    text TEXT NOT NULL,
    sortOrder INTEGER DEFAULT 0,
    FOREIGN KEY (categoryKey) REFERENCES content_guide_categories(key)
  );

  CREATE TABLE IF NOT EXISTS content_daily_tips (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ageGroup TEXT NOT NULL,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    sortOrder INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS content_dev_domains (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    icon TEXT NOT NULL,
    color TEXT NOT NULL,
    bgColor TEXT NOT NULL,
    sortOrder INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS content_dev_steps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    domainKey TEXT NOT NULL,
    ageGroup TEXT NOT NULL,
    label TEXT NOT NULL,
    activities TEXT NOT NULL,
    sortOrder INTEGER DEFAULT 0,
    FOREIGN KEY (domainKey) REFERENCES content_dev_domains(key)
  );

  CREATE TABLE IF NOT EXISTS user_profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    parentId TEXT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT DEFAULT '',
    photo TEXT DEFAULT '',
    bio TEXT DEFAULT '',
    childrenCount INTEGER DEFAULT 0,
    preferences TEXT DEFAULT '{}',
    status TEXT DEFAULT 'active' CHECK(status IN ('active', 'banned', 'suspended')),
    banReason TEXT DEFAULT '',
    lastLogin TEXT,
    activityLog TEXT DEFAULT '[]',
    createdAt TEXT DEFAULT (datetime('now')),
    updatedAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (parentId) REFERENCES parents(id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS suggestions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    text TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected', 'archived')),
    adminNote TEXT DEFAULT '',
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (userId) REFERENCES user_profiles(id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    targetType TEXT NOT NULL,
    targetId TEXT NOT NULL,
    text TEXT NOT NULL,
    status TEXT DEFAULT 'visible' CHECK(status IN ('visible', 'hidden', 'flagged')),
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (userId) REFERENCES user_profiles(id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reporterId INTEGER,
    reportedUserId INTEGER,
    reason TEXT NOT NULL,
    details TEXT DEFAULT '',
    status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'reviewed', 'dismissed', 'action_taken')),
    adminNote TEXT DEFAULT '',
    createdAt TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (reporterId) REFERENCES user_profiles(id) ON DELETE SET NULL,
    FOREIGN KEY (reportedUserId) REFERENCES user_profiles(id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS banned_words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    word TEXT UNIQUE NOT NULL,
    createdAt TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS promo_codes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    description TEXT DEFAULT '',
    discountType TEXT DEFAULT 'percent',
    discountValue REAL DEFAULT 0,
    maxUses INTEGER DEFAULT 0,
    currentUses INTEGER DEFAULT 0,
    validFrom TEXT DEFAULT (datetime('now')),
    validUntil TEXT,
    active INTEGER DEFAULT 1,
    createdAt TEXT DEFAULT (datetime('now'))
  );
`);

// ============================================================
// MIGRATIONS (idempotent)
// ============================================================
function ensureColumn(table, col, decl) {
  const info = db.prepare(`PRAGMA table_info(${table})`).all();
  if (!info.some(c => c.name === col)) {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${col} ${decl}`);
    console.log(`[migration] added ${table}.${col}`);
  }
}
ensureColumn('agenda_events', 'extras', 'TEXT');
ensureColumn('vaccines', 'extras', 'TEXT');
ensureColumn('parents', 'passwordHash', 'TEXT');

// ============================================================
// AUTH HELPERS
// ============================================================
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return salt + ':' + hash;
}

function verifyPassword(password, storedHash) {
  if (!storedHash) return false;
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;
  const testHash = crypto.scryptSync(password, salt, 64).toString('hex');
  return hash === testHash;
}

function generateToken(parentId) {
  return parentId + '.' + crypto.randomBytes(32).toString('hex');
}

// No demo data seeded — users create accounts via the app
console.log('Database ready (no demo data)');

// ============================================================
// API ROUTES
// ============================================================

// -- Auth --
app.post('/api/auth/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Mot de passe : 6 caractères minimum' });
  }
  // Check if email already exists
  const existing = db.prepare('SELECT id FROM parents WHERE email = ?').get(email);
  if (existing) {
    return res.status(409).json({ error: 'Un compte existe déjà avec cet email' });
  }
  try {
    const id = uuidv4();
    const passwordHash = hashPassword(password);
    db.prepare('INSERT INTO parents (id, firstName, lastName, email, passwordHash) VALUES (?, ?, ?, ?, ?)').run(id, firstName, lastName, email, passwordHash);
    const token = generateToken(id);
    const parent = { id, firstName, lastName, email, avatar: 'parent' };
    res.json({ token, parent });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email et mot de passe requis' });
  }
  const parent = db.prepare('SELECT * FROM parents WHERE email = ?').get(email);
  if (!parent) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
  }
  if (!verifyPassword(password, parent.passwordHash)) {
    return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
  }
  const token = generateToken(parent.id);
  res.json({ token, parent: { id: parent.id, firstName: parent.firstName, lastName: parent.lastName, email: parent.email, avatar: parent.avatar || 'parent' } });
});

// -- Parents --
app.get('/api/parents', (req, res) => {
  const parents = db.prepare('SELECT * FROM parents ORDER BY createdAt DESC').all();
  res.json(parents);
});

app.post('/api/parents', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const id = uuidv4();
  try {
    const pwHash = password ? hashPassword(password) : null;
    db.prepare('INSERT INTO parents (id, firstName, lastName, email, passwordHash) VALUES (?, ?, ?, ?, ?)').run(id, firstName, lastName, email, pwHash);
    res.json({ id, firstName, lastName, email });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/api/parents/:id', (req, res) => {
  const parent = db.prepare('SELECT * FROM parents WHERE id = ?').get(req.params.id);
  if (!parent) return res.status(404).json({ error: 'Parent not found' });
  const children = db.prepare('SELECT * FROM children WHERE parentId = ? ORDER BY birthDate DESC').all(req.params.id);
  res.json({ ...parent, children });
});

app.put('/api/parents/:id', (req, res) => {
  const { firstName, lastName, email, avatar } = req.body;
  if (avatar !== undefined) {
    db.prepare('UPDATE parents SET firstName = ?, lastName = ?, email = ?, avatar = ? WHERE id = ?').run(firstName, lastName, email, avatar, req.params.id);
  } else {
    db.prepare('UPDATE parents SET firstName = ?, lastName = ?, email = ? WHERE id = ?').run(firstName, lastName, email, req.params.id);
  }
  res.json({ success: true });
});

app.delete('/api/parents/:id', (req, res) => {
  db.prepare('DELETE FROM parents WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Children --
app.get('/api/parents/:parentId/children', (req, res) => {
  const children = db.prepare('SELECT * FROM children WHERE parentId = ? ORDER BY birthDate DESC').all(req.params.parentId);
  res.json(children);
});

app.post('/api/parents/:parentId/children', (req, res) => {
  const { firstName, birthDate, gender, avatar } = req.body;
  const id = uuidv4();
  db.prepare('INSERT INTO children (id, parentId, firstName, birthDate, gender, photoUrl) VALUES (?, ?, ?, ?, ?, ?)').run(id, req.params.parentId, firstName, birthDate, gender, avatar || null);
  res.json({ id, parentId: req.params.parentId, firstName, birthDate, gender, photoUrl: avatar });
});

app.get('/api/children/:id', (req, res) => {
  const child = db.prepare('SELECT * FROM children WHERE id = ?').get(req.params.id);
  if (!child) return res.status(404).json({ error: 'Child not found' });
  res.json(child);
});

app.put('/api/children/:id', (req, res) => {
  const { firstName, birthDate, gender, avatar } = req.body;
  if (avatar !== undefined) {
    db.prepare('UPDATE children SET firstName = ?, birthDate = ?, gender = ?, photoUrl = ? WHERE id = ?').run(firstName, birthDate, gender, avatar, req.params.id);
  } else {
    db.prepare('UPDATE children SET firstName = ?, birthDate = ?, gender = ? WHERE id = ?').run(firstName, birthDate, gender, req.params.id);
  }
  res.json({ success: true });
});

app.delete('/api/children/:id', (req, res) => {
  db.prepare('DELETE FROM children WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Milestones (now sorted NEWEST FIRST) --
app.get('/api/children/:childId/milestones', (req, res) => {
  const milestones = db.prepare("SELECT * FROM milestones WHERE childId = ? ORDER BY COALESCE(date, createdAt) DESC, ageInMonths DESC").all(req.params.childId);
  res.json(milestones);
});

app.post('/api/children/:childId/milestones', (req, res) => {
  const { type, label, value, ageInMonths, date, notes } = req.body;
  const id = uuidv4();
  db.prepare('INSERT INTO milestones (id, childId, type, label, value, ageInMonths, date, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').run(id, req.params.childId, type, label, value || null, ageInMonths || null, date || null, notes || null);
  res.json({ id, childId: req.params.childId, type, label, value, ageInMonths, date, notes });
});

app.delete('/api/milestones/:id', (req, res) => {
  db.prepare('DELETE FROM milestones WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Growth Records --
app.get('/api/children/:childId/growth', (req, res) => {
  const records = db.prepare('SELECT * FROM growth_records WHERE childId = ? ORDER BY date ASC').all(req.params.childId);
  res.json(records);
});

app.post('/api/children/:childId/growth', (req, res) => {
  const { date, weightKg, heightCm, headCircCm, notes } = req.body;
  const id = uuidv4();
  db.prepare('INSERT INTO growth_records (id, childId, date, weightKg, heightCm, headCircCm, notes) VALUES (?, ?, ?, ?, ?, ?, ?)').run(id, req.params.childId, date, weightKg || null, heightCm || null, headCircCm || null, notes || null);
  res.json({ id, childId: req.params.childId, date, weightKg, heightCm, headCircCm, notes });
});

app.delete('/api/growth/:id', (req, res) => {
  db.prepare('DELETE FROM growth_records WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Sleep Records --
app.get('/api/children/:childId/sleep', (req, res) => {
  const records = db.prepare('SELECT * FROM sleep_records WHERE childId = ? ORDER BY date DESC LIMIT 30').all(req.params.childId);
  res.json(records);
});

app.post('/api/children/:childId/sleep', (req, res) => {
  const { date, nightHours, napHours, quality, notes } = req.body;
  const id = uuidv4();
  db.prepare('INSERT INTO sleep_records (id, childId, date, nightHours, napHours, quality, notes) VALUES (?, ?, ?, ?, ?, ?, ?)').run(id, req.params.childId, date, nightHours || null, napHours || null, quality || null, notes || null);
  res.json({ id, childId: req.params.childId, date, nightHours, napHours, quality, notes });
});

app.delete('/api/sleep/:id', (req, res) => {
  db.prepare('DELETE FROM sleep_records WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Vaccines --
app.get('/api/children/:childId/vaccines', (req, res) => {
  const vaccines = db.prepare('SELECT * FROM vaccines WHERE childId = ? ORDER BY recommendedDate ASC').all(req.params.childId);
  res.json(vaccines);
});

app.post('/api/children/:childId/vaccines', (req, res) => {
  const { name, recommendedAge, recommendedDate, givenDate, reminderDate, status, notes, extras } = req.body;
  const id = uuidv4();
  const extrasStr = extras ? (typeof extras === 'string' ? extras : JSON.stringify(extras)) : null;
  db.prepare('INSERT INTO vaccines (id, childId, name, recommendedAge, recommendedDate, givenDate, reminderDate, status, notes, extras) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').run(id, req.params.childId, name, recommendedAge || null, recommendedDate || null, givenDate || null, reminderDate || null, status || 'upcoming', notes || null, extrasStr);
  res.json({ success: true, id });
});

app.put('/api/vaccines/:id', (req, res) => {
  const { givenDate, status, notes, reminderDate, extras } = req.body;
  const existing = db.prepare('SELECT * FROM vaccines WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Not found' });
  const extrasStr = extras !== undefined ? (extras === null ? null : (typeof extras === 'string' ? extras : JSON.stringify(extras))) : existing.extras;
  db.prepare('UPDATE vaccines SET givenDate = ?, status = ?, notes = ?, reminderDate = ?, extras = ? WHERE id = ?').run(
    givenDate !== undefined ? givenDate : existing.givenDate,
    status !== undefined ? status : existing.status,
    notes !== undefined ? notes : existing.notes,
    reminderDate !== undefined ? reminderDate : existing.reminderDate,
    extrasStr,
    req.params.id
  );
  res.json({ success: true });
});

app.delete('/api/vaccines/:id', (req, res) => {
  db.prepare('DELETE FROM vaccines WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Agenda events --
app.get('/api/children/:childId/agenda', (req, res) => {
  const events = db.prepare('SELECT * FROM agenda_events WHERE childId = ? ORDER BY date DESC, time DESC').all(req.params.childId);
  res.json(events);
});

app.get('/api/children/:childId/agenda/upcoming', (req, res) => {
  const today = new Date().toISOString().slice(0,10);
  const events = db.prepare('SELECT * FROM agenda_events WHERE childId = ? AND date >= ? AND completed = 0 ORDER BY date ASC, time ASC LIMIT 10').all(req.params.childId, today);
  res.json(events);
});

app.post('/api/children/:childId/agenda', (req, res) => {
  const { date, time, category, title, content, reminderDate, extras } = req.body;
  const id = uuidv4();
  const extrasStr = extras ? (typeof extras === 'string' ? extras : JSON.stringify(extras)) : null;
  db.prepare('INSERT INTO agenda_events (id, childId, date, time, category, title, content, reminderDate, extras) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').run(id, req.params.childId, date, time || null, category, title, content || null, reminderDate || null, extrasStr);
  res.json({ success: true, id });
});

app.put('/api/agenda/:id', (req, res) => {
  const { completed, title, content, date, time, extras, category, reminderDate } = req.body;
  const existing = db.prepare('SELECT * FROM agenda_events WHERE id = ?').get(req.params.id);
  if (!existing) return res.status(404).json({ error: 'Not found' });
  const extrasStr = extras !== undefined ? (extras === null ? null : (typeof extras === 'string' ? extras : JSON.stringify(extras))) : existing.extras;
  db.prepare('UPDATE agenda_events SET completed = ?, title = ?, content = ?, date = ?, time = ?, category = ?, reminderDate = ?, extras = ? WHERE id = ?').run(
    completed !== undefined ? (completed ? 1 : 0) : existing.completed,
    title !== undefined ? title : existing.title,
    content !== undefined ? content : existing.content,
    date !== undefined ? date : existing.date,
    time !== undefined ? time : existing.time,
    category !== undefined ? category : existing.category,
    reminderDate !== undefined ? reminderDate : existing.reminderDate,
    extrasStr,
    req.params.id
  );
  res.json({ success: true });
});

app.delete('/api/agenda/:id', (req, res) => {
  db.prepare('DELETE FROM agenda_events WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Questionnaire (bilan personnalise) --
app.get('/api/children/:childId/questionnaire', (req, res) => {
  const row = db.prepare('SELECT * FROM questionnaires WHERE childId = ? ORDER BY createdAt DESC LIMIT 1').get(req.params.childId);
  res.json(row || null);
});
app.get('/api/children/:childId/questionnaires', (req, res) => {
  const rows = db.prepare('SELECT id, createdAt, summary FROM questionnaires WHERE childId = ? ORDER BY createdAt DESC').all(req.params.childId);
  res.json(rows);
});
app.post('/api/children/:childId/questionnaire', (req, res) => {
  const { responses, summary } = req.body;
  if (!responses) return res.status(400).json({ error: 'responses required' });
  const id = uuidv4();
  db.prepare('INSERT INTO questionnaires (id, childId, responses, summary) VALUES (?, ?, ?, ?)')
    .run(id, req.params.childId, JSON.stringify(responses), summary ? JSON.stringify(summary) : null);
  const row = db.prepare('SELECT * FROM questionnaires WHERE id = ?').get(id);
  res.json(row);
});
app.delete('/api/questionnaires/:id', (req, res) => {
  db.prepare('DELETE FROM questionnaires WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// -- Proactive dashboard endpoint (all reminders in one call) --
app.get('/api/children/:childId/reminders', (req, res) => {
  const today = new Date().toISOString().slice(0,10);
  const in60 = new Date(Date.now() + 60*86400000).toISOString().slice(0,10);
  const upcomingVacc = db.prepare("SELECT id, name, recommendedAge, recommendedDate as date, extras, 'vaccine' as kind FROM vaccines WHERE childId = ? AND status != 'done' AND recommendedDate <= ? ORDER BY recommendedDate ASC").all(req.params.childId, in60);
  const upcomingEvents = db.prepare("SELECT id, title as name, category, date, time, extras, 'event' as kind FROM agenda_events WHERE childId = ? AND date >= ? AND date <= ? AND completed = 0 AND category != 'note' ORDER BY date ASC").all(req.params.childId, today, in60);
  res.json({ vaccines: upcomingVacc, events: upcomingEvents });
});

// ============================================================
// ADMIN API ROUTES - CONTENT MANAGEMENT
// ============================================================

// -- Quotes --
app.get('/api/admin/quotes', (req, res) => {
  try {
    const quotes = db.prepare('SELECT * FROM content_quotes ORDER BY sortOrder ASC, id ASC').all();
    res.json(quotes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/quotes', (req, res) => {
  try {
    const { text, author } = req.body;
    if (!text) return res.status(400).json({ error: 'text is required' });
    const result = db.prepare('INSERT INTO content_quotes (text, author, active, sortOrder) VALUES (?, ?, ?, ?)').run(text, author || '', 1, 0);
    res.json({ id: result.lastInsertRowid, text, author: author || '', active: 1, sortOrder: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/quotes/:id', (req, res) => {
  try {
    const { text, author, sortOrder } = req.body;
    const quote = db.prepare('SELECT * FROM content_quotes WHERE id = ?').get(req.params.id);
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    db.prepare('UPDATE content_quotes SET text = ?, author = ?, sortOrder = ? WHERE id = ?').run(
      text !== undefined ? text : quote.text,
      author !== undefined ? author : quote.author,
      sortOrder !== undefined ? sortOrder : quote.sortOrder,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/quotes/:id/toggle', (req, res) => {
  try {
    const quote = db.prepare('SELECT * FROM content_quotes WHERE id = ?').get(req.params.id);
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    db.prepare('UPDATE content_quotes SET active = ? WHERE id = ?').run(quote.active ? 0 : 1, req.params.id);
    res.json({ success: true, active: quote.active ? 0 : 1 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/admin/quotes/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM content_quotes WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Guide Categories --
app.get('/api/admin/guide-categories', (req, res) => {
  try {
    const categories = db.prepare('SELECT * FROM content_guide_categories ORDER BY sortOrder ASC, id ASC').all();
    res.json(categories);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/guide-categories', (req, res) => {
  try {
    const { key, title, icon, color, bgColor } = req.body;
    if (!key || !title || !icon || !color || !bgColor) {
      return res.status(400).json({ error: 'key, title, icon, color, bgColor are required' });
    }
    const result = db.prepare('INSERT INTO content_guide_categories (key, title, icon, color, bgColor, sortOrder) VALUES (?, ?, ?, ?, ?, ?)').run(key, title, icon, color, bgColor, 0);
    res.json({ id: result.lastInsertRowid, key, title, icon, color, bgColor, sortOrder: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/guide-categories/:id', (req, res) => {
  try {
    const { title, icon, color, bgColor, sortOrder } = req.body;
    const category = db.prepare('SELECT * FROM content_guide_categories WHERE id = ?').get(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    db.prepare('UPDATE content_guide_categories SET title = ?, icon = ?, color = ?, bgColor = ?, sortOrder = ? WHERE id = ?').run(
      title !== undefined ? title : category.title,
      icon !== undefined ? icon : category.icon,
      color !== undefined ? color : category.color,
      bgColor !== undefined ? bgColor : category.bgColor,
      sortOrder !== undefined ? sortOrder : category.sortOrder,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/admin/guide-categories/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM content_guide_tips WHERE categoryKey = (SELECT key FROM content_guide_categories WHERE id = ?)').run(req.params.id);
    db.prepare('DELETE FROM content_guide_categories WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Guide Tips --
app.get('/api/admin/guide-tips', (req, res) => {
  try {
    const categoryKey = req.query.categoryKey;
    let tips;
    if (categoryKey) {
      tips = db.prepare('SELECT * FROM content_guide_tips WHERE categoryKey = ? ORDER BY sortOrder ASC, id ASC').all(categoryKey);
    } else {
      tips = db.prepare('SELECT * FROM content_guide_tips ORDER BY categoryKey ASC, sortOrder ASC, id ASC').all();
    }
    res.json(tips);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/guide-tips', (req, res) => {
  try {
    const { categoryKey, title, ageRange, text } = req.body;
    if (!categoryKey || !title || !ageRange || !text) {
      return res.status(400).json({ error: 'categoryKey, title, ageRange, text are required' });
    }
    const result = db.prepare('INSERT INTO content_guide_tips (categoryKey, title, ageRange, text, sortOrder) VALUES (?, ?, ?, ?, ?)').run(categoryKey, title, ageRange, text, 0);
    res.json({ id: result.lastInsertRowid, categoryKey, title, ageRange, text, sortOrder: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/guide-tips/:id', (req, res) => {
  try {
    const { title, ageRange, text, sortOrder } = req.body;
    const tip = db.prepare('SELECT * FROM content_guide_tips WHERE id = ?').get(req.params.id);
    if (!tip) return res.status(404).json({ error: 'Tip not found' });
    db.prepare('UPDATE content_guide_tips SET title = ?, ageRange = ?, text = ?, sortOrder = ? WHERE id = ?').run(
      title !== undefined ? title : tip.title,
      ageRange !== undefined ? ageRange : tip.ageRange,
      text !== undefined ? text : tip.text,
      sortOrder !== undefined ? sortOrder : tip.sortOrder,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/admin/guide-tips/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM content_guide_tips WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Daily Tips --
app.get('/api/admin/daily-tips', (req, res) => {
  try {
    const ageGroup = req.query.ageGroup;
    let tips;
    if (ageGroup) {
      tips = db.prepare('SELECT * FROM content_daily_tips WHERE ageGroup = ? ORDER BY sortOrder ASC, id ASC').all(ageGroup);
    } else {
      tips = db.prepare('SELECT * FROM content_daily_tips ORDER BY ageGroup ASC, sortOrder ASC, id ASC').all();
    }
    res.json(tips);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/daily-tips', (req, res) => {
  try {
    const { ageGroup, title, text } = req.body;
    if (!ageGroup || !title || !text) {
      return res.status(400).json({ error: 'ageGroup, title, text are required' });
    }
    const result = db.prepare('INSERT INTO content_daily_tips (ageGroup, title, text, sortOrder) VALUES (?, ?, ?, ?)').run(ageGroup, title, text, 0);
    res.json({ id: result.lastInsertRowid, ageGroup, title, text, sortOrder: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/daily-tips/:id', (req, res) => {
  try {
    const { title, text, sortOrder } = req.body;
    const tip = db.prepare('SELECT * FROM content_daily_tips WHERE id = ?').get(req.params.id);
    if (!tip) return res.status(404).json({ error: 'Tip not found' });
    db.prepare('UPDATE content_daily_tips SET title = ?, text = ?, sortOrder = ? WHERE id = ?').run(
      title !== undefined ? title : tip.title,
      text !== undefined ? text : tip.text,
      sortOrder !== undefined ? sortOrder : tip.sortOrder,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/admin/daily-tips/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM content_daily_tips WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Dev Domains --
app.get('/api/admin/dev-domains', (req, res) => {
  try {
    const domains = db.prepare('SELECT * FROM content_dev_domains ORDER BY sortOrder ASC, id ASC').all();
    res.json(domains);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/dev-domains', (req, res) => {
  try {
    const { key, title, icon, color, bgColor } = req.body;
    if (!key || !title || !icon || !color || !bgColor) {
      return res.status(400).json({ error: 'key, title, icon, color, bgColor are required' });
    }
    const result = db.prepare('INSERT INTO content_dev_domains (key, title, icon, color, bgColor, sortOrder) VALUES (?, ?, ?, ?, ?, ?)').run(key, title, icon, color, bgColor, 0);
    res.json({ id: result.lastInsertRowid, key, title, icon, color, bgColor, sortOrder: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/dev-domains/:id', (req, res) => {
  try {
    const { title, icon, color, bgColor, sortOrder } = req.body;
    const domain = db.prepare('SELECT * FROM content_dev_domains WHERE id = ?').get(req.params.id);
    if (!domain) return res.status(404).json({ error: 'Domain not found' });
    db.prepare('UPDATE content_dev_domains SET title = ?, icon = ?, color = ?, bgColor = ?, sortOrder = ? WHERE id = ?').run(
      title !== undefined ? title : domain.title,
      icon !== undefined ? icon : domain.icon,
      color !== undefined ? color : domain.color,
      bgColor !== undefined ? bgColor : domain.bgColor,
      sortOrder !== undefined ? sortOrder : domain.sortOrder,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Dev Steps --
app.get('/api/admin/dev-steps', (req, res) => {
  try {
    const domainKey = req.query.domainKey;
    let steps;
    if (domainKey) {
      steps = db.prepare('SELECT * FROM content_dev_steps WHERE domainKey = ? ORDER BY sortOrder ASC, id ASC').all(domainKey);
    } else {
      steps = db.prepare('SELECT * FROM content_dev_steps ORDER BY domainKey ASC, sortOrder ASC, id ASC').all();
    }
    res.json(steps);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/admin/dev-steps', (req, res) => {
  try {
    const { domainKey, ageGroup, label, activities } = req.body;
    if (!domainKey || !ageGroup || !label || !activities) {
      return res.status(400).json({ error: 'domainKey, ageGroup, label, activities are required' });
    }
    const activitiesStr = typeof activities === 'string' ? activities : JSON.stringify(activities);
    const result = db.prepare('INSERT INTO content_dev_steps (domainKey, ageGroup, label, activities, sortOrder) VALUES (?, ?, ?, ?, ?)').run(domainKey, ageGroup, label, activitiesStr, 0);
    res.json({ id: result.lastInsertRowid, domainKey, ageGroup, label, activities: activitiesStr, sortOrder: 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/dev-steps/:id', (req, res) => {
  try {
    const { label, activities, sortOrder, ageGroup, domainKey } = req.body;
    const step = db.prepare('SELECT * FROM content_dev_steps WHERE id = ?').get(req.params.id);
    if (!step) return res.status(404).json({ error: 'Step not found' });
    const activitiesStr = activities !== undefined ? (typeof activities === 'string' ? activities : JSON.stringify(activities)) : step.activities;
    db.prepare('UPDATE content_dev_steps SET label = ?, activities = ?, sortOrder = ?, ageGroup = ?, domainKey = ? WHERE id = ?').run(
      label !== undefined ? label : step.label,
      activitiesStr,
      sortOrder !== undefined ? sortOrder : step.sortOrder,
      ageGroup !== undefined ? ageGroup : step.ageGroup,
      domainKey !== undefined ? domainKey : step.domainKey,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.delete('/api/admin/dev-steps/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM content_dev_steps WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ============================================================
// ADMIN API - PROMO CODES
// ============================================================
app.get('/api/admin/promo-codes', (req, res) => {
  try {
    const codes = db.prepare('SELECT * FROM promo_codes ORDER BY createdAt DESC').all();
    res.json(codes);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/promo-codes', (req, res) => {
  try {
    const { code, description, discountType, discountValue, maxUses, validFrom, validUntil } = req.body;
    if (!code) return res.status(400).json({ error: 'Le code est requis' });
    const result = db.prepare(
      'INSERT INTO promo_codes (code, description, discountType, discountValue, maxUses, validFrom, validUntil) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(code.toUpperCase().trim(), description || '', discountType || 'percent', discountValue || 0, maxUses || 0, validFrom || new Date().toISOString(), validUntil || null);
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) {
    if (e.message.includes('UNIQUE')) return res.status(400).json({ error: 'Ce code existe déjà' });
    res.status(500).json({ error: e.message });
  }
});

app.put('/api/admin/promo-codes/:id', (req, res) => {
  try {
    const { code, description, discountType, discountValue, maxUses, validFrom, validUntil, active } = req.body;
    const existing = db.prepare('SELECT * FROM promo_codes WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Code non trouvé' });
    db.prepare(
      'UPDATE promo_codes SET code=?, description=?, discountType=?, discountValue=?, maxUses=?, validFrom=?, validUntil=?, active=? WHERE id=?'
    ).run(
      (code || existing.code).toUpperCase().trim(),
      description !== undefined ? description : existing.description,
      discountType || existing.discountType,
      discountValue !== undefined ? discountValue : existing.discountValue,
      maxUses !== undefined ? maxUses : existing.maxUses,
      validFrom || existing.validFrom,
      validUntil !== undefined ? validUntil : existing.validUntil,
      active !== undefined ? active : existing.active,
      req.params.id
    );
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/promo-codes/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM promo_codes WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/promo-codes/:id/toggle', (req, res) => {
  try {
    const code = db.prepare('SELECT * FROM promo_codes WHERE id = ?').get(req.params.id);
    if (!code) return res.status(404).json({ error: 'Code non trouvé' });
    db.prepare('UPDATE promo_codes SET active = ? WHERE id = ?').run(code.active ? 0 : 1, req.params.id);
    res.json({ success: true, active: !code.active });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// -- Public content endpoints --
app.get('/api/content/quotes', (req, res) => {
  try {
    const quotes = db.prepare('SELECT * FROM content_quotes WHERE active = 1 ORDER BY sortOrder ASC, id ASC').all();
    res.json(quotes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/content/guide', (req, res) => {
  try {
    const categories = db.prepare('SELECT * FROM content_guide_categories ORDER BY sortOrder ASC, id ASC').all();
    const result = categories.map(cat => ({
      ...cat,
      tips: db.prepare('SELECT * FROM content_guide_tips WHERE categoryKey = ? ORDER BY sortOrder ASC, id ASC').all(cat.key)
    }));
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/content/daily-tips/:ageGroup', (req, res) => {
  try {
    const tips = db.prepare('SELECT * FROM content_daily_tips WHERE ageGroup = ? ORDER BY sortOrder ASC, id ASC').all(req.params.ageGroup);
    res.json(tips);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/content/dev', (req, res) => {
  try {
    const domains = db.prepare('SELECT * FROM content_dev_domains ORDER BY sortOrder ASC, id ASC').all();
    const result = domains.map(dom => ({
      ...dom,
      steps: db.prepare('SELECT * FROM content_dev_steps WHERE domainKey = ? ORDER BY sortOrder ASC, id ASC').all(dom.key)
    }));
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Dashboard stats --
app.get('/api/admin/stats', (req, res) => {
  try {
    const quotes = db.prepare('SELECT COUNT(*) as count FROM content_quotes').get();
    const categories = db.prepare('SELECT COUNT(*) as count FROM content_guide_categories').get();
    const tips = db.prepare('SELECT COUNT(*) as count FROM content_guide_tips').get();
    const dailyTips = db.prepare('SELECT COUNT(*) as count FROM content_daily_tips').get();
    const domains = db.prepare('SELECT COUNT(*) as count FROM content_dev_domains').get();
    const steps = db.prepare('SELECT COUNT(*) as count FROM content_dev_steps').get();
    const children = db.prepare('SELECT COUNT(*) as count FROM children').get();
    const questionnaires = db.prepare('SELECT COUNT(*) as count FROM questionnaires').get();
    const users = db.prepare('SELECT COUNT(*) as count FROM user_profiles').get();
    const suggestions = db.prepare('SELECT COUNT(*) as count FROM suggestions').get();
    const pendingSuggestions = db.prepare("SELECT COUNT(*) as count FROM suggestions WHERE status='pending'").get();
    const comments = db.prepare('SELECT COUNT(*) as count FROM comments').get();
    const flaggedComments = db.prepare("SELECT COUNT(*) as count FROM comments WHERE status='flagged'").get();
    const reports = db.prepare('SELECT COUNT(*) as count FROM reports').get();
    const pendingReports = db.prepare("SELECT COUNT(*) as count FROM reports WHERE status='pending'").get();
    const bannedUsers = db.prepare("SELECT COUNT(*) as count FROM user_profiles WHERE status='banned'").get();
    const bannedWords = db.prepare('SELECT COUNT(*) as count FROM banned_words').get();

    // Enhanced analytics
    const parents = db.prepare('SELECT COUNT(*) as count FROM parents').get();
    const parentsList = db.prepare('SELECT id, firstName, lastName, email, createdAt FROM parents ORDER BY createdAt DESC LIMIT 10').all();
    const childrenList = db.prepare('SELECT c.firstName, c.birthDate, p.firstName as parentFirstName, p.lastName as parentLastName FROM children c LEFT JOIN parents p ON c.parentId = p.id ORDER BY c.id DESC LIMIT 10').all();
    const milestones = db.prepare('SELECT COUNT(*) as count FROM milestones').get();
    const growthEntries = db.prepare('SELECT COUNT(*) as count FROM growth_records').get();
    const sleepEntries = db.prepare('SELECT COUNT(*) as count FROM sleep_records').get();
    const agendaEvents = db.prepare('SELECT COUNT(*) as count FROM agenda_events').get();
    const vaccines = db.prepare('SELECT COUNT(*) as count FROM vaccines').get();

    // Recent activity (registrations in last 7 days)
    const recentParents = db.prepare("SELECT COUNT(*) as count FROM parents WHERE createdAt >= datetime('now','-7 days')").get();
    // Children age distribution
    const childAges = db.prepare("SELECT birthDate FROM children").all();

    // Registration evolution (last 30 days, grouped by day)
    const registrationEvolution = db.prepare(`
      SELECT date(createdAt) as day, COUNT(*) as count
      FROM parents
      WHERE createdAt >= datetime('now', '-30 days')
      GROUP BY date(createdAt)
      ORDER BY day ASC
    `).all();

    // Registration evolution by week (last 12 weeks)
    const weeklyRegistrations = db.prepare(`
      SELECT strftime('%Y-W%W', createdAt) as week,
             MIN(date(createdAt)) as weekStart,
             COUNT(*) as count
      FROM parents
      WHERE createdAt >= datetime('now', '-84 days')
      GROUP BY strftime('%Y-W%W', createdAt)
      ORDER BY week ASC
    `).all();

    // Monthly registrations (last 6 months)
    const monthlyRegistrations = db.prepare(`
      SELECT strftime('%Y-%m', createdAt) as month, COUNT(*) as count
      FROM parents
      WHERE createdAt >= datetime('now', '-180 days')
      GROUP BY strftime('%Y-%m', createdAt)
      ORDER BY month ASC
    `).all();

    // Promo codes stats
    const promoCodes = db.prepare('SELECT COUNT(*) as count FROM promo_codes').get();
    const activePromoCodes = db.prepare("SELECT COUNT(*) as count FROM promo_codes WHERE active = 1").get();

    // Conversion / engagement metrics
    const parentsWithChildren = db.prepare("SELECT COUNT(DISTINCT parentId) as count FROM children").get();
    const activeParents7d = db.prepare(`
      SELECT COUNT(DISTINCT parentId) as count FROM (
        SELECT c.parentId FROM children c WHERE c.id IN (
          SELECT childId FROM agenda_events WHERE createdAt >= datetime('now', '-7 days')
        )
        UNION
        SELECT c.parentId FROM children c WHERE c.id IN (
          SELECT childId FROM milestones WHERE createdAt >= datetime('now', '-7 days')
        )
        UNION
        SELECT c.parentId FROM children c WHERE c.id IN (
          SELECT childId FROM growth_records WHERE createdAt >= datetime('now', '-7 days')
        )
      )
    `).get();

    res.json({
      quotes: quotes.count,
      guideCategories: categories.count,
      categories: categories.count,
      guideTips: tips.count,
      tips: tips.count,
      dailyTips: dailyTips.count,
      devDomains: domains.count,
      domains: domains.count,
      devSteps: steps.count,
      steps: steps.count,
      children: children.count,
      questionnaires: questionnaires.count,
      users: users.count,
      bannedUsers: bannedUsers.count,
      suggestions: suggestions.count,
      pendingSuggestions: pendingSuggestions.count,
      comments: comments.count,
      flaggedComments: flaggedComments.count,
      reports: reports.count,
      pendingReports: pendingReports.count,
      bannedWords: bannedWords.count,
      // Enhanced analytics
      parents: parents.count,
      recentParents: recentParents.count,
      recentParentsList: parentsList,
      childrenList: childrenList,
      milestones: milestones.count,
      growthEntries: growthEntries.count,
      sleepEntries: sleepEntries.count,
      agendaEvents: agendaEvents.count,
      vaccines: vaccines.count,
      childAges: childAges.map(c => c.birthDate),
      registrationEvolution,
      weeklyRegistrations,
      monthlyRegistrations,
      promoCodes: promoCodes.count,
      activePromoCodes: activePromoCodes.count,
      parentsWithChildren: parentsWithChildren.count,
      activeParents7d: activeParents7d.count,
      lastUpdate: new Date().toISOString()
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Seed endpoint (extracts data from app.js client-side constants) --
app.post('/api/admin/seed', (req, res) => {
  try {
    const quoteCount = db.prepare('SELECT COUNT(*) as count FROM content_quotes').get();
    if (quoteCount.count > 0) {
      return res.status(400).json({ error: 'Contenu deja initialise. Supprimez les tables pour re-initialiser.' });
    }

    // If body has data, use it (sent from admin panel)
    const { quotes = [], guideCategories = [], guideTips = [], dailyTips = [], devDomains = [], devSteps = [] } = req.body;

    const insertQuote = db.prepare('INSERT INTO content_quotes (text, author, active, sortOrder) VALUES (?, ?, ?, ?)');
    const insertGuideCat = db.prepare('INSERT INTO content_guide_categories (key, title, icon, color, bgColor, sortOrder) VALUES (?, ?, ?, ?, ?, ?)');
    const insertGuideTip = db.prepare('INSERT INTO content_guide_tips (categoryKey, title, ageRange, text, sortOrder) VALUES (?, ?, ?, ?, ?)');
    const insertDailyTip = db.prepare('INSERT INTO content_daily_tips (ageGroup, title, text, sortOrder) VALUES (?, ?, ?, ?)');
    const insertDevDom = db.prepare('INSERT INTO content_dev_domains (key, title, icon, color, bgColor, sortOrder) VALUES (?, ?, ?, ?, ?, ?)');
    const insertDevStep = db.prepare('INSERT INTO content_dev_steps (domainKey, ageGroup, label, activities, sortOrder) VALUES (?, ?, ?, ?, ?)');

    const tx = db.transaction(() => {
      quotes.forEach((q, i) => insertQuote.run(q.text || q.q, q.author || q.a || '', q.active !== false ? 1 : 0, i));
      guideCategories.forEach((c, i) => insertGuideCat.run(c.key, c.title || c.t, c.icon || c.ico, c.color || c.c, c.bgColor || c.bg, i));
      guideTips.forEach((t, i) => insertGuideTip.run(t.categoryKey, t.title || t.t, t.ageRange || t.a, t.text || t.x, t.sortOrder || i));
      dailyTips.forEach((t, i) => insertDailyTip.run(t.ageGroup, t.title || t.t, t.text || t.x, t.sortOrder || i));
      devDomains.forEach((d, i) => insertDevDom.run(d.key, d.title || d.t, d.icon || d.ico, d.color || d.c, d.bgColor || d.bg, i));
      devSteps.forEach((s, i) => {
        const acts = typeof s.activities === 'string' ? s.activities : JSON.stringify(s.activities || s.acts);
        insertDevStep.run(s.domainKey, s.ageGroup, s.label || s.l, acts, s.sortOrder || i);
      });
    });
    tx();

    res.json({ success: true, seeded: { quotes: quotes.length, guideCategories: guideCategories.length, guideTips: guideTips.length, dailyTips: dailyTips.length, devDomains: devDomains.length, devSteps: devSteps.length } });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// -- Force re-seed (clears and re-imports) --
app.post('/api/admin/reseed', (req, res) => {
  try {
    db.exec('DELETE FROM content_dev_steps; DELETE FROM content_dev_domains; DELETE FROM content_daily_tips; DELETE FROM content_guide_tips; DELETE FROM content_guide_categories; DELETE FROM content_quotes;');
    // Forward to seed
    req.url = '/api/admin/seed';
    return app.handle(req, res);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ============================================================
// ADMIN API - USER PROFILES
// ============================================================
app.get('/api/admin/users', (req, res) => {
  try {
    const users = db.prepare('SELECT * FROM user_profiles ORDER BY createdAt DESC').all();
    res.json(users);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/admin/users/:id', (req, res) => {
  try {
    const user = db.prepare('SELECT * FROM user_profiles WHERE id = ?').get(req.params.id);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/users', (req, res) => {
  try {
    const { firstName, lastName, email, phone, photo, bio, childrenCount, preferences, status } = req.body;
    const result = db.prepare(
      'INSERT INTO user_profiles (firstName, lastName, email, phone, photo, bio, childrenCount, preferences, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    ).run(firstName, lastName, email, phone || '', photo || '', bio || '', childrenCount || 0, JSON.stringify(preferences || {}), status || 'active');
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/users/:id', (req, res) => {
  try {
    const { firstName, lastName, email, phone, photo, bio, childrenCount, preferences, status, banReason } = req.body;
    db.prepare(
      'UPDATE user_profiles SET firstName=?, lastName=?, email=?, phone=?, photo=?, bio=?, childrenCount=?, preferences=?, status=?, banReason=?, updatedAt=datetime("now") WHERE id=?'
    ).run(firstName, lastName, email, phone || '', photo || '', bio || '', childrenCount || 0, JSON.stringify(preferences || {}), status || 'active', banReason || '', req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/users/:id/status', (req, res) => {
  try {
    const { status, banReason, lastLogin } = req.body;
    if (lastLogin) {
      db.prepare('UPDATE user_profiles SET status=?, banReason=?, lastLogin=?, updatedAt=datetime("now") WHERE id=?').run(status, banReason || '', lastLogin, req.params.id);
    } else {
      db.prepare('UPDATE user_profiles SET status=?, banReason=?, updatedAt=datetime("now") WHERE id=?').run(status, banReason || '', req.params.id);
    }
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/users/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM user_profiles WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ============================================================
// ADMIN API - SUGGESTIONS (Boîte à idées)
// ============================================================
app.get('/api/admin/suggestions', (req, res) => {
  try {
    const suggestions = db.prepare(`
      SELECT s.*, u.firstName || ' ' || u.lastName as userName, u.email as userEmail
      FROM suggestions s
      LEFT JOIN user_profiles u ON s.userId = u.id
      ORDER BY s.createdAt DESC
    `).all();
    res.json(suggestions);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/suggestions/:id', (req, res) => {
  try {
    const { status, adminNote } = req.body;
    db.prepare('UPDATE suggestions SET status=?, adminNote=? WHERE id=?').run(status, adminNote || '', req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/suggestions/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM suggestions WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Client-side endpoint for viewing own suggestions
app.get('/api/suggestions/mine', (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.json([]);
    const suggestions = db.prepare(`
      SELECT * FROM suggestions WHERE userId = ? ORDER BY createdAt DESC
    `).all(userId);
    res.json(suggestions);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Client-side endpoint for profile sync (find or create user profile)
app.post('/api/profile/sync', (req, res) => {
  try {
    const { parentId, firstName, lastName, email, childrenCount } = req.body;
    if (!email) return res.status(400).json({ error: 'Email requis' });

    // Check if user already exists by email
    let user = db.prepare('SELECT * FROM user_profiles WHERE email = ?').get(email);
    if (user) {
      // Update lastLogin and parentId if missing
      // Only update parentId if it refers to a valid parent
      const parentExists = parentId ? db.prepare('SELECT id FROM parents WHERE id = ?').get(parentId) : null;
      if (parentExists) {
        db.prepare("UPDATE user_profiles SET lastLogin = datetime('now'), parentId = ?, updatedAt = datetime('now') WHERE id = ?").run(parentId, user.id);
      } else {
        db.prepare("UPDATE user_profiles SET lastLogin = datetime('now'), updatedAt = datetime('now') WHERE id = ?").run(user.id);
      }
      return res.json({ id: user.id, status: user.status, existing: true });
    }

    // Create new user profile (validate parentId FK)
    const parentExists = parentId ? db.prepare('SELECT id FROM parents WHERE id = ?').get(parentId) : null;
    const result = db.prepare(
      "INSERT INTO user_profiles (parentId, firstName, lastName, email, childrenCount, status, lastLogin) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))"
    ).run(parentExists ? parentId : null, firstName || '', lastName || '', email, childrenCount || 0, 'active');
    res.json({ id: result.lastInsertRowid, status: 'active', existing: false });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Client-side endpoint for submitting suggestions
app.post('/api/suggestions', (req, res) => {
  try {
    const { userId, text } = req.body;
    if (!text || text.trim().length === 0) return res.status(400).json({ error: 'Le texte est requis' });

    // Check banned words
    const bannedWords = db.prepare('SELECT word FROM banned_words').all().map(w => w.word.toLowerCase());
    const lowerText = text.toLowerCase();
    const foundBanned = bannedWords.filter(w => lowerText.includes(w));
    if (foundBanned.length > 0) {
      return res.status(400).json({ error: 'Votre message contient des termes inappropriés', flagged: true });
    }

    const result = db.prepare('INSERT INTO suggestions (userId, text) VALUES (?, ?)').run(userId || null, text.trim());
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ============================================================
// ADMIN API - COMMENTS MODERATION
// ============================================================
app.get('/api/admin/comments', (req, res) => {
  try {
    const comments = db.prepare(`
      SELECT c.*, u.firstName || ' ' || u.lastName as userName, u.email as userEmail
      FROM comments c
      LEFT JOIN user_profiles u ON c.userId = u.id
      ORDER BY c.createdAt DESC
    `).all();
    res.json(comments);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/comments/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    db.prepare('UPDATE comments SET status=? WHERE id=?').run(status, req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/comments/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM comments WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Client-side endpoint for posting comments
// Public GET comments by targetType and targetId
app.get('/api/comments', (req, res) => {
  try {
    const { targetType, targetId } = req.query;
    let comments;
    if (targetType && targetId) {
      comments = db.prepare(`
        SELECT c.*, u.firstName || ' ' || u.lastName as userName
        FROM comments c
        LEFT JOIN user_profiles u ON c.userId = u.id
        WHERE c.targetType = ? AND (c.targetId = ? OR c.targetId LIKE ?) AND c.status = 'visible'
        ORDER BY c.createdAt DESC
      `).all(targetType, targetId, targetId + '-%');
    } else if (targetType) {
      comments = db.prepare(`
        SELECT c.*, u.firstName || ' ' || u.lastName as userName
        FROM comments c
        LEFT JOIN user_profiles u ON c.userId = u.id
        WHERE c.targetType = ? AND c.status = 'visible'
        ORDER BY c.createdAt DESC
      `).all(targetType);
    } else {
      comments = db.prepare(`
        SELECT c.*, u.firstName || ' ' || u.lastName as userName
        FROM comments c
        LEFT JOIN user_profiles u ON c.userId = u.id
        WHERE c.status = 'visible'
        ORDER BY c.createdAt DESC LIMIT 100
      `).all();
    }
    res.json(comments);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/comments', (req, res) => {
  try {
    const { userId, targetType, targetId, text } = req.body;
    if (!text || text.trim().length === 0) return res.status(400).json({ error: 'Le texte est requis' });

    const bannedWords = db.prepare('SELECT word FROM banned_words').all().map(w => w.word.toLowerCase());
    const lowerText = text.toLowerCase();
    const foundBanned = bannedWords.filter(w => lowerText.includes(w));
    if (foundBanned.length > 0) {
      return res.status(400).json({ error: 'Votre commentaire contient des termes inappropriés', flagged: true });
    }

    const result = db.prepare('INSERT INTO comments (userId, targetType, targetId, text) VALUES (?, ?, ?, ?)').run(userId || null, targetType, targetId, text.trim());
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ============================================================
// ADMIN API - REPORTS (Signalements)
// ============================================================
app.get('/api/admin/reports', (req, res) => {
  try {
    const reports = db.prepare(`
      SELECT r.*,
        reporter.firstName || ' ' || reporter.lastName as reporterName,
        reported.firstName || ' ' || reported.lastName as reportedName,
        reporter.email as reporterEmail,
        reported.email as reportedEmail
      FROM reports r
      LEFT JOIN user_profiles reporter ON r.reporterId = reporter.id
      LEFT JOIN user_profiles reported ON r.reportedUserId = reported.id
      ORDER BY r.createdAt DESC
    `).all();
    res.json(reports);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/reports/:id', (req, res) => {
  try {
    const { status, adminNote } = req.body;
    db.prepare('UPDATE reports SET status=?, adminNote=? WHERE id=?').run(status, adminNote || '', req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/reports/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM reports WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Client-side endpoint for reporting users
app.post('/api/reports', (req, res) => {
  try {
    const { reporterId, reportedUserId, reason, details } = req.body;
    if (!reason) return res.status(400).json({ error: 'La raison est requise' });
    const result = db.prepare('INSERT INTO reports (reporterId, reportedUserId, reason, details) VALUES (?, ?, ?, ?)').run(reporterId || null, reportedUserId, reason, details || '');
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ============================================================
// ADMIN API - BANNED WORDS (Mots interdits)
// ============================================================
app.get('/api/admin/banned-words', (req, res) => {
  try {
    const words = db.prepare('SELECT * FROM banned_words ORDER BY word ASC').all();
    res.json(words);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/admin/banned-words', (req, res) => {
  try {
    const { word } = req.body;
    if (!word || word.trim().length === 0) return res.status(400).json({ error: 'Le mot est requis' });
    const result = db.prepare('INSERT OR IGNORE INTO banned_words (word) VALUES (?)').run(word.trim().toLowerCase());
    res.json({ success: true, id: result.lastInsertRowid });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/admin/banned-words/:id', (req, res) => {
  try {
    db.prepare('DELETE FROM banned_words WHERE id = ?').run(req.params.id);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ============================================================
// SERVE FRONTEND
// ============================================================
app.use(express.static(path.join(__dirname, 'public'), { etag: false, maxAge: 0 }));

app.get('/admin', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ============================================================
// START SERVER
// ============================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  🍼 ParentGuide running at http://localhost:${PORT}\n`);
});
