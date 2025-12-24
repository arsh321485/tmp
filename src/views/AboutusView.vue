<template>
  <div id="top">
    <MainNavbar />

     <RegulatoryWidget />

    <!-- HERO -->
    <section
      class="about-us-hero-section mb-5"
      data-animate
      data-delay="0"
    >
      <div class="about-us-hero-bg"></div>
      <div class="container position-relative about-us-hero-inner">
        <div class="row align-items-center">
          <div class="col-lg-7" data-animate data-delay="100">
            <h1 class="hero-heading pt-5">Who We Are</h1>
            <p class="hero-description pt-4 heading-para text-white">
              TestMyPlan (TMP) is a modern Preparedness Automation Platform designed
              to ensure organizations are truly ready for Cybersecurity incidents,
              Business Continuity disruptions, Data Privacy breaches, and ESG-related events.
            </p>
          </div>

          <div
            class="col-lg-5 d-none d-lg-block text-end"
            data-animate
            data-delay="200"
          >
            <div class="about-us-hero-card rounded-3 p-3 shadow">
              <div class="about-us-hero-card-media rounded-2"></div>
              <div class="mt-3 text-start">
                <p class="mb-0 small text-muted">
                  We bridge the gap between documentation and execution,
                  helping teams transform their plans into measurable, repeatable action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MISSION / VISION / WHY -->
    <section class="about-us-wrapper">
      <div class="about-us-container">
        <div class="about-us-grid">
          <!-- Mission -->
          <div
            class="about-us-card"
            data-animate
            data-delay="0"
          >
            <span class="about-us-count">01</span>
            <h2 class="about-us-title">Our Mission</h2>
            <p class="hero-description">
              To ensure every organization can respond confidently when it matters most.
              Most companies have beautifully written plans—but few have ever tested them.
              TMP exists to make preparedness a capability, not a checkbox.
            </p>

            <ul class="about-us-list">
              <li>Simple</li>
              <li>Scalable</li>
              <li>Automated</li>
              <li>Measurable</li>
              <li>Continuous</li>
            </ul>
            <p class="about-us-note">Not a once-a-year tabletop exercise.</p>
          </div>

          <!-- Vision -->
          <div
            class="about-us-card"
            data-animate
            data-delay="150"
          >
            <span class="about-us-count">02</span>
            <h2 class="about-us-title">Our Vision</h2>
            <p class="hero-description">
              A world where incident preparedness becomes second nature.
              People perform best in crises not because they remember the document —
              but because they’ve practiced it.
            </p>

            <ul class="about-us-list">
              <li>Cyber teams respond without hesitation</li>
              <li>BC teams recover without confusion</li>
              <li>Privacy teams meet regulatory timelines</li>
              <li>ESG teams execute with clarity</li>
            </ul>
            <p class="about-us-note">Preparedness becomes part of the culture.</p>
          </div>

          <!-- Why TMP -->
          <div
            class="about-us-card"
            data-animate
            data-delay="300"
          >
            <span class="about-us-count">03</span>
            <h2 class="about-us-title">Why We Built TMP</h2>
            <p class="hero-description">
              Organizations plan for crises — but rarely practice for them.
              Through years of experience, we uncovered common failures:
            </p>

            <ul class="about-us-list">
              <li>"Our plans haven’t been tested in years."</li>
              <li>"Teams don’t know their roles."</li>
              <li>"Dependencies appear during real crises."</li>
              <li>"We failed audits without evidence."</li>
              <li>"Attackers strike 24x7. We don’t."</li>
            </ul>

            <p class="about-us-note">
              TMP was built to make preparedness measurable, automated, and accessible.
            </p>
          </div>
        </div>

        <!-- VALUES SECTION -->
        <section class="about-us-values">
          <div class="row g-4 about-us-values-layout align-items-stretch">
            <!-- LEFT: IMAGE + OVERLAY -->
            <div class="col-lg-6" data-animate data-delay="0">
              <div class="about-us-values-media">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                  alt="Team collaborating"
                  class="about-us-values-img"
                />
                <div class="about-us-values-overlay">
                  <span class="about-us-values-label">02</span>
                  <h2 class="about-us-values-title">Our Values</h2>
                  <p class="hero-description">
                    We believe true resilience comes from continuous practice,
                    simplicity, and visible trust across teams.
                  </p>
                </div>
              </div>
            </div>

            <!-- RIGHT: VALUE CARDS -->
            <div class="col-lg-6">
              <div class="about-us-values-content">
                <div class="about-us-values-grid">
                  <div
                    class="about-us-value-item"
                    data-animate
                    data-delay="100"
                  >
                    <h4>Preparedness First</h4>
                    <p class="hero-description">Practice is the foundation of resilience.</p>
                  </div>

                  <div
                    class="about-us-value-item"
                    data-animate
                    data-delay="200"
                  >
                    <h4>Simplicity by Design</h4>
                    <p class="hero-description">Easy for both technical and non-technical teams.</p>
                  </div>

                  <div
                    class="about-us-value-item"
                    data-animate
                    data-delay="300"
                  >
                    <h4>Transparency</h4>
                    <p class="hero-description">Visible readiness, honest metrics, clear insights.</p>
                  </div>

                  <div
                    class="about-us-value-item"
                    data-animate
                    data-delay="400"
                  >
                    <h4>Security by Default</h4>
                    <p class="hero-description">Encryption, access control, strict governance.</p>
                  </div>

                  <div
                    class="about-us-value-item"
                    data-animate
                    data-delay="500"
                  >
                    <h4>Continuous Improvement</h4>
                    <p class="hero-description">We learn, iterate, and evolve after every scenario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="container pb-5">
      <h3
        class="hero-heading text-center mb-4"
        data-animate
        data-delay="0"
      >
        What We Do
      </h3>
      <p class="text-center" data-animate data-delay="100">
        TMP enables organizations to:
      </p>

      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div
            class="feature-card p-4 rounded-3 h-100 shadow-sm"
            data-animate
            data-delay="0"
          >
            <div class="feature-icon">
              <i class="bi bi-diagram-3-fill"></i>
            </div>
            <h4 class="mt-2 mb-2 text-dark">Convert plans into workflows</h4>
            <p class="hero-description text-muted mb-0">
              Your Cyber, BC, Privacy, and ESG plans become living, guided processes.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div
            class="feature-card p-4 rounded-3 h-100 shadow-sm"
            data-animate
            data-delay="100"
          >
            <div class="feature-icon">
              <i class="bi bi-play-circle-fill"></i>
            </div>
            <h4 class="mt-2 mb-2 text-dark">Run real-world tests</h4>
            <p class="hero-description text-muted mb-0">
              Automated scenarios with safe simulation modes and no manual coordination headaches.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div
            class="feature-card p-4 rounded-3 h-100 shadow-sm"
            data-animate
            data-delay="200"
          >
            <div class="feature-icon">
              <i class="bi bi-people-fill"></i>
            </div>
            <h4 class="mt-2 mb-2 text-dark">Train teams continuously</h4>
            <p class="hero-description text-muted mb-0">
              Short role tasks that build muscle memory and reduce human error during incidents.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div
            class="feature-card p-4 rounded-3 h-100 shadow-sm"
            data-animate
            data-delay="300"
          >
            <div class="feature-icon">
              <i class="bi bi-speedometer2"></i>
            </div>
            <h4 class="mt-2 mb-2 text-dark">Measure readiness</h4>
            <p class="hero-description text-muted mb-0">
              Response times, playbook completion, and decision accuracy — all visible in dashboards.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div
            class="feature-card p-4 rounded-3 h-100 shadow-sm"
            data-animate
            data-delay="400"
          >
            <div class="feature-icon">
              <i class="bi bi-file-earmark-check-fill"></i>
            </div>
            <h4 class="mt-2 mb-2 text-dark">Generate audit evidence</h4>
            <p class="hero-description text-muted mb-0">
              Reports mapped to ISO, SOC2, GDPR, HIPAA, PDPL, NIST and more.
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div
            class="feature-card p-4 rounded-3 h-100 shadow-sm"
            data-animate
            data-delay="500"
          >
            <div class="feature-icon">
              <i class="bi bi-puzzle-fill"></i>
            </div>
            <h4 class="mt-2 mb-2 text-dark">Integrations & automation</h4>
            <p class="hero-description text-muted mb-0">
              Connectors for SIEM, ticketing, cloud, Slack, Teams and identity systems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <MainContact />
    <MainFooter />
    <ScrollToTop />
  </div>
</template>

<script lang="ts">
import MainContact from "@/components/MainContact.vue";
import MainFooter from "../components/MainFooter.vue";
import MainNavbar from "../components/MainNavbar.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";

export default {
  name: "AboutusView",
  components: {
    MainNavbar,
    MainContact,
    MainFooter,
    RegulatoryWidget,
    ScrollToTop,
  },
  data() {
    return {
      intersectionObserver: null as IntersectionObserver | null,
    };
  },
  mounted() {
    const elements = this.$el.querySelectorAll("[data-animate]") as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => {
      const delay = el.dataset.delay;
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      observer.observe(el);
    });

    this.intersectionObserver = observer;
  },
  beforeUnmount() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  },
};
</script>


