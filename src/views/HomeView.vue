<template>
    <div id="top">
        <MainNavbar />

        <RegulatoryWidget />


        <!-- HERO TOP -->
        <section class="hero-top">
            <div class="container">
                <div class="hero-top-inner">
                    <div class="hero-top-left">
                        <h1 class="hero-heading">
                            <span class="hero-heading-line">Incident Management</span>
                            <span class="hero-heading-line">
                                Preparedness
                                <span class="hero-word-gradient">testing easier than</span>
                            </span>
                            <span class="hero-heading-line hero-word-gradient">
                                email
                            </span>
                        </h1>
                    </div>

                    <div class="hero-top-right">
                        <p class="hero-description">
                            Don’t wait for a real incident to discover gaps. Convert your plans
                            into involuntary, repeatable muscle memory with our preparedness
                            platform.
                        </p>

                        <button class="hero-cta-btn">
                            <span>Start Preparedness Now</span>
                            <span class="hero-cta-icon"><i class="bi bi-arrow-right"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>


        <!-- Problem dark section next -->

        <section class="problems-dark steps-hero">
            <div class="problems-container">

                <!-- LEFT SIDE -->
                <div class="problems-left">
                    <span class="eyebrow">/ PROBLEMS /</span>

                    <h2 class="problems-title">
                        Why traditional preparedness<br />
                        fails organizations
                    </h2>

                    <p class="problems-desc">
                        Having plans is not the same as being prepared.
                        These are the hidden gaps that surface during real incidents.
                    </p>
                </div>

                <!-- RIGHT SIDE -->
                <div class="problems-grid">

                    <div class="problem-card">
                        <h3>The "Dusty Binder" Syndrome</h3>
                        <p>
                            You have comprehensive plans for Cyber Security and Business
                            Continuity. But if they sit in a folder, they aren't plans —
                            they are theories.
                        </p>
                        <!-- <div class="icon">📁</div> -->

                        <div class="icon neural-icon">
                            <svg viewBox="0 0 120 120" class="ring">
                                <defs>
                                    <linearGradient id="ringGradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#ff4d4d" />
                                        <stop offset="100%" stop-color="#4d79ff" />
                                    </linearGradient>
                                </defs>

                                <g fill="none" stroke="url(#ringGradient-1)" stroke-width="2">
                                    <ellipse cx="60" cy="60" rx="42" ry="18" transform="rotate(25 60 60)" />
                                    <ellipse cx="60" cy="60" rx="42" ry="18" transform="rotate(65 60 60)" />
                                    <ellipse cx="60" cy="60" rx="42" ry="18" transform="rotate(105 60 60)" />
                                </g>
                            </svg>
                        </div>


                    </div>

                    <div class="problem-card">
                        <h3>The 24/7 vs. 8×5 Disconnect</h3>
                        <p>
                            Attacks happen 24/7. Your response is likely 8×5.
                            Most teams don’t know their roles when a crisis hits at 2 AM.
                        </p>
                        <!-- <div class="icon">⏰</div> -->
                        <div class="icon neural-icon">
                            <svg viewBox="0 0 120 120">
                                <defs>
                                    <linearGradient id="ringGradient-5" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#ff4d4d" />
                                        <stop offset="100%" stop-color="#4d79ff" />
                                    </linearGradient>
                                </defs>

                                <g fill="none" stroke="url(#ringGradient-5)" stroke-width="2.4">
                                    <path d="M60 20 L60 100" />
                                    <path d="M20 60 L100 60" />
                                    <path d="M32 32 L88 88" />
                                    <path d="M32 88 L88 32" />
                                    <circle cx="60" cy="60" r="22" />
                                </g>
                            </svg>
                        </div>


                    </div>

                    <div class="problem-card">
                        <h3>The Compliance Gap</h3>
                        <p>
                            “Plans are not tested” is a top audit failure.
                            Manual coordination takes weeks — real readiness needs instant proof.
                        </p>
                        <!-- <div class="icon">📋</div> -->
                        <div class="icon neural-icon">
                            <svg viewBox="0 0 120 120">
                                <defs>
                                    <linearGradient id="ringGradient-6" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#4d79ff" />
                                        <stop offset="100%" stop-color="#ff4d4d" />
                                    </linearGradient>
                                </defs>

                                <g fill="none" stroke="url(#ringGradient-6)" stroke-width="2.2">
                                    <path d="M20 60 C40 20, 80 20, 100 60" />
                                    <path d="M20 60 C40 100, 80 100, 100 60" />
                                    <path d="M35 60 C50 35, 70 35, 85 60" />
                                    <path d="M35 60 C50 85, 70 85, 85 60" />
                                </g>
                            </svg>
                        </div>



                    </div>

                    <div class="problem-card">
                        <h3>The False Sense of Security Problem</h3>
                        <p>
                            Organizations believe they are prepared because plans exist. But
                            without real-world validation, leadership has no visibility into
                            actual readiness, hidden dependencies, or team performance under
                            pressure.
                        </p>
                        <!-- <div class="icon">📊</div> -->
                        <div class="icon neural-icon">
                            <svg viewBox="0 0 120 120">
                                <defs>
                                    <linearGradient id="ringGradient-7" x1="50%" y1="0%" x2="50%" y2="100%">
                                        <stop offset="0%" stop-color="#ff4d4d" />
                                        <stop offset="100%" stop-color="#4d79ff" />
                                    </linearGradient>
                                </defs>

                                <g fill="none" stroke="url(#ringGradient-7)" stroke-width="2">
                                    <rect x="28" y="28" width="64" height="64" rx="14" />
                                    <line x1="28" y1="60" x2="92" y2="60" />
                                    <line x1="60" y1="28" x2="60" y2="92" />
                                    <circle cx="60" cy="60" r="10" />
                                </g>
                            </svg>
                        </div>



                    </div>

                </div>
            </div>
        </section>


        <!-- ========== UNIQUE SELLING POINTS ========== -->
        <!-- <section class="selling-section">
            <div class="container">
                
                <div class="selling-header">
                    <h2 class="selling-heading wow animate__animated animate__fadeInUp" data-wow-delay="2s">
                        WHY Test My Plan (TMP) ?
                    </h2>
                </div>

             
                <div class="selling-painpoints-wrapper">
                    <ul class="selling-painpoints" id="sellingPainpoints">
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Teams don’t know their roles or when to act.</div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">
                                Recollection of what to do is fuzzy during stress.
                            </div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">
                                Managers lack a clear view of threats, causes, dependencies and
                                readiness.
                            </div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Running drills is manual, takes weeks or months.</div>
                        </li>
                        <li class="painpoint">
                            <span class="pp-icon" aria-hidden="true">➤</span>
                            <div class="pp-text">Effectiveness of tests is not measured.</div>
                        </li>
                    </ul>
                </div>


            </div>
        </section> -->

        <section class="audit-section">
            <div class="audit-container">

                <header class="hero-heading">
                    <h2>WHY <span>Test My Plan?</span></h2>
                </header>

                <div class="analysis-grid">
                    <div class="analysis-item" data-delay="0">
                        <span class="stat-badge">74% RESPONSE DELAY</span>
                        <h3>Ambiguity in Action</h3>
                        <p class="hero-description">Teams lack definitive role clarity during live incidents. Without
                            precise assignments,
                            critical response windows are lost to coordination friction.</p>
                        <div class="data-point"><span>●</span> Impact: Tactical Fragmentation</div>
                    </div>

                    <div class="analysis-item" data-delay="120">
                        <span class="stat-badge">60% RECALL DEGRADATION</span>
                        <h3>Cognitive Stress</h3>
                        <p class="hero-description">High-pressure environments induce "procedural fuzziness." Static
                            plans fail when memory is
                            compromised by acute operational stress.</p>
                        <div class="data-point"><span>●</span> Impact: Execution Failure</div>
                    </div>

                    <div class="analysis-item" data-delay="240">
                        <span class="stat-badge">85% VISIBILITY GAP</span>
                        <h3>Invisible Threats</h3>
                        <p class="hero-description">Leadership lacks a unified view of emerging threats and departmental
                            inter-dependencies,
                            resulting in fragmented risk awareness.</p>
                        <div class="data-point"><span>●</span> Impact: Strategic Blindness</div>
                    </div>

                    <div class="analysis-item" data-delay="360">
                        <span class="stat-badge">90-DAY LATENCY</span>
                        <h3>Manual Fatigue</h3>
                        <p class="hero-description">Manual drills are slow and resource-heavy. By the time a drill is
                            completed, the underlying
                            threat landscape has already shifted.</p>
                        <div class="data-point"><span>●</span> Impact: Stale Intelligence</div>
                    </div>

                    <div class="analysis-item" data-delay="480">
                        <span class="stat-badge">0% DATA VALIDATION</span>
                        <h3>Unmeasured Results</h3>
                        <p class="hero-description">Plan effectiveness is currently an assumption. Without automated
                            testing, organizational
                            resilience remains unverified for audit and compliance.</p>
                        <div class="data-point"><span>●</span> Impact: Compliance Liability</div>
                    </div>



                    <RouterLink to="/signup" class="analysis-link">
                        <div class="analysis-item secure-tile-full" data-delay="600">
                            <p>SECURE YOUR<br />OPERATIONAL CORE</p>
                        </div>
                    </RouterLink>


                </div>




            </div>
        </section>



        <!--  How it works -->
        <section class="steps-hero">
            <div class="container">
                <div class="row gy-4 align-items-center">

                    <HowTo />
                </div>
            </div>
        </section>



        <!-- modules details -->
        <section class="usecases-section">
            <div class="container">
                <div class="intro">
                    <h1 class="heading">Module Details</h1>
                    <p class="sub">
                        Not sure where to start with AI and agents? These teams have AI
                        handling real work, right now.
                    </p>
                </div>

                <!-- Tabs -->
                <div class="tabs-row" role="tablist" aria-label="Use case categories">
                    <button v-for="tab in tabs" :key="tab.id" class="tab-btn-home"
                        :class="{ active: activeTab === tab.id }" role="tab" :aria-selected="activeTab === tab.id"
                        :tabindex="activeTab === tab.id ? 0 : -1" @click="activateTab(tab.id)">
                        {{ tab.label }}
                    </button>
                </div>

                <!-- Active content -->
                <div class="tab-content">
                    <div class="content-grid">
                        <div class="content-left">
                            <h2 class="content-title">{{ currentTab.title }}</h2>
                            <p class="content-lead">{{ currentTab.lead }}</p>

                            <ul class="content-points">
                                <li v-for="(p, i) in currentTab.points" :key="i">{{ p }}</li>
                            </ul>
                        </div>

                        <!-- <div class="content-right">
                            <img :src="currentTab.image" :alt="currentTab.title" class="content-media" />
                        </div> -->
                        <div class="content-right">
                            <img :src="currentTab.image" :alt="currentTab.title" class="content-media" />
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- Animation video tab Why it Works -->
        <section class="bp-section">
            <div class="container-fluid">
                <!-- DESKTOP HEADERS ROW: visible on md+ only -->
                <div class="row bp-headers gx-0 d-none d-md-flex">
                    <div class="col-6 bp-col">
                        <div class="bp-header">Bear the bottleneck</div>
                    </div>
                    <div class="col-6 bp-col">
                        <div class="bp-header">Or use Testmyplan</div>
                    </div>
                </div>

                <!-- MAIN -->
                <div class="row bp-main gx-0">
                    <!-- LEFT -->
                    <div class="col-12 col-md-6 bp-column bp-left">
                        <div class="bp-header d-block d-md-none text-center mb-2">
                            Bear the bottleneck
                        </div>

                        <div class="bp-pile-area">
                            <div class="bp-pile" aria-hidden="true">
                                <button class="pill" data-order="1"><span class="idx">①</span>
                                    <span class="text">External coordination testing</span>
                                </button>
                                <button class="pill" data-order="2"><span class="idx">②</span>
                                    <span class="text">Paper plans</span>
                                </button>
                                <button class="pill" data-order="3"><span class="idx">③</span>
                                    <span class="text">Continual testing of plans</span>
                                </button>
                                <button class="pill" data-order="4"><span class="idx">④</span>
                                    <span class="text">Not aware</span>
                                </button>
                                <button class="pill" data-order="5"><span class="idx">⑤</span>
                                    <span class="text">No clear dependencies</span>
                                </button>
                                <button class="pill" data-order="6"><span class="idx">⑥</span>
                                    <span class="text">Lack of matrics</span>
                                </button>
                                <button class="pill" data-order="7"><span class="idx">⑦</span>
                                    <span class="text">Team unaware of roles</span>
                                </button>
                                <button class="pill" data-order="8"><span class="idx">⑧</span>
                                    <span class="text">Communication issues</span>
                                </button>
                                <button class="pill" data-order="9"><span class="idx">⑨</span>
                                    <span class="text">Process steps</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT -->
                    <div class="col-12 col-md-6 bp-column bp-right">
                        <div class="bp-header d-block d-md-none text-center mb-2">
                            Or use Testmyplan
                        </div>

                        <div class="bp-stack-area">
                            <div class="bp-stack" aria-hidden="true">
                                <div class="stack-item"><span class="idx">①</span>
                                    <span>Add Users to teams</span>
                                </div>
                                <div class="stack-item"><span class="idx">②</span>
                                    <span>Launch Plan</span>
                                </div>
                                <div class="stack-item"><span class="idx">③</span>
                                    <span>Prepared and compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /bp-main -->
            </div>
        </section>



        <!-- Banner section running banner -->
        <section class="running-banner-section">
            <div class="running-banner red-banner">
                <div class="banner-track">
                    <span>Strategy is a / Guess</span>
                    <span>Validation is a / Choice</span>
                    <span>Strategy is a / Guess</span>
                    <span>Validation is a / Choice</span>
                </div>
            </div>

            <div class="running-banner black-banner">
                <div class="banner-track reverse">
                    <span>Hard-Test Your / Future with Testmyplan</span>
                    <span>Hard-Test Your / Future with Testmyplan</span>
                    <span>Hard-Test Your / Future with Testmyplan</span>
                    <span>Hard-Test Your / Future with Testmyplan</span>

                </div>
            </div>
        </section>




        <!-- Faq section -->
        <section class="faq-section" id="faq">
            <div class="container">
                <div class="faq-shell">
                    <!-- header -->
                    <div class="faq-header">
                        <div class="faq-eyebrow">/ faq /</div>
                        <h2 class="faq-title">Everything you need to know about</h2>
                    </div>

                    <!-- accordion -->
                    <div id="faqAccordion" class="faq-list">

                        <!-- FAQ 01 -->
                        <div class="faq-item">
                            <button class="faq-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#faq-1"
                                aria-expanded="true" aria-controls="faq-1">
                                <span class="faq-number">01</span>
                                <span class="faq-question">What is TestMyPlan (TMP)?</span>
                                <span class="faq-arrow">▴</span>
                            </button>

                            <div id="faq-1" class="collapse show" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    TMP is an automated incident preparedness platform that converts your
                                    Cybersecurity, Business Continuity, Data Privacy, and ESG plans into
                                    executable workflows, real-world scenarios, and measurable readiness insights.
                                </div>
                            </div>
                        </div>

                        <!-- FAQ 02 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq-2" aria-expanded="false" aria-controls="faq-2">
                                <span class="faq-number">02</span>
                                <span class="faq-question">How is TMP different from traditional tabletop drills?</span>
                                <span class="faq-arrow">▴</span>
                            </button>

                            <div id="faq-2" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Tabletops rely on manual coordination, static documents, and subjective evaluations.
                                    TMP automates the entire process — from scenario execution to communication,
                                    role assignment, and reporting — making preparedness continuous, measurable,
                                    and repeatable.
                                </div>
                            </div>
                        </div>

                        <!-- FAQ 03 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq-3" aria-expanded="false" aria-controls="faq-3">
                                <span class="faq-number">03</span>
                                <span class="faq-question">Do I need to upload my plans to get started?</span>
                                <span class="faq-arrow">▴</span>
                            </button>

                            <div id="faq-3" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    No. You can upload your plans or start with our pre-built threat and incident
                                    templates. TMP’s Threat Agent can also guide you in selecting scenarios based
                                    on your industry and technology environment.
                                </div>
                            </div>
                        </div>

                        <!-- FAQ 04 -->
                        <div class="faq-item">
                            <button class="faq-toggle collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#faq-4" aria-expanded="false" aria-controls="faq-4">
                                <span class="faq-number">04</span>
                                <span class="faq-question">
                                    We already have documented plans. Why do we need TMP?
                                </span>
                                <span class="faq-arrow">▴</span>
                            </button>

                            <div id="faq-4" class="collapse" data-bs-parent="#faqAccordion">
                                <div class="faq-answer">
                                    Most plans are never tested or are tested only annually. TMP ensures your
                                    plans are validated continuously, uncovering gaps, clarifying roles, and
                                    showing how your teams actually respond under pressure.
                                </div>
                            </div>
                        </div>

                    </div><!-- /faq-list -->
                </div>
            </div>
        </section>


        <!-- Banner with animation -->
        <div class="container-fluid">
            <section id="heroSection"
                class="hero-banner position-relative d-flex align-items-center justify-content-center text-center"
                style="--bg-url: url('https://ethiqual.co.in/wp-content/uploads/2025/03/Emergency-Preparedness-768x692.png?utm_source=chatgpt.com');">
                <div class="overlay"></div>

                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <h1 class="hero-title">
                                Plans on paper don’t save you. Practice does.
                            </h1>

                            <!-- <a href="#" class="btn hero-cta-animation">
                                Launch a 2-minute drill
                            </a> -->

                            <RouterLink to="/signup" class="btn hero-cta-animation">
                                Launch a 2-minute drill
                            </RouterLink>

                        </div>
                    </div>
                </div>
            </section>
        </div>

        <MainContact />
        <MainFooter />
        <ScrollToTop />
    </div>
