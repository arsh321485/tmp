<template>
  <div id="top">
    <MainNavbar />

    <RegulatoryWidget />
    <!-- INDUSTRY GRID -->
    <section class="industries-wrapper">
      <div class="industry-grid">
        <div v-for="(industry, index) in industries" :key="industry.id" class="industry-card"
          @click="openLightbox(index)">
          <img :src="industry.image" :alt="industry.name" />
          <div class="industry-card-overlay">
            <h4>{{ industry.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- LIGHTBOX (IMAGE + CONTENT TOGETHER) -->
    <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">✕</button>

      <!-- LEFT ARROW -->
      <button class="lightbox-arrow left" @click.stop="prevIndustry">
        ‹
      </button>

      <!-- RIGHT ARROW -->
      <button class="lightbox-arrow right" @click.stop="nextIndustry">
        ›
      </button>
      <div class="lightbox-inner" :style="{ backgroundImage: `url(${lightboxImage})` }">
        <!-- overlay -->
        <div class="lightbox-overlay">

          <!-- TABS (TOP ON IMAGE) -->
          <div class="ihw-tabs floating-tabs">
            <button v-for="tab in tabs" :key="tab.key" class="ihw-tab" :class="{ 'is-active': activeTab === tab.key }"
              @click="activeTab = tab.key">
              {{ tab.label }}
            </button>
          </div>

          <!-- CONTENT -->
          <div v-if="tabContent" class="ihw-content">
            <h3>{{ tabContent.title }}</h3>
            <p class="ihw-subtitle">{{ tabContent.subtitle }}</p>

            <ul>
              <li v-for="(point, i) in tabContent.points" :key="i">
                <strong>{{ point.title }}</strong>
                <p class="ihw-point-desc">{{ point.description }}</p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
    <MainContact />
    <MainFooter />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "@/components/MainNavbar.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";

type TabKey = "cybersecurity" | "businessContinuity" | "dataPrivacy" | "Esg";

interface Tab {
  key: TabKey;
  label: string;
}

interface Section {
  title: string;
  subtitle: string;
  points: { title: string; description: string }[];
}

interface Industry {
  id: string;
  name: string;
  image: string;
  content: Record<TabKey, Section>;
}

export default defineComponent({
  name: "IndustriesView",
  components: { MainNavbar, RegulatoryWidget, MainContact, MainFooter },

  data() {
    const industries: Industry[] = [
      {
        id: "airline",
        name: "Airline",
        image:
          "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Digital trust keeps airlines operational.",
            points: [
              { title: "Flight System Attacks", description: "Disrupt operations and safety." },
              { title: "Ransomware", description: "Critical systems locked." }
            ]
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Downtime impacts global routes.",
            points: [
              { title: "System Outages", description: "Check-in and boarding failures." }
            ]
          },
          dataPrivacy: {
            title: "03. Data Privacy",
            subtitle: "Passenger data protection.",
            points: [
              { title: "PNR Exposure", description: "Sensitive travel data leaks." }
            ]
          },
          Esg: {
            title: "04. ESG",
            subtitle: "Environmental & governance responsibility.",
            points: [
              { title: "Emission Reporting", description: "Sustainability compliance." }
            ]
          }
        }
      },

      {
        id: "banking",
        name: "Banking",
        image:
          "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Banks operate on trust — a single breach can cause massive financial loss.",
            points: [
              {
                title: "Account Takeover Attacks",
                description: "Credential theft and phishing lead to unauthorized access to customer accounts."
              },
              {
                title: "Core Banking System Breaches",
                description: "Attacks on CBS can halt transactions and disrupt national payment systems."
              }
            ]
          },

          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Downtime in banking immediately impacts customers and regulators.",
            points: [
              {
                title: "Digital Banking Outages",
                description: "Mobile and internet banking downtime locks customers out of funds."
              },
              {
                title: "ATM & Payment Network Failures",
                description: "Cash access and card payments become unavailable."
              }
            ]
          },

          dataPrivacy: {
            title: "03. Data Privacy",
            subtitle: "Banks store extremely sensitive personal and financial data.",
            points: [
              {
                title: "KYC & Identity Data Leaks",
                description: "Exposure of Aadhaar, PAN, passport, and address documents."
              },
              {
                title: "Transaction History Exposure",
                description: "Unauthorized access reveals customer spending and income patterns."
              }
            ]
          },

          Esg: {
            title: "04. ESG",
            subtitle: "Ethical governance and compliance define a bank’s credibility.",
            points: [
              {
                title: "AML & Compliance Failures",
                description: "Weak controls lead to regulatory penalties and reputational damage."
              },
              {
                title: "Unethical Lending Practices",
                description: "Financing restricted or harmful industries impacts ESG ratings."
              }
            ]
          }
        }
      }



    ];

    const tabs: Tab[] = [
      { key: "cybersecurity", label: "Cybersecurity" },
      { key: "businessContinuity", label: "Business Continuity" },
      { key: "dataPrivacy", label: "Data Privacy" },
      { key: "Esg", label: "ESG" }
    ];

    return {
      industries,
      tabs,
      activeIndustryIndex: 0,
      activeTab: "cybersecurity" as TabKey,
      lightboxOpen: false
    };
  },

  computed: {
    currentIndustry(): Industry | null {
      return this.industries[this.activeIndustryIndex] ?? null;
    },

    tabContent(): Section | null {
      return this.currentIndustry
        ? this.currentIndustry.content[this.activeTab]
        : null;
    },

    lightboxImage(): string {
      return this.currentIndustry?.image || "";
    }
  },

  methods: {
    openLightbox(index: number) {
      this.activeIndustryIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = "hidden";
    },

    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = "";
    },

    nextIndustry() {
      this.activeIndustryIndex =
        (this.activeIndustryIndex + 1) % this.industries.length;

      // optional but recommended
      this.activeTab = "cybersecurity";
    },

    prevIndustry() {
      this.activeIndustryIndex =
        (this.activeIndustryIndex - 1 + this.industries.length) %
        this.industries.length;

      this.activeTab = "cybersecurity";
    }

  }
});
</script>


