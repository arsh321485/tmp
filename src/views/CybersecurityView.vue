<template>
    <div id="top">
        <MainNavbar />
        <RegulatoryWidget />

        <section class="cyber-hero position-relative delayed-section" style="animation-delay: 100ms;">
            <!-- Background image -->
            <div class="cyber-bg"></div>

            <!-- Content area -->
            <div class="container content-wrap d-flex flex-column justify-content-center">

                <!-- Small icon -->
                <div class="cyber-icon mb-3">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

                <!-- Title -->
                <h1 class="cyber-title">Cybersecurity Preparedness</h1>

                <!-- Description -->
                <p class="cyber-desc">
                    Your tools detect threats. TMP prepares your people to handle them.<br />
                    Modern cyberattacks evolve faster than organizations can train—and attackers count on that.<br />
                    TMP gives your SOC, IR, Cloud, AppSec, and leadership teams the ability to respond
                    with clarity, speed, and confidence.
                </p>

                <!-- Small CTA Button -->
                <div class="cta-row">
                    <button class="btn btn-light btn-sm cyber-btn-sm">
                        Assess Cyber Preparedness →
                    </button>
                </div>
            </div>

            <!-- Breadcrumb pill -->
            <div class="breadcrumb-pill d-flex align-items-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/" class="text-decoration-none">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Cybersecurity Preparedness</li>
                    </ol>
                </nav>
            </div>
        </section>


        <section class="cyber-reality container py-5 delayed-section" aria-labelledby="cyber-reality-title"
            style="animation-delay: 300ms;">

            <div class="header mb-4">
                <h2 id="cyber-reality-title" class="cyber-section-title">The Cyber Reality</h2>
                <p class="cyber-section-sub">Key problems that make technical tools ineffective without prepared people.
                </p>
            </div>

            <div class="cyber-grid">
                <!-- 1 -->
                <article class="cyber-card" aria-labelledby="pr1-title">
                    <div class="cyber-left">
                        <div class="cyber-number">01</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr1-title" class="cyber-card-title">Tools are advanced. Human readiness is not.</h3>
                        <p class="cyber-card-body">
                            Security stacks get stronger; human behavior remains the weakest link. Under pressure,
                            even trained staff hesitate, escalate incorrectly, or miss critical steps.
                        </p>

                        <ul class="cyber-list">
                            <li>Cybersecurity tools detect threats, but TMP ensures that your teams are prepared to
                                handle them effectively.</li>
                            <li>Modern cyberattacks evolve faster than organizations can train; attackers exploit this
                                gap in human readiness.</li>
                            <li>Even trained staff may hesitate or skip critical steps under pressure during an
                                incident.</li>

                        </ul>
                    </div>
                </article>

                <!-- 2 -->
                <article class="cyber-card" aria-labelledby="pr2-title">
                    <div class="cyber-left">
                        <div class="cyber-number">02</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr2-title" class="cyber-card-title">Incident response plans are outdated the moment
                            they're written.</h3>
                        <p class="cyber-card-body">
                            IR playbooks often don’t reflect changes across the environment. Common gaps include:
                        </p>
                        <ul class="cyber-list">
                            <li>tool changes</li>
                            <li>cloud migration</li>
                            <li>new vendors</li>
                            <li>updated OS / app versions</li>
                            <li>new regulatory requirements</li>
                        </ul>
                        <p class="cyber-card-note"><strong>TMP keeps your response living and aligned to
                                reality.</strong></p>
                    </div>
                </article>

                <!-- 3 -->
                <article class="cyber-card" aria-labelledby="pr3-title">
                    <div class="cyber-left">
                        <div class="cyber-number">03</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr3-title" class="cyber-card-title">SOC burnout & alert fatigue slow response</h3>
                        <p class="cyber-card-body">
                            Analysts drown in alerts. Important decisions get delayed.
                        </p>

                        <ul class="cyber-list">
                            <li>TMP keeps response plans updated and aligned with reality, adapting to new tools,
                                migrations, and regulations.</li>
                            <li>TMP makes cybersecurity preparedness measurable, trackable, and reportable, giving
                                leadership a clear view of team readiness.</li>
                            <li>TMP defines clear communication channels and roles to ensure all teams work together
                                effectively under pressure.</li>

                        </ul>

                        <p class="cyber-card-note"><strong>TMP forces clarity—who
                                acts,
                                how fast, in what order.</strong></p>
                    </div>
                </article>

                <!-- 4 -->
                <article class="cyber-card" aria-labelledby="pr4-title">
                    <div class="cyber-left">
                        <div class="cyber-number">04</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr4-title" class="cyber-card-title">Cross-team friction kills containment</h3>
                        <p class="cyber-card-body">
                            Real incidents require many teams to work together:
                        </p>
                        <ul class="cyber-list">
                            <li>SOC</li>
                            <li>IR</li>
                            <li>AppSec</li>
                            <li>DevOps</li>
                            <li>Cloud</li>
                            <li>Management</li>
                        </ul>
                        <p class="cyber-card-note"> <strong>But communication breaks down under stress, which slows
                                containment.</strong>
                        </p>
                    </div>
                </article>

                <!-- 5 -->
                <article class="cyber-card" aria-labelledby="pr5-title">
                    <div class="cyber-left">
                        <div class="cyber-number">05</div>
                    </div>
                    <div class="cyber-right">
                        <h3 id="pr5-title" class="cyber-card-title">Leadership gets no visibility into real readiness
                        </h3>
                        <p class="cyber-card-body">
                            CISOs can’t answer:
                        </p>
                        <ul class="cyber-list">
                            <li>“How prepared are we today?”</li>
                            <li>“Which teams are weakest?”</li>
                            <li>“Where are our IR bottlenecks?”</li>
                        </ul>
                        <p class="cyber-card-note"><strong>TMP makes readiness measurable, trackable, and
                                reportable.</strong></p>
                    </div>
                </article>
            </div>
        </section>


        <section class="projects-hero">
            <div class="container">

                <!-- HEADER -->
                <div class="projects-header">
                    <div class="left">
                        <span class="eyebrow">/ TMP Solves /</span>
                        <h2 class="title">How TMP Solves<br />Cyber Preparedness</h2>
                        <p class="sub">
                            Practical, continuous, and auditor-ready capabilities that close the
                            people & process gap.
                        </p>

                        <!-- controls -->
                        <div class="controls">
                            <button @click="scrollLeft">‹</button>
                            <button @click="scrollRight">›</button>
                        </div>
                    </div>


                </div>

                <!-- CARDS -->
                <div class="cards-wrap" ref="cardsWrap">
                    <article v-for="t in tabs" :key="t.id" class="project-card">

                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="project"
                            class="card-img" />

                        <!-- TITLE (moves on hover) -->
                        <h3 class="card-title">
                            {{ t.title }}
                        </h3>

                        <!-- OVERLAY CONTENT -->
                        <div class="card-overlay">

                            <p class="overlay-intro ">{{ t.intro }}</p>

                            <ul v-if="t.examples?.length">
                                <li v-for="(ex, k) in t.examples" :key="'ex-' + k">
                                    {{ ex }}
                                </li>
                            </ul>

                            <ul v-else-if="t.items?.length">
                                <li v-for="(it, k) in t.items" :key="'it-' + k">
                                    {{ it }}
                                </li>
                            </ul>

                            <p v-if="t.note" class="card-note">
                                {{ t.note }}
                            </p>

                        </div>
                    </article>


                </div>


            </div>
        </section>


        <MainContact />
        <!-- FOOTER -->
        <MainFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/MainNavbar.vue";
