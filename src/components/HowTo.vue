<template>

    <div class="neuros-container">
      <aside class="neuros-sidebar">
        <div class="neuros-header">
         
          <h2 class="title">How it works</h2>
        </div>

        <nav class="step-nav">
          <div class="nav-item active" data-index="0">
            <div class="progress-line"></div>
            <span class="nav-index">01</span>
            <span class="nav-label">Sign Up</span>
          </div>
          <div class="nav-item" data-index="1">
            <div class="progress-line"></div>
            <span class="nav-index">02</span>
            <span class="nav-label">Team Config</span>
          </div>
          <div class="nav-item" data-index="2">
            <div class="progress-line"></div>
            <span class="nav-index">03</span>
            <span class="nav-label">Threat Agent</span>
          </div>
          <div class="nav-item" data-index="3">
            <div class="progress-line"></div>
            <span class="nav-index">04</span>
            <span class="nav-label">Launch Test</span>
          </div>
          <div class="nav-item" data-index="4">
            <div class="progress-line"></div>
            <span class="nav-index">05</span>
            <span class="nav-label">Improvement</span>
          </div>
        </nav>
      </aside>

      <main class="neuros-console">
        <div class="glass-orb"></div>
        <div class="console-card" id="content-display">
          <div class="image-wrapper">
            <img
              id="display-img"
              src="../assets/images/signup-home.jpeg"
            />
          </div>
          <div class="text-content">
            <h3 id="display-title">Sign Up</h3>
            <p id="display-desc">
              Create your workspace in seconds using SSO or email. No setup barriers — just log in and get started instantly.
            </p>
          </div>
        </div>
      </main>
    </div>

</template>

<script lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

interface Step {
  title: string;
  desc: string;
  img: string;
}

export default {
  name: "NeurosSection",

  setup() {
    const steps: Step[] = [
      {
        title: "Sign Up",
        desc: "Create your workspace in seconds using SSO or email. No setup barriers — just log in and get started instantly.",
        img: new URL("@/assets/images/signup-home.jpeg", import.meta.url).href,
      },
      {
        title: "Configure users & teams",
        desc: "Add your teams and assign them to communication channels like Slack, Teams, or Mattermost. Everyone is mapped, reachable, and ready for action.",
        img: new URL("@/assets/images/team-config.jpeg", import.meta.url).href,
      },
      {
        title: " Configure threats",
        desc: "Use the built-in Threat Agent to identify what needs testing. It recommends relevant threats and helps you configure precise, context-aware scenarios.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      },
      {
        title: "Initiate preparedness",
        desc: "Launch tests with just a few clicks. TMP orchestrates the entire workflow — notifications, tasks, timing, escalations — automatically.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      {
        title: "Report & improve",
        desc: "Access analytics that show real-world readiness. Get compliance-ready reports aligned to regulatory standards, complete with insights and actionable gaps.",
        img: new URL("@/assets/images/report-improve.jpeg", import.meta.url).href,
      },
    ];

    let currentIndex = 0;
    let autoPlayTimer: number | undefined;

    function updateUI(index: number, element: Element | undefined) {
      // ✅ Guard 1: element check
      if (!element) return;

      // ✅ Guard 2: step existence check
      const step = steps[index];
      if (!step) return;

      document.querySelectorAll(".nav-item").forEach((item) =>
        item.classList.remove("active")
      );
      element.classList.add("active");

      const card = document.getElementById("content-display");
      if (!card) return;

      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation =
        "slideIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards";

      const titleEl = document.getElementById("display-title");
      const descEl = document.getElementById("display-desc");
      const imgEl = document.getElementById("display-img") as HTMLImageElement | null;

      if (titleEl) titleEl.innerText = step.title;
      if (descEl) descEl.innerText = step.desc;
      if (imgEl) imgEl.src = step.img;
    }

    function startAutoPlay() {
      autoPlayTimer = window.setInterval(() => {
        currentIndex = (currentIndex + 1) % steps.length;
        const items = document.querySelectorAll(".nav-item");
        updateUI(currentIndex, items[currentIndex]);
      }, 5000);
    }

    onMounted(() => {
      const items = document.querySelectorAll(".nav-item");

      items.forEach((item, idx) => {
        item.addEventListener("click", () => {
          if (autoPlayTimer) clearInterval(autoPlayTimer);
          currentIndex = idx;
          updateUI(idx, item);
          startAutoPlay();
        });
      });

      startAutoPlay();
    });

    onBeforeUnmount(() => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    });
  },
};
</script>


