<template>
  <div>
    <!-- Floating trigger button (GLOBAL) -->
    <button type="button" class="reg-trigger" @click="toggleRegModal" aria-label="Open regulatory requirements">
      <span class="reg-trigger-icon">
        <!-- simple chat/info icon -->
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <rect x="4" y="4" width="16" height="13" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.6" />
          <path d="M9 18l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
    </button>

    <!-- Slide-in modal -->
    <transition name="reg-slide">
      <div v-if="showRegModal" class="reg-modal-wrapper">
        <div class="reg-modal" role="dialog" aria-modal="true">
          <!-- close button -->
          <button class="reg-modal-close" type="button" @click="closeRegModal">
            ✕
          </button>

          <!-- HEADER -->
          <div class="reg-modal-header">
            <!-- left: icon + title -->
            <div class="reg-modal-header-left">
              <div class="reg-modal-icon">
                <img src="../assets/images/logo-small.png" alt="Logo" />
              </div>

              <div>
                <!-- <p class="reg-modal-eyebrow">Regulatory requirement</p> -->
                <h2 class="reg-modal-title">Regulatory requirement</h2>
              </div>
            </div>

            <!-- right: location selector -->
            <div class="reg-modal-header-right">
              <label class="reg-modal-location-label" for="reg-location-select">

              </label>
              <select id="reg-location-select" class="reg-modal-location-select mx-5" v-model="userCountry">
                <option v-for="loc in locationOptions" :key="loc" :value="loc">
                  {{ loc }}
                </option>
              </select>
            </div>
          </div>

          <!-- lead text -->
          <p class="reg-modal-lead">
            We’ve detected your location as
            <strong>{{ userCountry }}</strong>. Below are example regulatory
            expectations and how TMP helps you stay compliant.
          </p>

          <!-- table -->
          <div class="reg-modal-table-wrap">
            <table class="reg-modal-table">
              <thead>
                <tr>
                  <th>Regulator</th>
                  <th>Control / Ref</th>
                  <th>Requirement</th>
                  <th>TMP module</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in regulatoryRows" :key="row.control">
                  <td>{{ row.regulator }}</td>
                  <td>{{ row.control }}</td>
                  <td>{{ row.requirement }}</td>
                  <td>{{ row.module }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- actions -->
          <div class="reg-modal-actions">
            <!-- <button type="button" class="reg-modal-cta" @click="closeRegModal">
              Get Started
            </button>
            <button type="button" class="reg-modal-secondary" @click="goToRegulatoryPage">
              View all requirements
            </button> -->
            <router-link to="/get-started" class="reg-modal-cta">
              Get Started
            </router-link>

            <router-link to="/regulatory-requirments" class="reg-modal-secondary">
              View all requirements
            </router-link>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegulatoryWidget",
  data() {
    return {
      showRegModal: false as boolean,
      userCountry: "Philippines" as string,
      locationOptions: [
        "Philippines",
        "Saudi Arabia",
        "Bahrain",
        "India",
        "United Kingdom",
        "United States",
      ] as string[],
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
  methods: {
    toggleRegModal(): void {
      this.showRegModal = !this.showRegModal;
    },
    closeRegModal(): void {
      this.showRegModal = false;
    },
    goToRegulatoryPage(): void {
      this.showRegModal = false;
      // later: this.$router.push({ name: "RegulatoryRequirements" });
    },
  },
});
</script>

<style scoped>
/* FLOATING TRIGGER BUTTON */
.reg-trigger {
  position: fixed;
  top: 96px;
  right: 16px;
  /* ✅ right side under navbar */
  z-index: 1040;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: #0b1120;
  color: #f9fafb;
  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.6);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.reg-trigger:hover {
  transform: translateY(-1px) scale(1.02);
  background: #020617;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.75);
}

.reg-trigger-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.reg-modal-icon img {
  width: 40px;
  /* adjust as needed */
  height: 48px;
  object-fit: contain;
}


/* On mobile, move it to bottom-right */
@media (max-width: 768px) {
  .reg-trigger {
    top: auto;
    bottom: 20px;
    right: 16px;
  }
}

/* BACKDROP WRAPPER */
.reg-modal-wrapper {
  position: fixed;
  inset: 0;
  z-index: 1050;
  pointer-events: none;
}

/* PANEL */
.reg-modal {
  position: absolute;
  top: 90px;
  right: 55px;

  /* content-driven size with limits */
  width: auto;
  height: auto;
  max-width: min(800px, 92vw);
  max-height: calc(100vh - 140px);

  background: #0b1120;
  color: #f9fafb;
  border-radius: 18px;
  padding: 1.4rem 1.6rem 1.2rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(148, 163, 184, 0.4);
  pointer-events: auto;
  animation: reg-pop 0.95s cubic-bezier(0.18, 0.89, 0.32, 1.28) 1.1s both;
  overflow: hidden;
}

/* close button */
.reg-modal-close {
  position: absolute;
  top: 25px;
  right: 16px;
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #9ca3af;
}

.reg-modal-close:hover {
  color: #e5e7eb;
}

/* HEADER LAYOUT */
.reg-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 0.4rem;
}

