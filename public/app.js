// ============= SVG ICONS =============
const I={
run:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="m7 21 3-7"/><path d="m17 21-3-7"/><path d="M10 14h4l2-4-5-3-3 4"/></svg>',
hand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 00-4 0"/><path d="M14 10V4a2 2 0 00-4 0v2"/><path d="M10 10.5V6a2 2 0 00-4 0v8"/><path d="M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15"/></svg>',
brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24A2.5 2.5 0 019.5 2z"/><path d="M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-1.32-4.24A2.5 2.5 0 0014.5 2z"/></svg>',
speech:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
smile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>',
moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
utensils:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>',
heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
droplet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>',
palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 01-1.275 1.275L3 12l5.813 1.912a2 2 0 011.275 1.275L12 21l1.912-5.813a2 2 0 011.275-1.275L21 12l-5.813-1.912a2 2 0 01-1.275-1.275z"/></svg>',
chevR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
chevL:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
arrowL:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
lightbulb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 00-1.11-1.79l-1.78-.9A2 2 0 0115 10.76V6h1a2 2 0 000-4H8a2 2 0 000 4h1v4.76a2 2 0 01-1.11 1.79l-1.78.9A2 2 0 005 15.24z"/></svg>',
cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
syringe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>',
check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
note:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
tooth:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5c-3.4 0-6 2.2-6 5.2 0 1.6.3 3.1.7 4.6.5 1.8 1.1 4.3 2 4.7.6.3 1-.7 1.4-2.3.3-1.2.6-2.1 1.4-2.1.7 0 1 .9 1.3 2.1.4 1.6.8 2.6 1.4 2.3.9-.4 1.5-2.9 2-4.7.4-1.5.7-3 .7-4.6 0-3-2.6-5.2-5.9-5.2z"/></svg>',
clip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>',
tv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
};
function ico(n,s){let v=I[n]||'';if(s)v=v.replace('viewBox',`width="${s}" height="${s}" viewBox`);return v}

