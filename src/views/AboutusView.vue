<template>
    <div id="top">

        <MainNavbar />
        <!-- HERO -->
        <section class="hero-section mb-5">
            <div class="hero-bg"></div>
            <div class="container position-relative hero-inner">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <h1 class="head-title">Who We Are</h1>
                        <p class="hero-sub lead">TestMyPlan (TMP) is a modern Preparedness Automation Platform designed
                            to ensure organizations are truly ready for Cybersecurity incidents, Business Continuity
                            disruptions, Data Privacy breaches, and ESG-related events.</p>

                        <!-- <div class="d-flex gap-2 mt-4">
              <a class="btn btn-primary btn-lg shadow-sm" href="/contact">Get in touch</a>
              <a class="btn btn-outline-secondary btn-lg" href="/pricing">See Pricing</a>
            </div> -->
                    </div>

                    <div class="col-lg-5 d-none d-lg-block text-end">
                        <div class="hero-card rounded-3 p-3 shadow">
                            <div class="hero-card-media rounded-2"></div>
                            <div class="mt-3 text-start">
                                <!-- <h6 class="mb-1 fw-700">Machine Learning Solutions</h6> -->
                                <p class="mb-0 small text-muted">We bridge the gap between documentation and execution,
                                    helping teams transform their plans into measurable, repeatable action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- INTRO / WHO WE ARE + MISSION -->
        <section class="container py-5">
            <div class="row gy-4">
                <div class="col-lg-7">
                    <div class="about-card p-4 rounded-3 shadow-sm">
                        <!-- <h2 class="mb-3">About Us</h2> -->
                        <!-- <p class="text-muted">TestMyPlan (TMP) is a modern Preparedness Automation Platform designed to ensure organizations are truly ready for Cybersecurity incidents, Business Continuity disruptions, Data Privacy breaches, and ESG-related events. We bridge the gap between documentation and execution, helping teams transform their plans into measurable, repeatable action.</p> -->

                        <div class="row mt-4">
                            <div class="col-md-6">
                                <h6 class="mb-2 fw-700">Our Mission</h6>
                                <p class="small fw-700 text-muted">To ensure every organization can respond confidently
                                    when it matters most.</p>
                                <p class="small text-muted">We believe readiness should be:</p>
                                <div>
                                    <ul>
                                        <li>Simple</li>
                                        <li>Scalable</li>
                                        <li>Automated</li>
                                        <li>Measurable</li>
                                        <li>Continuous</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h6 class="mb-2 fw-700">Our Vision</h6>
                                <p class="small fw-700 text-muted">A world where incident preparedness becomes second
                                    nature.</p>
                                <p class="small text-muted">We envision a future where:</p>
                                <div>
                                    <ul>
                                        <li>Cyber teams respond without hesitation</li>
                                        <li>BC teams recover without confusion</li>
                                        <li>Privacy teams meet all regulatory timelines</li>
                                        <li>ESG teams execute governance workflows with clarity</li>
                                    </ul>
                                </div>
                            </div>

                           
                        </div>
                    </div>

                   
                </div>

                <!-- Why We Built & Values -->
                <div class="col-lg-5">
                    <div class="side-box p-4 rounded-3 shadow-sm h-100">
                        <h5 class="mb-3">Why We Built TMP</h5>
                        <ul class="list-unstyled small text-muted mb-3">
                            <li>• “Our plans haven’t been tested in years.”</li>
                            <li>• “Teams don’t know their roles.”</li>
                            <li>• “Dependencies only become visible during an actual crisis.”</li>
                            <li>• “We failed an audit because we couldn’t show testing evidence.”</li>
                            <li>• “We can respond 8x5, but attackers strike 24x7.”</li>
                        </ul>

                        <h6 class="mt-3 mb-2 fw-700">Our Values</h6>
                      
                        <div class="value-pill">
                            <strong>Preparedness First</strong>
                            <p>We believe practice is the foundation of resilience.</p>
                        </div>

                        <div class="value-pill">
                            <strong>Simplicity by Design</strong>
                            <p>The platform is easy enough for anyone to use — technical or not.</p>
                        </div>

                        <div class="value-pill">
                            <strong>Transparency</strong>
                            <p>Clear insights, visible readiness, and honest metrics.</p>
                        </div>

                        <div class="value-pill">
                            <strong>Security by Default</strong>
                            <p>Encryption, access controls, and strict data governance.</p>
                        </div>

                        <div class="value-pill">
                            <strong>Continuous Improvement</strong>
                            <p>We evolve and learn from every scenario — continuously.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- WHAT WE DO (features cards) -->
        <section class="container pb-5">
            <h3 class="section-heading text-center mb-4">What We Do</h3>
            <p class="text-center">TMP enables organizations to:</p>

            <!-- <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon"><span>1</span></div>
                        <h5 class="mt-2 mb-2">Convert plans into workflows</h5>
                        <p class="small text-muted mb-0">Your Cyber, BC, Privacy, and ESG plans become living, guided
                            processes.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon"><span>2</span></div>
                        <h5 class="mt-2 mb-2">Run real-world tests</h5>
                        <p class="small text-muted mb-0">Automated scenarios with safe simulation modes and no manual
                            coordination headaches.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon"><span>3</span></div>
                        <h5 class="mt-2 mb-2">Train teams continuously</h5>
                        <p class="small text-muted mb-0">Short role tasks that build muscle memory and reduce human
                            error during incidents.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon"><span>4</span></div>
                        <h5 class="mt-2 mb-2">Measure readiness</h5>
                        <p class="small text-muted mb-0">Response times, playbook completion, and decision accuracy —
                            all visible in dashboards.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon"><span>5</span></div>
                        <h5 class="mt-2 mb-2">Generate audit evidence</h5>
                        <p class="small text-muted mb-0">Reports mapped to ISO, SOC2, GDPR, HIPAA, PDPL, NIST and more.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon"><span>6</span></div>
                        <h5 class="mt-2 mb-2">Integrations & automation</h5>
                        <p class="small text-muted mb-0">Connectors for SIEM, ticketing, cloud, Slack, Teams and
                            identity systems.</p>
                    </div>
                </div>
            </div> -->

            <div class="row g-4">

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon">
                            <i class="bi bi-diagram-3-fill"></i>
                        </div>
                        <h5 class="mt-2 mb-2 text-dark">Convert plans into workflows</h5>
                        <p class="small text-muted mb-0">
                            Your Cyber, BC, Privacy, and ESG plans become living, guided processes.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon">
                            <i class="bi bi-play-circle-fill"></i>
                        </div>
                        <h5 class="mt-2 mb-2 text-dark">Run real-world tests</h5>
                        <p class="small text-muted mb-0">Automated scenarios with safe simulation modes and no manual
                            coordination headaches.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon">
                            <i class="bi bi-people-fill"></i>
                        </div>
                        <h5 class="mt-2 mb-2 text-dark">Train teams continuously</h5>
                        <p class="small text-muted mb-0">Short role tasks that build muscle memory and reduce human
                            error during incidents.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon">
                            <i class="bi bi-speedometer2"></i>
                        </div>
                        <h5 class="mt-2 mb-2 text-dark">Measure readiness</h5>
                        <p class="small text-muted mb-0">Response times, playbook completion, and decision accuracy —
                            all visible in dashboards.</p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon">
                            <i class="bi bi-file-earmark-check-fill"></i>
                        </div>
                        <h5 class="mt-2 mb-2 text-dark">Generate audit evidence</h5>
                        <p class="small text-muted mb-0">
                            Reports mapped to ISO, SOC2, GDPR, HIPAA, PDPL, NIST and more.
                        </p>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="feature-card p-4 rounded-3 h-100 shadow-sm">
                        <div class="feature-icon">
                            <i class="bi bi-puzzle-fill"></i>
                        </div>
                        <h5 class="mt-2 mb-2 text-dark">Integrations & automation</h5>
                        <p class="small text-muted mb-0">
                            Connectors for SIEM, ticketing, cloud, Slack, Teams and identity systems.
                        </p>
                    </div>
                </div>

            </div>


        </section>

 

        <MainContact />
        <MainFooter />

    </div>