import MainFooter from "../components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";

type Tab = {
    id: string;
    title: string;
    intro?: string;
    examples?: string[];
    items?: string[];
    note?: string;
};

export default defineComponent({
    name: "CybersecurityView",
    components: {
        MainNavbar,
        RegulatoryWidget,
        MainFooter,
        MainContact
    },

    data() {
        return {
            active: 0 as number,
            resizeHandlerFn: null as null | (() => void), // FIXED (no _)
            tabs: [
                {
                    id: "sim",
                    title: "Automated Cyber Simulations (No Hassle, No Setup)",
                    intro:
                        "Launch real-world incident simulations across endpoints, cloud, apps, and users. TMP maps tasks to actual systems you use (Cloud, Windows, Linux, SaaS, Networks).",
                    examples: [
                        "Ransomware infiltration",
                        "Compromised credentials",
                        "Cloud IAM misconfigurations",
                        "Phishing chain attacks",
                        "Privilege escalation event",
                        "Business email compromise",
                        "API abuse",
                        "Zero-day exploitation pattern",
                    ],
                },
                {
                    id: "workflows",
                    title: "Guided Response Workflows Across All Teams",
                    intro: "TMP ensures each stakeholder receives role-specific steps and every action is logged.",
                    items: [
                        "isolate endpoint",
                        "suspend session",
                        "rotate keys",
                        "notify leadership",
                        "check firewall logs",
                        "update SIEM case",
                        "engage forensics",
                    ],
                    note: "Every action is logged.",
                },
                {
                    id: "metrics",
                    title: "Real-Time Cyber Readiness Metrics",
                    intro:
                        "TMP tracks the critical readiness metrics CISOs need to measure and justify investment.",
                    items: [
                        "MTTA (Mean Time to Acknowledge)",
                        "MTTR-S (Mean Time to Respond to Simulation)",
                        "Escalation latency",
                        "Cross-team collaboration score",
                        "Playbook completion %",
                        "Decision accuracy vs ideal response",
                    ],
                    note: "These metrics help CISOs justify budgets, staffing, and tool investment.",
                },
                {
                    id: "improve",
                    title: "Continuous IR Improvement Loop",
                    intro:
                        "Each simulation creates focused observations and recommended fixes so your IR program improves continuously.",
                    items: [
                        "gap analysis",
                        "role misconfigurations",
                        "slow responders",
                        "dependency failures",
                        "documentation errors",
                    ],
                    note: "TMP automatically recommends improvements.",
                },
                {
                    id: "evidence",
                    title: "Auditor-Ready Cyber Evidence",
                    intro: "TMP produces evidence mapped to common frameworks so audits are straightforward and defensible.",
                    items: [
                        "ISO 27001, Control 5.24 - Information security incident management planning and preparation",
                        'NIST CSF "Respond" & "Recover"',
                        "SOC 2 CC7.x",
                        "RBI Cyber Security directions",
                        "PCI DSS incident handling",
                        "CIS Controls",
                    ],
                },
            ] as Tab[],
        };
    },

    computed: {
        isMobile(): boolean {
            return window.innerWidth <= 768;
        },
    },

    mounted() {
        this.resizeHandlerFn = () => {
            this.$forceUpdate();
        };
        window.addEventListener("resize", this.resizeHandlerFn);
    },

    beforeUnmount() {
        if (this.resizeHandlerFn) {
            window.removeEventListener("resize", this.resizeHandlerFn);
        }
    },

    methods: {

        scrollLeft() {
            const el = this.$refs.cardsWrap as HTMLElement;
            el.scrollBy({ left: -320, behavior: "smooth" });
        },

        scrollRight() {
            const el = this.$refs.cardsWrap as HTMLElement;
            el.scrollBy({ left: 320, behavior: "smooth" });
        },

        scrollToCard(index: number) {
            const el = this.$refs.cardsWrap as HTMLElement;
            const card = el.children[index] as HTMLElement;
            card.scrollIntoView({ behavior: "smooth", inline: "start" });
        },
        setActive(index: number) {
            this.active = index;

            this.$nextTick(() => {
                // FIX: safely reference tab
                const tab = this.tabs[index];
                if (!tab) return;

                const el = document.getElementById("tab-" + tab.id) as HTMLElement | null;
                if (el) el.focus();
            });
        },
    },
});
</script>