.reg-modal-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* .reg-modal-icon {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 30% 0%, #22c55e, #16a34a);
  box-shadow: 0 10px 24px rgba(22, 163, 74, 0.5);
  font-size: 20px;
} */

/* location selector block */
.reg-modal-header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
  padding-top: 0.1rem;
}

.reg-modal-location-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #9ca3af;
}

.reg-modal-location-select {
  background: #020617;
  color: #e5e7eb;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.9);
  padding: 0.28rem 0.95rem 0.28rem 0.7rem;
  font-size: 0.78rem;
  outline: none;
  cursor: pointer;
}

/* .reg-modal-location-select:focus {
  border-color: #22c55e;
  box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.55);
} */

/* eyebrow + title */
.reg-modal-eyebrow {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  opacity: 0.7;
  margin-bottom: 0.1rem;
}

.reg-modal-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

/* lead text */
.reg-modal-lead {
  font-size: 0.85rem;
  color: #e5e7eb;
  margin: 0.55rem 0 0.8rem;
}

/* table */
.reg-modal-table-wrap {
  max-height: 40vh;
  overflow-y: auto;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: #020617;
  margin-bottom: 0.8rem;
}

.reg-modal-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
}

.reg-modal-table th,
.reg-modal-table td {
  padding: 0.45rem 0.6rem;
  text-align: left;
}

.reg-modal-table thead th {
  background: rgba(15, 23, 42, 0.9);
  font-weight: 600;
  border-bottom: 1px solid rgba(51, 65, 85, 0.9);
}

.reg-modal-table tbody tr:nth-child(even) td {
  background: rgba(15, 23, 42, 0.9);
}

/* buttons */
.reg-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  justify-content: flex-end;
}

.reg-modal-cta,
.reg-modal-secondary {
  border-radius: 999px;
  padding: 0.42rem 1.1rem;
  font-size: 0.78rem;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 500;
}

.reg-modal-cta {
  /* background: #22c55e; */
  background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
  /* color: #022c22; */
  color: #fff;
  /* box-shadow: 0 12px 30px rgba(34, 197, 94, 0.35); */
}

/* .reg-modal-cta:hover {
  background: #16a34a;
} */

.reg-modal-secondary {
  /* background: transparent; */
  background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%);
  /* border-color: rgba(148, 163, 184, 0.9); */
  color: #e5e7eb;
}

/* .reg-modal-secondary:hover {
  background: rgba(15, 23, 42, 0.9);
} */

/* Vue transition – opacity only */
.reg-slide-enter-active,
.reg-slide-leave-active {
  transition: opacity 0.45s ease;
}

.reg-slide-enter-from,
.reg-slide-leave-to {
  opacity: 0;
}

.reg-slide-enter-to,
.reg-slide-leave-from {
  opacity: 1;
}

/* keyframe for slide-from-right with pop + delay */
@keyframes reg-pop {
  0% {
    transform: translateX(120%) scale(0.96);
    opacity: 0;
  }

  60% {
    transform: translateX(-8px) scale(1.02);
    opacity: 1;
  }

  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

/* mobile modal width tweaks */
@media (max-width: 576px) {
  .reg-modal {
    top: 80px;
    right: 12px;
    left: 12px;
    max-width: 100%;
  }

  .reg-modal-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .reg-modal-header-right {
    align-items: flex-start;
  }
}
</style>
