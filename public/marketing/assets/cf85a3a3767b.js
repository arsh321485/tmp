window.DOC={meta:[['Updated','Nov 19, 2026'],['Cycle','Annual'],['','v1.0']],contact:'support@testmyplan.ai',groups:[
{label:'Product',items:[
{id:'executive-summary',title:'Executive Summary',lead:'TestMyPlan is a chat-native preparedness testing platform that runs incident response and business continuity drills inside Slack and Microsoft Teams, giving organisations measurable evidence of who can respond, how fast, and where plans break.',blocks:[
{h:'Overview',p:['Most organisations have incident response and business continuity plans, but few test them regularly. Testing is hard to orchestrate, roles are unclear, and the results rarely produce evidence an auditor or regulator can rely on. Plans drift out of date while the threat landscape keeps changing.','TestMyPlan closes that gap. It turns a written plan into live, timed actions for real people, delivered in the chat tools they already use, and records every response as audit-ready evidence.']},
{h:'Key Capabilities',ul:['Threat-led drills built from your organisation profile and confirmed threats','Role-based response teams with a mandatory backup for every role','Exact, timed actions delivered to each participant in Slack or Teams','Admin-injected scenario developments during a live drill','RTO, RPO and MTPOD validation for critical business processes','Evidence reports covering response times, gaps and training needs']},
{h:'Implementation',p:['An admin connects TestMyPlan to the organisation’s Slack workspace or Microsoft 365 tenant, confirms threats, assigns module admins and response teams, and builds scenarios from the threat map. Drills run in dedicated channels, and participants respond with a single tap.']},
{h:'Benefits',ul:['A repeatable, methodical approach to testing plans','Clear ownership: every person knows their exact action','Evidence that closes the “plan not tested” audit finding','Identification of the people and teams who need training']}]},
{id:'platform-guide',title:'TestMyPlan Platform Guide',lead:'The admin experience follows a fixed sequence, from organisational threats through to the live drill. Participants never leave Slack or Teams.',blocks:[
{h:'Admin Setup Sequence',ol:['<b>Organisational threats</b>: pulled from the sign-up profile; adjust criticality and drop threats that do not apply.','<b>Module admins</b>: assign admins for Cybersecurity, Privacy and Business Continuity, held yourself or delegated.','<b>Response teams</b>: add members to each role, assign a mandatory backup, and map responsibilities to exact actions.','<b>Threat map</b>: confirmed threats are expanded into incidents, causes and scenarios.','<b>Scenario builder</b>: choose scenarios and sequence their phases.','<b>Test plan</b>: schedule drills, choose channels and set response time targets.','<b>Live drill</b>: launch, monitor responses and inject new developments.']},
{h:'Participant Experience',p:['Each participant receives a drill card showing their role, team, backup, the current phase and one specific action with a countdown. They respond with Done, Need help or Hand to backup. Every response is timestamped.']}]},
{id:'modules',title:'Modules',lead:'TestMyPlan organises drills into modules, each with its own response model.',blocks:[
{h:'Cybersecurity',p:['A five-phase response plan: Detect, Contain, Eradicate, Recover and Review. Drills run in <b>#ir-war-room</b>.']},
{h:'Privacy',p:['A clock-driven breach sequence that tests assessment, regulator notification and communication to affected individuals within legal timelines. Drills run in <b>#privacy-bridge</b>.']},
{h:'Business Continuity',p:['Tests continuity of critical business processes against their recovery time objective (RTO), recovery point objective (RPO) and maximum tolerable period of disruption (MTPOD).']},
{h:'Announcements',p:['Assignments, schedules and drill announcements are posted to <b>#general</b>.']}]},
{id:'threats-scenarios',title:'Threats, Incidents & Scenarios',lead:'Coverage is built as a chain, so every action in a drill traces back to a real threat.',blocks:[
{h:'The Coverage Chain',ul:['<b>Threats</b>: confirmed from your organisation profile, with criticality','<b>Incidents</b>: the events each threat can cause','<b>Causes</b>: how each incident can occur','<b>Scenarios</b>: concrete situations to rehearse','<b>Phases</b>: the stages of the response','<b>Actions</b>: the exact step each role takes in each phase']},
{h:'Why It Matters',p:['A comprehensive chain exposes gaps in plan coverage that a single tabletop exercise misses, and makes it clear which threats have been tested and which have not.']}]},
{id:'roles-teams',title:'Roles, Teams & Backups',lead:'Every role has a named owner, a mandatory backup and a mapped set of responsibilities and exact actions.',blocks:[
{h:'How Roles Are Defined',ul:['Roles and responsibilities are scoped per module and chosen from dropdowns, with an option to add roles not listed','Each role can have multiple members','A backup is mandatory for every role','Responsibilities are mapped to the exact action tested in each phase']},
{h:'Testing Backups',p:['Admins can take a primary role offline during a drill to test whether the backup knows the action and can act within the time target.']}]},
{id:'scenario-injects',title:'Scenario Injects',lead:'Real incidents do not follow a script. Injects let admins introduce new developments while a drill is live.',blocks:[
{h:'Examples',ul:['A backup restore fails its integrity check','The Incident Commander is unreachable','A regulator calls for a status update','A critical process stays down past its RTO']},
{h:'How Injects Work',p:['Injects can come from the scenario library or be written by the admin. Each can target one role, one team or a whole channel. Every inject is timed and appears in the evidence report alongside the responses it triggered.']}]},
{id:'slack-teams',title:'Slack & Teams Integration',lead:'TestMyPlan installs as an app in Slack or Microsoft Teams and requests only the permissions needed to run drills.',blocks:[
{h:'Permissions',ul:['Post drill cards to the channels you choose','Send direct messages to assigned participants','Read responses to TestMyPlan messages only']},
{h:'Installation',p:['A workspace or tenant admin approves the app during sign-up. After approval, the admin lands in setup, starting with organisational threats.']}]}]},
{label:'Trust & Security',items:[
{id:'compliance',title:'Certifications & Compliance',lead:'TestMyPlan helps organisations evidence the testing that regulators, auditors and customers expect.',blocks:[
{h:'Frameworks Supported',ul:['ISO/IEC 27001: incident management and testing evidence','ISO 22301: exercising and testing business continuity','NIST Cybersecurity Framework 2.0: Respond and Recover functions','Regional regulator expectations, shown by location in the compliance view']},
{h:'Evidence',p:['Drill reports record who was assigned, who responded, how long each action took and whether targets were met, giving auditors a dated record of testing.']}]},
{id:'architecture',title:'Platform Architecture'},
{id:'data-protection',title:'Data Protection',lead:'TestMyPlan processes the minimum data needed to run drills and produce evidence.',blocks:[
{h:'Data Processed',ul:['Participant names, roles and team assignments','Drill configuration: threats, scenarios, phases and actions','Responses to TestMyPlan messages and their timestamps']},
{h:'Data Not Processed',p:['TestMyPlan does not read general channel conversations and does not connect to production systems. Drills are simulations.']},
{h:'Further Detail',p:['See the <a href="/home/privacy" target="_top">Privacy Policy</a>, <a href="/home/dpa" target="_top">Data Processing Agreement</a> and <a href="/home/sub-processors" target="_top">Sub-processors</a>.']}]},
{id:'identity-access',title:'Identity & Access',lead:'Access is tied to your organisation’s Slack or Microsoft identity.',blocks:[
{h:'Sign-in',p:['Users sign in through Slack or Microsoft, so access follows your existing identity provider, including its multi-factor and offboarding controls.']},
{h:'Roles',ul:['Organisation admin: setup, module admins and billing','Module admin: teams, scenarios and drills for one module','Participant: receives and responds to drill actions']}]},
{id:'audit-logging',title:'Audit & Logging',lead:'Every drill event is recorded with a timestamp.',blocks:[
{h:'What Is Logged',ul:['Drill launch, phase changes and completion','Each action delivered and each response received','Injects and their targets','Hand-overs from primary role holders to backups','Configuration changes to teams, roles and scenarios']}]},
{id:'application-security',title:'Application Security'}]},
{label:'Outcomes',items:[
{id:'business-continuity',title:'Business Continuity',lead:'Business continuity drills test whether critical processes can be restored within their RTO, RPO and MTPOD.',blocks:[
{h:'What Is Tested',ul:['Recovery of critical business processes within RTO','Data recovery within RPO, including backup integrity','Decision-making before MTPOD is reached','Dependencies between processes, technology and people']}]},
{id:'incident-response',title:'Incident Response',lead:'Incident response drills test detection, containment, eradication, recovery and review.',blocks:[
{h:'What Is Tested',ul:['Time to acknowledge and act in each phase','Escalation paths and hand-overs','Communication between teams and to stakeholders','Weaknesses such as delayed detection, ineffective containment or inadequate communication']}]},
{id:'reports',title:'Drill Reports & Evidence',lead:'Each drill produces a report for operational teams, auditors and the board.',blocks:[
{h:'Report Contents',ul:['Participation and response times by role, team and phase','Actions completed within and outside target','Gaps in plan coverage and dependencies found','Users and teams who need training, and in which areas','RTO, RPO and MTPOD results for business continuity drills']}]},
{id:'business-value',title:'Business Value',lead:'Regular testing turns preparedness from an assumption into a measured capability.',blocks:[
{h:'Value',ul:['Lower administrative overhead for orchestrating tests','Faster, more confident response when an incident is real','Audit and regulatory findings closed with evidence','Stakeholder confidence that cyber and continuity risk is managed']}]},
{id:'security-summary',title:'Security Summary'}]}
]};