// ============= AVATARS =============
const AVS=[
{id:'lion',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#FFE0B2" stroke="#F5A623" stroke-width="1.5"/><circle cx="20" cy="20" r="11" fill="#FFF3E0"/><circle cx="15" cy="18" r="1.5" fill="#5D4E37"/><circle cx="25" cy="18" r="1.5" fill="#5D4E37"/><path d="M18 24a3 3 0 004 0" stroke="#E8956A" stroke-width="1.2" fill="none"/></svg>'},
{id:'bear',svg:'<svg viewBox="0 0 40 40"><circle cx="12" cy="10" r="5" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/><circle cx="28" cy="10" r="5" fill="#D7CCC8" stroke="#A1887F" stroke-width="1"/><circle cx="20" cy="22" r="13" fill="#EFEBE9" stroke="#A1887F" stroke-width="1.5"/><circle cx="15" cy="20" r="1.5" fill="#5D4E37"/><circle cx="25" cy="20" r="1.5" fill="#5D4E37"/><circle cx="20" cy="23.5" r="1.5" fill="#8D6E63"/></svg>'},
{id:'bunny',svg:'<svg viewBox="0 0 40 40"><ellipse cx="14" cy="8" rx="4" ry="9" fill="#FCE4EC" stroke="#F48FB1" stroke-width="1"/><ellipse cx="26" cy="8" rx="4" ry="9" fill="#FCE4EC" stroke="#F48FB1" stroke-width="1"/><circle cx="20" cy="24" r="12" fill="#FFF0F5" stroke="#F48FB1" stroke-width="1.5"/><circle cx="15" cy="22" r="1.5" fill="#5D4E37"/><circle cx="25" cy="22" r="1.5" fill="#5D4E37"/></svg>'},
{id:'cat',svg:'<svg viewBox="0 0 40 40"><path d="M8 16l5-12 4 8" fill="#E8DFF5" stroke="#B8A9C9" stroke-width="1"/><path d="M32 16l-5-12-4 8" fill="#E8DFF5" stroke="#B8A9C9" stroke-width="1"/><circle cx="20" cy="24" r="12" fill="#F3EEFF" stroke="#B8A9C9" stroke-width="1.5"/><circle cx="15" cy="22" r="1.5" fill="#5D4E37"/><circle cx="25" cy="22" r="1.5" fill="#5D4E37"/><path d="M18 26l2 1 2-1" stroke="#B8A9C9" stroke-width="1.2" fill="none"/></svg>'},
{id:'owl',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="14" fill="#FFF8E1" stroke="#FFB74D" stroke-width="1.5"/><circle cx="14" cy="20" r="5" fill="#FFF" stroke="#FFB74D" stroke-width="1"/><circle cx="26" cy="20" r="5" fill="#FFF" stroke="#FFB74D" stroke-width="1"/><circle cx="14" cy="20" r="2" fill="#5D4E37"/><circle cx="26" cy="20" r="2" fill="#5D4E37"/><path d="M18 26l2-2 2 2" fill="#FFB74D"/></svg>'},
{id:'fox',svg:'<svg viewBox="0 0 40 40"><path d="M7 18l6-14 5 10" fill="#FFCCBC" stroke="#FF8A65" stroke-width="1"/><path d="M33 18l-6-14-5 10" fill="#FFCCBC" stroke="#FF8A65" stroke-width="1"/><circle cx="20" cy="24" r="12" fill="#FFF3E0" stroke="#FF8A65" stroke-width="1.5"/><circle cx="15" cy="22" r="1.5" fill="#5D4E37"/><circle cx="25" cy="22" r="1.5" fill="#5D4E37"/><ellipse cx="20" cy="26" rx="2" ry="1.5" fill="#FF8A65"/></svg>'},
{id:'elephant',svg:'<svg viewBox="0 0 40 40"><circle cx="8" cy="20" r="6" fill="#E3F2FD" stroke="#90CAF9" stroke-width="1"/><circle cx="32" cy="20" r="6" fill="#E3F2FD" stroke="#90CAF9" stroke-width="1"/><circle cx="20" cy="22" r="13" fill="#E3F2FD" stroke="#90CAF9" stroke-width="1.5"/><circle cx="15" cy="20" r="1.5" fill="#5D4E37"/><circle cx="25" cy="20" r="1.5" fill="#5D4E37"/><path d="M20 24v6c0 1-2 1-2 0" stroke="#90CAF9" stroke-width="1.5" fill="none"/></svg>'},
{id:'panda',svg:'<svg viewBox="0 0 40 40"><circle cx="12" cy="12" r="5" fill="#455A64"/><circle cx="28" cy="12" r="5" fill="#455A64"/><circle cx="20" cy="22" r="13" fill="#FAFAFA" stroke="#CFD8DC" stroke-width="1.5"/><ellipse cx="14" cy="19" rx="4" ry="3.5" fill="#455A64"/><ellipse cx="26" cy="19" rx="4" ry="3.5" fill="#455A64"/><circle cx="14" cy="19" r="1.5" fill="#FFF"/><circle cx="26" cy="19" r="1.5" fill="#FFF"/><ellipse cx="20" cy="24" rx="2.5" ry="1.5" fill="#455A64"/></svg>'},
{id:'koala',svg:'<svg viewBox="0 0 40 40"><circle cx="9" cy="16" r="6" fill="#E0E0E0" stroke="#BDBDBD" stroke-width="1"/><circle cx="31" cy="16" r="6" fill="#E0E0E0" stroke="#BDBDBD" stroke-width="1"/><circle cx="20" cy="22" r="13" fill="#F5F5F5" stroke="#BDBDBD" stroke-width="1.5"/><circle cx="15" cy="20" r="1.5" fill="#5D4E37"/><circle cx="25" cy="20" r="1.5" fill="#5D4E37"/><circle cx="20" cy="23" r="2" fill="#795548"/></svg>'},
{id:'penguin',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="22" r="14" fill="#455A64"/><ellipse cx="20" cy="26" rx="9" ry="10" fill="#FAFAFA"/><circle cx="15" cy="18" r="1.5" fill="#FFF"/><circle cx="25" cy="18" r="1.5" fill="#FFF"/><circle cx="15" cy="18" r=".8" fill="#333"/><circle cx="25" cy="18" r=".8" fill="#333"/><path d="M18 23l2 2 2-2" fill="#FF8A65"/></svg>'},
{id:'butterfly',svg:'<svg viewBox="0 0 40 40"><ellipse cx="11" cy="15" rx="8" ry="9" fill="#F3E5F5" stroke="#CE93D8" stroke-width="1"/><ellipse cx="29" cy="15" rx="8" ry="9" fill="#E8F5E9" stroke="#A5D6A7" stroke-width="1"/><ellipse cx="11" cy="27" rx="6" ry="7" fill="#E8F5E9" stroke="#A5D6A7" stroke-width="1"/><ellipse cx="29" cy="27" rx="6" ry="7" fill="#F3E5F5" stroke="#CE93D8" stroke-width="1"/><line x1="20" y1="8" x2="20" y2="36" stroke="#8D6E63" stroke-width="2"/></svg>'},
{id:'starav',svg:'<svg viewBox="0 0 40 40"><polygon points="20,4 24,14 35,14 26,21 29,32 20,25 11,32 14,21 5,14 16,14" fill="#FFF9C4" stroke="#FFD54F" stroke-width="1.5"/><circle cx="16" cy="17" r="1.2" fill="#5D4E37"/><circle cx="24" cy="17" r="1.2" fill="#5D4E37"/><path d="M17 21a4 4 0 006 0" stroke="#FFB74D" stroke-width="1" fill="none"/></svg>'},
];
function avSvg(id){const a=AVS.find(x=>x.id===id)||PAVS.find(x=>x.id===id);const s=a?a.svg:AVS[0].svg;return s.replace('<svg ','<svg width="100%" height="100%" ')}

// ============= PARENT AVATARS =============
const PAVS=[
{id:'parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#E8E0F5"/><circle cx="20" cy="15" r="7" fill="#D4C4E8"/><path d="M8 34c0-7 5.5-12 12-12s12 5 12 12" fill="#D4C4E8"/></svg>'},
{id:'mama',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#FCE4EC"/><circle cx="20" cy="14" r="7" fill="#F8BBD0"/><path d="M8 34c0-7 5.5-12 12-12s12 5 12 12" fill="#F8BBD0"/><path d="M12 10c2-4 6-5 8-4" stroke="#C2185B" stroke-width="1.5" fill="none"/><path d="M28 10c-2-4-6-5-8-4" stroke="#C2185B" stroke-width="1.5" fill="none"/></svg>'},
{id:'papa',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#E3F2FD"/><circle cx="20" cy="14" r="7" fill="#BBDEFB"/><path d="M8 34c0-7 5.5-12 12-12s12 5 12 12" fill="#BBDEFB"/><rect x="13" y="8" width="14" height="4" rx="2" fill="#1565C0" opacity="0.3"/></svg>'},
{id:'heart_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#FFF3E0"/><path d="M20 28l-8-8a5 5 0 017-7l1 1 1-1a5 5 0 017 7z" fill="#FF8A65"/><circle cx="20" cy="13" r="5" fill="#FFE0B2"/></svg>'},
{id:'star_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#FFFDE7"/><polygon points="20,6 23,15 33,15 25,21 28,30 20,24 12,30 15,21 7,15 17,15" fill="#FFD54F" opacity="0.6"/><circle cx="20" cy="16" r="5" fill="#FFF9C4"/><path d="M12 32c0-5 3.5-9 8-9s8 4 8 9" fill="#FFF9C4"/></svg>'},
{id:'flower_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#F3E5F5"/><circle cx="20" cy="12" r="5" fill="#CE93D8" opacity="0.4"/><circle cx="14" cy="16" r="5" fill="#F48FB1" opacity="0.4"/><circle cx="26" cy="16" r="5" fill="#80CBC4" opacity="0.4"/><circle cx="20" cy="15" r="6" fill="#E1BEE7"/><path d="M10 34c0-6 4.5-10 10-10s10 4 10 10" fill="#E1BEE7"/></svg>'},
{id:'sun_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#FFF8E1"/><circle cx="20" cy="17" r="8" fill="#FFE082"/><line x1="20" y1="5" x2="20" y2="8" stroke="#FFB300" stroke-width="2"/><line x1="20" y1="26" x2="20" y2="29" stroke="#FFB300" stroke-width="2"/><line x1="9" y1="17" x2="12" y2="17" stroke="#FFB300" stroke-width="2"/><line x1="28" y1="17" x2="31" y2="17" stroke="#FFB300" stroke-width="2"/><circle cx="17" cy="16" r="1.2" fill="#5D4E37"/><circle cx="23" cy="16" r="1.2" fill="#5D4E37"/><path d="M17 20a4 4 0 006 0" stroke="#F57F17" stroke-width="1" fill="none"/></svg>'},
{id:'moon_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#E8EAF6"/><path d="M24 10A10 10 0 1016 30a12 12 0 008-20z" fill="#C5CAE9"/><circle cx="15" cy="18" r="1" fill="#5D4E37"/><circle cx="20" cy="17" r="1" fill="#5D4E37"/><path d="M14 22a5 5 0 007 0" stroke="#7986CB" stroke-width="1" fill="none"/></svg>'},
{id:'leaf_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#E8F5E9"/><path d="M10 30Q10 10 30 10Q30 30 10 30Z" fill="#A5D6A7" opacity="0.5"/><path d="M10 30Q20 20 30 10" stroke="#66BB6A" stroke-width="1.5" fill="none"/><circle cx="20" cy="16" r="5.5" fill="#C8E6C9"/><path d="M12 33c0-5 3.5-9 8-9s8 4 8 9" fill="#C8E6C9"/></svg>'},
{id:'cloud_parent',svg:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#E0F7FA"/><circle cx="14" cy="18" r="6" fill="#B2EBF2"/><circle cx="24" cy="16" r="7" fill="#B2EBF2"/><circle cx="20" cy="20" r="6" fill="#B2EBF2"/><circle cx="17" cy="25" r="1.2" fill="#5D4E37"/><circle cx="23" cy="25" r="1.2" fill="#5D4E37"/><path d="M18 28a3 3 0 004 0" stroke="#0097A7" stroke-width="1" fill="none"/></svg>'},
];

// ============= DEV REF DATA =============
const DEV={
motor_gross:{t:"Motricité globale",ico:"run",bg:"var(--sk)",c:"var(--sk3)",ages:{"0-6m":[{l:"Tient sa tête, soulève le buste sur le ventre",acts:["Tummy time : 2-3 min sur le ventre après chaque change","Portage vertical pour renforcer les muscles du cou","Jeu du miroir : allongé sur le ventre face à un miroir"]},{l:"Se retourne du ventre sur le dos",acts:["Attirez-le sur le côté avec un jouet musical","Roulade douce guidée avec vos mains","Tummy time sur tapis ferme, surface plane"]}],"6-12m":[{l:"S'assoit seul, rampe, quatre pattes",acts:["Tunnel avec une grande boîte en carton percée","Tapis d'éveil avec textures variées","Jouets placés hors de portée pour motiver"]},{l:"Se met debout en s'accrochant",acts:["Table basse stable pour se hisser","Dansez debout en le tenant par les mains","Jouets posés sur le canapé pour l'attirer"]}],"1-2a":[{l:"Premiers pas, commence à courir",acts:["Promenade pieds nus dans l'herbe","Jeu de la balle à rouler puis lancer","Mini parcours d'obstacles dans le salon"]},{l:"Monte les escaliers à quatre pattes",acts:["Accompagnez-le dans les escaliers (supervisé)","Blocs de mousse empilables pour grimper","Boîtes en carton stables à escalader"]}],"2-3a":[{l:"Court, saute à pieds joints, pédale",acts:["Course dans le jardin avec obstacles","Sauter dans les flaques avec des bottes","Premier tricycle où draisienne au parc"]},{l:"Monte les marches en alternant",acts:["Marelle simplifiée","Parcours au parc avec pentes","Danse rythmée avec sauts"]}],"3-6a":[{l:"Vélo, corde à sauter, équilibre",acts:["Vélo avec puis sans stabilisateurs","Parcours d'agilité au parc","Jeu de la statue"]},{l:"Nage, sports collectifs",acts:["Cours de natation dès 4 ans","Football où basket en famille","Jeux de ballon entre copains"]}]}},
motor_fine:{t:"Motricité fine",ico:"hand",bg:"var(--lv)",c:"var(--lv3)",ages:{"0-6m":[{l:"Ouvre les mains, attrape un objet",acts:["Hochets légers de différentes textures","Chaussette coloriée sur la main","Mobile à portée de main"]}],"6-12m":[{l:"Pince pouce-index, tape deux objets",acts:["Petits morceaux de nourriture (finger food)","Boîtes à ouvrir et fermer","Transvasement de gros haricots entre bols"]}],"1-2a":[{l:"Empile des cubes, gribouille, cuillère",acts:["Tour de cubes : la plus haute !","Premiers crayons gras sur grande feuille","Jeux d'eau : verser et transvaser"]}],"2-3a":[{l:"Dessine un cercle, découpe, boutonne",acts:["Pâte à modeler : boudins et boules","Collage de gommettes","Jeux de lacage avec cartes perforées"]}],"3-6a":[{l:"Bonhomme, prénom, découpage précis",acts:["Perles à enfiler pour colliers","Origami simple (avion, bateau)","Cuisine : décorer des biscuits"]}]}},
language:{t:"Langage",ico:"speech",bg:"var(--pk)",c:"var(--pk3)",ages:{"0-6m":[{l:"Gazouillis, rires, réagit aux voix",acts:["Parlez de tout ce que vous faites","Chantez berceuses et comptines","Imitez ses sons : dialogue de babillage"]}],"6-12m":[{l:"Babillage, premiers mots, pointe",acts:["Nommez tout ce que vous montrez","Lecture interactive avec images","Coucou-cache avec des mots"]}],"1-2a":[{l:"50 à 200 mots, associe 2 mots",acts:["Livres à volets et textures","Jeu 'Où est le...?'","Chansons à gestes (Ainsi font font font)"]}],"2-3a":[{l:"Phrases de 3-4 mots, questions",acts:["Racontez votre journée au dîner","Devinettes simples","Inventer une histoire à partir d'images"]}],"3-6a":[{l:"Phrases complexes, récits",acts:["Histoires inventées avant le coucher","Jeux de rimes et sons","Théâtre de marionnettes"]}]}},
cognitive:{t:"Cognitif",ico:"brain",bg:"var(--mt)",c:"var(--mt3)",ages:{"0-6m":[{l:"Suit des yeux, explore avec la bouche",acts:["Mobile contraste noir/blanc (0-2 mois)","Jeu du miroir","Hochets sonores pour cause et effet"]}],"6-12m":[{l:"Permanence de l'objet, cause et effet",acts:["Coucou-cache sous une couverture","Boîte à formes simples","Cacher un jouet sous un tissu"]}],"1-2a":[{l:"Jeu symbolique, tri par formes",acts:["Dinette et téléphone jouet","Puzzles 2-4 pièces en bois","Tri de couleurs avec objets du quotidien"]}],"2-3a":[{l:"Compte jusqu'à 5, couleurs",acts:["Compter les marches en montant","Chasse aux couleurs dans la maison","Puzzles de 6-10 pièces"]}],"3-6a":[{l:"Raisonnement logique, planification",acts:["Jeux de société (loto, memory)","Circuits de billes","Expériences simples (volcan, fleurs coloriées)"]}]}},
social:{t:"Socio-émotionnel",ico:"smile",bg:"var(--rs)",c:"var(--rs3)",ages:{"0-6m":[{l:"Sourire social, attachement",acts:["Peau-à-peau quotidien","Massage bébé","Répondre aux pleurs = confiance"]}],"6-12m":[{l:"Angoisse de séparation, joie",acts:["Coucou pour la séparation","Rencontres avec d'autres bébés","Toujours dire au revoir"]}],"1-2a":[{l:"Empathie naissante, crises",acts:["Nommez les émotions","Livres sur les émotions","Coin calme avec doudou et livres"]}],"2-3a":[{l:"Jeu coopératif, premiers amis",acts:["Jeux de rôle : docteur, marchand","Inviter un ami à la maison","Tour de rôle avec un jeu"]}],"3-6a":[{l:"Négociation, empathie, règles",acts:["Jeux pour apprendre à perdre","Fort en coussins ensemble","Discussions sur les émotions"]}]}},
autonomy:{t:"Autonomie",ico:"star",bg:"var(--sd)",c:"var(--sd3)",ages:{"0-6m":[{l:"Tient son biberon, coopère habillage",acts:["Laissez tenir le biberon","Décrivez chaque geste d'habillage","Routine prévisible"]}],"6-12m":[{l:"Mange avec les doigts, gobelet",acts:["Finger food adapté","Gobelet à bec puis ouvert","Brosse à dents à mordiller"]}],"1-2a":[{l:"Cuillère, aide au déshabillage",acts:["Manger seul (le bazar fait partie de l'apprentissage)","Chaussures à scratch","Ranger dans la boîte ensemble"]}],"2-3a":[{l:"Propreté, s'habille avec aide",acts:["Pot accessible, valoriser succès","Choisir ses vêtements (2 options)","Se laver les mains seul"]}],"3-6a":[{l:"S'habille seul, range, cuisine",acts:["Tableau routines matin/soir","Préparer son sac d'école","Cuisiner un goûter simple"]}]}}
};

// ============= GUIDE DATA =============
const GUIDE={
sleep:{t:'Sommeil',ico:'moon',c:'var(--lv3)',bg:'var(--lv)',tips:[
{t:'Le rituel du coucher',a:'Tous âges',x:'Un rituel régulier aide votre enfant à se sentir en sécurité. Bain, pyjama, histoire, câlin... Gardez le même ordre chaque soir pour signaler au cerveau qu\'il est temps de dormir.'},
{t:'Position et sécurité du bébé',a:'0-12 mois',x:'Position de sommeil : TOUJOURS sur le dos (réduction du risque de mort subite de 50%). Lit ferme et plat, matelas respirant, gigoteuse adaptée à la taille. AUCUN coussin, couette, tour de lit ni draperie avant 12 mois : risque d\'étouffement et de coincement.'},
{t:"L'environnement idéal",a:'Tous âges',x:'Chambre 18-20 degrés, obscurité ou veilleuse douce rouge (pas bleue). Évitez les écrans 1h avant le coucher. La mélatonine se bloque avec la lumière bleue.'},
{t:"L'objet transitionnel",a:'6m-3 ans',x:'Le doudou aide à se rassurer lors des micro-réveils. Gardez-le contre vous quelques nuits pour votre odeur avant de lui donner. À partir de 12 mois seulement (pas de risque d\'étouffement).'},
{t:'Le grand lit',a:'2,5-3 ans',x:'Attendez qu\'il soit physiquement et émotionnellement prêt (souvent vers 2,5-3 ans). Rendez la transition positive, barrière de sécurité au début, rituel inchangé.'},
{t:'La sieste',a:'2-5 ans',x:'Si votre enfant ne dort plus, proposez un temps calme : livres, puzzle dans sa chambre. La sieste disparaît souvent entre 3 et 5 ans.'},
{t:'Réveils nocturnes',a:'6m-3 ans',x:'Attendez 2-3 minutes avant d\'intervenir : souvent ils se rendorment seuls. Un câlin rapide suffit. Évitez de rallumer la lumière.'},
{t:'Les régressions du sommeil',a:'4-18 mois',x:'Vers 4 mois, 8-10 mois, 12 mois, 18 mois : poussées développementales. C\'est temporaire (1-2 semaines). Gardez le cadre.'},
{t:'Terreurs nocturnes vs cauchemars',a:'2-6 ans',x:'Terreurs : cri dans le sommeil profond, ne pas réveiller. Cauchemars : il se réveille, rassurez-le doucement.'},
{t:'Co-dodo sécurisé',a:'0-12 mois',x:'Si co-dodo : matelas ferme seul (pas de bébé-lala ni cododo), surface plane, gigoteuse pour bébé, environnement sans oreiller ni couette près du bébé. Il est vivement déconseillé de s\'endormir sur un canapé avec bébé. Tabac/alcool : exclus.'},
{t:'Fenêtres d\'éveil',a:'0-12 mois',x:'0-3m : 45-90 min. 3-6m : 1h30-2h. 6-12m : 2-3h. Coucher avant fatigue extrême = endormissement plus facile.'},
{t:'Le pouce ou la tétine ?',a:'0-3 ans',x:'Tétine : plus facile à retirer vers 2-3 ans, protection contre le syndrome de mort subite du nourrisson. Pouce : toujours disponible mais plus dur à arrêter. Les deux sont courants et tout à fait acceptables.'},
{t:'Quand consulter ?',a:'Tous âges',x:'Ronflements persistants, pauses respiratoires, sommeil agité chronique, apnées : parlez-en au pédiatre (ORL/adénoïdes).'}]},
food:{t:'Alimentation',ico:'utensils',c:'var(--mt3)',bg:'var(--mt)',tips:[
{t:'La diversification',a:'4-6 mois',x:'Entre 4 et 6 mois selon pédiatre. Un nouvel aliment à la fois pendant 3 jours pour détecter une réaction. Le lait reste l\'aliment principal jusqu\'à 1 an.'},
{t:'Du lait aux morceaux',a:'6-12 mois',x:'Purées lisses (6m) puis textures écrasées (8m) puis petits morceaux fondants (10-12m). Ne sautez pas la texture grumeleuse.'},
{t:'DME - diversification menée par l\'enfant',a:'6-12 mois',x:'Bébé mange seul à la main. Morceaux de la taille du poing (banane, avocat, courgette vapeur). Restez toujours présent avec lui pendant qu\'il mange. Formation aux gestes d\'urgence recommandée.'},
{t:'Les allergènes prioritaires',a:'4-12 mois',x:'Introduisez tôt dès 4-6 mois : arachide (purée diluée), œuf bien cuit, gluten, poisson, produits laitiers. Plus tôt = moins de risque d\'allergie (étude LEAP 2024).'},
{t:'La néophobie alimentaire',a:'2-6 ans',x:'Pic vers 2-3 ans. Pas de pression. Il faut 10 à 15 présentations avant acceptation. Proposez sans obliger. Variez la présentation.'},
{t:'Les repas en famille',a:'Tous âges',x:'Mangez ensemble. Écrans éteints. Votre enfant copie. L\'appétit varie d\'un jour à l\'autre, c\'est tout à fait habituel. Il est préférable de ne pas insister pour finir l\'assiette.'},
{t:'Le biberon - bonne posture',a:'0-12 mois',x:'Semi-assis, tête surélevée (pas à plat). Faites des pauses. Rot après. Il est important de ne pas ajouter de céréales dans le biberon (risque d\'étouffement).'},
{t:'Sucres et sel',a:'0-2 ans',x:'Pas de sel ajouté avant 1 an (reins immatures). Pas de miel avant 1 an (botulisme). Sucre : limitez au maximum avant 2 ans.'},
{t:'L\'eau',a:'Tous âges',x:'Proposez à chaque repas dès 6 mois. Pas de jus de fruit avant 1 an, limités après. Un gobelet ouvert dès 12 mois aide la propreté.'},
{t:'Les aliments à risque d\'étouffement',a:'0-4 ans',x:'Coupez/écrasez : raisins entiers (coupez en 4 minimum), cerises avec noyau, baies dures, myrtilles (coupez en 2). Évitez : cacahuètes entières, noix entières avant 4 ans, saucisses rondelles, bonbons durs, pop-corn, graines de raisin. Préférez les morceaux mous et fondants.'},
{t:'Petits mangeurs',a:'1-5 ans',x:'Portion enfant = 1 cuillère à soupe par année d\'âge et par groupe alimentaire. C\'est moins que vous pensez. Fiez-vous à sa faim, pas aux quantités.'},
{t:'Gérer la grignote',a:'1-6 ans',x:'3 repas + 1 ou 2 collations structurées. Pas de grignotage toute la journée. Entre deux : eau seulement. Appétit creusé pour le repas.'}]},
behavior:{t:'Comportement',ico:'heart',c:'var(--rs3)',bg:'var(--rs)',tips:[
{t:'Tempêtes émotionnelles',a:'18m-4 ans',x:'Le cerveau de votre enfant est encore immature : il ne peut pas réguler seul ses émotions (le préfrontal n\'est pas développé). Restez calme, à sa hauteur, nommez l\'émotion ("tu es en colère"). Câlinez quand il est prêt. Ne raisonnez pas pendant la crise.'},
{t:'Le "non" magique',a:'18m-3 ans',x:'Le "non" affirme son moi, étape saine. Proposez 2 choix ("tu veux la pomme ou la banane ?"). Moins de "non", plus de "quand tu auras fini, on...".'},
{t:'Partager',a:'2-5 ans',x:'Avant 3 ans, "c\'est à moi" est une étape classique du développement. Enseignez le tour de rôle avec un sablier. Il est préférable de ne pas forcer à prêter le doudou.'},
{t:'La séparation',a:'8m-3 ans',x:'Pic d\'angoisse de séparation entre 8 et 18 mois. Dites toujours au revoir franchement (ne partez pas en cachette). Un objet transitionnel (doudou, petit foulard avec l\'odeur de la maison) fait le lien entre la maison et le lieu de garde. Rassurez sur le retour.'},
{t:'Les écrans - recommandations OMS/France',a:'0-6 ans',x:'Pas d\'écran avant 2 ans (sauf vidéoconférence). 2-3 ans : à éviter au maximum. 3-6 ans : maximum 1h/jour de contenu éducatif de qualité avec supervision active. Pas d\'écrans 1h avant le sommeil ni pendant les repas.'},
{t:'L\'autonomie qui grandit',a:'2-6 ans',x:'Laissez faire seul même si c\'est plus lent. Chaque victoire = confiance en soi. Acceptez que ce soit moins bien fait.'},
{t:'Dire non sans crier',a:'Tous âges',x:'Descendez à sa hauteur. Regard dans les yeux. Ton ferme mais calme. Explication courte. "Je ne te laisse pas frapper, c\'est dangereux."'},
{t:'Les limites qui rassurent',a:'Tous âges',x:'Les limites claires et cohérentes rassurent. Un enfant teste pour vérifier que le cadre tient. Tenir = amour.'},
{t:'Morsures et coups',a:'1-3 ans',x:'Souvent par manque de mots. "Tu as envie de mordre, je ne te laisse pas. Tu peux mordre ce jouet." Proposez une alternative.'},
{t:'Frère et sœurs',a:'Tous âges',x:'Les conflits entre frères et sœurs sont fréquents et formateurs. Intervenez uniquement en cas de danger. Ne prenez pas parti. "Trouvez une solution tous les deux."'},
{t:'La punition vs la conséquence',a:'2-6 ans',x:'La punition arbitraire risque de blesser l\'estime de soi. La conséquence logique ("tu renverses l\'eau, tu aides à essuyer") enseigne. Préférez toujours la seconde.'},
{t:'La discipline positive',a:'Tous âges',x:'Ferme et bienveillant à la fois. Centré sur la solution, pas la punition. "Que peux-tu faire maintenant ?" plutôt que "regarde ce que tu as fait".'}]},
hygiene:{t:'Soins & Hygiene',ico:'droplet',c:'var(--sk3)',bg:'var(--sk)',tips:[
{t:'Le bain',a:'Tous âges',x:'Jouets, bulles, chansons. Température idéale : 37 degrés. Il est essentiel de rester toujours présent, même pour 30 secondes. Un doigt prêt à tenir.'},
{t:'Lavage des cheveux',a:'1-4 ans',x:'Visière de bain, eau douce vers l\'arrière. Shampooing crête de coq ! Laissez-le tenir le pommeau. Acceptez 2-3 fois par semaine.'},
{t:'La propreté diurne',a:'2-4 ans',x:'Signes : il reste sec plus de 2h, imite aux toilettes, demande à être changé. Pot ou réducteur, son choix. Zéro pression.'},
{t:'La propreté nocturne',a:'3-6 ans',x:'Souvent 6 mois à 2 ans après la propreté diurne. Maturité du cerveau et du système hormonal (antidiurétique). Zéro pression, zéro honte. Alèse + culotte.'},
{t:'Brossage des dents',a:'1-6 ans',x:'Dès la première dent. Matin et soir, 2 minutes. Dentifrice fluoré adapté à l\'âge (500 ppm avant 3 ans). Jusqu\'à 8 ans les parents finissent le brossage.'},
{t:'Le mouchage',a:'2-5 ans',x:'Apprenez avec un jeu : souffler la bougie, faire la pluie. Un nez bouché gêne le sommeil et l\'appétit. Sérum phy au besoin.'},
{t:'Coupe des ongles',a:'Tous âges',x:'Pendant le sommeil pour les bébés. Pour les petits : pendant un dessin animé. Coupez droit. En veillant à ne pas couper dans la peau.'},
{t:'La sieste du bain',a:'0-12 mois',x:'Pas de bain après un repas. Pas trop long pour un bébé (5-10 min). Serviette chaude à portée. Huile nourrissante si peau sèche.'},
{t:'Les poux',a:'3-6 ans',x:'Très fréquent à l\'école. Inspection 1 fois/semaine. Traitement immédiat. Lavage du linge 60 degrés. Pas de honte.'},
{t:'La crème solaire',a:'6 mois+',x:'Pas d\'exposition directe avant 1 an. Chapeau, vêtements, ombre. Indice 50+ minéral, renouveler toutes les 2h. Évitez 11h-16h.'},
{t:'Le change',a:'0-2 ans',x:'Liniment oléocalcaire pour change fille (sens avant-arrière). Érythème fessier : air libre + Céralia ou oxyde de zinc. Couche changée toutes les 3-4h.'}]},
émotions:{t:'Emotions',ico:'heart',c:'var(--pk3)',bg:'var(--pk)',tips:[
{t:'Nommer les émotions',a:'Tous âges',x:'Aidez à mettre des mots sur ce qu\'il ressent. "Je vois que tu es triste, tu voulais le jouet." Les livres émotionnels sont précieux.'},
{t:'Le coin calme',a:'2-6 ans',x:'Espace douillet avec coussins, doudous, livres. Pas une punition mais un refuge. "Veux-tu aller au coin calme ?" est bien plus invitant que de l\'envoyer dans sa chambre.'},
{t:'Confiance en soi',a:'Tous âges',x:'Encouragez les efforts ("tu as travaillé dur") plutôt que les résultats ("tu es intelligent"). Évite la pression de performance.'},
{t:'Les peurs',a:'2-6 ans',x:'Il est préférable de ne pas minimiser ("ce n\'est rien"). Validez ("je comprends que tu as peur") puis accompagnez (veilleuse, spray anti-monstres, câlins).'},
{t:'Colère vs caprice',a:'Tous âges',x:'Ce qu\'on appelle "caprice" est en réalité l\'expression d\'un besoin que l\'enfant ne peut pas encore formuler. Son cerveau est immature et ne lui permet pas de réguler seul ses émotions. Accueillir sa colère avec calme est le plus beau cadeau que vous pouvez lui faire.'},
{t:'Cerveau en construction',a:'0-6 ans',x:'Le cerveau de votre enfant se construit jusqu\'à l\'âge adulte. L\'immaturité cérébrale explique pourquoi il ne "fait pas exprès" : il apprend à gérer ses émotions quand il est accompagné avec bienveillance. Chaque moment de patience est un investissement dans son développement.'},
{t:'Le refuge parental',a:'Tous âges',x:'Être la base de sécurité : toujours accueillir les émotions avant de poser les limites. "Je t\'aime même quand tu es en colère."'},
{t:'Le deuil et la perte',a:'Tous âges',x:'Parlez vrai. Pas "il est parti" mais "il est mort". Répondez aux questions simplement. Rituels aident. Enfants peuvent passer par des phases.'},
{t:'L\'anxiété',a:'2-6 ans',x:'Rituels rassurants, routines, explications simples. Respiration "ballon dans le ventre". Si persistante + impact : parlez-en au pédiatre.'},
{t:'La jalousie',a:'2-6 ans',x:'Émotion saine. Accueillez sans juger. Évitez les comparaisons. "Chacun est différent, tu as aussi tes forces." Temps individuel avec chaque enfant.'},
{t:'Les mots doux',a:'Tous âges',x:'Dites "je t\'aime" souvent. Cela ne gâte pas, ça construit. Un enfant ne peut pas entendre trop d\'amour.'},
{t:'La gratitude',a:'3-6 ans',x:'Rituel du soir : "3 choses que tu as aimé aujourd\'hui". Développe l\'optimisme et la conscience positive. Modélez vous-même.'}]},
activities:{t:'Activités & Jeux',ico:'palette',c:'var(--lv3)',bg:'var(--lv)',tips:[
{t:'Éveil sensoriel',a:'0-18 mois',x:'Bacs sensoriels (riz, pâtes, lentilles sous surveillance), tapis d\'éveil, musique variée, textures variées. Le cerveau se construit par les sens.'},
{t:'Jeu libre',a:'Tous âges',x:'Cartons, bols, cuillères en bois, foulards. L\'imagination se développe davantage qu\'avec des jouets à pile. Moins, mais mieux.'},
{t:'Cuisiner ensemble',a:'2-6 ans',x:'Laver légumes, touiller, décorer un gâteau. Motricité fine, vocabulaire, fierté. Accepter le bazar = part du jeu.'},
{t:'Sorties nature',a:'Tous âges',x:'Feuilles, insectes, flaques. La nature stimule tout : sensoriel, moteur, cognitif. Minimum 1h/jour dehors même par mauvais temps.'},
{t:'Les livres',a:'Tous âges',x:'Regarder des livres ensemble dès 6 mois est l\'une des plus belles habitudes : cela développe le langage, l\'imagination et le lien parent-enfant. Laissez choisir et relisez en boucle, c\'est rassurant.'},
{t:'Sorties au restaurant',a:'2-6 ans',x:'Préparez un petit sac a surprises : quelques livres, des crayons de couleur, un petit jeu discret (cartes, figurines). Cela permet de profiter du repas en famille sans recourir aux écrans. Changer d\'environnement est aussi une aventure pour votre enfant.'},
{t:'Boîte à ennui',a:'2-6 ans',x:'Contre les écrans : pâte à modeler, coloriage, puzzle, déguisements, gommettes, blocs de bois, tampons. L\'ennui créatif est un moteur.'},
{t:'Activités Montessori',a:'1-3 ans',x:'Transvasement (eau, graines), boîtes à formes, cadres d\'habillage, puzzles encastrables. Concentration, autonomie, motricité fine.'},
{t:'Musique et comptines',a:'0-6 ans',x:'Chantez sans complexe ! Les comptines gestes (ainsi font font font) enrichissent langage et coordination. Instruments simples des 18 mois.'},
{t:'Dessin et peinture',a:'18m-6 ans',x:'Grandes feuilles. Crayons gras puis feutrès puis crayons. Peinture aux doigts des 2 ans. Ne corrigez pas. "Raconte-moi ce que tu as dessine."'},
{t:'Jeux de construction',a:'12m-6 ans',x:'Briques emboitables, planchettes en bois, blocs de construction. Spatialite, logique, créativité. Jeu individuel puis collectif vers 4-5 ans.'},
{t:'Jeux symboliques',a:'18m-6 ans',x:'Dinette, poupees, docteur, déguisements. L\'enfant digere les experiences en les rejouant. C\'est un formidable moteur pour l\'imagination et la comprehension du monde.'},
{t:'Jeux de société',a:'3-6 ans',x:'Loto, memory, jeux de parcours simples, jeux cooperatifs. Enseignent tour de rôle, perdre / gagner, regles. Commencez court (10 min).'},
{t:'Le parcours motricité',a:'12m-6 ans',x:'Coussins, tunnels, chaises : parcours a ramper, grimper, sauter. Au parc : toboggan, balancoire, escalade. La motricité libre = autonomie.'},
{t:'Mindfulness enfant',a:'3-6 ans',x:'Des exercices de relaxation ludiques adaptes aux enfants (respiration du ballon, yoga-animal, relaxation guidee). 3 a 5 minutes par jour suffisent. Cela développe le calme, la concentration et la régulation émotionnelle.'}]},
teeth:{t:'Dents & Bouche',ico:'tooth',c:'var(--sd3)',bg:'var(--sd)',tips:[
{t:'La première dent',a:'4-15 mois',x:'Apparaît en général entre 4 et 10 mois, souvent les incisives centrales du bas en premier. Très variable : jusqu\'à 15 mois sans souci. Certains bébés naissent avec une dent, d\'autres attendent leur 1 an. C\'est tout à fait courant.'},
{t:'Symptômes de poussée dentaire',a:'3-24 mois',x:'Salivation abondante, joues rouges, envie de mordre, irritabilité, sommeil perturbé, selles plus molles. Important : la fièvre supérieure à 38 degrés, la diarrhée et les vomissements NE sont PAS causés par les dents. Si présents, consulter.'},
{t:'Apaiser les poussées',a:'4-24 mois',x:'Anneau de dentition frais (pas congelé, cela brûle la gencive), massage doux avec doigt propre, gant humide à mordre, croûte de pain si enfant mange déjà. À éviter : colliers d\'ambre (risque d\'étranglement prouvé, aucune efficacité).'},
{t:'Antalgiques : quand et comment',a:'Dès 3 mois',x:'Si douleur intense qui empêche de dormir ou manger : paracétamol adapté au poids, pas d\'ibuprofène avant 3 mois. Les gels anesthésiants locaux (lidocaïne) sont déconseillés chez le tout-petit. Homéopathie : efficacité non prouvée.'},
{t:'Ordre d\'apparition des dents',a:'6 mois - 3 ans',x:'Incisives centrales bas (6-10m), haut (8-12m), latérales bas et haut (9-13m), 1ères molaires (13-19m), canines (16-23m), 2èmes molaires (23-33m). 20 dents de lait au total vers 3 ans. Les molaires sont les plus douloureuses.'},
{t:'Premier brossage',a:'Dès la 1ère dent',x:'Brosse souple pour bébé (tête de 1 cm), 2 fois par jour (matin et soir). Le parent brosse jusqu\'à 6-8 ans : la motricité fine de l\'enfant ne suffit pas avant. Méthode : petits mouvements circulaires, toutes les faces.'},
{t:'Dentifrice fluoré : les bonnes doses UFSBD 2024',a:'Dès la 1ère dent',x:'Recommandations UFSBD 2024 : 1000 ppm de fluor dès la première dent (contrairement aux anciennes recommandations de 500 ppm). Quantité : un grain de riz jusqu\'à 3 ans, un petit pois ensuite. Apprendre à cracher à partir de 3 ans. Pas de rinçage abondant pour que le fluor agisse.'},
{t:'Première visite chez le dentiste',a:'Dès la 1ère dent',x:'Dès la première dent ou avant 1 an selon l\'UFSBD. Habituer tôt = pas de peur plus tard. Programme "M\'T dents" : examens remboursés 100% par l\'Assurance maladie à 3, 6, 9, 12, 15, 18, 21 et 24 ans. Ne pas rater.'},
{t:'La carie du biberon',a:'0-3 ans',x:'Cause : biberons sucrés (lait, jus, sirop) la nuit ou toute la journée. Se voit comme taches brunes sur les incisives du haut. Réserver le biberon de lait aux repas, proposer de l\'eau entre. Il est préférable d\'éviter de laisser bébé s\'endormir avec un biberon de lait ou de liquide sucré au-delà de 6 mois.'},
{t:'Alimentation et dents',a:'Tous âges',x:'Amis : fromage (calcium, neutralise acidité), eau, pommes crues, noix. À limiter : bonbons collants, jus de fruits (même "naturels"), compotes à boire, biscuits sucrés grignotés. Règle d\'or : le sucre concentré dans un seul moment est moins nocif que toute la journée.'},
{t:'Chute des dents de lait',a:'5-12 ans',x:'Les incisives du bas tombent vers 5-6 ans, toutes les dents de lait vers 12 ans. Si la dent définitive pousse derrière la dent de lait : attendre 2-3 mois, souvent ça se replace. La petite souris (rituel rassurant) transforme un moment inquiétant en joie.'},
{t:'Orthodontie : quand consulter',a:'3-8 ans',x:'Signaux : succion du pouce/tétine après 4 ans, respiration par la bouche permanente, béance entre dents, mâchoires décalées, ronflements. 1er bilan orthodontique vers 6-7 ans (remboursement SS jusqu\'à 16 ans, demande d\'entente préalable).'},
{t:'Traumatisme dentaire : réflexes',a:'Tous âges',x:'Choc sur dent de lait : consulter dans les 24h même sans mobilité (risque pour la dent définitive dessous). Dent définitive expulsée : URGENCE <1h, la conserver dans du lait ou du sérum physiologique (on déconseille l\'eau du robinet), ne pas frotter, direction dentiste/urgences.'}]}
};

// ============= QUESTIONNAIRE PERSONNALISE =============
const QDOMS={
sleep:{t:'Sommeil',ico:'moon',c:'var(--lv3)',bg:'var(--lv)'},
food:{t:'Alimentation',ico:'utensils',c:'var(--mt3)',bg:'var(--mt)'},
émotions:{t:'Emotions',ico:'heart',c:'var(--rs3)',bg:'var(--rs)'},
language:{t:'Langage',ico:'speech',c:'var(--pk3)',bg:'var(--pk)'},
motor:{t:'Motricité',ico:'run',c:'var(--sk3)',bg:'var(--sk)'},
social:{t:'Relations sociales',ico:'smile',c:'var(--rs3)',bg:'var(--rs)'},
screens:{t:'Écrans',ico:'tv',c:'var(--sd3)',bg:'var(--sd)'},
bonding:{t:'Lien & jeu',ico:'sparkle',c:'var(--pk3)',bg:'var(--pk)'}
};
const QUIZ=[
{id:'q1',dom:'sleep',q:'Comment se passent les nuits en général ?',opts:[
{v:'a',l:'Bien, complètes la plupart du temps',lvl:'good'},
{v:'b',l:'Quelques réveils mais se rendort facilement',lvl:'ok'},
{v:'c',l:'Réveils fréquents, difficulté a rendormir',lvl:'watch'},
{v:'d',l:'Nuits très hachees, peu de sommeil profond',lvl:'alert'}]},
{id:'q2',dom:'sleep',q:"L'endormissement le soir est...",opts:[
{v:'a',l:'Simple, autonome',lvl:'good'},
{v:'b',l:'Un peu long mais gerable',lvl:'ok'},
{v:'c',l:'Long et complique tous les soirs',lvl:'watch'},
{v:'d',l:'Avec cris, pleurs où crises régulieres',lvl:'alert'}]},
{id:'q3',dom:'food',q:'Avec la nourriture, votre enfant...',opts:[
{v:'a',l:'Mange de tout volontiers',lvl:'good'},
{v:'b',l:'Mange bien avec quelques refus',lvl:'ok'},
{v:'c',l:'Se montre sélectif (néophobie alimentaire)',lvl:'watch'},
{v:'d',l:"Tres peu varie, petit appétit qui inquiete",lvl:'alert'}]},
{id:'q4',dom:'food',q:'Les repas se passent...',opts:[
{v:'a',l:'Calmes et conviviaux',lvl:'good'},
{v:'b',l:'OK mais parfois un peu longs',lvl:'ok'},
{v:'c',l:'Souvent agites où conflictuels',lvl:'watch'},
{v:'d',l:'Chaque repas est un combat',lvl:'alert'}]},
{id:'q5',dom:'émotions',q:'Face aux frustrations, votre enfant...',opts:[
{v:'a',l:'Se calme vite, seul où avec un calin',lvl:'good'},
{v:'b',l:'Pleure parfois mais reçupere bien',lvl:'ok'},
{v:'c',l:'A des crises intenses plusieurs fois par semaine',lvl:'watch'},
{v:'d',l:'Crises quotidiennes, longues a apaiser',lvl:'alert'}]},
{id:'q6',dom:'language',q:'Pour son âge, son langage est...',opts:[
{v:'a',l:'Riche, en avance',lvl:'good'},
{v:'b',l:"Conforme à son âge",lvl:'ok'},
{v:'c',l:'Un peu en retrait, je surveille',lvl:'watch'},
{v:'d',l:'Me preoccupe, peu de progrès',lvl:'alert'}]},
{id:'q7',dom:'motor',q:'Sur le plan moteur (tenir sa tête, ramper, marcher, courir)...',opts:[
{v:'a',l:'Dans la moyenne où en avance',lvl:'good'},
{v:'b',l:'Progresse à son rythme',lvl:'ok'},
{v:'c',l:'Un peu en retrait sans être bloque',lvl:'watch'},
{v:'d',l:'Retard visible où difficultés repetees',lvl:'alert'}]},
{id:'q8',dom:'social',q:'Avec les autrès enfants et adultes...',opts:[
{v:'a',l:"A l'aise, curieux, va vers les autres",lvl:'good'},
{v:'b',l:"Temps d'adaptation mais s'integre",lvl:'ok'},
{v:'c',l:'Plutôt timide, en retrait',lvl:'watch'},
{v:'d',l:'Conflits fréquents où évitement marque',lvl:'alert'}]},
{id:'q9',dom:'screens',q:"Temps d'écran quotidien (TV, tablette, telephone) ?",opts:[
{v:'a',l:'Aucun',lvl:'good'},
{v:'b',l:'Moins de 30 minutes',lvl:'ok'},
{v:'c',l:'30 minutes a 1 heure',lvl:'watch'},
{v:'d',l:"Plus d'1 heure par jour",lvl:'alert'}]},
{id:'q10',dom:'bonding',q:'Temps de jeu où interaction directe parent-enfant par jour (cumule) ?',opts:[
{v:'a',l:'Plus de 2 heures',lvl:'good'},
{v:'b',l:'Entre 1 et 2 heures',lvl:'ok'},
{v:'c',l:'Entre 30 minutes et 1 heure',lvl:'watch'},
{v:'d',l:'Moins de 30 minutes',lvl:'alert'}]}
];

const LVL_LBL={good:'Tout roule',ok:'Ca va bien',watch:'A observer',alert:'Point de vigilance'};

const BILAN_LIB={
sleep:{
good:{s:"Le sommeil de votre enfant est solide et soutient bien sa croissance. C'est un pilier précieux.",t:["Maintenez les rituels qui fonctionnent : régularité des horaires, même le week-end.","Protégez les siestes : elles participent directement à la qualité des nuits.","Continuez à créer une ambiance apaisante (lumière tamisée, voix calme) au coucher."]},
ok:{s:"Les nuits sont globalement bonnes avec quelques aleas normaux dans le développement.",t:["Des réveils courts sont normaux : laissez 2 a 3 minutes avant d'intervenir, il peut se rendormir seul.","Un rituel régulier (bain, histoire, cabine-calin) ameliore significativement l'endormissement.","Limitez les écrans dans l'heure qui precede le coucher : la lumiere bleue retarde la melatonine."]},
watch:{s:"Le sommeil est difficile en ce moment. C'est souvent lie a une phase passagere (poussees dentaires, pic de croissance, angoisse de separation, grand changement).",t:["Tenez un petit journal de sommeil 7 a 10 jours pour repèrer un schema.","Environnement : chambre a 18-19°C, obscurite complète, pas d'écran 1h avant le dodo.","Ritualisez un coucher court mais très prévisible (3 étapes maxi, toujours dans le même ordre).","Évitez les habitudes qui conditionnent (endormissement dans les bras systematique, biberon au lit après 6 mois)."]},
alert:{s:"Sur la duree, un sommeil très fragile impacte le comportement, l'appétit et votre équilibre familial. Il est temps d'agir.",t:["Consultez le pédiatre : ecarter une cause physique (reflux, apnees du sommeil, infection ORL, allergies).","Envisagez une consultation sommeil de l'enfant si c'est installe depuis plus d'un mois.","Essayez la methode de l'extinction progrèssive (lever le delai d'intervention) uniquement après accord medical.","Prenez soin de vous : demandez de l'aide, relayez-vous la nuit. Un parent épuisé ne peut pas apaiser."]}
},
food:{
good:{s:"Votre enfant a une relation saine et curieuse avec l'alimentation. Bravo pour ce socle.",t:["Continuez à proposer une grande variété sans pression.","Mangez en famille quand c'est possible : l'exemple est le meilleur apprentissage.","Laissez-le participer (touiller, dresser, choisir entre 2 légumes) : ça renforce son autonomie."]},
ok:{s:"L'alimentation se passe bien avec des refus ponctuels, ce qui est tout a fait courant.",t:["Regle du 'une bouchee pour goûter' plutôt que 'finis ton assiette' : respecte les signaux de satiété.","Présentez un aliment refuse jusqu'a 8 a 15 fois avant de conclure : les gouts evoluent.","Évitez de remplacer un plat refuse par un autre (sinon il apprend que refuser = choisir)."]},
watch:{s:"La néophobie alimentaire (2-6 ans) est un passage courant mais qui s'entretient si on tombe dans les pieges. Pas de panique, mais quelques ajustements vont aider.",t:["Il est préférable de ne pas forcer : la contrainte renforce le refus. La table doit rester un lieu positif.","Reintroduisez les aliments refuses sous des formes differentes (cru, cuit, rape, en soupe, en gratin).","Limitez les grignotages sucres entre les repas : l'appétit revient avec la faim.","Impliquez-le en cuisine : couper, melanger, cueillir... il mangera plus volontiers ce qu'il a prepare."]},
alert:{s:"Les repas sont devenus un combat qui épuisé toute la famille. Ce n'est pas une question de caprice : il y a une difficulté a accompagner.",t:["Consultez le pédiatre pour vérifier courbe de poids, fer, vitamine D et ecarter une cause médicale (reflux, allergie, trouble de l'oralité).","Un bilan avec une diététicienne pédiatrique où une orthophoniste (oralité) peut debloquer la situation.","Dédramatisez : supprimez les menaces, recompenses et chantages alimentaires.","Rétablir un cadre serein : horaires réguliers, duree du repas limitee (30 min maxi), même table, sans écran."]}
},
émotions:{
good:{s:"Votre enfant développe une belle régulation émotionnelle, soutenue par votre attention et votre sécurité.",t:["Continuez a nommer les émotions en temps reel : 'je vois que tu es très fache'.","Validez avant de chercher une solution : l'émotion a besoin d'être entendue.","Modelisez : verbalisez vos propres émotions pour lui montrer que c'est sain et naturel."]},
ok:{s:"Les émotions sont globalement bien vecues avec des orages passagers. C'est le rythme sain du développement.",t:["Avant 3-4 ans, le cerveau est encore immature : les crises expriment une difficulté a gerer les émotions, pas un 'caprice'. C'est une étape attendue du développement.","Technique du 'coin calme' (non punitif) : un petit espace doux avec coussins et livres pour se réguler.","Apres la tempete, reparez : un calin, quelques mots bienveillants, pas de morale."]},
watch:{s:"Les crises intenses repetees fatiguent tout le monde. Il y a souvent un besoin non comble en dessous (sommeil, faim, sur-stimulation, changement, manque d'attention individuelle).",t:["Identifiez les declencheurs : moment de la journee, contexte, duree depuis la dernière pause calme.","Anticipez les transitions difficiles : prevenez 5 min avant ('après le dessin, on s'habille'), utilisez un minuteur visuel.","Offrez 15 min de 'temps spécial' par jour (juste lui, sans écran ni distraction) : cela reduit énormement les crises.","Lisez les livres d'émotions (la 'Couleur des émotions', les 'Monstres' de Gilles Rapaport)."]},
alert:{s:"Des crises quotidiennes très intenses sur plusieurs mois méritent un regard professionnel. Ce n'est pas de l'éducation ratee, c'est un signal.",t:["Consultez le pédiatre pour orienter vers un psychologue où un pédopsychiatre si nécessaire.","Explorez : cela a-t-il commence après un événement (deuil, separation, déménagement, naissance) ?","Vérifiez le sommeil en premier : un enfant épuisé ne peut pas réguler ses émotions.","Prenez soin de vous : un parent débordé amplifie sans le vouloir les émotions de l'enfant. Le 'bain affectif' parental doit être ressource."]}
},
language:{
good:{s:"Le langage se déploie bien, signe d'un environnement riche en interactions.",t:["Continuez a lire tous les jours, même 10 minutes : c'est le plus puissant booster de vocabulaire.","Parlez-lui en phrases complètes et variees plutôt qu'en 'bébé-parlant'.","Posez des questions ouvertes : 'qu'est-ce qui se passe dans l'histoire ?' plutôt que 'c'est un chat ?'."]},
ok:{s:"Le langage suit son rythme habituel. Chaque enfant a sa propre courbe, très variable entre 18 mois et 3 ans.",t:["Privilégiez le face-a-face et le regard pendant les échanges.","Limitez les écrans avant 3 ans : ils freinent l'acquisition du langage (pas d'interaction reciproque).","Comptines, chansons, jeux de doigts : excellents pour les sons, le rythme et le vocabulaire."]},
watch:{s:"Certains repères sont un peu en retrait. La plupart du temps, ce sont de vraies variations individuelles, mais mieux vaut vérifier que de laisser s'installer.",t:["Signes a surveiller : a 18 mois, moins de 10 mots ; a 24 mois, pas d'association de 2 mots ; bave beaucoup, n'imite pas.","Faites tester l'audition en ORL : une otite seromuqueuse chronique peut freiner l'acquisition sans bruit.","Bain de langage : description de ce que vous faites au quotidien ('on met la chaussure droite, puis la gauche').","Limitez strictement les écrans et les tetines en journee (la tetine gêne l'articulation)."]},
alert:{s:"Vos observations méritent un bilan professionnel. Une prise en charge précoce transforme littéralement le pronostic.",t:["Consultez le pédiatre où le medecin scolaire pour prescription d'un bilan orthophonique (remboursé sans avance a partir de l'ordonnance).","L'orthophonie prise en charge avant 4-5 ans rattrape la plupart des retards sans séquelle.","Parallelement : bilan auditif en ORL obligatoire avant tout bilan langage.","Ne pas attendre 'qu'il se deverrouille seul' : l'attente coute davantage que l'action."]}
},
motor:{
good:{s:"La motricité se développe harmonieusement. Un corps bien exploré est une base cognitive solide.",t:["Continuez à offrir des occasions de bouger librement : parcs, sols variés, escaliers accompagnés.","Limitez les transats / youpalas / chaises de maintien qui bloquent l'exploration naturelle.","Motricité fine : encouragez les pinces (petits objets, pinces à linge), découpage, pâte à modeler."]},
ok:{s:"Les acquisitions motrices suivent leur cours naturellement.",t:["Chaque enfant à son calendrier : certains marchent à 10 mois, d'autres à 18, les deux sont normaux.","Laissez-le tomber (en sécurité) : chuter fait partie de l'apprentissage de l'équilibre.","Variez les environnements : herbe, sable, escalade en forêt, piscine. La diversité sensorielle nourrit le cerveau."]},
watch:{s:"Quelques repères sont un peu decales. Souvent sans consequence, mais cela mérite d'être evalue.",t:["Vérifiez que les repères cles sont presents : tient sa tête (4 mois), tient assis (9), marche (18 mois maxi), monte les escaliers a 24-30 mois.","Mouvement asymetrique, raideur, trop mou, plagiocephalie : parlez-en au pédiatre.","Réduisez le temps en transat/chaise haute : privilegiez le tapis au sol.","Un bilan de kinésitherapie pédiatrique où de psychomotricité peut être prescrit."]},
alert:{s:"Un retard moteur significatif justifie un bilan. L'enfant a besoin qu'on regarde ce qui se passe.",t:["Consultation pédiatrique avec demande d'avis pédiatrie du développement où neuropédiatrie.","Bilan de psychomotricité et/ou kinésitherapie pédiatrique : les prises en charge précoces sont très efficaces.","Une rencontre avec la PMI (gratuite) peut orienter rapidement vers les bons professionnels.","Gardez confiance : beaucoup de retards se comblent totalement avec un accompagnement adapte."]}
},
social:{
good:{s:"Votre enfant construit une belle confiance relationnelle. C'est un atout pour toute la vie.",t:["Continuez à multiplier les contacts variés : parc, famille élargie, amis, crèche/école.","Laissez-le gérer les petits conflits avant d'intervenir : apprentissage essentiel.","Valorisez l'empathie : 'tu as vu, le copain pleure, que peut-on faire ?'."]},
ok:{s:"Les relations se construisent à son rythme. La timidité passagère est très courante.",t:["Respectez son rythme : forcer à 'faire un bisou' ne construit pas la sociabilité, ça l'inhibe.","Préparez les nouvelles situations en amont : 'demain on verra Marie, tu te souviens ?'.","Un 'doudou social' (peluche ou petit objet) aide beaucoup dans les transitions."]},
watch:{s:"Les difficultés sociales peuvent refleter un temperament introverti (tout a fait courant) où un besoin d'accompagnement supplementaire.",t:["Differenciez timide (observateur qui s'integre ensuite) et évitement (evite activement). Les deux ne se gerent pas pareil.","Mettez en place des temps de jeu a deux avant le groupe : un copain invite a la maison.","Livres a lire : 'Le petit chaperon rouge' et histoires de gestion de peur/rencontre.","Si l'enfant ne regarde pas dans les yeux, ne pointe pas du doigt, ne partage pas d'interet : parlez-en au pédiatre."]},
alert:{s:"Des difficultés sociales marquees et persistantes peuvent avoir des causes multiples qu'il faut éclairer.",t:["Consultation pédiatrique pour bilan développemental global.","Un bilan psychomoteur où psychologique peut identifier troubles anxieux, TSA où autre cause.","L'integration en creche/halte-garderie (même 2 demi-journees) stimule le développement social.","Évitez l'isolement social de l'enfant mais aussi de la famille : les réseaux d'entraide parents sont précieux."]}
},
screens:{
good:{s:"Vous avez fait le choix essentiel : protéger le temps de cerveau disponible de votre enfant. C'est l'un des plus beaux cadeaux éducatifs.",t:["Continuez ainsi : l'OMS recommande 0 écran avant 2 ans, moins d'1h/jour entre 2 et 5 ans, contenu adapté uniquement.","Le 'jeu libre ennuyé' développe la créativité, l'imagination, l'autonomie.","Montrez l'exemple : moins vous utilisez votre téléphone devant lui, plus il intègre le bon modèle."]},
ok:{s:"La consommation d'écrans est raisonnable. Quelques reflexes pour la garder sous contrôle.",t:["Évitez les écrans dans l'heure qui suit le réveil et l'heure qui precede le coucher.","Priorite aux contenus regardes ensemble (co-visionnage) : transforme un temps passif en échange.","Pas d'écran pendant les repas : moment de langage, de partage et d'attention.","Regle '3-6-9-12' de Serge Tisseron : pas de tele avant 3 ans, pas de console personnelle avant 6, pas d'Internet seul avant 9, pas de réseaux sociaux avant 12."]},
watch:{s:"Le temps d'écran est au-dessus des recommandations. A cet âge, chaque heure d'écran remplace une heure de développement actif (langage, motricité, relation).",t:["Réduisez progrèssivement : -15 min par jour par semaine pour ne pas créer de frustration massive.","Remplacez l'écran par des alternatives concretes : boite a jeux libres, coin lecture, sortie dehors quotidienne.","Supprimez les écrans 'd'ambiance' (TV allumee en fond) : ils reduisent la qualite du langage parental de 30 a 40%.","Écrans dans la chambre = a bannir, surtout tablette et telephone."]},
alert:{s:"Une sur-exposition aux écrans a cet âge peut imiter des symptomes de troubles neuro-développementaux. La bonne nouvelle : réduire les écrans transforme rapidement la situation.",t:["Recommandation : sevrage complet pendant 4 a 6 semaines pour observer le vrai niveau de développement.","Les premiers jours sont difficiles (crises, ennui) mais ça passe vite. Remplissez le vide par votre présence active.","Demandez un avis pédiatrique : certaines difficultés attribuees aux écrans peuvent aussi reveler un trouble reel a diagnostiquer.","Informez-vous : le documentaire 'Surexposition aux écrans' où les travaux de Michel Desmurget (Le Crer...e des écrans) éclairent le sujet."]}
},
bonding:{
good:{s:"Vous offrez à votre enfant ce qu'il y a de plus précieux : une attention individuelle et pleine. C'est la base de son sécurité affective.",t:["Continuez ces moments privilégiés : c'est un investissement sur toute sa vie.","Variez : lecture, cuisine ensemble, balade, jeu au sol, chansons... chaque mode nourrit différemment.","Préservez ces moments des écrans et du téléphone : la qualité de présence compte plus que la durée."]},
ok:{s:"Vous construisez un lien solide. Quelques pistes pour le nourrir encore plus.",t:["Instaurez un rituel 'temps spécial' : 15 min par jour uniquement avec lui, c'est lui qui choisit l'activité.","La règle d'or : pendant ce temps, téléphone en mode avion et pleine présence.","Le soir, le 'bilan de la journée' (3 choses qui ont fait rire/plaisir, 1 qui a été difficile) crée une intimité précieuse."]},
watch:{s:"Le temps de connexion directe est un peu juste. Souvent simplement une question de rythme et d'organisation, pas de negligence.",t:["La quantite ne fait pas tout : 15 min de vraie présence valent mieux que 2h distraites.","Profitez des temps contraints (bain, repas, trajet) pour créer du lien plutôt que de les subir.","Les enfants sont plus disponibles le matin et juste après un temps de jeu libre. Saisissez ces moments.","Si vous rentrez tard : rituel du 'moment calme' en rentrant (5 min blottis) avant les taches."]},
alert:{s:"Un temps de connexion vraiment très faible mérite attention : pour lui et pour vous. Aucune culpabilite, juste agir.",t:["Commencez par 10 min par jour, tous les jours : c'est peu en temps, énorme en signal de sécurité pour l'enfant.","Si possible, réaménagez : poser un plus tard, moins de taches le soir, rituel avant dodo systematique.","Parlez-en au pédiatre où en PMI : une forme d'épuisément parental peut aussi être en cause.","Prenez soin de vous : vous ne pouvez donner que ce que vous avez. Un parent repose est un parent disponible."]}
}
};

function buildBilan(responses){
  const rank={good:0,ok:1,watch:2,alert:3};
  const domLvl={};
  QUIZ.forEach(q=>{
    const v=responses[q.id];if(!v)return;
    const opt=q.opts.find(o=>o.v===v);if(!opt)return;
    if(!(q.dom in domLvl)||rank[opt.lvl]>rank[domLvl[q.dom]])domLvl[q.dom]=opt.lvl;
  });
  const out=[];
  Object.keys(QDOMS).forEach(dk=>{
    if(dk in domLvl){
      const lvl=domLvl[dk];const lib=BILAN_LIB[dk]&&BILAN_LIB[dk][lvl];
      if(lib)out.push({dom:dk,lvl,summary:lib.s,tips:lib.t});
    }
  });
  return out;
}

// ============= DAILY TOOLS =============
const TOOLS={"0-6m":[{t:"Sommeil du bébé",d:"Cycles courts et fréquents",ico:"moon",bg:"var(--lv)",g:"sleep"},{t:"Allaitement & biberon",d:"Nourrir a la demande",ico:"utensils",bg:"var(--mt)",g:"food"},{t:"Pleurs et reconfort",d:"Répondre avec douceur",ico:"heart",bg:"var(--rs)",g:"behavior"},{t:"Eveil sensoriel",d:"Stimuler les 5 sens",ico:"sparkle",bg:"var(--pk)",g:"activities"}],"6-12m":[{t:"Diversification alimentaire",d:"Introduire les solides",ico:"utensils",bg:"var(--mt)",g:"food"},{t:"Quatre pattes et mobilite",d:"Encourager le mouvement",ico:"run",bg:"var(--sk)",g:"activities"},{t:"Angoisse de séparation",d:"C'est une étape et c'est positif",ico:"heart",bg:"var(--rs)",g:"émotions"},{t:"Gestes et sons",d:"Premiers mots et signes",ico:"speech",bg:"var(--pk)",g:"activities"}],"12-24m":[{t:"Premiers mots",d:"L'explosion du vocabulaire",ico:"speech",bg:"var(--pk)",g:"activities"},{t:"Marche et exploration",d:"Securiser et laisser faire",ico:"run",bg:"var(--sk)",g:"activities"},{t:"Crises de colere",d:"Nommer les émotions",ico:"heart",bg:"var(--rs)",g:"émotions"},{t:"Autonomie au repas",d:"Manger seul, quel bazar !",ico:"utensils",bg:"var(--mt)",g:"food"}],"2-3a":[{t:"Apprentissage propreté",d:"A son rythme, sans pression",ico:"droplet",bg:"var(--sk)",g:"hygiene"},{t:"Socialisation",d:"Apprendre a partager",ico:"smile",bg:"var(--rs)",g:"behavior"},{t:"Gestion des émotions",d:"Le coin calme et les mots",ico:"heart",bg:"var(--pk)",g:"émotions"},{t:"Jeux creatifs",d:"Pâte à modeler, dessin...",ico:"palette",bg:"var(--lv)",g:"activities"}],"3-6a":[{t:"Préparer l'école",d:"Confiance et autonomie",ico:"star",bg:"var(--sd)",g:"behavior"},{t:"Amities et regles",d:"Jouer, perdre, gagner",ico:"smile",bg:"var(--rs)",g:"behavior"},{t:"Confiance en soi",d:"Encourager les efforts",ico:"sparkle",bg:"var(--pk)",g:"émotions"},{t:"Alternatives écrans",d:"Boite a ennui et jeux",ico:"palette",bg:"var(--lv)",g:"behavior"}]};
function toolsKey(m){if(m<6)return"0-6m";if(m<12)return"6-12m";if(m<24)return"12-24m";if(m<36)return"2-3a";return"3-6a"}
function devAgeKey(m){if(m<6)return"0-6m";if(m<12)return"6-12m";if(m<24)return"1-2a";if(m<36)return"2-3a";return"3-6a"}

// ============= DAILY TIPS (proactive, age-based) =============
const DAILY_TIPS={
"0-6m":[
{t:"Parlez-lui de tout ce que vous faites",x:"Commenter vos gestes enrichit son bain de langage : \"Maintenant on met la petite chaussette...\""},
{t:"5 minutes de tummy time après chaque change",x:"C'est l'exercice fondamental pour muscler le cou, le dos, et préparer la motricité."},
{t:"Répondez aux pleurs sans tarder",x:"A cet âge, on ne gate pas un bébé. Répondre = construire sa sécurité intérieure."},
{t:"Limitez les sollicitations en fin de journee",x:"Les bébés accumulent la fatigue. Une ambiance calme des 17h previent les pleurs du soir."}
],
"6-12m":[
{t:"Proposez du doigt aujourd'hui",x:"Petits morceaux fondants (banane, avocat, courgette cuite). Il apprend a gerer les textures et la satiété."},
{t:"Cachez un jouet sous un tissu",x:"Jeu magique qui travaille la permanence de l'objet, base de la confiance et de la separation."},
{t:"Lisez un livre cartonne 10 minutes",x:"Même s'il le mange où tourne les pages au hasard, c'est le debut de l'amour des livres."},
{t:"Laissez-le se déplacer librement au sol",x:"Plus que le parc, le sol securise est son meilleur terrain de développement moteur."}
],
"12-24m":[
{t:"Donnez deux choix plutôt qu'un ordre",x:"\"Tu veux la banane où la pomme ?\" reduit les crises en donnant de l'autonomie."},
{t:"Nommez l'émotion que vous voyez",x:"\"Tu es en colere parce que...\". Il apprend a mettre des mots et a se réguler."},
{t:"Moment imitation en cuisine",x:"Un petit saladier, une cuillere en bois. Il vous copie et développe sa motricité fine."},
{t:"Lecture interactive : montrez et questionnez",x:"\"Ou est le chien ?\" Le pointage declenche les premiers mots."}
],
"2-3a":[
{t:"Instaurez une routine du soir visuelle",x:"Une suite fixe d'étapes (bain, pyjama, livre, calin) secretse. Les routines calment."},
{t:"Proposez un coin calme",x:"Coussins, doudou, livres. Un refuge, pas une punition, pour quand ça débordé."},
{t:"Dessin libre aujourd'hui",x:"Grandes feuilles, crayons gras. Laissez-le faire, ne corrigez pas. C'est sa pensee qui se pose."},
{t:"Un livre sur les émotions ce soir",x:"\"La couleur des émotions\" où \"Quand je suis...\". Aide a mettre des mots sur ce qu'il vit."}
],
"3-6a":[
{t:"Donnez-lui une vraie responsabilité",x:"Mettre la table, nourrir le chat, arroser la plante. La fierté d'être utile = confiance en soi."},
{t:"Inventez une histoire ensemble",x:"Vous commencez, il continue. Stimule imagination, vocabulaire, narration."},
{t:"Limitez les écrans à 30 min maxi",x:"Préférez la nature, les jeux de société, la cuisine. Les écrans avant 3 ans : éviter."},
{t:"Acceptez la lenteur ce matin",x:"Laissez-le mettre ses chaussures seul, même si c'est long. L'autonomie se construit là."}
]
};

// ============= CITATIONS INSPIRANTES POUR PARENTS =============
const PARENT_QUOTES=[
{q:"Vous n'avez pas besoin d'être parfait. Vous avez juste besoin d'être présent.",a:""},
{q:"Chaque jour où vous vous levez pour votre enfant, vous êtes déjà un parent formidable.",a:""},
{q:"Un enfant n'a pas besoin d'un parent parfait. Il a besoin d'un parent heureux.",a:""},
{q:"Ce que vous faites ne suffit peut-être pas toujours, mais ce que vous êtes suffit toujours.",a:""},
{q:"Douter de soi-même, c'est la preuve qu'on prend la parentalité au sérieux.",a:""},
{q:"Votre enfant ne se souviendra pas de la maison parfaite. Il se souviendra des fous rires.",a:""},
{q:"Un câlin n'a jamais gâté un enfant. Il l'a seulement rassuré.",a:""},
{q:"Vous êtes le premier modèle de votre enfant. Soyez doux avec vous-même.",a:""},
{q:"Chaque erreur est une occasion d'apprendre. Vous grandissez avec votre enfant.",a:""},
{q:"Être parent, c'est aussi apprendre à se pardonner chaque soir.",a:""},
{q:"Votre enfant ne voit pas vos imperfections. Il voit son monde entier.",a:""},
{q:"Le plus beau cadeau que vous pouvez offrir à votre enfant, c'est votre présence attentive.",a:""},
{q:"Personne ne connaît votre enfant mieux que vous. Faites-vous confiance.",a:""},
{q:"Les petits moments du quotidien sont les grands souvenirs de demain.",a:""},
{q:"Prendre soin de soi n'est pas de l'égoïsme. C'est s'assurer d'avoir de l'amour à donner.",a:""},
{q:"Un parent fatigué reste un bon parent. Le simple fait d'être là compte énormément.",a:""},
{q:"Les enfants ne demandent pas la perfection. Ils demandent la connexion.",a:""},
{q:"Votre patience d'aujourd'hui construit la confiance de votre enfant pour la vie.",a:""},
{q:"Il n'y a pas de mode d'emploi. Et c'est normal : chaque famille écrit sa propre histoire.",a:""},
{q:"Même les jours difficiles, vous êtes en train de construire quelque chose de beau.",a:""},
{q:"L'amour que vous donnez ne se perd jamais. Il devient la force intérieure de votre enfant.",a:""},
{q:"Vous n'êtes pas seul. Tous les parents doutent. Les meilleurs osent en parler.",a:""},
{q:"Chaque bataille de pyjama, chaque crise au supermarché : ça passera. Et vous en rirez.",a:""},
{q:"Votre enfant n'a pas besoin que vous fassiez tout. Il a besoin que vous soyez là.",a:""},
{q:"Le fait que vous cherchiez à mieux faire prouve déjà que vous faites bien.",a:""},
{q:"Lâcher prise sur le ménage pour jouer 10 minutes : c'est la bonne priorité.",a:""},
{q:"Un parent qui demande de l'aide n'est pas faible. Il est courageux.",a:""},
{q:"Votre voix est la première musique de votre enfant. Parlez-lui, chantez-lui, même faux.",a:""},
{q:"Aujourd'hui, autorisez-vous à faire 'juste assez'. C'est déjà beaucoup.",a:""},
{q:"L'enfance passe vite. Mais chaque moment d'attention laisse une empreinte pour la vie.",a:""}
];

// ============= STATE =============
let S={parents:[],cp:null,sel:null,ms:[],gr:[],sl:[],cht:'weight',childAge:9,ag:[],vc:[],rem:{vaccines:[],events:[]},agTab:'upcoming',calMonth:null};
async function api(u,m='GET',b=null){const o={method:m,headers:{'Content-Type':'application/json'}};if(b)o.body=JSON.stringify(b);return(await fetch(u,o)).json()}

// ============= NAV =============
document.querySelectorAll('.nb').forEach(b=>b.addEventListener('click',()=>go(b.dataset.p)));
function go(p){document.querySelectorAll('.page').forEach(pg=>pg.classList.remove('active'));document.getElementById('p-'+p).classList.add('active');document.querySelectorAll('.nb').forEach(n=>n.classList.toggle('on',n.dataset.p===p));const nav=document.getElementById('navbar'),fab=document.getElementById('fab');document.body.classList.toggle('auth-mode',p==='auth');nav.style.display=['auth','guide-detail','child-detail','quiz','quizres','suggestions'].includes(p)?'none':'flex';fab.style.display=p==='agenda'?'flex':'none';if(p==='home')loadHome();if(p==='agenda')loadAgenda();if(p==='milestones')loadMs();if(p==='growth')loadGr();if(p==='guide')loadGuide();if(p==='profile')loadProf();if(p==='suggestions')loadMySuggestions();if(!['auth','guide-detail','child-detail','quiz','quizres'].includes(p)){try{localStorage.setItem('pg_lastpage',p)}catch(e){}}window.scrollTo(0,0)}

// ============= SWIPE-RIGHT GESTURE TO GO BACK =============
let _swX = 0;
document.addEventListener('touchstart', e => {
  _swX = e.touches[0].clientX;
}, {passive: true});

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - _swX;
  // Swipe right from left edge (>80px swipe, started <40px from left)
  if (dx > 80 && _swX < 40) {
    const activePage = document.querySelector('.page.active');
    if (activePage) {
      const id = activePage.id;
      // Go back on detail pages
      if (id === 'p-guide-detail') go('guide');
      else if (id === 'p-quiz') go('home');
      else if (id === 'p-quizres') go('home');
      else if (id === 'p-child-detail') go('home');
    }
  }
}, {passive: true});

// ============= GENDER UTILS =============
function gTxt(gender,m,f){return gender==='girl'?f:m}
// Usage: gTxt(ch.gender, 'Né le', 'Née le')

// ============= UTILS =============
function calcAge(bd){const b=new Date(bd),n=new Date();let m=(n.getFullYear()-b.getFullYear())*12+n.getMonth()-b.getMonth();if(n.getDate()<b.getDate())m--;if(m<1)return'Nouveau-né';if(m<12)return m+' mois';const y=Math.floor(m/12),r=m%12;return r>0?y+' an'+(y>1?'s':'')+' et '+r+' mois':y+' an'+(y>1?'s':'')}
function ageM(bd){const b=new Date(bd),n=new Date();return(n.getFullYear()-b.getFullYear())*12+n.getMonth()-b.getMonth()}
function fmt(d){if(!d)return'';return new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'})}
function fmtShort(d){if(!d)return'';return new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'short'})}
function daysUntil(d){if(!d)return null;const t=new Date();t.setHours(0,0,0,0);const td=new Date(d);td.setHours(0,0,0,0);return Math.round((td-t)/86400000)}
function relDate(d){const n=daysUntil(d);if(n===null)return'';if(n===0)return"Aujourd'hui";if(n===1)return'Demain';if(n===-1)return'Hier';if(n>0&&n<7)return'Dans '+n+' jours';if(n<0&&n>-7)return'Il y a '+(-n)+' jours';return fmtShort(d)}
const DAYS=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
const MONTHS=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const MONTHS_SHORT=['janv.','févr.','mars','avr.','mai','juin','juil.','aout','sept.','oct.','nov.','déc.'];
const QC={great:'var(--mt3)',good:'var(--sk3)',fair:'var(--pk3)',poor:'var(--rs3)'};
const MI={motor:'run',language:'speech',social:'smile',cognitive:'brain',autonomy:'star',other:'pin'};
const MB={motor:'var(--sk)',language:'var(--pk)',social:'var(--rs)',cognitive:'var(--mt)',autonomy:'var(--lv)',other:'var(--sd)'};
const ML={motor:'Motricité',language:'Langage',social:'Social',cognitive:'Cognitif',autonomy:'Autonomie',other:'Autre'};
const CAT={appointment:{l:'RDV',i:'clock',c:'var(--sk3)',bg:'var(--sk)'},vaccine:{l:'Vaccin',i:'syringe',c:'var(--rs3)',bg:'var(--rs)'},medication:{l:'Médicament',i:'droplet',c:'var(--rs3)',bg:'var(--rs)'},illness:{l:'Maladie',i:'heart',c:'var(--rs3)',bg:'var(--rs)'},activity:{l:'Activité',i:'palette',c:'var(--mt3)',bg:'var(--mt)'},school:{l:'Scolaire',i:'note',c:'var(--sk3)',bg:'var(--sk)'},sleep:{l:'Sommeil',i:'moon',c:'var(--lv3)',bg:'var(--lv)'},meal:{l:'Repas',i:'utensils',c:'var(--mt3)',bg:'var(--mt)'},note:{l:'Note',i:'note',c:'var(--lv3)',bg:'var(--lv)'},milestone:{l:'Étape',i:'star',c:'var(--pk3)',bg:'var(--pk)'},other:{l:'Autre',i:'pin',c:'var(--sd3)',bg:'var(--sd)'}};
const TITLE_SUG={appointment:['RDV pédiatre','RDV dentiste','RDV ORL','RDV ophtalmo','RDV orthophoniste','RDV kiné','RDV ostéopathe','Visite médicale','Bilan de santé','Échographie','Analyse de sang'],vaccine:['DTP (Diphtérie-Tétanos-Polio)','Coqueluche','ROR (Rougeole-Oreillons-Rubéole)','Méningocoque B','Méningocoque C','Pneumocoque','Hépatite B','Haemophilus influenzae B','HPV (Papillomavirus)','Grippe saisonnière','Rotavirus','Varicelle'],medication:['Doliprane','Paracétamol','Ibuprofène','Antibiotique','Vitamine D','Sirop pour la toux','Serum physiologique','Probiotiques'],illness:['Rhume','Gastro-entérite','Fièvre','Otite','Angine','Bronchiolite','Varicelle','Conjonctivite','Roséole','Coup de soleil','Allergie'],activity:['Parc','Piscine','Anniversaire','Sortie famille','Cinéma','Bibliothèque','Musée','Pique-nique','Zoo','Plage','Ferme pédagogique','Atelier creatif'],school:['Rentrée','Vacances','Réunion parents-prof','Sortie scolaire','Photo de classe','Carnaval','Kermesse','Spectacle','Remise bulletins','Portes ouvertes'],sleep:['Nuit complète','Réveil nocturne','Sieste','Cauchemar','Terreur nocturne','Couchage difficile','Changement de rythme'],meal:['Nouvel aliment','DME','Petit-déjeuner','Déjeuner','Goûter','Dîner','Refus alimentaire','Biberon','Allaitement','Diversification'],note:['Souvenir','Première fois','Progrès','Moment spécial','Citation amusanté','Anecdote'],milestone:['Première dent','Premiers pas','Premiers mots','Propreté (jour)','Propreté (nuit)','Rentrée école','Perte première dent','Première nuit complète','Premier sourire','Se tient assis','Marche à quatre pattes'],other:['Rappel','Administratif','Achat','Inscription','Réunion école']};
const ACCOMP_SUG=['Maman','Papa','Parent 1','Parent 2','Nounou','Grand-mère','Grand-père','Tata','Tonton','Assistante maternelle','Creche'];
const REM_OPTS=[['','Aucun'],['15','15 minutes avant'],['60','1 heure avant'],['180','3 heures avant'],['1440','La veille'],['2880','2 jours avant'],['10080','1 semaine avant']];
const REC_OPTS=[['','Aucune'],['weekly','Toutes les semaines'],['biweekly','Toutes les 2 semaines'],['monthly','Tous les mois'],['yearly','Tous les ans']];
const MOOD_OPTS=[['','Non renseignée'],['radieux','Rayonnant'],['content','Content'],['neutre','Neutre'],['grognon','Grognon'],['triste','Triste'],['fatigue','Fatigué']];
const PH_MAP={appointment:'Ex: RDV pédiatre',vaccine:'Ex: ROR',medication:'Ex: Doliprane',illness:'Ex: Rhume',activity:'Ex: Parc',school:'Ex: Rentrée',sleep:'Ex: Nuit agitée',meal:'Ex: Avocat',note:'Ex: Souvenir',milestone:'Ex: Premiers pas',other:'Ex: Rappel'};

function childSel(cid,ch,cb){const c=document.getElementById(cid);if(!ch.length){c.innerHTML='';return}if(!S.sel||!ch.find(x=>x.id===S.sel))S.sel=ch[0].id;c.innerHTML='<div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:6px">'+ch.map(x=>'<button onclick="selCh(\''+cid+"','"+x.id+'\')" style="display:flex;align-items:center;gap:6px;padding:6px 14px;border-radius:20px;border:1.5px solid '+(S.sel===x.id?'var(--pk3)':'var(--bd)')+';background:'+(S.sel===x.id?'var(--pk)':'#fff')+';font-family:inherit;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap"><span style="width:24px;height:24px;display:inline-flex">'+avSvg(x.photoUrl||'lion')+'</span>'+x.firstName+'</button>').join('')+'</div>';cb(S.sel)}
window.selCh=function(cid,id){S.sel=id;if(cid.includes('ms'))loadMs();if(cid.includes('gr'))loadGr();if(cid.includes('ag'))loadAgenda()}

// ============= HOME =============
async function loadHome(){
  await refreshContentIfStale(); // Always load content from backend on page load
  if(!S.cp){S.parents=await api('/api/parents');if(!S.parents.length)return;S.cp=S.parents[0];}
  const greetEl=document.getElementById('greeting');
  const pAvatar=S.cp.avatar||'parent';
  greetEl.innerHTML='<span style="display:inline-flex;width:28px;height:28px;vertical-align:middle;margin-right:6px;border-radius:50%;overflow:hidden">'+avSvg(pAvatar)+'</span>Bonjour '+S.cp.firstName+' !';
  const p=await api('/api/home/'+S.cp.id);const c=document.getElementById('hc');
  if(!p.children.length){c.innerHTML='<div class="crd" style="text-align:center;padding:40px 20px"><p style="font-size:13px;color:var(--tx2)">Ajoutez votre premier enfant</p><button class="btn bp mt" onclick="openAddChild()">Ajouter un enfant</button></div>';document.getElementById('hi').innerHTML='';document.getElementById('st').innerHTML='';document.getElementById('ht').innerHTML='';document.getElementById('hremind').innerHTML='';return}
  const ch=p.children.find(x=>x.id===S.sel)||p.children[0];S.sel=ch.id;const am=ageM(ch.birthDate);S.childAge=am;
  const gr=ch.growth||[];const rem=ch.reminders||{vaccines:[],events:[]};
  S.rem=rem;
  const lg=gr.length?gr[gr.length-1]:null;
  const ageShort=am<12?am+' m':(Math.floor(am/12)+(am%12>0?' a '+(am%12)+' m':' an'+(Math.floor(am/12)>1?'s':'')));
  let childSw='';
  if(p.children.length>1){
    childSw='<div class="chsw" style="padding:0 20px 0;margin-bottom:-4px">'+p.children.map(x=>'<button class="chsw-b'+(x.id===ch.id?' on':'')+'" onclick="swHomeCh(\''+x.id+'\')"><span style="width:20px;height:20px;display:inline-flex">'+avSvg(x.photoUrl||'lion')+'</span>'+x.firstName+'</button>').join('')+'</div>';
  }
  c.innerHTML=childSw+'<div class="crd hero" onclick="showCD(\''+ch.id+'\')"><div class="hr"><div class="av">'+avSvg(ch.photoUrl||'lion')+'</div><div><div class="nm">'+ch.firstName+'</div><div class="ag">'+calcAge(ch.birthDate)+'</div></div></div><div class="sts"><div class="st"><div class="sv">'+(lg&&lg.heightCm?lg.heightCm+' cm':'--')+'</div><div class="sl">Taille</div></div><div class="st"><div class="sv">'+(lg&&lg.weightKg?lg.weightKg+' kg':'--')+'</div><div class="sl">Poids</div></div><div class="st"><div class="sv">'+ageShort+'</div><div class="sl">Age</div></div></div></div>';

  // === BIRTHDAY CHECK ===
  const today=new Date(),bday=new Date(ch.birthDate);
  const isBirthday=today.getMonth()===bday.getMonth()&&today.getDate()===bday.getDate();
  const bdayAge=Math.floor(am/12);
  if(isBirthday&&am>=12){
    c.innerHTML+='<div class="crd" style="background:linear-gradient(135deg,var(--pk),var(--lv));padding:20px;border-radius:var(--rl);margin:8px 20px;text-align:center"><div style="font-size:32px;margin-bottom:8px">'+ico('heart',28)+'</div><h3 style="font-size:16px;font-weight:800;margin-bottom:6px">Joyeux anniversaire '+ch.firstName+' !</h3><p style="font-size:13px;color:var(--tx2);margin-bottom:14px;line-height:1.5">'+ch.firstName+' a '+bdayAge+' an'+(bdayAge>1?'s':'')+' aujourd\'hui ! Un moment parfait pour mettre à jour '+gTxt(ch.gender,'son','son')+' bilan personnalisé.</p><button class="btn bp" onclick="openQuiz(\''+ch.id+'\')" style="font-size:12px;padding:10px 24px">Refaire le bilan</button></div>';
  }

  // === PROACTIVE REMINDERS + NOTIFICATIONS ===
  let rh='';
  const allRemFull=[...rem.vaccines.map(v=>({...v,kind:'vaccine'})),...rem.events.map(e=>({...e,kind:'event'}))].sort((a,b)=>new Date(a.date)-new Date(b.date));
  allRemFull.forEach(exParse);
  const allRem=allRemFull.slice(0,3);
  const nowMs=Date.now();
  const urgentItems=allRemFull.filter(r=>{
    const d=daysUntil(r.date);
    if(d===null||d<0)return false;
    const ex=r._ex||{};
    if(ex.reminderMinutes){
      // Reminder triggers when current time is within the reminder window of the event
      const evMs=new Date(r.date+'T'+(r.time||'09:00')+':00').getTime();
      return (evMs - ex.reminderMinutes*60000) <= nowMs && evMs > nowMs - 3600000;
    }
    return d<=3;
  });
  S.urgent=urgentItems;
  // Notification banner for urgencies
  if(urgentItems.length){
    rh+='<div class="urgbar" onclick="go(\'agenda\')"><div class="urgi">'+ico('bell',16)+'</div><div style="flex:1"><div class="urgt">'+urgentItems.length+' urgence'+(urgentItems.length>1?'s':'')+' - action dans les 3 jours</div><div class="urgx">'+urgentItems.map(u=>u.name).slice(0,2).join(' - ')+(urgentItems.length>2?'...':'')+'</div></div><span class="urgbdg">'+urgentItems.length+'</span></div>';
  }
  if(allRem.length){
    rh+='<div class="stl">'+ico('bell',16)+' A venir prochainement</div>';
    rh+=allRem.map(r=>{
      const d=daysUntil(r.date),urgent=d!==null&&d<=7,vu=d!==null&&d<=3;
      const cat=r.kind==='vaccine'?'vaccine':(r.category||'appointment');
      const info=CAT[cat]||CAT.appointment;
      return '<div class="alert'+(vu?' vurg':'')+'" onclick="go(\'agenda\')" style="border-left-color:'+info.c+'"><div class="ai" style="background:'+info.bg+';color:'+info.c+'">'+ico(info.i,18)+'</div><div style="flex:1;min-width:0"><div class="at">'+r.name+'</div><div class="ax">'+info.l+(r.recommendedAge?' - '+r.recommendedAge:'')+'</div><div class="aa" style="color:'+info.c+'">'+relDate(r.date)+(vu?' - URGENT':(urgent?' - bientot':''))+'</div></div></div>';
    }).join('');
  }
  document.getElementById('hremind').innerHTML=rh;
  // Bell badge update
  const bcnt=urgentItems.length,bell=document.getElementById('hdrbell'),bc=document.getElementById('bcount');
  if(bell){bell.classList.toggle('active',bcnt>0)}
  if(bc){if(bcnt>0){bc.textContent=bcnt;bc.style.display='flex'}else{bc.style.display='none'}}
  // Browser notifications for urgencies
  notifyUrgents(urgentItems);

  // Insight
  let ins='';
  if(am<3)ins="Votre bébé découvre le monde par le toucher et le regard. Le peau-a-peau et votre voix sont ses meilleurs stimulants.";
  else if(am<6)ins="Les mains deviennent de vrais outils d'exploration. Proposez des hochets de textures variees.";
  else if(am<9)ins="La mobilite explose ! Le quatre pattes approche. Securisez votre intérieur et laissez explorer.";
  else if(am<12)ins="Les premiers mots arrivent. Nommez tout ce que vous faites ensemble, c'est le carburant du langage.";
  else if(am<18)ins="L'explosion du vocabulaire et de la marche. Jeux d'empilement et transvasement ideaux.";
  else if(am<24)ins="Le 'non' et l'affirmation de soi. Proposez des choix pour canaliser le besoin d'autonomie.";
  else if(am<36)ins="Le jeu symbolique se développe. Poupees, dinettes, déguisements stimulent l'imagination.";
  else ins="L'age des 'pourquoi'. Répondez avec simplicite et encouragez la curiosité naturelle.";
  document.getElementById('hi').innerHTML='<div class="ins"><div class="il">'+ico('lightbulb',14)+' Éclairage personnalisé</div><div class="it">Ce qui se passe a '+am+' mois</div><div class="ix">'+ins+'</div></div>';

  document.getElementById('st').innerHTML=ico('sparkle',16)+' Outils du quotidien';
  const tk=toolsKey(am),tools=TOOLS[tk]||TOOLS["0-6m"];
  document.getElementById('ht').innerHTML=tools.map(t=>'<div class="qi" onclick="openTool(\''+(t.g||'activities')+'\')"><div class="qic" style="background:'+t.bg+'">'+ico(t.ico,18)+'</div><div class="qit">'+t.t+'</div><div class="qid">'+t.d+'</div></div>').join('');

  // Conseil du jour (adapted to child age)
  const tips=DAILY_TIPS[tk]||DAILY_TIPS["0-6m"];
  const dayOfYear=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/86400000);
  const tip=tips[dayOfYear%tips.length];
  const ageLabel=am<6?'0-6 mois':am<12?'6-12 mois':am<24?'12-24 mois':am<36?'2-3 ans':'3-6 ans';
  document.getElementById('stTip').style.display='flex';
  document.getElementById('stTip').innerHTML=ico('lightbulb',16)+' Conseil du jour pour '+ch.firstName+' ('+ageLabel+')';
  document.getElementById('tipDay').innerHTML='<div class="tipcard"><div class="tci">'+ico('sparkle',18)+'</div><div style="flex:1"><div class="tct">'+tip.t+'</div><div class="tcx">'+tip.x+'</div></div></div>';

  // Citation inspirante du jour (pseudo-random based on date seed)
  const dateSeed=new Date().getFullYear()*1000+dayOfYear;
  const quoteIdx=((dateSeed*2654435761)>>>0)%PARENT_QUOTES.length;
  const quote=PARENT_QUOTES[quoteIdx];
  document.getElementById('homeQuote').innerHTML='<div class="quotecard" style="margin:0"><div class="qi-ico">'+ico('heart',18)+'</div><div style="flex:1"><p class="qt">\u00AB '+quote.q+' \u00BB</p>'+(quote.a?'<p class="qa">\u2014 '+quote.a+'</p>':'')+'</div></div>';

}

// ============= AGENDA =============
function exParse(e){if(!e)return {};if(e._ex)return e._ex;if(!e.extras){e._ex={};return e._ex}try{e._ex=typeof e.extras==='string'?JSON.parse(e.extras):(e.extras||{})}catch(err){e._ex={}}return e._ex||{}}
function expandRec(list){
  const out=[];
  const today=new Date();today.setHours(0,0,0,0);
  const horizon=new Date(today);horizon.setMonth(horizon.getMonth()+6);
  list.forEach(e=>{
    out.push(e);
    const ex=exParse(e);
    if(!ex.recurrence)return;
    let d=new Date(e.date+'T00:00:00');
    let count=0;
    const max=ex.recurrence==='weekly'?26:(ex.recurrence==='biweekly'?13:(ex.recurrence==='monthly'?6:3));
    while(count<max){
      if(ex.recurrence==='weekly')d.setDate(d.getDate()+7);
      else if(ex.recurrence==='biweekly')d.setDate(d.getDate()+14);
      else if(ex.recurrence==='monthly')d.setMonth(d.getMonth()+1);
      else if(ex.recurrence==='yearly')d.setFullYear(d.getFullYear()+1);
      else break;
      if(d>horizon)break;
      out.push(Object.assign({},e,{date:d.toISOString().slice(0,10),_virt:true,_parentId:e.id,id:e.id+'__r'+count,_ex:ex}));
      count++;
    }
  });
  return out;
}
async function loadAgenda(){
  if(!S.cp)return;
  const p=await api('/api/parents/'+S.cp.id);
  childSel('agsel',p.children,async id=>{
    S.sel=id;
    const ch=p.children.find(x=>x.id===id);if(ch)S.childAge=ageM(ch.birthDate);
    const[ag,vc]=await Promise.all([api('/api/children/'+id+'/agenda'),api('/api/children/'+id+'/vaccines')]);
    ag.forEach(exParse);vc.forEach(exParse);
    S.ag=ag;S.vc=vc;
    renderAgTabs();renderAgContent();
  });
}
function renderAgTabs(){
  const tabs=[['upcoming','A venir','cal'],['calendar','Calendrier','cal'],['vaccines','Vaccins','syringe'],['notes','Notes','note']];
  document.getElementById('agTabs').innerHTML=tabs.map(([k,l])=>'<button class="ag-tab'+(S.agTab===k?' on':'')+'" onclick="swAgTab(\''+k+'\')">'+l+'</button>').join('');
}
window.swAgTab=function(k){S.agTab=k;renderAgTabs();renderAgContent()}

function renderAgContent(){
  const c=document.getElementById('agContent');
  if(S.agTab==='upcoming'){
    const today=new Date().toISOString().slice(0,10);
    const exp=expandRec(S.ag);
    const upc=exp.filter(e=>e.date>=today&&!e.completed).sort((a,b)=>(a.date+(a.time||'')).localeCompare(b.date+(b.time||'')));
    const vacUp=S.vc.filter(v=>v.status!=='done').slice(0,5);
    let h='';
    if(!upc.length&&!vacUp.length){h='<div style="text-align:center;padding:40px 20px"><p style="font-size:13px;color:var(--tx2)">Rien de prévu</p><button class="btn bp mt" onclick="openAddAg()">+ Nouvel événement</button></div>';}
    else{
      if(vacUp.length){h+='<div class="stl">'+ico('syringe',16)+' Prochains vaccins</div>';h+=vacUp.slice(0,3).map(v=>vcCard(v)).join('')}
      if(upc.length){h+='<div class="stl">'+ico('cal',16)+' Prochains événements</div>';h+=upc.map(e=>evCard(e)).join('')}
    }
    c.innerHTML=h;
  }else if(S.agTab==='calendar'){
    if(!S.calMonth)S.calMonth=new Date().toISOString().slice(0,7);
    c.innerHTML=renderCalendar();
  }else if(S.agTab==='vaccines'){
    const done=S.vc.filter(v=>v.status==='done'),upc=S.vc.filter(v=>v.status!=='done');
    const tot=S.vc.length,pct=tot?Math.round(done.length/tot*100):0;
    let h='<div class="pillstats"><div class="pillstat"><div class="psi" style="background:var(--mt);color:var(--mt3)">'+ico('check',18)+'</div><div><div class="psn">'+done.length+'/'+tot+'</div><div class="psl">Vaccins faits</div></div></div><div class="pillstat"><div class="psi" style="background:var(--pk);color:var(--pk3)">'+ico('bell',18)+'</div><div><div class="psn">'+upc.length+'</div><div class="psl">A venir</div></div></div></div>';
    if(upc.length){h+='<div class="stl">A venir</div>';h+=upc.map(v=>vcCard(v)).join('')}
    if(done.length){h+='<div class="stl">Déjà faits</div>';h+=done.map(v=>vcCard(v)).join('')}
    h+='<div class="px mt"><button class="btn bs bw bsm" onclick="openAddVc()">+ Ajouter un vaccin</button></div>';
    c.innerHTML=h;
  }else if(S.agTab==='notes'){
    const notes=S.ag.filter(e=>e.category==='note').sort((a,b)=>b.date.localeCompare(a.date));
    let h='';
    if(!notes.length)h='<div style="text-align:center;padding:40px 20px"><p style="font-size:13px;color:var(--tx2)">Aucune note pour le moment</p><button class="btn bp mt" onclick="openAddAg(\'note\')">+ Première note</button></div>';
    else h=notes.map(e=>evCard(e)).join('')+'<div class="px mt"><button class="btn bs bw bsm" onclick="openAddAg(\'note\')">+ Nouvelle note</button></div>';
    c.innerHTML=h;
  }
}

function evExtrasHtml(e,full){
  const ex=exParse(e);
  if(!ex||!Object.keys(ex).length)return '';
  const chips=[];
  if(ex.location)chips.push('<span>'+ico('pin',10)+ex.location+'</span>');
  if(ex.practitioner)chips.push('<span>'+ico('user',10)+ex.practitioner+'</span>');
  if(ex.phone)chips.push('<span>'+ico('bell',10)+ex.phone+'</span>');
  if(ex.accompaniedBy)chips.push('<span>'+ico('user',10)+'Avec: '+ex.accompaniedBy+'</span>');
  if(ex.recurrence){const rl={weekly:'Hebdo',biweekly:'Bi-hebdo',monthly:'Mensuel',yearly:'Annuel'};chips.push('<span style="background:var(--lv);color:var(--lv3)">'+ico('clock',10)+(rl[ex.recurrence]||ex.recurrence)+'</span>')}
  if(ex.reminderMinutes){const rml={15:'15 min',60:'1h',180:'3h',1440:'Veille',2880:'2 jours',10080:'1 semaine'};chips.push('<span>'+ico('bell',10)+'Rappel: '+(rml[ex.reminderMinutes]||(ex.reminderMinutes+' min'))+'</span>')}
  if(ex.dose)chips.push('<span>'+ico('droplet',10)+'Dose: '+ex.dose+'</span>');
  if(ex.frequency)chips.push('<span>'+ico('clock',10)+ex.frequency+'</span>');
  if(ex.durationDays)chips.push('<span>'+ex.durationDays+' jours</span>');
  if(ex.temperature)chips.push('<span>'+ico('heart',10)+ex.temperature+'&deg;C</span>');
  if(ex.symptoms)chips.push('<span>'+ex.symptoms+'</span>');
  if(ex.bedtime||ex.wakeup){const q={great:'Excellente',good:'Bonne',ok:'Correcte',bad:'Difficile',very_bad:'Tres difficile'};chips.push('<span>'+ico('moon',10)+(ex.bedtime||'?')+' - '+(ex.wakeup||'?')+(ex.quality?' ('+(q[ex.quality]||ex.quality)+')':'')+'</span>')}
  if(ex.mealType){const mt={breakfast:'Petit-dej',lunch:'Déjeuner',snack:'Goûter',dinner:'Dîner'};chips.push('<span>'+ico('utensils',10)+(mt[ex.mealType]||ex.mealType)+'</span>')}
  if(ex.newFood)chips.push('<span>'+ico('sparkle',10)+'Nouveau: '+ex.newFood+'</span>');
  if(ex.mood){const ml={radieux:'Rayonnant',content:'Content',neutre:'Neutre',grognon:'Grognon',triste:'Triste',fatigue:'Fatigué'};chips.push('<span>'+ico('smile',10)+(ml[ex.mood]||ex.mood)+'</span>')}
  if(ex.schoolInfo)chips.push('<span>'+ex.schoolInfo+'</span>');
  if(ex.boosterDate)chips.push('<span>'+ico('syringe',10)+'Rappel le '+fmt(ex.boosterDate)+'</span>');
  let h=chips.length?'<div class="ev-extra">'+chips.join('')+'</div>':'';
  if(full&&ex.checklist&&ex.checklist.length)h+='<ul class="ev-cl">'+ex.checklist.map(it=>'<li>'+it+'</li>').join('')+'</ul>';
  if(full&&ex.photo)h+='<img class="ev-photo" src="'+ex.photo+'">';
  return h;
}
function evCard(e){
  const d=new Date(e.date+'T00:00:00'),cat=CAT[e.category]||CAT.note;
  const done=e.completed?' done':'';
  const ex=exParse(e);
  const recBadge=ex.recurrence&&e._virt?'<span class="recbadge">RECURRENT</span>':'';
  const chkDisabled=e._virt?'':'';
  const chkClick=e._virt?'':'onclick="event.stopPropagation();toggleAg(\''+e.id+'\','+(!e.completed)+')"';
  return '<div class="ev'+done+'"><div class="evd"><div class="evday">'+d.getDate()+'</div><div class="evmo">'+MONTHS_SHORT[d.getMonth()]+'</div></div><div class="evb"><div class="evt">'+e.title+recBadge+'</div>'+(e.content?'<div class="evx">'+e.content+'</div>':'')+'<div class="evmeta"><span class="catp cat-'+e.category+'">'+ico(cat.i,10)+' '+cat.l+'</span>'+(e.time?'<span style="font-size:10px;color:var(--tx3);font-weight:600">'+e.time+'</span>':'')+'</div>'+evExtrasHtml(e,true)+'</div><div class="ev-chk'+(e.completed?' done':'')+'" '+chkClick+'>'+(e.completed?ico('check',12):'')+'</div></div>';
}
function vcCard(v){
  const cls=v.status==='done'?'done':(daysUntil(v.recommendedDate)<0?'overdue':'upcoming');
  const meta=v.status==='done'?('Fait le '+fmt(v.givenDate)):(v.recommendedAge+' - '+relDate(v.recommendedDate));
  const iconName=v.status==='done'?'check':'syringe';
  return '<div class="vc '+cls+'" onclick="openVcDetail(\''+v.id+'\')"><div class="vci">'+ico(iconName,16)+'</div><div class="vcb"><div class="vcn">'+v.name+'</div><div class="vcm">'+meta+'</div></div></div>';
}

function renderCalendar(){
  const [y,m]=S.calMonth.split('-').map(Number);
  const first=new Date(y,m-1,1),last=new Date(y,m,0);
  const startDay=(first.getDay()+6)%7; // Monday-first (0=Mon)
  const daysInMo=last.getDate();
  // Events for this month
  const monthKey=S.calMonth;
  const evMap={};
  const agExp=expandRec(S.ag);
  agExp.forEach(e=>{if(e.date.startsWith(monthKey)){const k=e.date.slice(8);(evMap[k]=evMap[k]||[]).push({cat:e.category,kind:'e',data:e})}});
  S.vc.forEach(v=>{if(v.status!=='done'&&v.recommendedDate&&v.recommendedDate.startsWith(monthKey)){const k=v.recommendedDate.slice(8);(evMap[k]=evMap[k]||[]).push({cat:'vaccine',kind:'v',data:v})}});
  const today=new Date().toISOString().slice(0,10);
  const dayH=['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  let grid='';
  for(const d of dayH)grid+='<div class="cal-dh">'+d+'</div>';
  for(let i=0;i<startDay;i++)grid+='<div class="cal-d empty"></div>';
  for(let d=1;d<=daysInMo;d++){
    const dd=String(d).padStart(2,'0'),iso=monthKey+'-'+dd;
    const ev=evMap[dd]||[],isToday=iso===today;
    let dot='';if(ev.length)dot='<div class="cal-dt">'+ev.slice(0,3).map(e=>{const col=(CAT[e.cat]&&CAT[e.cat].c)||'var(--pk3)';return '<span style="background:'+col+'"></span>'}).join('')+'</div>';
    grid+='<div class="cal-d'+(isToday?' today':'')+(ev.length?' has':'')+'" onclick="selDay(\''+iso+'\')">'+d+dot+'</div>';
  }
  const [py,pm]=[m===1?y-1:y,m===1?12:m-1],[ny,nm]=[m===12?y+1:y,m===12?1:m+1];
  let h='<div class="cal"><div class="cal-hd"><button onclick="navCal(\''+py+'-'+String(pm).padStart(2,'0')+'\')">'+ico('chevL',14)+'</button><div class="cmo">'+MONTHS[m-1]+' '+y+'</div><button onclick="navCal(\''+ny+'-'+String(nm).padStart(2,'0')+'\')">'+ico('chevR',14)+'</button></div><div class="cal-g">'+grid+'</div></div>';
  // Events list for the month
  const monthEvents=agExp.filter(e=>e.date.startsWith(monthKey)).sort((a,b)=>a.date.localeCompare(b.date));
  const monthVac=S.vc.filter(v=>v.status!=='done'&&v.recommendedDate&&v.recommendedDate.startsWith(monthKey));
  if(monthVac.length){h+='<div class="stl">'+ico('syringe',14)+' Vaccins ce mois-ci</div>';h+=monthVac.map(vcCard).join('')}
  if(monthEvents.length){h+='<div class="stl">Evenements ce mois-ci</div>';h+=monthEvents.map(evCard).join('')}
  if(!monthVac.length&&!monthEvents.length)h+='<div style="text-align:center;padding:30px;color:var(--tx3);font-size:12px">Aucun événement ce mois-ci</div>';
  return h;
}
window.navCal=function(k){S.calMonth=k;renderAgContent()}
window.selDay=function(d){
  const dayEvs=expandRec(S.ag).filter(e=>e.date===d).sort((a,b)=>(a.time||'').localeCompare(b.time||''));
  const dayVcs=S.vc.filter(v=>v.status!=='done'&&v.recommendedDate===d);
  const dateObj=new Date(d);
  const label=dateObj.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const title=label.charAt(0).toUpperCase()+label.slice(1);
  let h='<h3>'+title+'</h3>';
  if(!dayEvs.length&&!dayVcs.length){
    h+='<div class="fg" style="text-align:center;padding:10px 20px"><p style="font-size:12px;color:var(--tx3);padding:14px 0">Rien de prevu ce jour</p></div>';
  } else {
    if(dayVcs.length){
      h+='<div style="padding:0 20px"><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin:10px 0 6px;letter-spacing:.04em">Vaccins</div>';
      h+=dayVcs.map(v=>'<div class="vc upcoming" style="margin:0 0 8px" onclick="closeMdl();openVcDetail(\''+v.id+'\')"><div class="vci">'+ico('syringe',16)+'</div><div class="vcb"><div class="vcn">'+v.name+'</div><div class="vcm">'+(v.recommendedAge||'')+'</div></div></div>').join('');
      h+='</div>';
    }
    if(dayEvs.length){
      h+='<div style="padding:0 20px"><div style="font-size:10px;font-weight:700;color:var(--tx3);text-transform:uppercase;margin:10px 0 6px;letter-spacing:.04em">Evenements</div>';
      h+=dayEvs.map(e=>{
        const cat=CAT[e.category]||CAT.note;
        const ex=exParse(e);
        const recBadge=ex.recurrence&&e._virt?'<span class="recbadge">RECURRENT</span>':'';
        return '<div class="ev" style="margin:0 0 8px;border-left-color:'+cat.c+'"><div class="evb"><div class="evt">'+e.title+recBadge+'</div>'+(e.content?'<div class="evx">'+e.content+'</div>':'')+'<div class="evmeta"><span class="catp cat-'+e.category+'">'+ico(cat.i,10)+' '+cat.l+'</span>'+(e.time?'<span style="font-size:10px;color:var(--tx3);font-weight:600">'+e.time+'</span>':'')+'</div>'+evExtrasHtml(e,true)+'</div></div>';
      }).join('');
      h+='</div>';
    }
  }
  h+='<div class="fg"><button class="btn bp bw" onclick="closeMdl();openAddAg(null,\''+d+'\')">+ Ajouter un événement</button></div>';
  openMdl(h);
}

window.toggleAg=async function(id,completed){await api('/api/agenda/'+id,'PUT',{completed});S.ag=await api('/api/children/'+S.sel+'/agenda');renderAgContent()}
window.openVcDetail=function(id){const v=S.vc.find(x=>x.id===id);if(!v)return;const isDone=v.status==='done';openMdl('<h3>'+v.name+'</h3><div class="fg"><div style="font-size:11px;color:var(--tx2);line-height:1.6">Age recommande : <strong>'+(v.recommendedAge||'--')+'</strong><br>Date recommandée : <strong>'+(v.recommendedDate?fmt(v.recommendedDate):'--')+'</strong>'+(v.givenDate?'<br>Fait le : <strong>'+fmt(v.givenDate)+'</strong>':'')+'</div></div>'+(!isDone?'<div class="fg"><label class="fl">Date d\'administration</label><input class="fi" id="vc-gd" type="date" value="'+(new Date().toISOString().slice(0,10))+'"></div><div class="fg"><button class="btn bp bw" onclick="markVcDone(\''+id+'\')">Marquer comme fait</button></div>':'<div class="fg"><button class="btn bs bw" onclick="resetVc(\''+id+'\')">Marquer comme non fait</button></div>')+'<div class="fg"><button class="btn bs bw" style="color:var(--rs3)" onclick="delVc(\''+id+'\')">Supprimer</button></div>')}
window.markVcDone=async function(id){const gd=document.getElementById('vc-gd').value;await api('/api/vaccines/'+id,'PUT',{givenDate:gd,status:'done',reminderDate:null});closeMdl();loadAgenda();loadHome()}
window.resetVc=async function(id){await api('/api/vaccines/'+id,'PUT',{givenDate:null,status:'upcoming'});closeMdl();loadAgenda();loadHome()}
window.delVc=async function(id){await api('/api/vaccines/'+id,'DELETE');closeMdl();loadAgenda();loadHome()}

// ============= MILESTONES (sorted newest first by server) =============
async function loadMs(){if(!S.cp)return;const p=await api('/api/parents/'+S.cp.id);childSel('mssel',p.children,async id=>{S.sel=id;S.ms=await api('/api/children/'+id+'/milestones');renderMs()})}
function renderMs(){const c=document.getElementById('mslist');if(!S.ms.length){c.innerHTML='<div style="text-align:center;padding:40px 20px"><p style="font-size:13px;color:var(--tx2)">Aucune étape notee</p></div>';return}c.innerHTML=S.ms.map(m=>'<div class="msi"><div class="msd" style="background:'+( MB[m.type]||MB.other)+'">'+ico(MI[m.type]||'pin',16)+'</div><div style="flex:1"><div class="mslb">'+m.label+'</div><div class="msm">'+(m.ageInMonths?'A '+m.ageInMonths+' mois':'')+(m.date?' - '+fmt(m.date):'')+(m.notes?' - '+m.notes:'')+'</div></div><span class="badge" style="background:'+(MB[m.type]||MB.other)+';color:var(--tx)">'+(ML[m.type]||'Autre')+'</span></div>').join('')}

// ============= GROWTH & SLEEP =============
async function loadGr(){if(!S.cp)return;const p=await api('/api/parents/'+S.cp.id);childSel('grsel',p.children,async id=>{S.sel=id;const[g,sl]=await Promise.all([api('/api/children/'+id+'/growth'),api('/api/children/'+id+'/sleep')]);S.gr=g;S.sl=sl;const ch=p.children.find(x=>x.id===id);if(ch)S.childAge=ageM(ch.birthDate);renderSleep();renderChTabs();renderChart()})}
function renderSleep(){const g=document.getElementById('slg'),l=S.sl.slice(0,7).reverse();if(!l.length){g.innerHTML='<div style="grid-column:span 7;text-align:center;padding:16px;color:var(--tx3);font-size:12px">Aucune donnee</div>';return}g.innerHTML=l.map(r=>{const d=new Date(r.date),t=((r.nightHours||0)+(r.napHours||0)).toFixed(1);return'<div class="sld"><div class="sdd">'+DAYS[d.getDay()]+'</div><div class="sdh">'+t+'</div><div class="sdq" style="background:'+(QC[r.quality]||'var(--tx4)')+'"></div></div>'}).join('')}
function renderChTabs(){const showHead=S.childAge<=12;if(S.cht==='head'&&!showHead)S.cht='weight';document.getElementById('chtabs').innerHTML='<button class="chtab'+(S.cht==='weight'?' on':'')+'" onclick="swCh(\'weight\',this)">Poids</button><button class="chtab'+(S.cht==='height'?' on':'')+'" onclick="swCh(\'height\',this)">Taille</button>'+(showHead?'<button class="chtab'+(S.cht==='head'?' on':'')+'" onclick="swCh(\'head\',this)">Perim. cranien</button>':'')}
window.swCh=function(t,btn){S.cht=t;document.querySelectorAll('.chtab').forEach(b=>b.classList.remove('on'));btn.classList.add('on');renderChart()}
function renderChart(){const svg=document.getElementById('chsvg');if(S.gr.length<2){svg.innerHTML='<text x="50%" y="50%" text-anchor="middle" fill="#ADA39A" font-family="Inter" font-size="13">Pas assez de donnees</text>';return}const k=S.cht==='weight'?'weightKg':S.cht==='height'?'heightCm':'headCircCm';const u=S.cht==='weight'?'kg':'cm';const cl=S.cht==='weight'?'#E8956A':S.cht==='height'?'#85C1E9':'#B8A9C9';const d=S.gr.filter(r=>r[k]!=null);if(d.length<2){svg.innerHTML='';return}const v=d.map(r=>r[k]),mn=Math.min(...v)*.95,mx=Math.max(...v)*1.05;const w=svg.clientWidth||380,h=200,pL=40,pR=10,pT=10,pB=30,cW=w-pL-pR,cH=h-pT-pB;const pts=d.map((r,i)=>({x:pL+(i/(d.length-1))*cW,y:pT+cH-((r[k]-mn)/(mx-mn))*cH}));const pD=pts.map((p,i)=>(i===0?'M':'L')+' '+p.x+' '+p.y).join(' ');const aD=pD+' L '+pts[pts.length-1].x+' '+(pT+cH)+' L '+pts[0].x+' '+(pT+cH)+' Z';let yL='';for(let i=0;i<=4;i++){const val=mn+(mx-mn)*(i/4),y=pT+cH-(i/4)*cH;yL+='<text x="'+(pL-5)+'" y="'+(y+4)+'" text-anchor="end" fill="#ADA39A" font-size="10" font-family="Inter">'+val.toFixed(1)+'</text><line x1="'+pL+'" y1="'+y+'" x2="'+(pL+cW)+'" y2="'+y+'" stroke="#F0E0CC" stroke-width="0.5"/>'}const dots=pts.map(p=>'<circle cx="'+p.x+'" cy="'+p.y+'" r="3.5" fill="'+cl+'" stroke="white" stroke-width="2"/>').join('');svg.innerHTML='<defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="'+cl+'" stop-opacity="0.25"/><stop offset="100%" stop-color="'+cl+'" stop-opacity="0.02"/></linearGradient></defs>'+yL+'<path d="'+aD+'" fill="url(#ag)"/><path d="'+pD+'" fill="none" stroke="'+cl+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'+dots+'<text x="'+(w-pR)+'" y="'+(pT+14)+'" text-anchor="end" fill="'+cl+'" font-size="12" font-weight="700" font-family="Inter">'+v[v.length-1]+' '+u+'</text>'}

// ============= AGE SORT UTILITY =============
function ageStartMonths(s){
  if(!s)return 9999;
  const l=s.toLowerCase().replace(/[èé]/g,'e').trim();
  if(l.includes('tous'))return 9998;
  if(l.includes('règle'))return 9997;
  if(l.includes('1ere dent'))return 6;
  const dm=l.match(/des\s+(\d+)/);if(dm)return parseInt(dm[1]);
  const n=l.match(/^(\d+)/);if(!n)return 9990;
  const v=parseInt(n[1]);
  // "6m-" "18m-" → months
  if(l.match(/^\d+m-/))return v;
  // "0-6m" → months
  if(l.match(/^\d+-\d+m$/))return v;
  // "1-2a" → years
  if(l.match(/^\d+-\d+a$/))return v*12;
  // "X mois" or "X-Y mois" → months
  if(l.includes('mois'))return v;
  // "X-Y ans" or "X ans" → years
  if(l.includes('ans'))return v*12;
  return 9990;
}
function ageEndMonths(s){
  if(!s)return 9999;
  const l=s.toLowerCase().replace(/[èé]/g,'e').trim();
  if(l.includes('tous')||l.includes('règle'))return 9999;
  if(l.match(/mois\s*\+/))return 72;
  if(l.includes('1ere dent'))return 6;
  // "Xm-Y ans" → Y*12
  const ma=l.match(/\d+m-(\d+)\s*ans/);if(ma)return parseInt(ma[1])*12;
  // "X mois - Y ans"
  const moa=l.match(/mois\s*-\s*(\d+)\s*ans/);if(moa)return parseInt(moa[1])*12;
  // "X-Ym"
  const sm=l.match(/\d+-(\d+)m$/);if(sm)return parseInt(sm[1]);
  // "X-Ya"
  const sa=l.match(/\d+-(\d+)a$/);if(sa)return parseInt(sa[1])*12;
  // "X-Y mois"
  const mo=l.match(/\d+-(\d+)\s*mois/);if(mo)return parseInt(mo[1]);
  // "X-Y ans"
  const an=l.match(/\d+-(\d+)\s*ans/);if(an)return parseInt(an[1])*12;
  return 9999;
}
function sortAges(ages){return [...ages].sort((a,b)=>{const d=ageStartMonths(a)-ageStartMonths(b);return d!==0?d:ageEndMonths(a)-ageEndMonths(b)})}

// ============= GUIDE =============
async function loadGuide(){
  await refreshContentIfStale();
  try{
  // Repères: same card-style list as guide
  document.getElementById('devref').innerHTML=Object.entries(DEV).map(([k,d])=>{try{const stepCount=d.ages?Object.values(d.ages).flat().length:0;return '<div class="gc" onclick="showDevDetail(\''+k+'\')"><div class="gci" style="background:'+(d.bg||'#f0f0f0')+'"><span style="color:'+(d.c||'#666')+'">'+ico(d.ico,20)+'</span></div><div style="flex:1"><div class="gct">'+(d.t||k)+'</div><div class="gcd">'+stepCount+' étapes</div></div><span style="color:var(--tx4)">'+I.chevR+'</span></div>'}catch(e){console.warn('[loadGuide] domain err',k,e);return ''}}).join('');
  document.getElementById('glist').innerHTML=Object.entries(GUIDE).map(([k,g])=>{try{return '<div class="gc" onclick="showGD(\''+k+'\')"><div class="gci" style="background:'+(g.bg||'#f0f0f0')+'"><span style="color:'+(g.c||'#666')+'">'+ico(g.ico,20)+'</span></div><div style="flex:1"><div class="gct">'+(g.t||k)+'</div><div class="gcd">'+(g.tips?g.tips.length:0)+' conseils bienveillants</div></div><span style="color:var(--tx4)">'+I.chevR+'</span></div>'}catch(e){console.warn('[loadGuide] guide err',k,e);return ''}}).join('')}catch(e){console.error('[loadGuide]',e)}}

// ============= AGE RANGE SLIDER (shared) =============
function ageSliderHtml(id,minM,maxM,color){
  const minV=Math.max(0,minM),maxV=Math.min(72,maxM);
  return '<div class="age-slider-wrap" style="padding:16px 20px 8px;--slider-color:'+color+'">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'+
      '<span id="'+id+'-label" style="font-size:13px;font-weight:700;color:var(--tx)">'+ageLabel(minV)+' — '+ageLabel(maxV)+'</span>'+
      '<span id="'+id+'-count" style="font-size:11px;color:var(--tx3);font-weight:600"></span>'+
    '</div>'+
    '<div class="age-slider" style="margin-bottom:8px">'+
      '<div class="sl-bg"></div>'+
      '<div class="sl-fill" id="'+id+'-track"></div>'+
      '<input type="range" id="'+id+'-min" min="0" max="72" step="1" value="'+minV+'" oninput="onAgeSlider(\''+id+'\')">'+
      '<input type="range" id="'+id+'-max" min="0" max="72" step="1" value="'+maxV+'" style="z-index:3" oninput="onAgeSlider(\''+id+'\')">'+
    '</div>'+
    '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--tx3);font-weight:600">'+
      '<span>Naissance</span><span>1 an</span><span>2 ans</span><span>3 ans</span><span>4 ans</span><span>5 ans</span><span>6 ans</span>'+
    '</div>'+
  '</div>';
}
function ageLabel(m){if(m===0)return'Naissance';if(m<12)return m+' mois';const y=Math.floor(m/12),r=m%12;return r>0?y+' an'+(y>1?'s':'')+' '+r+'m':y+' an'+(y>1?'s':'')}
function updateSliderTrack(id){
  const mn=parseInt(document.getElementById(id+'-min').value);
  const mx=parseInt(document.getElementById(id+'-max').value);
  const track=document.getElementById(id+'-track');
  // Use percentage positioning — browser handles thumb offset natively
  const pL=(mn/72)*100;
  const pR=(mx/72)*100;
  track.style.left=pL+'%';
  track.style.right=(100-pR)+'%';
  track.style.width='auto';
  document.getElementById(id+'-label').textContent=ageLabel(mn)+' — '+ageLabel(mx);
}

// ============= REPÈRES DETAIL (age slider) =============
window.showDevDetail=function(key){
  const d=DEV[key];if(!d)return;
  const allSteps=[];const ages=sortAges(Object.keys(d.ages));
  ages.forEach(a=>{(d.ages[a]||[]).forEach(s=>allSteps.push({...s,ageKey:a,startM:ageStartMonths(a),endM:ageEndMonths(a)}))});
  const childM=S.childAge||0;const defMin=Math.max(0,childM-3),defMax=Math.min(72,childM+12);

  document.getElementById('gdh').style.background=d.bg||'#f0f0f0';document.getElementById('gdh').style.color='var(--tx)';
  document.getElementById('gdh').innerHTML='<button class="back" onclick="go(\'guide\')" style="color:var(--tx)">'+ico('arrowL',14)+' Retour</button><div style="display:flex;align-items:center;gap:12px"><span style="color:'+(d.c||'#666')+'">'+ico(d.ico,28)+'</span><div><h2>'+d.t+'</h2><p class="ds">'+allSteps.length+' étapes</p></div></div>';

  document.getElementById('gdc').innerHTML=ageSliderHtml('dev-sl',defMin,defMax,d.c||'var(--primary)')+'<div id="dev-age-content"></div>';
  window._devSteps=allSteps;window._devColor=d.c;
  updateSliderTrack('dev-sl');
  filterDevBySlider();
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('p-guide-detail').classList.add('active');
  window.scrollTo(0,0)}

function filterDevBySlider(){
  const mn=parseInt(document.getElementById('dev-sl-min').value);
  const mx=parseInt(document.getElementById('dev-sl-max').value);
  const steps=window._devSteps.filter(s=>s.endM>=mn&&s.startM<=mx);
  const el=document.getElementById('dev-age-content');
  document.getElementById('dev-sl-count').textContent=steps.length+' étape'+(steps.length>1?'s':'');
  el.innerHTML=steps.map(s=>{const acts=Array.isArray(s.acts)?s.acts:(typeof s.acts==='string'?[s.acts]:[]);return '<div class="mcard"><div class="mca">'+s.ageKey+'</div><div class="mcl">'+(s.l||'')+'</div><div class="acts"><div class="acts-t">Activités & Jeux</div>'+acts.map(a=>'<div class="act">'+a+'</div>').join('')+'</div></div>'}).join('')||'<p style="padding:16px;font-size:13px;color:var(--tx3);text-align:center">Aucun repère pour cette tranche d\'âge</p>';
}

// ============= GUIDE DETAIL (age slider) =============
window.showGD=function(key){const g=GUIDE[key];if(!g)return;
  const childM=S.childAge||0;const defMin=Math.max(0,childM-3),defMax=Math.min(72,childM+12);

  document.getElementById('gdh').style.background=g.bg;document.getElementById('gdh').style.color='var(--tx)';
  document.getElementById('gdh').innerHTML='<button class="back" onclick="go(\'guide\')" style="color:var(--tx)">'+ico('arrowL',14)+' Retour</button><div style="display:flex;align-items:center;gap:12px"><span style="color:'+g.c+'">'+ico(g.ico,28)+'</span><div><h2>'+g.t+'</h2><p class="ds">'+g.tips.length+' conseils</p></div></div>';

  document.getElementById('gdc').innerHTML=ageSliderHtml('guide-sl',defMin,defMax,g.c||'var(--primary)')+'<div id="guide-age-content"></div>';
  window._guideTips=g.tips.map(t=>({...t,startM:ageStartMonths(t.a),endM:ageEndMonths(t.a)}));
  window._guideColor=g.c;window._guideBg=g.bg;window._guideKey=key;
  updateSliderTrack('guide-sl');
  filterGuideBySlider();
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('p-guide-detail').classList.add('active');
  window.scrollTo(0,0)}

function filterGuideBySlider(){
  const mn=parseInt(document.getElementById('guide-sl-min').value);
  const mx=parseInt(document.getElementById('guide-sl-max').value);
  const tips=window._guideTips.filter(t=>t.endM>=mn&&t.startM<=mx);
  const el=document.getElementById('guide-age-content');
  const c=window._guideColor,bg=window._guideBg;
  document.getElementById('guide-sl-count').textContent=tips.length+' conseil'+(tips.length>1?'s':'');
  el.innerHTML=tips.map(t=>'<div class="tip" style="border-left-color:'+c+'"><div class="tph"><span class="tpt">'+t.t+'</span><span class="badge" style="background:'+bg+';color:'+c+'">'+t.a+'</span></div><div class="tpx">'+t.x+'</div></div>').join('')||'<p style="padding:16px;font-size:13px;color:var(--tx3);text-align:center">Aucun conseil pour cette tranche d\'âge</p>';
}

// Unified slider handler
window.onAgeSlider=function(id){
  const minEl=document.getElementById(id+'-min'),maxEl=document.getElementById(id+'-max');
  let mn=parseInt(minEl.value),mx=parseInt(maxEl.value);
  if(mn>mx){const t=mn;mn=mx;mx=t;minEl.value=mn;maxEl.value=mx}
  updateSliderTrack(id);
  if(id==='guide-sl')filterGuideBySlider();
  else if(id==='dev-sl')filterDevBySlider();
}

// ============= PROFILE =============
const CHILD_COLORS=['#7C5CFC','#E8956A','#4CAF7D','#4A90D9','#D46B6B','#C4A882','#8B6DB5','#FFB74D'];

async function loadProf(){
  if(!S.cp)return;
  const p=await api('/api/parents/'+S.cp.id);

  // Profile card - large avatar + Modifier button
  const curAv=p.avatar||'parent';
  document.getElementById('pi').innerHTML='<div class="prc" style="padding:36px 28px 28px;"><div style="width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,.25);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;border:3px solid rgba(255,255,255,.3)"><span style="width:80px;height:80px;display:flex">'+avSvg(curAv)+'</span></div><div class="prn">'+p.firstName+' '+p.lastName+'</div><div class="pre">'+p.email+'</div><button onclick="openProfileEdit()" style="margin-top:16px;padding:10px 28px;border-radius:24px;background:rgba(255,255,255,.2);backdrop-filter:blur(6px);border:1.5px solid rgba(255,255,255,.3);color:#fff;font-family:inherit;font-size:12px;font-weight:800;cursor:pointer;transition:all .2s ease">Modifier le profil</button></div>';

  // Citation inspirante (pseudo-random, different from home)
  const dayOfYear=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/86400000);
  const profSeed=new Date().getFullYear()*1000+dayOfYear+42;
  const quoteIdx=((profSeed*2654435761)>>>0)%PARENT_QUOTES.length;
  const quote=PARENT_QUOTES[quoteIdx];
  document.getElementById('profQuote').innerHTML='<div class="quotecard"><div class="qi-ico">'+ico('heart',18)+'</div><div style="flex:1"><p class="qt">\u00AB '+quote.q+' \u00BB</p>'+(quote.a?'<p class="qa">'+quote.a+'</p>':'')+'</div></div>';

  // Children list
  document.getElementById('cl').innerHTML=p.children.map((c,i)=>{
    const col=CHILD_COLORS[i%CHILD_COLORS.length];
    return '<div class="cli" onclick="openChildHome(\''+c.id+'\')"><div style="width:38px;height:38px;border-radius:50%;background:'+col+'20;border:2px solid '+col+';display:flex;align-items:center;justify-content:center">'+avSvg(c.photoUrl||'lion')+'</div><div style="flex:1"><div style="font-size:14px;font-weight:700">'+c.firstName+'</div><div style="font-size:11px;color:var(--tx2)">'+calcAge(c.birthDate)+'</div></div><button class="cli-det" onclick="event.stopPropagation();showCD(\''+c.id+'\')" title="Details">'+ico('chevR',14)+'</button></div>'
  }).join('');

  // Multi-child family calendar
  if(p.children.length>0){
    document.getElementById('calTitle').style.display='flex';
    S._profChildren=p.children;
    S._calMonth=S._calMonth||new Date();
    await renderFamilyCalendar(p.children);
  }else{
    document.getElementById('calTitle').style.display='none';
    document.getElementById('profCalendar').innerHTML='';
  }
}

// ============= FAMILY CALENDAR =============
async function renderFamilyCalendar(children){
  const container=document.getElementById('profCalendar');
  if(!container)return;
  const month=S._calMonth||new Date();
  const y=month.getFullYear(),m=month.getMonth();
  const firstDay=new Date(y,m,1).getDay();
  const daysInMonth=new Date(y,m+1,0).getDate();
  const today=new Date();today.setHours(0,0,0,0);

  // Load events for all children
  const allEvents=[];
  for(let i=0;i<children.length;i++){
    const c=children[i];
    const col=CHILD_COLORS[i%CHILD_COLORS.length];
    try{
      const evts=await api('/api/children/'+c.id+'/agenda');
      evts.forEach(e=>{allEvents.push({...e,childName:c.firstName,childColor:col,childIdx:i})});
    }catch(e){}
  }

  // Group events by date
  const evByDate={};
  allEvents.forEach(e=>{
    const d=e.date;if(!d)return;
    if(!evByDate[d])evByDate[d]=[];
    evByDate[d].push(e);
  });

  // Legend
  const legend=children.map((c,i)=>{
    const col=CHILD_COLORS[i%CHILD_COLORS.length];
    return '<div class="fcal-legend-item"><span class="fcal-dot" style="background:'+col+'"></span>'+c.firstName+'</div>';
  }).join('');

  // Navigation
  const nav='<div class="fcal-nav"><button onclick="calNav(-1)">'+ico('chevL',16)+'</button><div class="fcal-month">'+MONTHS[m]+' '+y+'</div><button onclick="calNav(1)">'+ico('chevR',16)+'</button></div>';

  // Day headers (Mon-Sun, French style)
  const dayHeaders=['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  let grid=dayHeaders.map(d=>'<div class="fcal-dh">'+d+'</div>').join('');

  // Offset for first day (convert Sunday=0 to Monday-based)
  const offset=(firstDay+6)%7;

  // Previous month days
  const prevDays=new Date(y,m,0).getDate();
  for(let i=offset-1;i>=0;i--){
    grid+='<div class="fcal-d other">'+(prevDays-i)+'</div>';
  }

  // Current month days
  for(let d=1;d<=daysInMonth;d++){
    const dateStr=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
    const isToday=(d===today.getDate()&&m===today.getMonth()&&y===today.getFullYear());
    const dayEvts=evByDate[dateStr]||[];
    const dots=dayEvts.length>0?'<div class="fcal-dots">'+dayEvts.slice(0,3).map(e=>'<span style="background:'+e.childColor+'"></span>').join('')+'</div>':'';
    grid+='<div class="fcal-d'+(isToday?' today':'')+'" onclick="showCalDay(\''+dateStr+'\')" style="cursor:pointer">'+d+dots+'</div>';
  }

  // Next month days
  const totalCells=offset+daysInMonth;
  const remaining=totalCells%7===0?0:7-totalCells%7;
  for(let i=1;i<=remaining;i++){
    grid+='<div class="fcal-d other">'+i+'</div>';
  }

  // Events for today
  const todayStr=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  const todayEvts=evByDate[todayStr]||[];
  let eventsHtml='';
  if(todayEvts.length){
    eventsHtml='<div class="fcal-events"><div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:4px;">Aujourd\'hui</div>'+todayEvts.map(e=>'<div class="fcal-ev"><span class="fce-dot" style="background:'+e.childColor+'"></span><span class="fce-name">'+e.childName+'</span><span class="fce-title">'+escHtml(e.title)+'</span></div>').join('')+'</div>';
  }

  container.innerHTML='<div class="fcal">'+legend+'<div style="height:8px"></div>'+nav+'<div class="fcal-grid">'+grid+'</div>'+eventsHtml+'<div id="calDayEvents"></div></div>';
}

window.calNav=function(dir){
  const d=S._calMonth||new Date();
  d.setMonth(d.getMonth()+dir);
  S._calMonth=d;
  if(S._profChildren)renderFamilyCalendar(S._profChildren);
}

window.showCalDay=async function(dateStr){
  const evContainer=document.getElementById('calDayEvents');
  if(!evContainer)return;
  const children=S._profChildren||[];
  const allEvents=[];
  for(let i=0;i<children.length;i++){
    const c=children[i];
    const col=CHILD_COLORS[i%CHILD_COLORS.length];
    try{
      const evts=await api('/api/children/'+c.id+'/agenda');
      evts.filter(e=>e.date===dateStr).forEach(e=>{allEvents.push({...e,childName:c.firstName,childColor:col})});
    }catch(e){}
  }
  const d=new Date(dateStr+'T12:00:00');
  const label=d.getDate()+' '+MONTHS_SHORT[d.getMonth()];
  const addBtn='<button class="btn bp bw" onclick="openAddCalEvent(\''+dateStr+'\')" style="width:100%;margin-top:8px;font-size:12px;padding:8px;">+ Ajouter un événement</button>';
  if(allEvents.length===0){
    evContainer.innerHTML='<div class="fcal-events"><div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:4px;">'+label+'</div><div style="font-size:12px;color:var(--tx3);padding:4px 0;">Aucun événement ce jour</div>'+addBtn+'</div>';
  }else{
    evContainer.innerHTML='<div class="fcal-events"><div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:4px;">'+label+'</div>'+allEvents.map(e=>{
      const cat=CAT[e.category]||CAT.other;
      return '<div class="fcal-ev"><span class="fce-dot" style="background:'+e.childColor+'"></span><span class="fce-name">'+e.childName+'</span><span class="fce-title">'+cat.l+' - '+escHtml(e.title)+(e.time?' à '+e.time:'')+'</span></div>';
    }).join('')+addBtn+'</div>';
  }
}

window.openAddCalEvent=function(dateStr){
  const children=S._profChildren||[];
  if(!children.length){showToast('Ajoutez un enfant d\'abord');return;}
  const d=new Date(dateStr+'T12:00:00');
  const label=d.getDate()+' '+MONTHS[d.getMonth()]+' '+d.getFullYear();
  const childOpts=children.map((c,i)=>'<option value="'+c.id+'">'+escHtml(c.firstName)+'</option>').join('');
  const catOpts=Object.entries(CAT).map(([k,v])=>'<option value="'+k+'">'+v.l+'</option>').join('');
  openMdl(
    '<h3>Nouvel événement</h3>'+
    '<div style="font-size:12px;color:var(--tx2);margin-bottom:12px;">'+label+'</div>'+
    '<div class="fg"><label class="fl">Enfant</label><select class="fsl" id="nce-child">'+childOpts+'</select></div>'+
    '<div class="fg"><label class="fl">Catégorie</label><select class="fsl" id="nce-cat" onchange="updateCalTitleSug()">'+catOpts+'</select></div>'+
    '<div class="fg"><label class="fl">Titre</label><input class="fi" id="nce-title" placeholder="Ex: RDV pédiatre" list="nce-sug"><datalist id="nce-sug"></datalist></div>'+
    '<div class="fg"><label class="fl">Heure (optionnel)</label><input class="fi" id="nce-time" type="time"></div>'+
    '<div class="fg"><label class="fl">Notes (optionnel)</label><textarea class="fi" id="nce-notes" rows="2" placeholder="Détails, rappel..." style="resize:vertical;min-height:50px;"></textarea></div>'+
    '<div class="fg"><button class="btn bp bw" onclick="submitCalEvent(\''+dateStr+'\')">Ajouter</button></div>'
  );
  updateCalTitleSug();
}

window.updateCalTitleSug=function(){
  const cat=document.getElementById('nce-cat').value;
  const dl=document.getElementById('nce-sug');
  if(!dl)return;
  const sugs=TITLE_SUG[cat]||[];
  dl.innerHTML=sugs.map(s=>'<option value="'+s+'">').join('');
}

window.submitCalEvent=async function(dateStr){
  const childId=document.getElementById('nce-child').value;
  const category=document.getElementById('nce-cat').value;
  const title=document.getElementById('nce-title').value.trim();
  const time=document.getElementById('nce-time').value||null;
  const content=document.getElementById('nce-notes').value.trim()||null;
  if(!title){showToast('Veuillez entrer un titre');return;}
  try{
    await api('/api/children/'+childId+'/agenda','POST',{date:dateStr,time,category,title,content});
    closeMdl();
    showToast('Événement ajouté !');
    if(S._profChildren)await renderFamilyCalendar(S._profChildren);
    showCalDay(dateStr);
  }catch(e){showToast('Erreur lors de l\'ajout');}
}

window.openChildHome=function(id){S.sel=id;go('home')}

// ============= AVATAR PICKER =============
window.openProfileEdit=async function(){
  if(!S.cp)return;
  const p=await api('/api/parents/'+S.cp.id);
  const curAv=p.avatar||'parent';
  const overlay=document.createElement('div');
  overlay.id='profileEditOverlay';
  overlay.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(45,42,38,.4);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:9999;display:flex;align-items:flex-end;justify-content:center';
  const panel=document.createElement('div');
  panel.style.cssText='background:var(--bg);border-radius:24px 24px 0 0;padding:24px 20px 36px;width:100%;max-width:480px;max-height:85vh;overflow-y:auto;animation:su .35s cubic-bezier(.4,0,.2,1)';
  panel.innerHTML='<div style="width:40px;height:4px;background:rgba(124,92,252,.2);border-radius:2px;margin:0 auto 16px"></div>'+
    '<h3 style="font-size:18px;font-weight:900;margin-bottom:20px;letter-spacing:-.01em">Modifier le profil</h3>'+
    // Avatar selection
    '<div style="text-align:center;margin-bottom:20px"><div id="peAvPreview" style="width:80px;height:80px;border-radius:50%;background:var(--pk);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;border:3px solid var(--pk3)"><span style="width:64px;height:64px;display:flex">'+avSvg(curAv)+'</span></div><div style="font-size:11px;font-weight:700;color:var(--tx2);margin-bottom:10px">Choisir un avatar</div><div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;max-width:280px;margin:0 auto">'+
    PAVS.map(a=>'<div onclick="peSelectAv(\''+a.id+'\')" id="peav-'+a.id+'" style="cursor:pointer;width:100%;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2.5px solid '+(a.id===curAv?'#7C5CFC':'rgba(124,92,252,.1)')+';transition:all .2s;background:'+(a.id===curAv?'var(--pk)':'transparent')+'"><span style="width:80%;height:80%;display:flex">'+avSvg(a.id)+'</span></div>').join('')+
    '</div></div>'+
    // Info fields
    '<div class="fg"><label class="fl">Prénom</label><input class="fi" id="pe-fn" value="'+escHtml(p.firstName)+'"></div>'+
    '<div class="fg"><label class="fl">Nom</label><input class="fi" id="pe-ln" value="'+escHtml(p.lastName)+'"></div>'+
    '<div class="fg"><label class="fl">Email</label><input class="fi" id="pe-email" type="email" value="'+escHtml(p.email)+'"></div>'+
    '<div style="padding:16px 0 0;display:flex;gap:10px"><button class="btn bs" style="flex:1" onclick="document.getElementById(\'profileEditOverlay\').remove()">Annuler</button><button class="btn bp" style="flex:1" onclick="saveProfileEdit()">Enregistrer</button></div>';
  overlay.appendChild(panel);
  overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove()});
  // Swipe-down to dismiss
  let touchY=0,panelY=0,dragging=false;
  panel.addEventListener('touchstart',e=>{const t=e.touches[0];touchY=t.clientY;panelY=0;dragging=panel.scrollTop<=0},{passive:true});
  panel.addEventListener('touchmove',e=>{if(!dragging)return;const dy=e.touches[0].clientY-touchY;if(dy>0){panelY=dy;panel.style.transform='translateY('+dy+'px)';panel.style.transition='none';e.preventDefault()}},{passive:false});
  panel.addEventListener('touchend',()=>{if(panelY>100){panel.style.transition='transform .25s ease';panel.style.transform='translateY(100%)';setTimeout(()=>overlay.remove(),250)}else{panel.style.transition='transform .2s ease';panel.style.transform='translateY(0)'}dragging=false;panelY=0});
  document.body.appendChild(overlay);
  S._peAvatar=curAv;
}

window.peSelectAv=function(id){
  S._peAvatar=id;
  // Update preview
  document.getElementById('peAvPreview').innerHTML='<span style="width:64px;height:64px;display:flex">'+avSvg(id)+'</span>';
  // Update selection borders
  PAVS.forEach(a=>{
    const el=document.getElementById('peav-'+a.id);
    if(el){el.style.borderColor=a.id===id?'#7C5CFC':'rgba(124,92,252,.1)';el.style.background=a.id===id?'var(--pk)':'transparent';}
  });
}

window.saveProfileEdit=async function(){
  if(!S.cp)return;
  const fn=document.getElementById('pe-fn').value.trim();
  const ln=document.getElementById('pe-ln').value.trim();
  const email=document.getElementById('pe-email').value.trim();
  if(!fn||!ln||!email){showToast('Remplissez tous les champs');return;}
  try{
    await api('/api/parents/'+S.cp.id,'PUT',{firstName:fn,lastName:ln,email:email,avatar:S._peAvatar||'parent'});
    S.cp.firstName=fn;S.cp.lastName=ln;S.cp.email=email;S.cp.avatar=S._peAvatar;
    const ov=document.getElementById('profileEditOverlay');
    if(ov)ov.remove();
    showToast('Profil mis à jour !');
    loadProf();
  }catch(e){showToast('Erreur lors de la mise à jour')}
}

// Legacy alias
window.openAvatarPicker=function(){openProfileEdit()}

// ============= CHILD DETAIL =============
window.showCD=async function(id){
  const ch=await api('/api/children/'+id),ms=await api('/api/children/'+id+'/milestones'),gr=await api('/api/children/'+id+'/growth'),sl=await api('/api/children/'+id+'/sleep'),qz=await api('/api/children/'+id+'/questionnaire');
  const lg=gr.length?gr[gr.length-1]:null;
  const avg=sl.length?(sl.reduce((s,r)=>s+(r.nightHours||0)+(r.napHours||0),0)/sl.length).toFixed(1):'--';
  const am=ageM(ch.birthDate);

  // Bilan block
  const bilanBlk=qz&&qz.createdAt
    ?'<div class="br-card" onclick="showLastBilan(\''+id+'\')"><div class="bci">'+ico('clip',20)+'</div><div class="bct" style="flex:1"><b>Bilan personnalisé</b><span>Dernier bilan : '+fmt(qz.createdAt.slice(0,10))+' - Voir les conseils</span></div><span style="color:var(--tx3)">'+I.chevR+'</span></div>'
    :'<div class="br-card" onclick="openQuiz(\''+id+'\')"><div class="bci">'+ico('clip',20)+'</div><div class="bct" style="flex:1"><b>Bilan personnalisé</b><span>10 questions, 2 min, pour des conseils adaptés</span></div><span style="color:var(--pk3)">'+I.chevR+'</span></div>';

  // Recommended guides based on questionnaire results — show actual tips
  let recoBlk='';
  if(qz&&qz.summary){
    try{
      const summary=JSON.parse(qz.summary);
      const needsWork=summary.filter(b=>b.lvl==='watch'||b.lvl==='alert');
      if(needsWork.length){
        // Map questionnaire domains to guide categories
        const guideMap={sleep:['sleep'],food:['food'],émotions:['émotions','behavior'],language:['activities'],motor:['activities'],social:['behavior','émotions'],screens:['activities'],bonding:['activities','émotions'],autonomy:['hygiene']};
        // Find relevant tips for child's age
        function tipsMatchAge(tipAge,childAgeM){
          if(!tipAge||tipAge==='Tous ages')return true;
          const s=ageStartMonths(tipAge),e=ageEndMonths(tipAge);
          return childAgeM>=s&&childAgeM<=e;
        }
        recoBlk='<div class="stl">'+ico('sparkle',16)+' Conseils pour '+ch.firstName+'</div>';
        recoBlk+='<div style="padding:0 20px;margin-bottom:12px"><p style="font-size:12px;color:var(--tx3);line-height:1.5;margin-bottom:12px">Basé sur le bilan personnalisé — domaines à renforcer</p></div>';
        needsWork.forEach(b=>{
          const d=QDOMS[b.dom];
          const gKeys=guideMap[b.dom]||[];
          // Collect matching tips from guide
          let matchedTips=[];
          gKeys.forEach(gk=>{
            const g=GUIDE[gk];if(!g)return;
            g.tips.forEach(t=>{if(tipsMatchAge(t.a,am))matchedTips.push({...t,guideColor:g.c,guideBg:g.bg,guideKey:gk})});
          });
          // Also add bilan tips (expert advice from questionnaire)
          const bilanTips=b.tips||[];
          // Build section
          recoBlk+='<div style="margin:0 20px 16px;padding:16px;background:white;border-radius:var(--rl);border:1px solid var(--border);box-shadow:var(--sh)">';
          recoBlk+='<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><div style="width:36px;height:36px;border-radius:10px;background:'+d.bg+';display:flex;align-items:center;justify-content:center"><span style="color:'+d.c+'">'+ico(d.ico,18)+'</span></div><div><div style="font-size:14px;font-weight:800">'+d.t+'</div><div style="font-size:11px;color:var(--tx3)">'+LVL_LBL[b.lvl]+'</div></div></div>';
          // Show bilan expert tips first
          recoBlk+='<div style="margin-bottom:8px">';
          bilanTips.slice(0,3).forEach(t=>{
            recoBlk+='<div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid var(--border)"><span style="color:'+d.c+';flex-shrink:0;margin-top:2px">'+ico('check',12)+'</span><span style="font-size:12px;color:var(--tx2);line-height:1.5">'+t+'</span></div>';
          });
          recoBlk+='</div>';
          // Show 2 matching guide tips
          if(matchedTips.length){
            recoBlk+='<div style="font-size:11px;font-weight:700;color:var(--tx3);margin:8px 0 6px;text-transform:uppercase;letter-spacing:.5px">Guide du quotidien</div>';
            matchedTips.slice(0,2).forEach(t=>{
              recoBlk+='<div class="gc" style="margin:0 0 4px;padding:10px" onclick="showGD(\''+t.guideKey+'\')"><div style="flex:1"><div style="font-size:12px;font-weight:700;color:var(--tx)">'+t.t+'</div><div style="font-size:11px;color:var(--tx3);margin-top:2px">'+t.x.slice(0,80)+'...</div></div><span style="color:var(--tx4);flex-shrink:0">'+I.chevR+'</span></div>';
            });
          }
          recoBlk+='</div>';
        });
      }
    }catch(e){console.error('[recoBlk]',e)}
  }

  document.getElementById('cdc').innerHTML=
    '<div class="deth" style="background:linear-gradient(135deg,'+(ch.gender==='boy'?'var(--sk),var(--lv)':'var(--rs),var(--pk)')+')">'
    +'<button class="back" onclick="go(\'profile\')" style="color:var(--tx)">'+ico('arrowL',14)+' Retour</button>'
    +'<div style="display:flex;align-items:center;gap:14px"><div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,.45);display:flex;align-items:center;justify-content:center">'+avSvg(ch.photoUrl||'lion')+'</div><div><h2 style="font-size:22px">'+ch.firstName+'</h2><p style="font-size:12px;color:var(--tx2)">'+calcAge(ch.birthDate)+' - '+gTxt(ch.gender,'Né','Née')+' le '+fmt(ch.birthDate)+'</p></div></div></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:12px 20px">'
      +'<div style="background:#fff;border-radius:var(--rs);padding:12px;text-align:center;box-shadow:var(--sh)"><div style="font-size:18px;font-weight:700">'+(lg?lg.weightKg+'kg':'--')+'</div><div style="font-size:10px;color:var(--tx3)">Poids</div></div>'
      +'<div style="background:#fff;border-radius:var(--rs);padding:12px;text-align:center;box-shadow:var(--sh)"><div style="font-size:18px;font-weight:700">'+(lg?lg.heightCm+'cm':'--')+'</div><div style="font-size:10px;color:var(--tx3)">Taille</div></div>'
      +'<div style="background:#fff;border-radius:var(--rs);padding:12px;text-align:center;box-shadow:var(--sh)"><div style="font-size:18px;font-weight:700">'+avg+'h</div><div style="font-size:10px;color:var(--tx3)">Sommeil</div></div>'
    +'</div>'
    +bilanBlk
    +recoBlk
    +'<div class="stl">Étapes notées ('+ms.length+')</div>'
    +'<div class="msl">'+ms.slice(0,8).map(m=>'<div class="msi"><div class="msd" style="background:'+(MB[m.type]||MB.other)+'">'+ico(MI[m.type]||'pin',16)+'</div><div style="flex:1"><div class="mslb">'+m.label+'</div><div class="msm">'+(m.ageInMonths?'A '+m.ageInMonths+' mois':'')+(m.date?' - '+fmt(m.date):'')+'</div></div></div>').join('')+'</div>';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('p-child-detail').classList.add('active');
  document.getElementById('navbar').style.display='none';
  window.scrollTo(0,0);
}

// ============= QUESTIONNAIRE FLOW =============
let QZ={childId:null,ch:null,step:0,responses:{}};

window.openQuiz=async function(id){
  QZ={childId:id,ch:null,step:0,responses:{}};
  QZ.ch=await api('/api/children/'+id);
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('p-quiz').classList.add('active');
  document.getElementById('navbar').style.display='none';
  document.getElementById('fab').style.display='none';
  renderQuizIntro();
  window.scrollTo(0,0);
}

function renderQuizIntro(){
  const ch=QZ.ch;
  document.getElementById('qzh').style.background='linear-gradient(135deg,var(--pk),var(--lv))';
  document.getElementById('qzh').style.color='var(--tx)';
  document.getElementById('qzh').innerHTML='<button class="back" onclick="go(\'profile\')" style="color:var(--tx)">'+ico('arrowL',14)+' Retour</button><div style="display:flex;align-items:center;gap:12px"><span style="color:var(--pk3)">'+ico('clip',26)+'</span><div><h2>Bilan personnalisé</h2><p class="ds">Pour '+ch.firstName+'</p></div></div>';
  document.getElementById('qzc').innerHTML='<div class="qz-intro"><h3>10 questions, 2 minutes</h3><p>Répondez spontanement, sans chercher la "bonne" reponse. Le but est de dresser un panorama bienveillant et d\'obtenir des conseils adaptes a votre enfant.</p><p style="font-size:12px;color:var(--tx3)">Vos reponses restent sur cet appareil. Vous pouvez refaire le questionnaire a tout moment pour voir l\'evolution.</p></div><div class="qz-nav"><button class="next" onclick="quizStart()">Commencer le questionnaire</button></div>';
}

window.quizStart=function(){QZ.step=0;renderQuizStep()}

function renderQuizStep(){
  const n=QZ.step,q=QUIZ[n];
  if(!q)return renderQuizReview();
  const ch=QZ.ch;const selVal=QZ.responses[q.id];
  const dom=QDOMS[q.dom];
  document.getElementById('qzh').style.background=dom.bg;
  document.getElementById('qzh').innerHTML='<button class="back" onclick="quizQuit()" style="color:var(--tx)">'+ico('arrowL',14)+' Quitter</button><div style="display:flex;align-items:center;gap:12px"><span style="color:'+dom.c+'">'+ico(dom.ico,24)+'</span><div><h2 style="font-size:18px">'+dom.t+'</h2><p class="ds">Pour '+ch.firstName+'</p></div></div>';
  let prog='<div class="qz-prog">';
  for(let i=0;i<QUIZ.length;i++){const cls=i<n?'pb done':(i===n?'pb on':'pb');prog+='<div class="'+cls+'"></div>';}
  prog+='</div>';
  let opts=q.opts.map(o=>'<button class="qz-opt'+(selVal===o.v?' on':'')+'" onclick="quizAns(\''+o.v+'\')"><span class="dot"></span><span>'+o.l+'</span></button>').join('');
  const canNext=!!selVal;
  document.getElementById('qzc').innerHTML=prog+'<div class="qz-step"><div class="qz-num">Question '+(n+1)+' / '+QUIZ.length+'</div><div class="qz-q">'+q.q+'</div><div class="qz-opts">'+opts+'</div></div><div class="qz-nav">'+(n>0?'<button class="prev" onclick="quizPrev()">Precedent</button>':'')+'<button class="next" onclick="quizNext()"'+(canNext?'':' disabled')+'>'+(n===QUIZ.length-1?'Voir mon bilan':'Suivant')+'</button></div>';
  window.scrollTo(0,0);
}

window.quizAns=function(v){QZ.responses[QUIZ[QZ.step].id]=v;renderQuizStep()}
window.quizPrev=function(){if(QZ.step>0){QZ.step--;renderQuizStep()}}
window.quizNext=function(){
  const q=QUIZ[QZ.step];if(!QZ.responses[q.id])return;
  if(QZ.step<QUIZ.length-1){QZ.step++;renderQuizStep()}
  else{submitQuiz()}
}
window.quizQuit=function(){if(Object.keys(QZ.responses).length&&!confirm('Quitter le questionnaire ? Vos reponses ne seront pas sauvegardees.'))return;go('profile')}

async function submitQuiz(){
  const summary=buildBilan(QZ.responses);
  const saved=await api('/api/children/'+QZ.childId+'/questionnaire','POST',{responses:QZ.responses,summary:summary});
  renderBilan(summary,QZ.ch,saved);
}

function renderBilan(summary,ch,rec){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('p-quizres').classList.add('active');
  document.getElementById('navbar').style.display='none';
  document.getElementById('qrh').style.background='linear-gradient(135deg,var(--pk),var(--lv))';
  document.getElementById('qrh').style.color='var(--tx)';
  document.getElementById('qrh').innerHTML='<button class="back" onclick="go(\'profile\')" style="color:var(--tx)">'+ico('arrowL',14)+' Retour</button><div style="display:flex;align-items:center;gap:12px"><span style="color:var(--pk3)">'+ico('sparkle',26)+'</span><div><h2>Votre bilan</h2><p class="ds">Pour '+ch.firstName+(rec&&rec.createdAt?' - '+fmt(rec.createdAt.slice(0,10)):'')+'</p></div></div>';
  const intro='<div class="br-intro"><p>Voici un panorama par repère. Les conseils sont adaptés aux réponses données : ils visent à rassurer ou à orienter, jamais à juger.</p></div>';
  const cards=summary.map(b=>{const d=QDOMS[b.dom];return '<div class="br-dom"><div class="br-head"><div class="ic" style="background:'+d.bg+';color:'+d.c+'">'+ico(d.ico,20)+'</div><div class="tt"><b>'+d.t+'</b><span>'+LVL_LBL[b.lvl]+'</span></div><span class="br-pill '+b.lvl+'">'+LVL_LBL[b.lvl]+'</span></div><div class="br-body"><p class="br-summary">'+b.summary+'</p><div class="br-tips">'+b.tips.map(t=>'<div class="br-tip"><span class="tk">•</span><span>'+t+'</span></div>').join('')+'</div></div></div>'}).join('');
  const actions='<div class="br-actions"><button class="redo" onclick="openQuiz(\''+QZ.childId+'\')">Refaire</button><button class="ok" onclick="go(\'profile\')">Terminer</button></div>';
  document.getElementById('qrc').innerHTML=intro+cards+actions;
  window.scrollTo(0,0);
}

window.showLastBilan=async function(id){
  const rec=await api('/api/children/'+id+'/questionnaire');
  if(!rec||!rec.summary){openQuiz(id);return}
  let summary;try{summary=JSON.parse(rec.summary)}catch(e){openQuiz(id);return}
  const ch=await api('/api/children/'+id);
  QZ.childId=id;QZ.ch=ch;
  renderBilan(summary,ch,rec);
}

// ============= MODALS =============
function openMdl(h){document.getElementById('mb').innerHTML=h;document.getElementById('mbg').classList.add('show')}
function closeMdl(){document.getElementById('mbg').classList.remove('show')}
window.closeMdl=closeMdl;

window.openAddChild=function(){openMdl('<h3>Ajouter un enfant</h3><div class="fg"><label class="fl">Prénom</label><input class="fi" id="nc-n" placeholder="Prénom de l\'enfant"></div><div class="fg"><label class="fl">Date de naissance</label><input class="fi" id="nc-b" type="date"></div><div class="fg"><label class="fl">Sexe</label><select class="fsl" id="nc-g"><option value="boy">Garçon</option><option value="girl">Fille</option></select></div><div class="fg"><label class="fl">Choisir un avatar</label></div><div class="avg">'+AVS.map(a=>'<div class="avi'+(a.id==='lion'?' sel':'')+'" onclick="pickAv(\''+a.id+'\',this)">'+avSvg(a.id)+'</div>').join('')+'</div><div class="fg"><button class="btn bp bw" onclick="submitChild()">Ajouter</button></div>');window._av='lion'}
window.pickAv=function(id,el){window._av=id;document.querySelectorAll('.avi').forEach(a=>a.classList.remove('sel'));el.classList.add('sel')}
window.submitChild=async function(){
  const n=document.getElementById('nc-n').value.trim(),b=document.getElementById('nc-b').value,g=document.getElementById('nc-g').value;
  if(!n||!b)return;
  const res=await api('/api/parents/'+S.cp.id+'/children','POST',{firstName:n,birthDate:b,gender:g,avatar:window._av||'lion'});
  // Auto-add birthday event to agenda
  if(res&&res.id){
    const bd=new Date(b);
    const nextBday=new Date(new Date().getFullYear(),bd.getMonth(),bd.getDate());
    if(nextBday<new Date())nextBday.setFullYear(nextBday.getFullYear()+1);
    const bStr=nextBday.toISOString().slice(0,10);
    try{await api('/api/children/'+res.id+'/agenda','POST',{title:'Anniversaire de '+n,date:bStr,type:'note',recurring:'yearly',notes:'Joyeux anniversaire ! Pensez à refaire le bilan personnalisé.'})}catch(e){}
  }
  closeMdl();
  // Launch questionnaire directly after child creation
  if(res&&res.id){
    await loadHome();await loadProf();
    S.sel=res.id;
    openQuiz(res.id.toString());
  }else{loadHome();loadProf()}
}

window.openAddMs=function(){if(!S.sel)return;openMdl('<h3>Nouvelle étape</h3><div class="fg"><label class="fl">Catégorie</label><select class="fsl" id="nm-t"><option value="motor">Motricité</option><option value="language">Langage</option><option value="social">Social</option><option value="cognitive">Cognitif</option><option value="autonomy">Autonomie</option><option value="other">Autre</option></select></div><div class="fg"><label class="fl">Description</label><input class="fi" id="nm-l" placeholder="Ex: Premiers pas"></div><div class="fg"><label class="fl">Age (mois)</label><input class="fi" id="nm-a" type="number" placeholder="12"></div><div class="fg"><label class="fl">Date</label><input class="fi" id="nm-d" type="date" value="'+new Date().toISOString().slice(0,10)+'"></div><div class="fg"><label class="fl">Notes</label><input class="fi" id="nm-n" placeholder="Un souvenir..."></div><div class="fg"><button class="btn bp bw" onclick="submitMs()">Enregistrer</button></div>')}
window.submitMs=async function(){const t=document.getElementById('nm-t').value,l=document.getElementById('nm-l').value.trim(),a=parseFloat(document.getElementById('nm-a').value)||null,d=document.getElementById('nm-d').value||null,n=document.getElementById('nm-n').value.trim()||null;if(!l)return;await api('/api/children/'+S.sel+'/milestones','POST',{type:t,label:l,ageInMonths:a,date:d,notes:n});closeMdl();loadMs()}

window.openAddSleep=function(){if(!S.sel)return;const showNap=S.childAge<36;openMdl('<h3>Ajouter une nuit</h3><div class="fg"><label class="fl">Date</label><input class="fi" id="ns-d" type="date" value="'+new Date().toISOString().slice(0,10)+'"></div><div class="fg"><label class="fl">Heures de nuit</label><input class="fi" id="ns-n" type="number" step="0.5" placeholder="10"></div>'+(showNap?'<div class="fg"><label class="fl">Heures de sieste</label><input class="fi" id="ns-np" type="number" step="0.5" placeholder="2"></div>':'')+'<div class="fg"><label class="fl">Qualite</label><select class="fsl" id="ns-q"><option value="great">Excellente</option><option value="good">Bonne</option><option value="fair">Moyenne</option><option value="poor">Difficile</option></select></div><div class="fg"><button class="btn bp bw" onclick="submitSl()">Enregistrer</button></div>')}
window.submitSl=async function(){const d=document.getElementById('ns-d').value,n=parseFloat(document.getElementById('ns-n').value)||null,npEl=document.getElementById('ns-np'),np=npEl?parseFloat(npEl.value)||null:null,q=document.getElementById('ns-q').value;await api('/api/children/'+S.sel+'/sleep','POST',{date:d,nightHours:n,napHours:np,quality:q});closeMdl();loadGr()}

window.openAddGrowth=function(){if(!S.sel)return;const showHead=S.childAge<=12;openMdl('<h3>Nouvelle mesure</h3><div class="fg"><label class="fl">Date</label><input class="fi" id="ng-d" type="date" value="'+new Date().toISOString().slice(0,10)+'"></div><div class="fg"><label class="fl">Poids (kg)</label><input class="fi" id="ng-w" type="number" step="0.1" placeholder="8.5"></div><div class="fg"><label class="fl">Taille (cm)</label><input class="fi" id="ng-h" type="number" step="0.5" placeholder="72"></div>'+(showHead?'<div class="fg"><label class="fl">Périmètre cranien (cm)</label><input class="fi" id="ng-hc" type="number" step="0.5" placeholder="45"></div>':'')+'<div class="fg"><button class="btn bp bw" onclick="submitGr()">Enregistrer</button></div>')}
window.submitGr=async function(){const d=document.getElementById('ng-d').value,w=parseFloat(document.getElementById('ng-w').value)||null,h=parseFloat(document.getElementById('ng-h').value)||null,hcEl=document.getElementById('ng-hc'),hc=hcEl?parseFloat(hcEl.value)||null:null;await api('/api/children/'+S.sel+'/growth','POST',{date:d,weightKg:w,heightCm:h,headCircCm:hc});closeMdl();loadGr()}

function renderAdaptFields(cat){
  if(cat==='appointment')return '<div class="fg"><label class="fl">Nom du praticien</label><input class="fi" id="na-pract" placeholder="Dr Martin"></div><div class="fg"><label class="fl">Telephone</label><input class="fi" id="na-phone" type="tel" placeholder="01 23 45 67 89"></div>';
  if(cat==='vaccine')return '<div class="fg"><label class="fl">Age recommande</label><input class="fi" id="na-vca" placeholder="Ex: 12 mois"></div><div class="fg"><label class="fl">Prochain rappel (auto)</label><input class="fi" id="na-boost" type="date"><div style="font-size:11px;color:var(--tx3);margin-top:4px">Laisse vide pour auto-calculer selon le vaccin</div></div>';
  if(cat==='medication')return '<div class="fg"><label class="fl">Dose</label><input class="fi" id="na-dose" placeholder="Ex: 2.5 ml, 1 comprime"></div><div class="fg"><label class="fl">Frequence</label><input class="fi" id="na-freq" placeholder="Ex: toutes les 6h, matin et soir"></div><div class="fg"><label class="fl">Duree (jours)</label><input class="fi" id="na-dur" type="number" placeholder="Ex: 5"></div>';
  if(cat==='illness')return '<div class="fg"><label class="fl">Temperature (&deg;C)</label><input class="fi" id="na-temp" type="number" step="0.1" placeholder="Ex: 38.5"></div><div class="fg"><label class="fl">Symptomes</label><input class="fi" id="na-symp" placeholder="Fièvre, toux, diarrhee..."></div>';
  if(cat==='sleep')return '<div class="fg" style="display:flex;gap:8px"><div style="flex:1"><label class="fl">Coucher</label><input class="fi" id="na-slpBt" type="time"></div><div style="flex:1"><label class="fl">Lever</label><input class="fi" id="na-slpWk" type="time"></div></div><div class="fg"><label class="fl">Qualite</label><select class="fsl" id="na-slpq"><option value="">Non renseignée</option><option value="great">Excellente</option><option value="good">Bonne</option><option value="ok">Correcte</option><option value="bad">Difficile</option><option value="very_bad">Tres difficile</option></select></div>';
  if(cat==='meal')return '<div class="fg"><label class="fl">Type de repas</label><select class="fsl" id="na-mtp"><option value="">Non precise</option><option value="breakfast">Petit-déjeuner</option><option value="lunch">Déjeuner</option><option value="snack">Goûter</option><option value="dinner">Dîner</option></select></div><div class="fg"><label class="fl">Nouvel aliment teste</label><input class="fi" id="na-food" placeholder="Ex: Avocat, Tomate..."></div>';
  if(cat==='note')return '<div class="fg"><label class="fl">Humeur de l\'enfant</label><select class="fsl" id="na-mood">'+MOOD_OPTS.map(o=>'<option value="'+o[0]+'">'+o[1]+'</option>').join('')+'</select></div><div class="fg"><label class="fl">Photo (optionnel)</label><input class="fi" id="na-photo" type="file" accept="image/*" onchange="agPhotoPick(event)"><div id="na-photoprev" style="margin-top:8px"></div></div>';
  if(cat==='school')return '<div class="fg"><label class="fl">Etablissement / Classe</label><input class="fi" id="na-school" placeholder="Ex: Ecole Jules Ferry - CP"></div>';
  return '';
}
window.agPhotoPick=function(ev){const f=ev.target.files&&ev.target.files[0];if(!f)return;if(f.size>800*1024){alert('Image trop lourde (max 800 Ko)');ev.target.value='';return}const r=new FileReader();r.onload=e=>{const pv=document.getElementById('na-photoprev');if(pv)pv.innerHTML='<img src="'+e.target.result+'" style="max-width:100%;max-height:180px;border-radius:10px;border:1px solid var(--bd)" data-b64="'+e.target.result+'">'};r.readAsDataURL(f)}
window.openAddAg=function(defaultCat,defaultDate){
  if(!S.sel)return;
  const dd=defaultDate||new Date().toISOString().slice(0,10);
  const dc=defaultCat||'appointment';
  const opts=[['appointment','Rendez-vous'],['vaccine','Vaccin'],['medication','Médicament'],['illness','Maladie / Symptomes'],['activity','Activité'],['school','Scolaire'],['sleep','Sommeil'],['meal','Repas'],['note','Note / Souvenir'],['milestone','Étape a préparer'],['other','Autre']];
  const selHtml='<select class="fsl" id="na-c" onchange="agTypeChanged()">'+opts.map(o=>'<option value="'+o[0]+'"'+(dc===o[0]?' selected':'')+'>'+o[1]+'</option>').join('')+'</select>';
  const dlHtml='<datalist id="na-tsug">'+(TITLE_SUG[dc]||[]).map(s=>'<option value="'+s+'"></option>').join('')+'</datalist>';
  const accDl='<datalist id="na-accsug">'+ACCOMP_SUG.map(s=>'<option value="'+s+'"></option>').join('')+'</datalist>';
  let h='<h3>Nouvel événement</h3>';
  h+='<div class="fg"><label class="fl">Type</label>'+selHtml+'</div>';
  h+='<div class="fg"><label class="fl">Titre</label><input class="fi" id="na-t" list="na-tsug" placeholder="'+(PH_MAP[dc]||'Titre')+'" autocomplete="off">'+dlHtml+'</div>';
  h+='<div id="na-adapt">'+renderAdaptFields(dc)+'</div>';
  h+='<div class="fg" style="display:flex;gap:8px"><div style="flex:1"><label class="fl">Date</label><input class="fi" id="na-d" type="date" value="'+dd+'"></div><div style="flex:1"><label class="fl">Heure</label><input class="fi" id="na-h" type="time"></div></div>';
  h+='<details class="nadet"><summary class="nadet-s">Plus d\'options (lieu, rappel, recurrence...)</summary>';
  h+='<div class="fg"><label class="fl">Lieu (optionnel)</label><input class="fi" id="na-loc" placeholder="Ex: Cabinet Dr Martin, 12 rue..."></div>';
  h+='<div class="fg"><label class="fl">Qui accompagne</label><input class="fi" id="na-acc" list="na-accsug" placeholder="Ex: Maman, Nounou..." autocomplete="off">'+accDl+'</div>';
  h+='<div class="fg"><label class="fl">Rappel avant</label><select class="fsl" id="na-rem">'+REM_OPTS.map(o=>'<option value="'+o[0]+'">'+o[1]+'</option>').join('')+'</select></div>';
  h+='<div class="fg"><label class="fl">Recurrence</label><select class="fsl" id="na-rec">'+REC_OPTS.map(o=>'<option value="'+o[0]+'">'+o[1]+'</option>').join('')+'</select></div>';
  h+='<div class="fg"><label class="fl">Checklist a apporter</label><textarea class="fta" id="na-chk" placeholder="Un element par ligne - ex:&#10;Doudou&#10;Carnet de santé&#10;Biberon"></textarea></div>';
  h+='</details>';
  h+='<div class="fg"><label class="fl">Notes / details</label><textarea class="fta" id="na-x" placeholder="Informations complementaires..."></textarea></div>';
  h+='<div class="fg"><button class="btn bp bw" onclick="submitAg()">Enregistrer</button></div>';
  openMdl(h);
}
window.agTypeChanged=function(){const c=document.getElementById('na-c').value,dl=document.getElementById('na-tsug'),ti=document.getElementById('na-t'),ad=document.getElementById('na-adapt');if(dl)dl.innerHTML=(TITLE_SUG[c]||[]).map(s=>'<option value="'+s+'"></option>').join('');if(ti)ti.placeholder=PH_MAP[c]||'Titre';if(ad)ad.innerHTML=renderAdaptFields(c)}
function gv(id){const el=document.getElementById(id);return el?(el.value||'').trim():''}
function gvn(id){const v=gv(id);return v?v:null}
function buildExtras(){
  const c=gv('na-c');
  const ex={};
  const loc=gvn('na-loc');if(loc)ex.location=loc;
  const acc=gvn('na-acc');if(acc)ex.accompaniedBy=acc;
  const rem=gvn('na-rem');if(rem)ex.reminderMinutes=parseInt(rem);
  const rec=gvn('na-rec');if(rec)ex.recurrence=rec;
  const chk=gvn('na-chk');if(chk)ex.checklist=chk.split('\n').map(s=>s.trim()).filter(Boolean);
  if(c==='appointment'){const p=gvn('na-pract');if(p)ex.practitioner=p;const ph=gvn('na-phone');if(ph)ex.phone=ph}
  if(c==='vaccine'){const a=gvn('na-vca');if(a)ex.ageLabel=a;const b=gvn('na-boost');if(b)ex.boosterDate=b}
  if(c==='medication'){const d=gvn('na-dose');if(d)ex.dose=d;const f=gvn('na-freq');if(f)ex.frequency=f;const du=gvn('na-dur');if(du)ex.durationDays=parseInt(du)}
  if(c==='illness'){const t=gvn('na-temp');if(t)ex.temperature=parseFloat(t);const s=gvn('na-symp');if(s)ex.symptoms=s}
  if(c==='sleep'){const bt=gvn('na-slpBt');if(bt)ex.bedtime=bt;const wk=gvn('na-slpWk');if(wk)ex.wakeup=wk;const q=gvn('na-slpq');if(q)ex.quality=q}
  if(c==='meal'){const m=gvn('na-mtp');if(m)ex.mealType=m;const fd=gvn('na-food');if(fd)ex.newFood=fd}
  if(c==='note'){const m=gvn('na-mood');if(m)ex.mood=m;const pv=document.querySelector('#na-photoprev img');if(pv&&pv.dataset.b64)ex.photo=pv.dataset.b64}
  if(c==='school'){const s=gvn('na-school');if(s)ex.schoolInfo=s}
  return Object.keys(ex).length?ex:null;
}
window.submitAg=async function(){
  const c=gv('na-c'),t=gv('na-t'),d=gv('na-d'),h=gvn('na-h'),x=gvn('na-x');
  if(!t||!d){alert('Titre et date sont requis');return}
  const ex=buildExtras();
  if(c==='vaccine'){const a=gv('na-vca');await api('/api/children/'+S.sel+'/vaccines','POST',{name:t,recommendedAge:a,recommendedDate:d,reminderDate:d,status:'upcoming',extras:ex,notes:x})}
  else{await api('/api/children/'+S.sel+'/agenda','POST',{date:d,time:h,category:c,title:t,content:x,extras:ex})}
  closeMdl();loadAgenda();loadHome();
}

window.openAddVc=function(){if(!S.sel)return;openMdl('<h3>Nouveau vaccin</h3><div class="fg"><label class="fl">Nom du vaccin</label><input class="fi" id="nv-n" placeholder="Ex: Grippe saisonnière"></div><div class="fg"><label class="fl">Age recommande</label><input class="fi" id="nv-a" placeholder="Ex: 6 mois"></div><div class="fg"><label class="fl">Date recommandée</label><input class="fi" id="nv-d" type="date"></div><div class="fg"><button class="btn bp bw" onclick="submitVc()">Enregistrer</button></div>')}
window.submitVc=async function(){const n=document.getElementById('nv-n').value.trim(),a=document.getElementById('nv-a').value.trim(),d=document.getElementById('nv-d').value;if(!n)return;await api('/api/children/'+S.sel+'/vaccines','POST',{name:n,recommendedAge:a,recommendedDate:d,reminderDate:d,status:'upcoming'});closeMdl();loadAgenda();loadHome()}

// ============= CHILD SWITCHING / TOOLS / NOTIFS =============
window.swHomeCh=function(id){S.sel=id;loadHome()}
window.openTool=function(gk){go('guide');setTimeout(()=>{if(window.showGD)showGD(gk)},150)}

// Browser notifications
async function notifyUrgents(items){
  if(!('Notification' in window))return;
  if(!items||!items.length)return;
  if(Notification.permission==='default'){
    // Don't prompt automatically on first load; let user trigger.
    return;
  }
  if(Notification.permission!=='granted')return;
  try{
    const seen=JSON.parse(localStorage.getItem('pg_notif')||'[]');
    const fresh=items.filter(x=>!seen.includes(x.id));
    if(!fresh.length)return;
    const t='Cocon - '+fresh.length+' urgence'+(fresh.length>1?'s':'');
    const b=fresh.slice(0,3).map(x=>x.name+' - '+relDate(x.date)).join('\n');
    new Notification(t,{body:b,icon:'/favicon.ico'});
    localStorage.setItem('pg_notif',JSON.stringify([...seen,...fresh.map(x=>x.id)].slice(-50)));
  }catch(e){/* localStorage may be unavailable */}
}
window.enableNotifs=async function(){
  if(!('Notification' in window)){alert('Votre navigateur ne supporte pas les notifications');return}
  const p=await Notification.requestPermission();
  if(p==='granted'){notifyUrgents(S.urgent||[]);loadHome()}
}

window.openNotifCenter=function(){
  const rem=S.rem||{vaccines:[],events:[]};
  const allRem=[...rem.vaccines.map(v=>({...v,kind:'vaccine',category:'vaccine'})),...rem.events.map(e=>({...e,kind:'event'}))].sort((a,b)=>new Date(a.date)-new Date(b.date));
  const urg=allRem.filter(r=>{const d=daysUntil(r.date);return d!==null&&d>=0&&d<=3});
  const soon=allRem.filter(r=>{const d=daysUntil(r.date);return d!==null&&d>3&&d<=14});
  let h='<h3>'+ico('bell',16)+' Centre de notifications</h3>';
  const perm=('Notification' in window)?Notification.permission:'unsupported';
  if(perm==='default'){
    h+='<div class="fg"><div style="background:var(--sk);border-radius:var(--rs);padding:12px 14px;display:flex;gap:10px;align-items:center"><div style="flex:1;font-size:11px;color:var(--tx2);line-height:1.5">Activez les notifications du navigateur pour être averti des urgences même quand l\'app est fermee.</div><button class="btn bp bsm" onclick="enableNotifs()">Activer</button></div></div>';
  } else if(perm==='granted'){
    h+='<div class="fg"><div style="background:var(--mt);border-radius:var(--rs);padding:10px 14px;font-size:11px;color:var(--mt3);font-weight:700">'+ico('check',12)+' Notifications activees</div></div>';
  }
  if(urg.length){
    h+='<div style="padding:0 20px"><div style="font-size:10px;font-weight:800;color:var(--rs3);text-transform:uppercase;margin:14px 0 6px;letter-spacing:.04em">URGENT - dans 3 jours</div>';
    h+=urg.map(r=>{const cat=CAT[r.category]||CAT.appointment;return '<div class="alert vurg" style="margin:0 0 8px;border-left-color:'+cat.c+'" onclick="closeMdl();go(\'agenda\')"><div class="ai" style="background:'+cat.bg+';color:'+cat.c+'">'+ico(cat.i,18)+'</div><div style="flex:1;min-width:0"><div class="at">'+r.name+'</div><div class="ax">'+cat.l+(r.recommendedAge?' - '+r.recommendedAge:'')+'</div><div class="aa" style="color:'+cat.c+'">'+relDate(r.date)+' - URGENT</div></div></div>'}).join('');
    h+='</div>';
  }
  if(soon.length){
    h+='<div style="padding:0 20px"><div style="font-size:10px;font-weight:800;color:var(--tx3);text-transform:uppercase;margin:14px 0 6px;letter-spacing:.04em">Bientôt - dans 2 semaines</div>';
    h+=soon.map(r=>{const cat=CAT[r.category]||CAT.appointment;return '<div class="alert" style="margin:0 0 8px;border-left-color:'+cat.c+'" onclick="closeMdl();go(\'agenda\')"><div class="ai" style="background:'+cat.bg+';color:'+cat.c+'">'+ico(cat.i,18)+'</div><div style="flex:1;min-width:0"><div class="at">'+r.name+'</div><div class="ax">'+cat.l+(r.recommendedAge?' - '+r.recommendedAge:'')+'</div><div class="aa" style="color:'+cat.c+'">'+relDate(r.date)+'</div></div></div>'}).join('');
    h+='</div>';
  }
  if(!urg.length&&!soon.length){
    h+='<div style="padding:30px 20px;text-align:center"><div style="font-size:13px;font-weight:700;color:var(--tx2);margin-bottom:4px">Tout est calme</div><div style="font-size:11px;color:var(--tx3)">Aucune urgence pour le moment</div></div>';
  }
  openMdl(h);
}

// ============= DYNAMIC CONTENT LOADING =============
// Override hardcoded constants with DB content when available
let _contentLastFetch = 0; // Force reload on first page load
const CONTENT_TTL = 15000; // 15 seconds cache

async function refreshContentIfStale() {
  if (Date.now() - _contentLastFetch > CONTENT_TTL) {
    await loadDynamicContent();
  }
}

async function loadDynamicContent(){
  _contentLastFetch = Date.now();
  try{
    const r=await fetch('/api/content/all');
    if(!r.ok) return;
    const data=await r.json();

    // Quotes
    if(data.quotes&&data.quotes.length>0){PARENT_QUOTES.length=0;data.quotes.forEach(x=>PARENT_QUOTES.push({q:x.text,a:x.author||''}))}

    // Guide
    if(data.guide&&data.guide.length>0){Object.keys(GUIDE).forEach(k=>delete GUIDE[k]);data.guide.forEach(cat=>{GUIDE[cat.key]={t:cat.title,ico:cat.icon,c:cat.color,bg:cat.bgColor,tips:(cat.tips||[]).map(t=>({t:t.title,a:t.ageRange,x:t.text}))}})}

    // Daily tips
    if(data.dailyTips){for(const ag of Object.keys(data.dailyTips)){const d=data.dailyTips[ag];if(d&&d.length>0){DAILY_TIPS[ag]=d.map(t=>({t:t.title,x:t.text}))}}}

    // Dev milestones
    if(data.dev&&data.dev.length>0){Object.keys(DEV).forEach(k=>delete DEV[k]);data.dev.forEach(dom=>{try{const ages={};(dom.steps||[]).forEach(s=>{if(!ages[s.ageGroup])ages[s.ageGroup]=[];let acts;try{acts=typeof s.activities==='string'?JSON.parse(s.activities):s.activities;if(!Array.isArray(acts))acts=acts?[String(acts)]:[]}catch(e){acts=s.activities?[String(s.activities)]:[]}ages[s.ageGroup].push({l:s.label||'',acts:acts})});DEV[dom.key]={t:dom.title,ico:dom.icon,c:dom.color,bg:dom.bgColor,ages}}catch(e){console.warn('[content] Error parsing domain',dom.key,e)}})}
  }catch(e){console.log('[content] Using hardcoded defaults',e)}
}

// ============= USER PROFILE SYNC =============
let currentUserProfileId = null;

async function syncUserProfile() {
  if (!S.cp) return;
  try {
    // Try new dedicated endpoint first
    const res = await fetch('/api/profile/sync', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        parentId: S.cp.id,
        firstName: S.cp.firstName,
        lastName: S.cp.lastName,
        email: S.cp.email,
        childrenCount: 0
      })
    });
    if (res.ok) {
      const ct = res.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        const data = await res.json();
        currentUserProfileId = data.id;
        return;
      }
    }
  } catch (e) { /* new endpoint not available, try fallback */ }

  // Fallback: use admin endpoints
  try {
    const res = await fetch('/api/admin/users');
    if (!res.ok) return;
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) return;
    const users = await res.json();
    const existing = users.find(u => u.email === S.cp.email);
    if (existing) {
      currentUserProfileId = existing.id;
    } else {
      const cr = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstName: S.cp.firstName,
          lastName: S.cp.lastName,
          email: S.cp.email,
          parentId: S.cp.id,
          childrenCount: 0,
          status: 'active'
        })
      });
      if (cr.ok) {
        const cct = cr.headers.get('content-type') || '';
        if (cct.includes('application/json')) {
          const data = await cr.json();
          currentUserProfileId = data.id;
        }
      }
    }
  } catch (e) { console.log('[profile sync fallback error]', e); }
}