<style scoped>
/* STATIC TITLE (always visible) */

.card-title {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 28px;

    font-size: 26px;
    /* BIG like image */
    font-weight: 600;
    line-height: 1.25;
    color: #ffffff;

    z-index: 3;
    pointer-events: none;

    transition:
        top 0.45s ease,
        bottom 0.45s ease,
        font-size 0.45s ease,
        transform 0.45s ease;
}

.card-title-static {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;

    font-size: 24px;
    /* BIG like image */
    font-weight: 600;
    line-height: 1.25;
    color: #ffffff;

    z-index: 2;
    pointer-events: none;

    transition: opacity 0.3s ease;
}

.projects-hero {
    background: #0f0f10;
    color: #fff;
    border-radius: 48px;
    margin: 24px;
    padding: 60px 32px;
    overflow: hidden;
}

/* header */
.projects-header {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 40px;
}

.eyebrow {
    opacity: 0.6;
    letter-spacing: 1px;
}

.title {
    font-size: clamp(32px, 4vw, 56px);
    font-weight: 600;
    line-height: 1.05;
    margin: 12px 0;
    color: aliceblue;
}

.sub {
    max-width: 460px;
    opacity: 0.8;
    color: #e9e1de;
}

.controls {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.controls button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, .2);
    background: transparent;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
}

