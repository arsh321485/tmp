(function(){
const M={c:'Cybersecurity',p:'Privacy',b:'Business Continuity',t:'Preparedness Testing'};
const ISO=['ISO / Internal audit','ISO 27001 · ISO 22301','Provide evidence of regular incident response and continuity testing.','t'];
const R={
PH:{n:'Philippines',r:[['NPC','Data Privacy Act 2012 · NPC Circular 16-03','Notify the NPC and affected data subjects within 72 hours of a personal data breach.','p'],['BSP','Circular 951 (BCM) · Circular 982 (IT Risk)','Maintain and regularly test cyber incident response and business continuity plans.','c,b'],['DICT','National Cybersecurity Plan','Critical information infrastructure must report incidents and run readiness exercises.','c']]},
IN:{n:'India',r:[['CERT-In','Directions 20(3)/2022','Report specified cyber incidents to CERT-In within 6 hours of noticing them.','c'],['Data Protection Board','DPDP Act 2023 · DPDP Rules','Notify the Board and each affected data principal of a personal data breach.','p'],['RBI','Master Direction on IT Governance 2023','Maintain a cyber crisis management plan; test BCP and DR arrangements regularly.','c,b'],['SEBI','CSCRF 2024','Conduct cyber resilience drills and maintain tested incident response plans.','c']]},
SG:{n:'Singapore',r:[['PDPC','PDPA Part 6A','Notify the PDPC within 3 calendar days of assessing a notifiable data breach.','p'],['MAS','Technology Risk Management Guidelines · Notice 644','Report relevant incidents within 1 hour; test incident response and recovery plans.','c'],['MAS','Business Continuity Management Guidelines','Set recovery time objectives for critical business services and test them.','b'],['CSA','Cybersecurity Act 2018','CII owners must report incidents and take part in national cyber exercises.','c']]},
AE:{n:'United Arab Emirates',r:[['UAE Data Office','Federal Decree-Law 45/2021 (PDPL)','Notify the Data Office and affected data subjects of breaches affecting personal data.','p'],['TDRA','UAE Information Assurance Regulation','Establish, test and maintain information security incident management.','c'],['NCEMA','NCEMA 7000','Implement and exercise a business continuity management system.','b']]},
SA:{n:'Saudi Arabia',r:[['NCA','Essential Cybersecurity Controls (ECC)','Manage cybersecurity incidents and threats, and maintain cyber resilience.','c'],['SDAIA','Personal Data Protection Law','Notify SDAIA within 72 hours of becoming aware of a personal data breach.','p'],['SAMA','Business Continuity Management Framework','Test business continuity and disaster recovery plans for critical activities.','b']]},
GB:{n:'United Kingdom',r:[['ICO','UK GDPR Article 33','Notify the ICO within 72 hours of becoming aware of a reportable personal data breach.','p'],['FCA / PRA','Operational resilience · SYSC 15A','Set impact tolerances for important business services and scenario-test them.','b'],['NCSC / regulators','NIS Regulations 2018','Operators of essential services must report significant incidents without undue delay.','c']]},
EU:{n:'European Union',r:[['Data protection authority','GDPR Article 33','Notify the supervisory authority within 72 hours of a personal data breach.','p'],['National CSIRT','NIS2 Directive Article 23','Early warning within 24 hours and incident notification within 72 hours.','c'],['Financial supervisors','DORA','Report major ICT incidents and run digital operational resilience testing.','c,b']]},
US:{n:'United States',r:[['SEC','Form 8-K Item 1.05','Disclose material cybersecurity incidents within 4 business days of determining materiality.','c'],['NYDFS','23 NYCRR 500','Notify within 72 hours; maintain and test incident response and BCDR plans annually.','c,b'],['HHS','HIPAA Breach Notification Rule','Notify affected individuals without unreasonable delay, no later than 60 days.','p'],['FFIEC','Business Continuity Management booklet','Exercise and test business continuity and resilience plans.','b']]},
AU:{n:'Australia',r:[['OAIC','Notifiable Data Breaches scheme','Assess suspected breaches within 30 days and notify eligible breaches promptly.','p'],['APRA','CPS 234','Notify APRA within 72 hours; test information security response plans annually.','c'],['APRA','CPS 230','Maintain and test a business continuity plan for critical operations.','b'],['CISC','SOCI Act 2018','Report critical cyber security incidents within 12 hours.','c']]},
CA:{n:'Canada',r:[['OPC','PIPEDA breach of security safeguards','Report breaches posing a real risk of significant harm as soon as feasible.','p'],['OSFI','Guideline B-13','Maintain cyber incident response and recovery capabilities.','c'],['OSFI','Guideline E-21','Set tolerances for disruption to critical operations and test against them.','b']]},
MY:{n:'Malaysia',r:[['PDP Commissioner','PDPA (Amendment) 2024','Notify the Commissioner of personal data breaches within 72 hours.','p'],['BNM','Risk Management in Technology (RMiT)','Run cyber drills and test business continuity arrangements.','c,b'],['NACSA','Cyber Security Act 2024','NCII entities must report cyber security incidents and conduct exercises.','c']]},
ID:{n:'Indonesia',r:[['Kominfo / PDP Agency','Law 27/2022 (PDP Law)','Notify data subjects and the authority within 3 × 24 hours of a data breach.','p'],['OJK','POJK 11/2022','Banks must maintain and test business continuity and disaster recovery plans.','b'],['BSSN','Presidential Reg. 47/2023','Operators must handle and report cyber incidents.','c']]},
HK:{n:'Hong Kong',r:[['Commissioner\u2019s Office','Protection of Critical Infrastructures Ordinance','Report serious incidents within 12 hours and take part in security drills.','c'],['HKMA','SPM TM-G-2','Test business continuity plans for critical business functions.','b'],['PCPD','PDPO data breach guidance','Notify the PCPD and affected individuals of data breaches as soon as practicable.','p']]},
GL:{n:'Other / Global',r:[['NIST','Cybersecurity Framework 2.0','Respond and Recover functions: plan, test and improve incident response.','c'],['ISO','ISO/IEC 27035','Plan and prepare for information security incident management.','c'],['ISO','ISO 22301 clause 8.5','Exercise and test business continuity procedures at planned intervals.','b']]}
};
const EU='AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE'.split(' ');
const TZ={'Asia/Manila':'PH','Asia/Kolkata':'IN','Asia/Calcutta':'IN','Asia/Singapore':'SG','Asia/Dubai':'AE','Asia/Riyadh':'SA','Europe/London':'GB','Asia/Kuala_Lumpur':'MY','Asia/Jakarta':'ID','Asia/Hong_Kong':'HK','America/Toronto':'CA','America/Vancouver':'CA','America/Edmonton':'CA','America/Winnipeg':'CA','America/Halifax':'CA'};
const norm=c=>{c=(c||'').toUpperCase();if(R[c])return c;if(EU.includes(c))return 'EU';return null};
function fromTZ(){try{const z=Intl.DateTimeFormat().resolvedOptions().timeZone||'';if(TZ[z])return TZ[z];if(/^Australia\//.test(z))return 'AU';if(/^Europe\//.test(z))return 'EU';if(/^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Indiana)/.test(z)||/^Pacific\/Honolulu/.test(z))return 'US'}catch(e){}return null}
async function detect(){try{const c=new AbortController();setTimeout(()=>c.abort(),2500);const r=await fetch('https://ipapi.co/json/',{signal:c.signal});const j=await r.json();const k=norm(j.country_code||j.country);if(k)return{k,how:'ip'}}catch(e){}const t=fromTZ();return t?{k:t,how:'tz'}:{k:'GL',how:'none'}}
const css=`.cp-ov{position:fixed;inset:0;z-index:60;background:rgba(20,21,22,.5);display:none;place-items:center;padding:20px;overflow:auto}
.cp-ov.open{display:grid;animation:cpf .25s both}@keyframes cpf{from{opacity:0}}
.cp{position:relative;width:100%;max-width:960px;background:#fbf9f8;border-radius:20px;padding:34px 38px 30px;box-shadow:0 50px 100px -40px rgba(0,0,0,.6);font-family:"Manrope",system-ui,sans-serif;color:#2c2b2b;animation:cpu .3s both}@keyframes cpu{from{transform:translateY(12px);opacity:0}}
.cp-x{position:absolute;top:18px;right:18px;width:36px;height:36px;border-radius:50%;border:0;background:transparent;color:#948f8e;font-size:24px;line-height:1;cursor:pointer}.cp-x:hover{background:#f0eded;color:#141516}
.cp-h{display:flex;flex-wrap:wrap;align-items:center;gap:14px 20px;padding-right:40px}
.cp-h img{width:40px;height:40px;display:block}
.cp-h h3{font-family:"Sora",system-ui,sans-serif;font-size:26px;font-weight:700;letter-spacing:-.025em;color:#141516;margin:0;flex:1;min-width:220px}
.cp-sel{appearance:none;-webkit-appearance:none;font:inherit;font-size:15px;font-weight:700;color:#fff;background:#141516 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") right 14px center/16px no-repeat;border:0;border-radius:999px;height:44px;padding:0 44px 0 20px;cursor:pointer;min-width:220px}
.cp-sel:focus{outline:2px solid #e2141b;outline-offset:2px}
.cp-lede{font-size:16.5px;line-height:1.6;color:#625e5d;margin:16px 0 22px;max-width:760px}.cp-lede b{color:#141516}
.cp-t{width:100%;border-collapse:separate;border-spacing:0;background:#141516;border-radius:14px;overflow:hidden;font-size:15px;line-height:1.45}
.cp-t th{text-align:left;color:#fff;font-family:"Sora",system-ui,sans-serif;font-size:13.5px;font-weight:700;padding:16px 18px;border-bottom:3px solid #e2141b}
.cp-t td{color:#e6e2e1;padding:16px 18px;vertical-align:top;border-top:1px solid #2a2c2d}
.cp-t tr:nth-child(even) td{background:#1c1e1f}
.cp-t td:first-child{color:#fff;font-weight:800}
.cp-t td:nth-child(2){color:#b3aead;font-weight:600}
.cp-m{display:flex;flex-wrap:wrap;gap:6px}
.cp-m span{font-size:12px;font-weight:800;border-radius:6px;padding:3px 9px;white-space:nowrap;color:#141516}
.m-c{background:#ffc4c0}.m-p{background:#d9c2f0}.m-b{background:#a9e0e0}.m-t{background:#fff}
.cp-f{display:flex;flex-wrap:wrap;gap:12px 16px;align-items:center;margin-top:22px}
.cp-f small{flex:1;min-width:240px;font-size:12.5px;color:#948f8e;line-height:1.5}
.cp-btn{display:inline-flex;align-items:center;justify-content:center;height:50px;padding:0 24px;border-radius:10px;font:inherit;font-weight:800;font-size:15px;cursor:pointer;border:1px solid transparent;text-decoration:none;transition:transform .15s}
.cp-btn:hover{transform:translateY(-1px)}
.cp-pri{background:#e2141b;color:#fff}.cp-pri:hover{background:#b2111a;color:#fff}
.cp-sec{background:#fff;color:#141516;border-color:#d6d2d1}.cp-sec:hover{border-color:#141516;color:#141516}
.cp-pill{position:fixed;right:20px;top:84px;z-index:40;display:flex;align-items:center;gap:10px;background:#141516;color:#fff;border:0;border-radius:999px;padding:10px 18px 10px 10px;font:inherit;font-family:"Manrope",system-ui,sans-serif;font-size:14px;font-weight:700;cursor:pointer;box-shadow:0 14px 30px -12px rgba(0,0,0,.5)}
.cp-pill i{font-style:normal;background:#5cd0cb;color:#141516;font-weight:800;font-size:12px;border-radius:999px;padding:3px 9px}
.cp-pill:hover{background:#e2141b}.cp-pill.solo{padding-left:18px}
@media (max-width:760px){.cp{padding:28px 20px 22px}.cp-t thead{display:none}.cp-t,.cp-t tbody,.cp-t tr,.cp-t td{display:block}.cp-t tr{padding:14px 18px;border-top:1px solid #2a2c2d}.cp-t tr:first-child{border-top:0}.cp-t td{padding:3px 0;border:0;background:transparent!important}.cp-t td:nth-child(3){margin:6px 0 8px}.cp-sel{width:100%}.cp-btn{flex:1}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const ov=document.createElement('div');ov.className='cp-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','Regulatory requirements');
const pill=document.createElement('button');pill.type='button';pill.className='cp-pill';
document.body.append(ov,pill);
let cur='GL',how='none',all=false;
const opts=Object.keys(R).map(k=>`<option value="${k}">${R[k].n}</option>`).join('');
function rows(){const r=[...R[cur].r,ISO];return all?r:r.slice(0,3).concat([ISO])}
function render(){const c=R[cur],det=how!=='none'&&cur===det0;const lede=cur==='GL'?'We couldn’t match your location to a region we cover yet. Below are widely used international expectations and how TestMyPlan helps you meet them.':`${det?'We’ve detected your location as':'Showing requirements for'} <b>${c.n}</b>. Below are example regulatory expectations and how TestMyPlan helps you stay compliant.`;const extra=R[cur].r.length>3;
ov.innerHTML=`<div class="cp"><button class="cp-x" type="button" aria-label="Close" data-cpx>×</button><div class="cp-h"><img src="${(window.__resources&&window.__resources.tmpLogo)||'assets/tmp-logo.svg'}" alt=""><h3>Regulatory requirements</h3><select class="cp-sel" aria-label="Country or region">${opts}</select></div><p class="cp-lede">${lede}</p><table class="cp-t"><thead><tr><th>Regulator</th><th>Control / Ref</th><th>Requirement</th><th>TMP module</th></tr></thead><tbody>${rows().map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><div class="cp-m">${r[3].split(',').map(m=>`<span class="m-${m}">${M[m]}</span>`).join('')}</div></td></tr>`).join('')}</tbody></table><div class="cp-f"><small>Examples for guidance only, not legal advice. Confirm the requirements that apply to you with your compliance team.</small>${extra?`<button type="button" class="cp-btn cp-sec" data-cpall>${all?'Show fewer':'View all requirements'}</button>`:''}<a href="#" class="cp-btn cp-pri" data-signup="choose" data-cpx>Sign up</a></div></div>`;
const s=ov.querySelector('select');s.value=cur;s.onchange=()=>{cur=s.value;all=false;render();label(cur)};
label(cur)}
const label=k=>{pill.classList.toggle('solo',k==='GL');pill.innerHTML=k==='GL'?'Compliance':`<i>${k}</i>Compliance in ${R[k].n}`};
let det0=null;
function open(){ov.classList.add('open');const s=ov.querySelector('select');s&&s.focus()}
function close(){ov.classList.remove('open')}
ov.addEventListener('click',e=>{if(e.target===ov||e.target.closest('[data-cpx]'))close();if(e.target.closest('[data-cpall]')){all=!all;render()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ov.classList.contains('open'))close()});
pill.onclick=open;

pill.classList.add('solo');pill.textContent='Compliance';
detect().then(d=>{cur=d.k;how=d.how;det0=d.k;render();let seen=false;try{seen=sessionStorage.getItem('tmp-compliance-seen')==='1';sessionStorage.setItem('tmp-compliance-seen','1')}catch(e){}if(!seen)setTimeout(open,2500)});
window.TMPCompliance={open};
})();