// ============= SUGGESTIONS (Boîte à idées) =============
async function submitSuggestion() {
  const textarea = document.getElementById('suggestionText');
  const text = textarea.value.trim();
  if (!text) { showToast('Veuillez écrire votre suggestion'); return; }

  // Ensure profile sync done
  if (!currentUserProfileId && S.cp) await syncUserProfile();

  try {
    const res = await fetch('/api/suggestions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: currentUserProfileId || null, text})
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      showToast(err.error || 'Erreur serveur');
      return;
    }
    const data = await res.json();
    if (data.error) {
      showToast(data.error);
      return;
    }
    textarea.value = '';
    showToast('Merci pour votre suggestion !');
    loadMySuggestions();
  } catch (e) { showToast('Erreur de connexion'); }
}
window.submitSuggestion = submitSuggestion;

async function loadMySuggestions() {
  const container = document.getElementById('mySuggestionsList');
  if (!container) return;
  // Ensure profile sync done
  if (!currentUserProfileId && S.cp) await syncUserProfile();
  if (!currentUserProfileId) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--tx3);font-size:13px;">Connectez-vous pour voir vos suggestions</div>';
    return;
  }
  try {
    const res = await fetch('/api/suggestions/mine?userId=' + currentUserProfileId);
    if (!res.ok) return;
    const mine = await res.json();
    renderMySuggestions(container, mine);
  } catch (e) { container.innerHTML = ''; }
}