<style scoped>


.neuros-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
}

/* Sidebar */
.neuros-sidebar {
  flex: 1;
  max-width: 350px;
}

.eyebrow {
  /* color: #7c3aed; */
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: bold;
}

.title {
  font-size: 48px;
  margin: 10px 0 40px;
}

/* Nav */
.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 25px 0 25px 15px;
  cursor: pointer;
  border-left: 2px solid rgba(255, 255, 255, 0.05);

  color: #94a3b8;
  transition: all 0.4s ease;
}

.nav-item.active {
  color: #ffffff;
  background: linear-gradient(
    90deg,
    rgba(124, 58, 237, 0.1),
    transparent
  );

  /* Bottom border for active item */
.nav-item.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 2px;

  background: #7c3aed;
}

}


.nav-index {
  font-weight: 800;
  font-size: 14px;
  margin-right: 20px;
  opacity: 0.5;
}

.nav-item.active .nav-index {
  color: #7c3aed;
  opacity: 1;
}

.nav-label {
  font-size: 18px;
  font-weight: 600;
}

/* Progress */
.progress-line {
  position: absolute;
  left: -2px;
  top: 0;
  width: 2px;
  height: 0%;
  background: #7c3aed;
  transition: height 5s linear;
}

.nav-item.active .progress-line {
  height: 100%;
}

/* Console */
.neuros-console {
  flex: 2;
  position: relative;
}

.glass-orb {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.2),
    transparent 70%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(50px);
}

.console-card {
  background: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 40px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}

.image-wrapper {
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.image-wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.text-content h3 {
  font-size: 32px;
  margin-bottom: 15px;
  color: #fff;
}

.text-content p {
  color: #ffffff;
  line-height: 1.7;
  font-size: 15px;
}

/* Animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* =========================
   RESPONSIVE BREAKPOINTS
========================= */

/* ---------- Large screens (≤ 1200px) ---------- */
@media (max-width: 1200px) {
  .neuros-container {
    gap: 32px;
    padding: 0 20px;
  }

  .title {
    font-size: 40px;
  }

  .image-wrapper img {
    height: 280px;
  }
}

/* ---------- Tablets (≤ 992px) ---------- */
@media (max-width: 992px) {
  .neuros-container {
    flex-direction: column;
    gap: 40px;
  }

  .neuros-sidebar {
    max-width: 100%;
  }

  /* Horizontal step nav */
  .step-nav {
    display: flex;
    overflow-x: auto;
    gap: 24px;
    padding-bottom: 10px;
  }

  .step-nav::-webkit-scrollbar {
    display: none;
  }

  .nav-item {
    flex-shrink: 0;
    border-left: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.08);
    padding: 12px 10px;
  }

  .progress-line {
    display: none;
  }

  .title {
    font-size: 36px;
    margin-bottom: 24px;
  }

  .image-wrapper img {
    height: 260px;
  }
}

/* ---------- Mobile (≤ 768px) ---------- */
@media (max-width: 768px) {
  .neuros-container {
    padding: 0 16px;
  }

  .eyebrow {
    font-size: 11px;
  }

  .title {
    font-size: 30px;
  }

  .nav-label {
    font-size: 14px;
  }

  .nav-index {
    font-size: 12px;
    margin-right: 8px;
  }

  .console-card {
    padding: 24px;
    border-radius: 24px;
  }

  .image-wrapper img {
    height: 220px;
  }

  .text-content h3 {
    font-size: 24px;
  }

  .text-content p {
    font-size: 14px;
  }

  .glass-orb {
    width: 260px;
    height: 260px;
  }
}

/* ---------- Small mobile (≤ 480px) ---------- */
@media (max-width: 480px) {
  .title {
    font-size: 26px;
  }

  .console-card {
    padding: 20px;
  }

  .image-wrapper img {
    height: 190px;
  }

  .text-content h3 {
    font-size: 22px;
  }

  .text-content p {
    font-size: 13px;
    line-height: 1.6;
  }
}

</style>