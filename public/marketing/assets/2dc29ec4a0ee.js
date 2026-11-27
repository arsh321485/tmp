(function(){
const root=document.getElementById('demo-reel');if(!root)return;
const css=`.dr{display:grid;grid-template-columns:340px minmax(0,1fr);gap:40px;align-items:start}
.dr-pf{display:inline-flex;background:var(--surface-2);border:1px solid var(--line);border-radius:999px;padding:4px;gap:4px}
.dr-pf button{display:flex;align-items:center;gap:8px;border:0;background:transparent;border-radius:999px;padding:8px 14px;font:700 13.5px var(--ui);color:var(--muted);cursor:pointer}
.dr-pf button.on{background:var(--surface);color:var(--ink);box-shadow:0 1px 3px rgba(20,21,22,.12)}
.dr-pf svg{width:16px;height:16px}
.dr-tabs{display:flex;flex-direction:column;gap:10px;margin-top:18px}
.dr-tab{position:relative;overflow:hidden;display:block;width:100%;text-align:left;border:1px solid var(--line);background:var(--surface);border-radius:var(--rm);padding:18px 20px;cursor:pointer;font:inherit;color:inherit;transition:border-color .2s}
.dr-tab:hover{border-color:var(--line-strong)}.dr-tab.on{border-color:var(--ink)}
.dr-tab b{display:block;font-family:var(--disp);font-size:17px;color:var(--ink);letter-spacing:-.01em}
.dr-tab>span{display:block;font-size:14px;color:var(--muted)}
.dr-tab ol{display:none;list-style:none;margin:14px 0 2px;padding:0;counter-reset:s}
.dr-tab.on ol{display:block}
.dr-tab li{counter-increment:s;position:relative;padding:5px 0 5px 30px;font-size:13.5px;line-height:1.4;color:var(--faint);transition:color .3s}
.dr-tab li::before{content:counter(s);position:absolute;left:0;top:4px;width:20px;height:20px;border-radius:50%;border:1px solid var(--line-strong);display:grid;place-items:center;font-size:11px;font-weight:800;color:var(--faint);background:#fff;transition:all .3s}
.dr-tab li.on{color:var(--ink);font-weight:700}.dr-tab li.on::before{background:var(--red);border-color:var(--red);color:#fff}
.dr-tab li.done{color:var(--text)}.dr-tab li.done::before{content:"✓";background:var(--ok);border-color:var(--ok);color:#fff}
.dr-bar{position:absolute;left:0;bottom:0;height:3px;width:0;background:var(--red);transition:width .8s}
.dr-win{position:relative;display:grid;grid-template-columns:190px minmax(0,1fr);height:620px;background:#fff;border:1px solid var(--line);border-radius:var(--rl);overflow:hidden;box-shadow:0 40px 80px -40px rgba(20,21,22,.35),0 2px 6px rgba(20,21,22,.05)}
.dr-side{padding:16px 10px;font-size:13.5px;background:#2a1b2d;color:#cbbfcc}
.dr-side h4{margin:0 8px 14px;font-family:var(--disp);font-size:15px;color:#fff;letter-spacing:-.01em}
.dr-side small{display:block;margin:12px 8px 6px;font-size:11px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;opacity:.7}
.dr-side div{padding:5px 8px;border-radius:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dr-side div.on{background:#4d6fb8;color:#fff;font-weight:700}
.is-teams .dr-side{background:#f0f0f5;color:#424242}
.is-teams .dr-side h4{color:#242424}
.is-teams .dr-side div.on{background:#fff;color:#4f52b2;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.dr-main{display:flex;flex-direction:column;min-width:0;min-height:0}
.dr-head{flex:none;display:flex;align-items:center;gap:10px;height:56px;padding:0 20px;border-bottom:1px solid var(--line);font-family:var(--disp);font-weight:700;font-size:15px;color:var(--ink)}
.dr-head small{margin-left:auto;font-family:var(--ui);font-size:12.5px;font-weight:600;color:var(--faint)}
.dr-head .tabs{display:flex;gap:14px;margin-left:8px;font-family:var(--ui);font-size:13px;font-weight:600;color:var(--muted)}
.dr-head .tabs span.on{color:#4f52b2;box-shadow:0 2px 0 #4f52b2;padding-bottom:4px}
.dr-feed{flex:1;min-height:0;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:12px 20px 4px;overflow:hidden;-webkit-mask-image:linear-gradient(transparent,#000 70px);mask-image:linear-gradient(transparent,#000 70px)}
.is-teams .dr-feed{background:#f7f7f9}
.dr-m{flex:none;display:grid;grid-template-columns:36px minmax(0,1fr);gap:10px;padding:7px 0;animation:drin .45s cubic-bezier(.2,.8,.2,1) both}
@keyframes drin{from{opacity:0;transform:translateY(16px)}}
.dr-av{width:36px;height:36px;border-radius:8px;display:grid;place-items:center;overflow:hidden;color:#fff;font-weight:800;font-size:13px}
.dr-av img{width:100%;height:100%;display:block}
.dr-av.bot{background:#fff;border:1px solid var(--line)}
.is-teams .dr-av{border-radius:50%}
.is-teams .dr-m>div:last-child{background:#fff;border-radius:6px;padding:8px 12px;box-shadow:0 1px 2px rgba(0,0,0,.07)}
.dr-who{display:flex;align-items:baseline;gap:8px;font-size:14px;font-weight:800;color:var(--ink)}
.dr-who i{font-style:normal;font-size:10px;font-weight:800;background:var(--surface-2);color:var(--muted);border-radius:4px;padding:1px 5px}
.dr-who small{font-size:11.5px;font-weight:600;color:var(--faint)}
.dr-tx{font-size:14.5px;line-height:1.5;color:var(--text)}
.dr-tx code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;background:var(--surface-2);border:1px solid var(--line);border-radius:5px;padding:2px 6px;color:var(--red-deep)}
.dr-log{font-size:13.5px;font-weight:700;color:var(--ok)}
.dr-card{margin-top:6px;background:#fff;border:1px solid var(--line);border-left:4px solid var(--c,var(--red));border-radius:8px;padding:12px 14px}
.is-teams .dr-card{border-left-width:1px;border-top:4px solid var(--c,var(--red))}
.dr-k{display:flex;justify-content:space-between;gap:10px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--c,var(--red-deep))}
.dr-k b{font-family:var(--disp);font-size:15px;letter-spacing:0;color:var(--ink);font-variant-numeric:tabular-nums}
.dr-t{margin-top:4px;font-family:var(--disp);font-size:15.5px;font-weight:700;line-height:1.3;color:var(--ink);text-wrap:pretty}
.dr-f{display:grid;grid-template-columns:auto minmax(0,1fr);gap:3px 12px;margin:8px 0 0;font-size:13px}
.dr-f dt{color:var(--faint);font-weight:600}.dr-f dd{margin:0;color:var(--ink);font-weight:700}
.dr-b{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.dr-b span{border:1px solid var(--line-strong);border-radius:6px;padding:5px 11px;font-size:12.5px;font-weight:700;color:var(--ink);transition:transform .15s,box-shadow .2s,opacity .3s,background .3s}
.dr-b span:first-child{background:var(--ok);border-color:var(--ok);color:#fff}
.is-teams .dr-b span{border-radius:4px}.is-teams .dr-b span:first-child{background:#5b5fc7;border-color:#5b5fc7}
.dr-b span.clk{transform:scale(.93);box-shadow:0 0 0 5px rgba(20,21,22,.12)}
.dr-b.done span{opacity:.35}.dr-b.done span.sel{opacity:1}
.dr-rep{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;margin-top:10px}
.dr-rep div{background:var(--surface-2);border-radius:6px;padding:8px 10px;min-width:0}
.dr-rep small{display:block;font-size:10.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.dr-rep b{display:block;font-family:var(--disp);font-size:16px;color:var(--ok);line-height:1.3}
.dr-rep .no b{color:var(--red)}
.dr-rep span{display:block;font-size:11.5px;color:var(--faint)}
.dr-ft{margin-top:8px;font-size:12.5px;font-weight:700;color:var(--muted)}
.dr-typ{flex:none;height:22px;padding:0 20px;font-size:12.5px;color:var(--faint);opacity:0;transition:opacity .2s}
.dr-typ.on{opacity:1}
.is-teams .dr-typ{background:#f7f7f9}
.dr-comp{flex:none;display:flex;align-items:center;gap:2px;min-height:46px;margin:0 20px 16px;padding:0 14px;border:1px solid var(--line-strong);border-radius:10px;font-size:14px;color:var(--faint);background:#fff}
.dr-comp.ty{color:var(--ink);border-color:var(--ink)}
.dr-comp.ty::after{content:"";width:2px;height:18px;background:var(--ink);animation:drc 1s steps(2) infinite}
@keyframes drc{50%{opacity:0}}
.is-teams .dr-comp{border-radius:6px;border-bottom:2px solid #5b5fc7}
.dr-cur{position:absolute;z-index:5;left:75%;top:105%;width:22px;height:22px;pointer-events:none;transition:left .7s cubic-bezier(.5,0,.2,1),top .7s cubic-bezier(.5,0,.2,1);filter:drop-shadow(0 2px 3px rgba(0,0,0,.3))}
@media (max-width:980px){.dr{grid-template-columns:minmax(0,1fr)}.dr-tab ol{display:none!important}}
@media (max-width:760px){.dr-win{grid-template-columns:minmax(0,1fr);height:580px}.dr-side{display:none}.dr-rep{grid-template-columns:minmax(0,1fr)}.dr-head .tabs{display:none}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const STEPS=['Launch with one command','Every role gets its exact action','One tap to respond, clock running','Live inject tests decisions','Evidence report, ready for audit'];
const MODS=[
{id:'bc',name:'Business Continuity',sub:'Primary data centre outage',ch:'bcm-drill',tch:'BCM drill',ppl:'9 members',
admin:{n:'Maya Chen',c:'#006767'},cmd:'/testmyplan run bc "Primary data centre outage"',
launch:{t:'Primary data centre outage — DC‑1 unavailable',f:[['Critical processes','Payments · Customer service · Payroll'],['People notified','9 across 3 teams'],['Targets','RTO 4h · RPO 1h · MTPOD 24h']]},
move:{who:{n:'Daniel Okafor',c:'#6b2a6e'},role:'IT Recovery Lead',backup:'Sam Lee',t:'Invoke DR failover for the payments platform',m:14,s:59},
reply:'Failover started — DR site coming up now.',done:'✓ Daniel completed in 2m 41s · within target',
inject:{k:'Inject · T+45m',t:'DR replication is 3 hours behind. Payments data since 09:00 is at risk.',b:['Restore from backup','Accept data loss','Escalate']},injDone:'✓ Decision logged by Maya Chen · Restore from backup',
report:{t:'Primary data centre outage',m:[['RTO','Target 4h','3h 12m',1],['RPO','Target 1h','3h',0],['MTPOD','Target 24h','Within',1]],foot:'1 gap found · added to the remediation plan'}},
{id:'cy',name:'Cybersecurity',sub:'Ransomware on file servers',ch:'ir-war-room',tch:'IR war room',ppl:'12 members',
admin:{n:'Arjun Mehta',c:'#a85a12'},cmd:'/testmyplan run cyber "Ransomware on file servers"',
launch:{t:'Ransomware spreading from file server FS‑02',f:[['Plan','IR plan v4 · 5 phases'],['People notified','12 across 4 teams'],['Phase','1 of 5 · Detect & triage']]},
move:{who:{n:'Priya Shah',c:'#b2111a'},role:'Incident Commander',backup:'Tom Reyes',t:'Authorise network isolation of the finance VLAN',m:9,s:59},
reply:'Isolation authorised. SOC, confirm once the VLAN is cut.',done:'✓ Priya completed in 3m 12s · within target',
inject:{k:'Inject · Phase 3',t:'Attackers post a ransom note claiming 200 GB was exfiltrated.',b:['Brief legal & comms','Engage negotiator','Escalate']},injDone:'✓ Decision logged by Arjun Mehta · Brief legal & comms',
report:{t:'Ransomware on file servers',m:[['Containment','Target 15m','11m',1],['Escalation','Target 30m','22m',1],['Roles responded','Target 12','11 of 12',0]],foot:'1 role missed · backup reassigned automatically'}},
{id:'pr',name:'Privacy',sub:'Customer database exfiltrated',ch:'privacy-response',tch:'Privacy response',ppl:'7 members',
admin:{n:'Elena Rossi',c:'#6b2a6e'},cmd:'/testmyplan run privacy "Customer database exfiltrated"',
launch:{t:'Customer database exfiltrated — ~48,000 records',f:[['Regulator clock','72h · GDPR Art. 33'],['People notified','7 across 3 teams'],['Data types','Names · Emails · Order history']]},
move:{who:{n:'Marcus Lee',c:'#006767'},role:'Legal Counsel',backup:'Aisha Khan',t:'Assess whether the notification threshold is met',m:59,s:59},
reply:'Threshold met — drafting the notice to the supervisory authority.',done:'✓ Marcus completed in 38m · regulator clock at 71h 22m',
inject:{k:'Inject · T+6h',t:'A journalist asks for comment on the leaked customer data.',b:['Route to comms lead','No comment','Escalate']},injDone:'✓ Decision logged by Elena Rossi · Route to comms lead',
report:{t:'Customer database exfiltrated',m:[['Assessment','Target 1h','38m',1],['Regulator notice','Target 72h','19h',1],['Subject notice','Template','Missing',0]],foot:'1 gap found · notice template added to the plan'}}];
let mi=0,pf='slack',tk={dead:true},vis=false,tmin=0;
root.innerHTML=`<div class="dr"><div><div class="dr-pf" role="tablist" aria-label="Platform"><button type="button" data-pf="slack" class="on"><svg><use href="#slack"></use></svg>Slack</button><button type="button" data-pf="teams"><svg><use href="#teams"></use></svg>Microsoft Teams</button></div><div class="dr-tabs">${MODS.map((m,i)=>`<button type="button" class="dr-tab" data-m="${i}"><b>${m.name}</b><span>${m.sub}</span><ol>${STEPS.map(s=>`<li>${s}</li>`).join('')}</ol><i class="dr-bar"></i></button>`).join('')}</div></div><div class="dr-win"><aside class="dr-side"></aside><div class="dr-main"><div class="dr-head"></div><div class="dr-feed" aria-live="off"></div><div class="dr-typ">TestMyPlan is typing…</div><div class="dr-comp"></div></div><svg class="dr-cur" viewBox="0 0 24 24"><path d="M4 2l15 11-6.5 1.2L16 21l-3 1.4-3.4-6.9L4 20z" fill="#141516" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"></path></svg></div></div>`;
const win=root.querySelector('.dr-win'),side=root.querySelector('.dr-side'),head=root.querySelector('.dr-head'),feed=root.querySelector('.dr-feed'),typ=root.querySelector('.dr-typ'),comp=root.querySelector('.dr-comp'),cur=root.querySelector('.dr-cur');
const tabs=[...root.querySelectorAll('.dr-tab')];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function chrome(){const m=MODS[mi];win.classList.toggle('is-teams',pf==='teams');
if(pf==='slack'){side.innerHTML=`<h4>Acme Corp</h4><small>Channels</small>${['general','ir-war-room','bcm-drill','privacy-response','testmyplan-command-center'].map(c=>`<div class="${c===m.ch?'on':''}"># ${c}</div>`).join('')}<small>Apps</small><div>TestMyPlan</div>`;head.innerHTML=`# ${m.ch} <span class="live">LIVE DRILL</span><small>${m.ppl}</small>`;comp.dataset.ph='Message #'+m.ch}
else{side.innerHTML=`<h4>Teams</h4><small>Acme Response</small>${['General','IR war room','BCM drill','Privacy response','Command center'].map(c=>`<div class="${c===m.tch?'on':''}">${c}</div>`).join('')}`;head.innerHTML=`${m.tch} <span class="live">LIVE DRILL</span><span class="tabs"><span class="on">Posts</span><span>Files</span><span>TestMyPlan</span></span><small>${m.ppl}</small>`;comp.dataset.ph='Type a message'}
if(!comp.classList.contains('ty'))comp.textContent=comp.dataset.ph}
function setStep(n){const t=tabs[mi];t.querySelectorAll('li').forEach((li,i)=>li.className=i<n?'done':i===n?'on':'');t.querySelector('.dr-bar').style.width=Math.min(100,(n+1)/STEPS.length*100)+'%'}
async function wait(ms,k){let t=0;while(t<ms){await new Promise(r=>setTimeout(r,100));if(k.dead)throw 0;if(vis)t+=100}}
const clock=()=>{const d=new Date(2026,0,1,10,tmin);tmin+=1;return d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})};
const initials=n=>n.split(' ').map(x=>x[0]).join('');
function post(p,inner){const el=document.createElement('div');el.className='dr-m';el.innerHTML=(p.bot?'<div class="dr-av bot"><img src="'+((window.__resources&&window.__resources.tmpLogo)||'assets/tmp-logo.svg')+'" alt=""></div>':`<div class="dr-av" style="background:${p.c}">${initials(p.n)}</div>`)+`<div><div class="dr-who">${p.bot?'TestMyPlan <i>APP</i>':esc(p.n)}<small>${clock()}</small></div>${inner}</div>`;feed.appendChild(el);while(feed.children.length>7)feed.firstElementChild.remove();return el}
const BOT={bot:1};
async function bot(inner,k){typ.classList.add('on');await wait(700,k);typ.classList.remove('on');return post(BOT,inner)}
async function click(btn,k){const w=win.getBoundingClientRect(),r=btn.getBoundingClientRect();cur.style.left=(r.left-w.left+r.width*.55)+'px';cur.style.top=(r.top-w.top+r.height*.5)+'px';await wait(800,k);btn.classList.add('clk');await wait(200,k);btn.classList.remove('clk');btn.classList.add('sel');btn.parentNode.classList.add('done');await wait(300,k);cur.style.left='75%';cur.style.top='105%'}
const card=(c,k,t,body)=>`<div class="dr-card" style="--c:${c}"><div class="dr-k">${k}</div><div class="dr-t">${esc(t)}</div>${body}</div>`;
const facts=f=>`<dl class="dr-f">${f.map(([a,b])=>`<dt>${a}</dt><dd>${esc(b)}</dd>`).join('')}</dl>`;
const btns=b=>`<div class="dr-b">${b.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
async function run(k){const m=MODS[mi];tmin=0;feed.innerHTML='';comp.classList.remove('ty');chrome();
setStep(0);await wait(700,k);comp.classList.add('ty');comp.textContent='';for(const ch of m.cmd){comp.textContent+=ch;await wait(ch===' '?60:35,k)}await wait(400,k);comp.classList.remove('ty');comp.textContent=comp.dataset.ph;
post(m.admin,`<div class="dr-tx"><code>${esc(m.cmd)}</code></div>`);await wait(300,k);
await bot(card('var(--red)','Drill launched · '+m.name,m.launch.t,facts(m.launch.f)),k);await wait(2200,k);
setStep(1);const mv=m.move;const el=await bot(card('var(--red)',`Your move · @${mv.who.n} <b class="tm">${mv.m}:${String(mv.s).padStart(2,'0')}</b>`,mv.t,facts([['Your role',mv.role],['Backup',mv.backup]])+btns(['Done','Need help','Hand to backup'])),k);
let sec=mv.m*60+mv.s;const tmEl=el.querySelector('.tm');const iv=setInterval(()=>{if(!vis)return;sec--;tmEl.textContent=Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0')},1000);
try{await wait(2200,k);setStep(2);await click(el.querySelector('.dr-b span'),k)}finally{clearInterval(iv)}
tmEl.textContent='Done';await wait(500,k);post(mv.who,`<div class="dr-tx">${esc(m.reply)}</div>`);await wait(700,k);await bot(`<div class="dr-log">${esc(m.done)}</div>`,k);await wait(1800,k);
setStep(3);const ij=await bot(card('var(--amber)',m.inject.k,m.inject.t,btns(m.inject.b)),k);await wait(1800,k);await click(ij.querySelector('.dr-b span'),k);await wait(300,k);await bot(`<div class="dr-log">${esc(m.injDone)}</div>`,k);await wait(1800,k);
setStep(4);await bot(card('var(--ink)','Drill report · Evidence ready',m.report.t,`<div class="dr-rep">${m.report.m.map(([a,t,v,ok])=>`<div class="${ok?'':'no'}"><small>${a}</small><b>${v}</b><span>${t}</span></div>`).join('')}</div><div class="dr-ft">${m.report.foot}</div>`+btns(['Open report','Export evidence'])),k);
setStep(5);await wait(5000,k)}
async function loop(k){while(!k.dead){try{await run(k)}catch(e){return}if(k.dead)return;mi=(mi+1)%MODS.length;sel()}}
function sel(){tabs.forEach((t,i)=>{t.classList.toggle('on',i===mi);t.setAttribute('aria-pressed',i===mi);if(i!==mi){t.querySelector('.dr-bar').style.width='0';t.querySelectorAll('li').forEach(li=>li.className='')}})}
function start(){tk.dead=true;tk={dead:false};sel();loop(tk)}
tabs.forEach((t,i)=>t.onclick=()=>{mi=i;start()});
root.querySelectorAll('[data-pf]').forEach(b=>b.onclick=()=>{pf=b.dataset.pf;root.querySelectorAll('[data-pf]').forEach(x=>x.classList.toggle('on',x===b));chrome()});
chrome();sel();
new IntersectionObserver(es=>{vis=es[0].isIntersecting},{threshold:.25}).observe(win);
start();
})();