function renderMySuggestions(container, mine) {
    if (mine.length === 0) {
      container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--tx3);font-size:13px;">Aucune suggestion envoyée</div>';
      return;
    }

    const statusLabel = {pending: 'En attente', approved: 'Approuvée', rejected: 'Rejetée', archived: 'Archivée'};
    const statusColor = {pending: 'var(--sd3)', approved: 'var(--mt3)', rejected: 'var(--rs3)', archived: 'var(--tx3)'};

    container.innerHTML = mine.map(s =>
      '<div class="crd" style="margin:0 0 8px;padding:14px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
          '<span class="badge" style="background:' + (statusColor[s.status] || 'var(--tx3)') + ';color:white;">' + (statusLabel[s.status] || s.status) + '</span>' +
          '<span style="font-size:10px;color:var(--tx3);">' + new Date(s.createdAt).toLocaleDateString('fr-FR') + '</span>' +
        '</div>' +
        '<div style="font-size:13px;line-height:1.5;">' + escHtml(s.text) + '</div>' +
        (s.adminNote ? '<div style="font-size:11px;color:var(--lv3);margin-top:6px;padding:6px 8px;background:var(--lv);border-radius:6px;">Réponse : ' + escHtml(s.adminNote) + '</div>' : '') +
      '</div>'
    ).join('');
}