/* stat */
.stat {
    text-align: right;
}

.stat .big {
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
    background: linear-gradient(90deg, #7c3aed, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.stat .label {
    opacity: 0.7;
}

/* cards */
.cards-wrap {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 20px;
    scroll-behavior: smooth;

    /* hide scrollbar */
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE & Edge */
}

.cards-wrap::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}


.cards-wrap::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .3);
}


/* when hovering cards container */
.cards-wrap:hover .project-card {
    transform: scale(0.9);
    opacity: 0.5;
}

/* hovered card becomes dominant */
.cards-wrap .project-card:hover {
    transform: scale(1.05);
    opacity: 1;
    z-index: 5;
}


.project-card {
    position: relative;
    min-width: 320px;
    height: 420px;
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;
    background: #111;

    /* animation */
    transition:
        transform 0.45s cubic-bezier(.4, 0, .2, 1),
        opacity 0.45s ease;
    transform: scale(0.94);
}

/* fake image bg */
.card-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, #111, #222);
    transition: transform .4s;
}

/* overlay */
.cards-wrap {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 16px;
    scroll-behavior: smooth;
}

.cards-wrap::-webkit-scrollbar {
    height: 6px;
}

.cards-wrap::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .3);
    border-radius: 6px;
}

/* CARD */
/* .project-card {
    position: relative;
    min-width: 320px;
    height: 420px;
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;
    background: #111;
} */

/* IMAGE */
.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .6s ease;
}

/* OVERLAY (hidden initially) */
/* .card-overlay {
    position: absolute;
    inset: 0;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: linear-gradient(to top,
            rgba(0, 0, 0, .88),
            rgba(0, 0, 0, .35),
            transparent);

    opacity: 0;
    transform: translateY(20px);
    transition: all .45s ease;
   
} */

/* .card-overlay {
  position: absolute;
  inset: 0;
  padding: 28px;

  display: flex;
  flex-direction: column;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.4)
  );

  opacity: 0;
  transform: translateY(24px);
  transition: all 0.45s ease;

  overflow-y: auto;
} */


.card-overlay {
    position: absolute;
    inset: 0;
    padding: 28px;

    display: flex;
    flex-direction: column;

    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.95),
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.4));

    opacity: 0;
    transform: translateY(24px);
    transition: all 0.45s ease;

    overflow-y: auto;
}


.card-overlay::-webkit-scrollbar {
    width: 4px;
}

.card-overlay::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
}

.card-overlay {
    scrollbar-width: thin;
    /* Firefox */
}

.card-overlay h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    /* color: aliceblue; */
    color: #f4f5f9;
}

.card-overlay p {
    font-size: 14px;
    opacity: 0.85;
    margin-bottom: 10px;
    line-height: 1.5;
    /* color: rgb(245, 219, 219); */
    color: #f4f5f8;
}

.overlay-intro {
    margin-top: 72px;
    /* space for title */
    font-size: 14px;
    line-height: 1.5;
    color: #f4f5f8;
}

.card-overlay ul {
    margin-top: 12px;
    padding-left: 18px;
    font-size: 13px;
    line-height: 1.45;
    color: #ffffff;
}


.card-note {
    margin-top: 10px;
    font-size: 13px;
    opacity: 0.85;
    font-style: italic;
}


/* HOVER EFFECT */
.project-card:hover .card-img {
    transform: scale(1.08);
}

.project-card:hover .card-overlay {
    opacity: 1;
    transform: translateY(0);
}

.project-card:hover .card-title {
    top: 24px;
    bottom: auto;

    font-size: 22px;
    /* heading size */
    transform: translateY(0);
}


/* MOBILE */
@media (max-width: 768px) {
    .cards-wrap {
        flex-direction: column;
        overflow-x: hidden;
    }

    .project-card {
        min-width: 100%;
        height: 360px;
    }
}
</style>
