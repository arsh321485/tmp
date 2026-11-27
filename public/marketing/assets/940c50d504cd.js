(function(){
if(document.getElementById('tk'))return;
const F=window.TMPFeed;if(!F)return;
const css=`.tk{position:fixed;left:0;right:0;bottom:0;z-index:40;display:flex;align-items:stretch;height:44px;background:#141516;color:#d9d5d4;border-top:1px solid #2d2f30;font-family:"Manrope",system-ui,sans-serif;font-size:13.5px;line-height:1}
.tk a{color:inherit;text-decoration:none;transform:none;transition:none}
.tk-l{flex:none;display:flex;align-items:center;gap:8px;background:#e2141b;color:#fff;font-family:"Sora",system-ui,sans-serif;font-weight:700;font-size:12.5px;letter-spacing:.08em;text-transform:uppercase;padding:0 18px;white-space:nowrap}
.tk-l::before{content:"";width:7px;height:7px;border-radius:50%;background:#fff;animation:tkp 1.4s infinite}
@keyframes tkp{50%{opacity:.25}}
.tk-v{flex:1;min-width:0;overflow:hidden;position:relative;-webkit-mask-image:linear-gradient(90deg,transparent,#000 24px,#000 calc(100% - 24px),transparent);mask-image:linear-gradient(90deg,transparent,#000 24px,#000 calc(100% - 24px),transparent)}
.tk-tr{display:flex;width:max-content;height:100%;animation:tkm 120s linear infinite}
.tk-v:hover .tk-tr{animation-play-state:paused}
@keyframes tkm{to{transform:translateX(-50%)}}
.tk-i{display:flex;align-items:center;gap:10px;padding:0 28px;white-space:nowrap;border-right:1px solid #2d2f30}
.tk-i b{color:#fff;font-weight:700}
.tk-i:hover{background:#1f2122}.tk-i:hover b{color:#5cd0cb;text-decoration:underline;text-underline-offset:3px}
.tk-i.fresh{animation:tkfl 1.2s ease-in-out infinite}
.tk-i.fresh>span{animation:tkfb 1.2s ease-in-out infinite}
.tk-i.fresh em{font-style:normal;font-size:10.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#fff;border:1px solid #fff;border-radius:4px;padding:2px 6px;animation:tkp 1.2s infinite}
@keyframes tkfl{50%{background:#3a1416}}
@keyframes tkfb{50%{box-shadow:0 0 0 3px rgba(226,20,27,.45)}}
.tk-i:focus-visible{outline:2px solid #5cd0cb;outline-offset:-2px}
.tk-i span{font-size:10.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#fff;border-radius:4px;padding:3px 7px}
.tk-i small{color:#948f8e;font-weight:600;font-size:12.5px}
.tk-r{flex:none;display:flex;align-items:center;padding:0 18px;font-weight:800;color:#fff;border-left:1px solid #2d2f30;white-space:nowrap}
.tk-r:hover{background:#e2141b}
body.has-tk{padding-bottom:44px}
@media (max-width:680px){.tk-r{display:none}.tk-l{padding:0 12px;font-size:11px}}
@media (prefers-reduced-motion:reduce){.tk-tr{animation-duration:530s}.tk-i.fresh,.tk-i.fresh>span,.tk-i.fresh em{animation:none}.tk-i.fresh{background:#2a1416}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const NM=window.name.indexOf('tmp|')===0?window.name.split('|'):null;
const here=(NM?NM[1]:decodeURIComponent(location.pathname.split('/').pop()))==='Live Threats.html';
if(NM){if(NM[2])setTimeout(()=>{location.hash=NM[2]},60);document.addEventListener('click',e=>{const l=e.target.closest&&e.target.closest('a[href]');if(!l)return;const m=l.getAttribute('href').match(/^([^:#?\/]+\.html)(#.*)?$/);if(!m)return;e.preventDefault();parent.postMessage({tmpGo:decodeURIComponent(m[1]),hash:m[2]?m[2].slice(1):''},'*')},true)}
const a=document.createElement('div');a.className='tk';a.id='tk';a.setAttribute('role','region');a.setAttribute('aria-label','Live threats');
a.innerHTML='<span class="tk-l">Live threats</span><span class="tk-v"><span class="tk-tr"></span></span><a class="tk-r" href="'+(here?'#top':'Live Threats.html')+'">'+(here?'Back to top ↑':'View all →')+'</a>';
if(here)a.querySelector('.tk-r').addEventListener('click',e=>{e.preventDefault();history.replaceState(null,'',location.pathname+location.search);scrollTo({top:0,behavior:'smooth'})});
let cur=[];
a.addEventListener('click',e=>{const i=e.target.closest('.tk-i');if(!i)return;const x=cur[+i.dataset.i];if(x)try{sessionStorage.setItem('tmp-ticker-pick',JSON.stringify(x))}catch(err){}});
document.body.appendChild(a);document.body.classList.add('has-tk');
const tr=a.querySelector('.tk-tr'),KEY='tmp-ticker-cache';
function paint(items){cur=items.slice(0,24);const pre=here?'#':'Live Threats.html#';const one=cur.map((x,i)=>{const t=F.T[x.type]||{label:x.type,color:'#625e5d'};return `<a class="tk-i${Date.now()-x.d<72e5?' fresh':''}" data-i="${i}" href="${pre}${F.id(x)}" title="Open this incident"><span style="background:${t.color}">${t.label}</span><b>${F.esc(x.title)}</b><small>${F.ago(x.d)}</small>${Date.now()-x.d<72e5?'<em>New</em>':''}</a>`}).join('');tr.innerHTML=one+one.replace(/<a /g,'<a tabindex="-1" aria-hidden="true" ')}
let cached=null;try{const c=JSON.parse(sessionStorage.getItem(KEY)||'null');if(c&&Date.now()-c.t<6e5)cached=c.items.map(x=>Object.assign(x,{d:new Date(x.d)}))}catch(e){}
paint(cached||F.samples());
async function load(){try{const d=await F.loadAll();if(d.items.length){paint(d.items);try{sessionStorage.setItem(KEY,JSON.stringify({t:Date.now(),items:d.items.slice(0,24)}))}catch(e){}}}catch(e){}}
if(!cached)load();setInterval(load,3e5);
})();