// (Comments removed from guides/repères - managed via admin only)


// ============= TOAST =============
function showToast(msg) {
  let t = document.getElementById('appToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'appToast';
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--tx);color:white;padding:10px 20px;border-radius:20px;font-size:13px;font-weight:600;z-index:9999;opacity:0;transition:opacity .3s;max-width:350px;text-align:center;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

// ============= HTML ESCAPE =============
function escHtml(text) {
  const map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'};
  return String(text || '').replace(/[&<>"']/g, m => map[m]);
}

// ============= AUTH =============
let authToken = null;

function checkAuth() {
  const saved = localStorage.getItem('pg_auth');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.token && data.parent) {
        authToken = data.token;
        S.cp = data.parent;
        return true;
      }
    } catch(e) {}
  }
  return false;
}

function showAuthPage() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('p-auth').classList.add('active');
  document.body.classList.add('auth-mode');
  document.getElementById('navbar').style.display = 'none';
  document.getElementById('fab').style.display = 'none';
}

function showWelcome() {
  document.getElementById('auth-welcome').style.display = 'block';
  document.getElementById('auth-signup').style.display = 'none';
  document.getElementById('auth-login').style.display = 'none';
  window.scrollTo(0,0);
}
function showLoginForm() {
  document.getElementById('auth-welcome').style.display = 'none';
  document.getElementById('auth-signup').style.display = 'none';
  document.getElementById('auth-login').style.display = 'block';
  window.scrollTo(0,0);
}
function showSignupForm() {
  document.getElementById('auth-welcome').style.display = 'none';
  document.getElementById('auth-login').style.display = 'none';
  document.getElementById('auth-signup').style.display = 'block';
  window.scrollTo(0,0);
}
window.showWelcome = showWelcome;
window.showLoginForm = showLoginForm;
window.showSignupForm = showSignupForm;