</template>







<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import HowTo from "@/components/HowTo.vue";

interface Step {
    id: number;
    num: string;
    pane: string;
    title: string;
    img: string;
    desc: string;
}

interface Tab {
    id: string;
    label: string;
    title: string;
    lead: string;
    points: string[];
    image: string;
}

interface HomeViewInstance {
    _sellingObserver?: IntersectionObserver;
    steps: Step[];
    activePane: string;
    tabs: Tab[];
    activeTab: string;
}

export default defineComponent({
    name: "HomeView",
    components: {
        MainNavbar,
        RegulatoryWidget,
        MainFooter,
        MainContact,
        ScrollToTop,
        HowTo
    },

    data() {


        const tabs: Tab[] = [
            {
                id: "cybersecurity",
                label: "Cybersecurity",
                title:
                    "Raise your organization’s cyber readiness before attackers test it for you",
                lead:
                    "Cyber incidents strike in minutes — but detection, coordination, and decision-making often take hours. TMP transforms static cyber plans into automated, repeatable, measurable preparedness exercises tailored to your tech stack.",
                points: [
                    "Simulate real-world threats: ransomware, phishing, supply chain, insider abuse",
                    "Automated drills across SOC, IR, IAM, AppSec & Cloud teams",
                    "Role-mapped task execution with time-bound decision prompts",
                    "Compliance-ready reporting aligned with ISO 27001, NIST CSF, SOC 2, RBI, NIS2",
                ],
                image: new URL("@/assets/images/cyber-security.jpeg", import.meta.url).href,
            },
            {
                id: "business-continuity",
                label: "Business Continuity",
                title: "Ensure your business keeps running — no matter what breaks",
                lead:
                    "Downtime destroys customer trust, revenue, and reputation. TMP brings life to your Business Continuity Plans with realistic, coordinated drills that test people, processes, vendors, and technology across the company.",
                points: [
                    "Stress-test continuity processes across departments & critical services",
                    "Measure recovery readiness for RTO, RPO, dependencies & escalation chains",
                    "Automate communication workflows for executives, teams & vendors",
                    "Evidence packs aligned with ISO 22301 and enterprise audit needs",
                ],
                image: new URL("@/assets/images/business-continuity.jpeg", import.meta.url).href,
            },
            {
                id: "data-privacy",
                label: "Data Privacy",
                title: "Protect customer data and prove compliance — with confidence",
                lead:
                    "Breaches are inevitable; mishandling them is not. TMP helps privacy, legal, and security teams rehearse breach-handling workflows, ensuring a fast, compliant response across global regulations.",
                points: [
                    "Run data breach simulations that test legal, DPO, IT & comms workflows",
                    "Validate regulatory response timelines (KSA PDPL, GDPR, CCPA, PDPB, HIPAA)",
                    "Prebuilt privacy incident templates: unauthorized access, misdelivery, deletion failures",
                    "Generate audit-ready evidence for investigations, reporting & post-incident reviews",
                ],
                image: new URL("@/assets/images/data-privacy.jpeg", import.meta.url).href,
            },
            {
                id: "esg",
                label: "Environmental Security & Governance",
                title:
                    "Strengthen resilience across environmental, operational & governance risks",
                lead:
                    "Modern ESG expectations demand operational integrity, transparency and preparedness. TMP helps organizations test their ESG policies, crisis responses, and governance structures with clarity and accountability.",
                points: [
                    "Simulate ESG events: environmental disruptions, safety failures, supplier risks",
                    "Test governance workflows: board escalations, whistleblowing, third-party risk",
                    "Validate response alignment with sustainability and compliance frameworks",
                    "Produce assurance-ready reports for auditors, regulators & stakeholders",
                ],
                image: new URL("@/assets/images/esg.jpeg", import.meta.url).href,
            },
        ];

        return {

            activePane: "pane-1",
            tabs,
            activeTab: "sales",
            show: false as boolean,

            // ░░ Regulatory popup state ░░
            showRegModal: false as boolean,
            userCountry: "Philippines" as string, // mock value for now
            regulatoryRows: [
                {
                    regulator: "NPC",
                    control: "PDPL – Breach Notification",
                    requirement:
                        "Notify regulator and affected individuals within legal timelines.",
                    module: "Data Privacy",
                },
                {
                    regulator: "BSP",
                    control: "Cybersecurity Framework",
                    requirement:
                        "Maintain and regularly test cyber incident & BCP response plans.",
                    module: "Cybersecurity / Business Continuity",
                },
                {
                    regulator: "ISO / Internal",
                    control: "ISO 27001 / 22301",
                    requirement:
                        "Provide evidence of regular preparedness and continuity testing.",
                    module: "Preparedness Testing",
                },
            ] as {
                regulator: string;
                control: string;
                requirement: string;
                module: string;
            }[],
        };
    },



    computed: {
        currentTab(): Tab {
            const instance = this as unknown as HomeViewInstance;
            const found = instance.tabs.find((t) => t.id === instance.activeTab);
            return (found ?? instance.tabs[0]) as Tab;
        },
    },

    mounted(): void {

        // --- Analysis cards staggered animation ---
        const analysisItems = document.querySelectorAll(".analysis-item");

        if ("IntersectionObserver" in window) {
            const analysisObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const el = entry.target as HTMLElement;
                            const delay = Number(el.dataset.delay) || 0;

                            setTimeout(() => {
                                el.classList.add("is-visible");
                            }, delay);

                            observer.unobserve(el);
                        }
                    });
                },
                { threshold: 0.2 }
            );

            analysisItems.forEach((item) => analysisObserver.observe(item));
        } else {
            // Fallback for very old browsers
            analysisItems.forEach((item) =>
                item.classList.add("is-visible")
            );
        }



        // --- Selling-points IntersectionObserver logic ---
        const list = document.getElementById("sellingPainpoints");
        if (list) {
            if (!("IntersectionObserver" in window)) {
                list.classList.add("in-view");
            } else {
                const observer = new IntersectionObserver(
                    (entries, obs) => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                list.classList.add("in-view");
                                obs.unobserve(entry.target);
                            }
                        }
                    },
                    { threshold: 0.18 }
                );

                observer.observe(list);
                (this as unknown as HomeViewInstance)._sellingObserver = observer;
            }
        }

        // read hash for initial selection (tabs or steps)
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const instance = this as unknown as HomeViewInstance;
            const stepExists = instance.steps.some((s) => s.pane === hash);
            if (stepExists) instance.activePane = hash;

            const tabExists = instance.tabs.some((t) => t.id === hash);
            if (tabExists) instance.activeTab = hash;
        }

        // hero banner observer
        const section = document.getElementById("heroSection");
        if (section) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        const el = entry.target as HTMLElement;
                        if (entry.isIntersecting) {
                            el.classList.add("show");
                        } else {
                            el.classList.remove("show");
                        }
                    });
                },
                { threshold: 0.4 }
            );
            observer.observe(section);
        }

        // ░░ Regulatory popup – show once ░░

        // --- Regulatory popup: show on every visit / refresh ---
        this.showRegModal = true;
    },

    beforeUnmount(): void {
        const instance = this as unknown as HomeViewInstance;
        if (instance._sellingObserver) {
            instance._sellingObserver.disconnect();
            instance._sellingObserver = undefined;
        }
    },

    methods: {
        // ░░ POPUP HANDLERS ░░
        closeRegModal(): void {
            this.showRegModal = false;
        },


        goToRegulatoryPage(): void {
            this.showRegModal = false;
        },

        activate(targetId: string, e?: Event): void {
            const instance = this as unknown as HomeViewInstance;
            instance.activePane = targetId;

            if (window.innerWidth < 992) {
                this.$nextTick(() => {
                    const pane = document.getElementById(targetId);
                    if (pane)
                        pane.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }

            try {
                history.replaceState(null, "", `#${targetId}`);
            } catch {
                /* ignore */
            }

            e?.preventDefault();
        },

        activateTab(tabId: string): void {
            const instance = this as unknown as HomeViewInstance;
            instance.activeTab = tabId;

            try {
                history.replaceState(null, "", `#${tabId}`);
            } catch {
                /* ignore */
            }

            if (window.innerWidth < 992) {
                this.$nextTick(() => {
                    const el = this.$el as HTMLElement;
                    const content = el.querySelector(".tab-content");
                    if (content)
                        (content as HTMLElement).scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                });
            }
        },
    },
});
</script>