</template>

<script lang="ts">

import MainContact from "@/components/MainContact.vue";
import MainFooter from "../components/MainFooter.vue";
import MainNavbar from "../components/MainNavbar.vue";
export default {
    name: "AboutusView",
    components: {
        MainNavbar,
        MainContact,
        MainFooter
    }
}
</script>

<style scoped>
/* ========== Base helpers ========== */
:root {
    --accent-1: #ff6b8a;
    --accent-2: #6c5ce7;
    --muted: #6b7280;
    --text: #07122a;
}




/* HERO */
.hero-section {
    position: relative;
    padding: 2rem 0 3rem;
    border-radius: 14px;
    overflow: visible;
}

.hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3a89f0b9a1f6a5f3a3c1b2b6b1c4f9f3');
    background-size: cover;
    background-position: center;
    filter: saturate(.95) contrast(1) brightness(.9);
    border-radius: 14px;
    z-index: 0;
    box-shadow: 0 18px 40px rgba(7, 12, 30, 0.08);
    transform: translateY(8px);
}

/* hero content sits above background */
.hero-inner {
    position: relative;
    z-index: 2;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

/* title */
/* .hero-title {
  font-weight: 900;
  font-size: 2.6rem;
  line-height: 1.02;
  color: #0e0d0d;
  text-shadow: 0 6px 20px rgba(11,18,32,0.45);
  margin-bottom: 0.6rem;
} */
/* .hero-title .accent-line { color: #fff; background: linear-gradient(90deg,var(--accent-2),var(--accent-1)); -webkit-background-clip: text; background-clip: text; color: transparent; } */

.head-title {
    font-weight: 900;
    font-size: 2.6rem;
    line-height: 1.02;

}

/* subtitle */
.hero-sub {
    color: rgba(255, 255, 255, 0.92);
    max-width: 720px;
}

/* hero card on right */
.hero-card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(246, 250, 255, 0.95));
    width: 100%;
    margin-top: 50px;
}