window.doSignup = async function() {
  const fn = document.getElementById('su-fn').value.trim();
  const ln = document.getElementById('su-ln').value.trim();
  const email = document.getElementById('su-email').value.trim();
  const pw = document.getElementById('su-pw').value;
  const pw2 = document.getElementById('su-pw2').value;
  if (!fn || !ln || !email || !pw) { showToast('Tous les champs sont obligatoires'); return; }
  if (pw.length < 6) { showToast('Mot de passe : 6 caractères minimum'); return; }
  if (pw !== pw2) { showToast('Les mots de passe ne correspondent pas'); return; }
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ firstName: fn, lastName: ln, email, password: pw })
    });
    const data = await res.json();
    if (!res.ok || data.error) { showToast(data.error || 'Erreur lors de l\'inscription'); return; }
    authToken = data.token;
    S.cp = data.parent;
    S.parents = [data.parent];
    localStorage.setItem('pg_auth', JSON.stringify({ token: data.token, parent: data.parent }));
    await startApp(true);
  } catch(e) { showToast('Erreur de connexion au serveur'); }
}

window.doLogin = async function() {
  const email = document.getElementById('li-email').value.trim();
  const pw = document.getElementById('li-pw').value;
  if (!email || !pw) { showToast('Email et mot de passe requis'); return; }
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password: pw })
    });
    const data = await res.json();
    if (!res.ok || data.error) { showToast(data.error || 'Identifiants incorrects'); return; }
    authToken = data.token;
    S.cp = data.parent;
    S.parents = [data.parent];
    localStorage.setItem('pg_auth', JSON.stringify({ token: data.token, parent: data.parent }));
    await startApp(false);
  } catch(e) { showToast('Erreur de connexion au serveur'); }
}