<style scoped>
/* GRID */
.industries-wrapper {
  padding: 80px 20px;
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 80px;
}

.industry-card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
}

.industry-card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.industry-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, .6), transparent);
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.industry-card-overlay h4 {
  color: #fff;
  font-size: 18px;
}

/* LIGHTBOX */

/* LIGHTBOX ARROWS */
.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 36px;
  border: none;
  cursor: pointer;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-arrow.left {
  left: 24px;
}

.lightbox-arrow.right {
  right: 24px;
}

.lightbox-arrow:hover {
  background: rgba(0, 0, 0, 0.7);
}



.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .9);
  z-index: 9999;
}

.lightbox-inner {
  width: 90vw;
  height: 90vh;
  margin: auto;
  border-radius: 32px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.lightbox-overlay {
  height: 100%;
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.15));
  padding: 48px;
  color: #fff;
  overflow-y: auto;
}


.lightbox-close {
  position: absolute;
  top: 20px;
  right: 28px;
  font-size: 28px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
}

/* TABS */
.floating-tabs {
  position: sticky;
  top: 24px;
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  z-index: 5;
}

/* TAB PILL STYLE */
.ihw-tab {
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: all 0.2s ease;
}

.ihw-tab:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* ACTIVE TAB (WHITE PILL) */
.ihw-tab.is-active {
  background: #fff;
  color: #000;
  border-color: #fff;
  font-weight: 500;
}

/* CONTENT */
.ihw-content h3 {
  font-size: 24px;
  color: whitesmoke;
}

.ihw-subtitle {
  color: #bbb;
  margin-bottom: 16px;
}

.ihw-point-desc {
  color: #ddd;
  font-size: 14px;
}

/* =========================
   RESPONSIVE STYLES
========================= */

/* ---------- LARGE LAPTOPS ---------- */
@media (max-width: 1200px) {
  .lightbox-inner {
    width: 94vw;
    height: 88vh;
  }

  .lightbox-overlay {
    padding: 36px;
  }
}

/* ---------- TABLETS ---------- */
@media (max-width: 992px) {
  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .industry-card img {
    height: 220px;
  }

  .lightbox-overlay {
    padding: 32px;
  }

  .ihw-content h3 {
    font-size: 22px;
  }

  .lightbox-arrow {
    width: 46px;
    height: 46px;
    font-size: 30px;
  }

  .lightbox-arrow.left {
    left: 16px;
  }

  .lightbox-arrow.right {
    right: 16px;
  }
}

/* ---------- MOBILE ---------- */
@media (max-width: 768px) {
  .industries-wrapper {
    padding: 48px 16px;
  }

  .industry-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .industry-card img {
    height: 200px;
  }

  .lightbox-inner {
    width: 96vw;
    height: 92vh;
    border-radius: 20px;
  }

  .lightbox-overlay {
    padding: 24px;
  }

  /* Tabs scroll horizontally */
  .floating-tabs {
    position: sticky;
    top: 16px;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 8px;
  }

  .floating-tabs::-webkit-scrollbar {
    display: none;
  }

  .ihw-tab {
    font-size: 13px;
    padding: 6px 14px;
  }

  .ihw-content h3 {
    font-size: 20px;
  }

  .ihw-point-desc {
    font-size: 13px;
  }

  /* Smaller arrows */
  .lightbox-arrow {
    width: 40px;
    height: 40px;
    font-size: 26px;
  }

  .lightbox-arrow.left {
    left: 10px;
  }

  .lightbox-arrow.right {
    right: 10px;
  }

  .lightbox-close {
    top: 14px;
    right: 18px;
    font-size: 24px;
  }
}

/* ---------- SMALL MOBILES ---------- */
@media (max-width: 480px) {
  .lightbox-overlay {
    padding: 20px;
  }

  .ihw-content h3 {
    font-size: 18px;
  }

  .ihw-subtitle {
    font-size: 13px;
  }

  .ihw-tab {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