<style scoped>
.problems-dark {
    background: #0f0f0f;
    border-radius: 32px;
    padding: 96px 80px;
    color: #fff;
}

.problems-container {
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    gap: 80px;
}

/* LEFT */
.eyebrow {
    font-size: 13px;
    letter-spacing: 0.12em;
    opacity: 0.7;
    display: block;
    margin-bottom: 18px;
}

.problems-title {
    font-size: 44px;
    line-height: 1.15;
    margin-bottom: 20px;
    color: aliceblue;
}

.problems-desc {
    color: #b5b5b5;
    max-width: 420px;
}

/* RIGHT GRID */
.problems-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 64px;
}

/* CARD */
.problem-card {
    position: relative;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.problem-card h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: aliceblue;
}

.problem-card p {
    color: #bdbdbd;
    font-size: 15px;
    line-height: 1.6;
    max-width: 360px;
}

/* ICON */
.problem-card .icon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
    .problems-container {
        grid-template-columns: 1fr;
    }

    .problems-grid {
        grid-template-columns: 1fr;
    }

    .problems-title {
        font-size: 34px;
    }
}

.neural-icon {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 16px;

    background: radial-gradient(circle at center,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.02) 70%,
            transparent 100%);

    display: flex;
    align-items: center;
    justify-content: center;
}

.neural-icon svg {
    width: 48px;
    height: 48px;

    /* 🔥 brightness boost */
    filter:
        drop-shadow(0 0 6px rgba(255, 90, 90, 0.45)) drop-shadow(0 0 10px rgba(90, 120, 255, 0.35));

    opacity: 1;
}





/* :root {
    --bg: #ffffff;
    --text-main: #0f172a;
    --text-muted: #64748b;
    --brand-blue: #2563eb;
    --highlight: #eff6ff;
    --border: #f1f5f9;
} */

/* body {
    margin: 0;
    background: var(--bg);
    font-family: 'Plus Jakarta Sans', sans-serif;
} */
</style>