window.doLogout = function() {
  localStorage.removeItem('pg_auth');
  localStorage.removeItem('pg_onboarded');
  localStorage.removeItem('pg_lastpage');
  authToken = null;
  S.cp = null;
  S.parents = [];
  showAuthPage();
}

// ============= ONBOARDING =============
function showOnboarding() {
  const steps = [
    { ico: 'home', title: 'Tableau de bord', desc: 'Votre page d\'accueil personnalisée avec les alertes, conseils du jour et outils adaptés à l\'âge de votre enfant.' },
    { ico: 'cal', title: 'Agenda', desc: 'Planifiez et suivez tous les rendez-vous médicaux, vaccins, activités et notes importantes.' },
    { ico: 'book', title: 'Carnet de bord', desc: 'Notez toutes les grandes premières de votre enfant : premiers pas, premiers mots, sourires...' },
    { ico: 'chart', title: 'Suivi & Courbes', desc: 'Suivez la croissance (poids, taille) et le sommeil de votre enfant avec des graphiques visuels.' },
    { ico: 'compass', title: 'Repères & Guide', desc: 'Accédez aux repères de développement par âge et au guide du quotidien (sommeil, alimentation, santé...).' },
    { ico: 'user', title: 'Mon profil', desc: 'Gérez vos enfants, consultez le calendrier famille, le bilan personnalisé et la boîte à idées.' }
  ];
  let current = 0;
  const overlay = document.createElement('div');
  overlay.id = 'onboarding-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
  function renderStep() {
    const s = steps[current];
    const isLast = current === steps.length - 1;
    overlay.innerHTML = '<div style="background:white;border-radius:20px;max-width:380px;width:100%;padding:30px 24px;text-align:center;animation:fadeIn .3s ease">' +
      '<div style="width:60px;height:60px;border-radius:50%;background:var(--pk);display:flex;align-items:center;justify-content:center;margin:0 auto 16px">' + ico(s.ico, 28) + '</div>' +
      '<h3 style="font-size:18px;font-weight:800;margin-bottom:8px;color:var(--tx)">' + s.title + '</h3>' +
      '<p style="font-size:13px;color:var(--tx2);line-height:1.6;margin-bottom:20px">' + s.desc + '</p>' +
      '<div style="display:flex;justify-content:center;gap:6px;margin-bottom:16px">' + steps.map((_, i) => '<div style="width:8px;height:8px;border-radius:50%;background:' + (i === current ? 'var(--pk3)' : 'var(--bd)') + '"></div>').join('') + '</div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        (current > 0 ? '<button onclick="window._obPrev()" style="padding:10px 20px;border-radius:12px;border:1px solid var(--bd);background:white;font-size:13px;font-weight:600;cursor:pointer">Précédent</button>' : '') +
        '<button onclick="window._obNext()" style="padding:10px 24px;border-radius:12px;border:none;background:var(--pk3);color:white;font-size:13px;font-weight:700;cursor:pointer">' + (isLast ? 'C\'est parti !' : 'Suivant') + '</button>' +
      '</div>' +
      '<button onclick="window._obSkip()" style="margin-top:12px;background:none;border:none;color:var(--tx3);font-size:11px;cursor:pointer">Passer le tutoriel</button>' +
    '</div>';
  }
  window._obNext = function() { if (current < steps.length - 1) { current++; renderStep(); } else { finishOnboarding(); } };
  window._obPrev = function() { if (current > 0) { current--; renderStep(); } };
  window._obSkip = function() { finishOnboarding(); };
  function finishOnboarding() {
    overlay.remove();
    localStorage.setItem('pg_onboarded', '1');
    delete window._obNext; delete window._obPrev; delete window._obSkip;
  }
  renderStep();
  document.body.appendChild(overlay);
}

// ============= APP START =============
async function startApp(isNewUser) {
  document.body.classList.remove('auth-mode');
  document.getElementById('navbar').style.display = '';
  await Promise.all([loadDynamicContent(), syncUserProfile()]);
  if (isNewUser || !localStorage.getItem('pg_onboarded')) {
    go('home');
    await loadHome();
    showOnboarding();
  } else {
    const lastPage = localStorage.getItem('pg_lastpage');
    const validPages = ['home','agenda','milestones','growth','guide','profile','suggestions'];
    go(validPages.includes(lastPage) ? lastPage : 'profile');
  }
}

// ============= INIT =============
(async()=>{
  if (checkAuth()) {
    await startApp(false);
  } else {
    showAuthPage();
  }
})();
// Re-check reminders every 2 minutes so reminderMinutes windows trigger on time
setInterval(()=>{if(document.visibilityState==='visible'&&document.getElementById('p-home').classList.contains('active')){loadHome()}},120000);