.hero-card-media {
    height: 140px;
    background-image: linear-gradient(135deg, rgba(99, 102, 241, 0.16), rgba(0, 181, 216, 0.12));
    border-radius: 8px;
    box-shadow: inset 0 6px 18px rgba(12, 18, 32, 0.02);
}

/* responsive title scaling */
@media (max-width: 992px) {
    .hero-title {
        font-size: 2rem;
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 1.5rem;
        text-align: left;
    }

    .hero-section {
        padding: 1.2rem 0;
    }
}

/* ABOUT CARD / SIDE BOX */
.about-card {
    background: #fff;
}

.side-box {
    background: #fff;
}

/* .value-pill {
    display: inline-block;
    padding: .4rem .7rem;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(99, 102, 241, 0.08), rgba(0, 181, 216, 0.03));
    font-weight: 700;
    color: var(--text);
} */

.value-pill {
    background: linear-gradient(90deg, rgba(99, 102, 241, 0.08), rgba(0, 181, 216, 0.03));
    padding: 0.8rem 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
}

.value-pill strong {
    font-weight: 700;
    display: block;
    color: #07122a;
}

.value-pill p {
    margin: 0.3rem 0 0;
    font-size: 0.85rem;
    color: #6b7280;
}


/* FEATURES */
.section-heading {
    font-weight: 800;
    color: var(--text);
    font-size: 1.4rem;
}

.feature-card {
    /* background: #fff; */
    background: #dfe6eb;
    border-left: 6px solid rgba(99, 102, 241, 0.06);
}

.feature-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    /* background: linear-gradient(135deg, var(--accent-2), var(--accent-1)); */
    background-color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 900;
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.08);
}

.feature-icon i {
    font-size: 30px;
    color: #121212;
}

.feature-card h5 {
    margin-bottom: .4rem;
}

/* TEAM */
.team-card {
    background: #fff;
    border: 1px solid rgba(12, 18, 32, 0.04);
}

.team-avatar {
    width: 86px;
    height: 86px;
    border-radius: 50%;
    margin: 0 auto;
    background: linear-gradient(135deg, #f3f4ff, #fff);
    box-shadow: 0 10px 22px rgba(12, 18, 32, 0.06);
}

/* TIMELINE */
.timeline-card {
    background: #fff;
}

.timeline-list li {
    padding: .9rem 0;
    border-bottom: 1px solid rgba(12, 18, 32, 0.04);
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.timeline-year {
    min-width: 68px;
    font-weight: 800;
    color: var(--accent-2);
}

.timeline-text {
    color: #374151;
    font-size: .95rem;
}

/* AWARD VISUAL */
.award-visual .award-graphic {
    height: 200px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(0, 181, 216, 0.04));
}

/* CONTACT CARD */
.contact-card {
    background: #fff;
    border: 1px solid rgba(12, 18, 32, 0.04);
}

/* FOOTER */
.site-footer {
    background: #0f1724;
}

/* small details */
.fw-700 {
    font-weight: 700;
}

/* utility tweaks */
.btn-primary {
    background: linear-gradient(90deg, var(--accent-2), var(--accent-1));
    border: none;
}

.btn-outline-secondary {
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
}

/* LIGHT CARD SHADOW */
.shadow-sm {
    box-shadow: 0 8px 20px rgba(12, 18, 32, 0.05) !important;
}

/* ensure good spacing on small screens */
@media (max-width: 576px) {
    .feature-icon {
        width: 48px;
        height: 48px;
    }

    .feature-card h5 {
        font-size: 1rem;
    }

    .timeline-year {
        min-width: 56px;
        font-size: .95rem;
    }
}
</style>
