<template>
  <div id="top" class="industries-page">
    <MainNavbar />

    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>Industries</span>
        </nav>

        <div class="hero-inner">
          <div class="hero-text">
            <h1 class="title">{{ pageTitle }}</h1>
            <p class="subtitle">{{ pageSubtitle }}</p>
          </div>

          <div class="hero-cta">
            <button class="btn-primary" @click="scrollTo('#industries-list')">Explore Industries</button>
            <button class="btn-outline" @click="openContact">Contact Us</button>
          </div>
        </div>
      </div>
    </section>

    <!-- GRID + DETAILS WRAPPER -->
    <section id="industries-list" class="industries-list container">
      <div class="section-header">
        <h2>Industries we cover</h2>
        <p class="muted">Tap or press Enter on a card to view details. The selected card remains highlighted.</p>
      </div>

      <!-- grid sits in normal document flow; detail is below it
           NOTE: grid-wrapper reserves space (padding-bottom) so details insertion doesn't shift cards -->
      <div class="grid-wrapper">
        <div class="grid" ref="gridEl">
          <article
            v-for="(ind, idx) in industries"
            :key="ind.slug"
            class="card"
            :class="{ active: activeIndex === idx }"
            tabindex="0"
            role="button"
            :aria-pressed="activeIndex === idx"
            @click="setActive(idx)"
            @keydown.enter.prevent="setActive(idx)"
            @keydown.space.prevent="setActive(idx)"
            :data-delay="idx * 80"
            :style="getCardStyle(idx)"
            ref="cards"
          >
            <div class="card-top">
              <div class="card-icon" aria-hidden="true">
                <span class="icon">{{ ind.iconText }}</span>
              </div>
              <div class="card-meta">
                <h3 class="card-title">{{ ind.title }}</h3>
                <p class="card-excerpt">{{ ind.excerpt }}</p>
              </div>
            </div>

            <div class="card-footer">
              <small class="muted">Click to read threats & mitigations</small>
              <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </article>
        </div>

        <!-- DETAILS (always below the grid in flow) -->
        <div v-if="activeIndustry" class="industry-detail" aria-live="polite">
          <div class="detail-main">
            <div class="detail-header">
              <h2>{{ activeIndustry.title }}</h2>
              <p class="lead">{{ activeIndustry.excerpt }}</p>

              <div class="detail-actions simple">
                <button class="btn-outline" @click="scrollTo('#industries-list')">Back to list</button>
              </div>
            </div>

            <div class="tabs" role="tablist" aria-label="Industry sections">
              <button
                v-for="tab in tabs"
                :key="tab"
                :id="`tab-${tab}`"
                :aria-selected="selectedTab === tab"
                :class="['tab-btn', { selected: selectedTab === tab }]"
                role="tab"
                @click="selectedTab = tab"
              >{{ tab }}</button>
            </div>

            <div class="tab-panel" role="tabpanel">
              <div v-if="selectedTab === 'Facilities'">
                <h4>Facilities threats</h4>
                <ul class="bulleted">
                  <li v-for="(t, i) in activeIndustry.facilities" :key="i">{{ t }}</li>
                </ul>
              </div>

              <div v-else-if="selectedTab === 'HSE'">
                <h4>HSE threats</h4>
                <ul class="bulleted">
                  <li v-for="(t, i) in activeIndustry.hse" :key="i">{{ t }}</li>
                </ul>
              </div>

              <div v-else-if="selectedTab === 'Cybersecurity'">
                <h4>Cyber security threats</h4>
                <ul class="bulleted">
                  <li v-for="(t, i) in activeIndustry.cyber" :key="i">{{ t }}</li>
                </ul>
              </div>

              <div v-else-if="selectedTab === 'IT continuity'">
                <h4>IT service continuity threats</h4>
                <ul class="bulleted">
                  <li v-for="(t, i) in activeIndustry.it" :key="i">{{ t }}</li>
                </ul>
              </div>

              <div v-else-if="selectedTab === 'Business continuity'">
                <h4>Business continuity threats</h4>
                <ul class="bulleted">
                  <li v-for="(t, i) in activeIndustry.business" :key="i">{{ t }}</li>
                </ul>
              </div>

              <div v-else-if="selectedTab === 'Data breach'">
                <h4>Data breach threats</h4>
                <ul class="bulleted">
                  <li v-for="(t, i) in activeIndustry.data" :key="i">{{ t }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- .grid-wrapper -->
    </section>

    <MainContact />

    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import MainNavbar from "@/components/MainNavbar.vue";
import MainFooter from "@/components/MainFooter.vue";
import MainContact from "@/components/MainContact.vue";

type Industry = {
  slug: string;
  title: string;
  iconText?: string;
  excerpt: string;
  facilities: string[];
  hse: string[];
  cyber: string[];
  it: string[];
  business: string[];
  data: string[];
  quickFacts?: string[];
};

export default defineComponent({
  name: "IndustriesPage",
  components: { MainNavbar, MainFooter, MainContact },
  data() {
    return {
      pageTitle: "Industries",
      pageSubtitle: "Threats, risks and continuity considerations across industries",
      tabs: ["Facilities", "HSE", "Cybersecurity", "IT continuity", "Business continuity", "Data breach"] as string[],
      selectedTab: "Facilities" as string,
      activeIndex: -1 as number,
      industries: [] as Industry[],
    };
  },
  computed: {
    activeIndustry(): Industry | null {
      const idx = this.activeIndex;
      if (idx >= 0 && idx < this.industries.length) {
        return this.industries[idx] ?? null;
      }
      return null;
    }
  },
  mounted() {
    this.industries = this.getIndustriesData();
    nextTick(() => this.setupIntersectionAnimations());
  },
  methods: {
    setActive(index: number) {
      // keep the selected card permanently visible (until user chooses another)
      this.activeIndex = index;
      this.selectedTab = "Facilities";

      // Ensure detail is visible on small screens. We deliberately DO NOT change or reassign industries.
      this.$nextTick(() => {
        const el = document.querySelector(".industry-detail");
        if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },

    scrollTo(selector: string) {
      const el = document.querySelector(selector);
      if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
    },

    openContact() {
      this.$emit("open-contact");
    },

    getCardStyle(idx: number) {
      const delay = idx * 80;
      return { transitionDelay: `${delay}ms` };
    },

    // IntersectionObserver: only add `in-view`. Do not remove or toggle classes in a way that hides the card.
    setupIntersectionAnimations() {
      const options = { threshold: 0.08 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            // optional: unobserve to reduce work — do not unobserve active card to avoid surprises
            const cards = Array.from(document.querySelectorAll(".card"));
            const idx = cards.indexOf(el);
            if (idx >= 0 && idx !== this.activeIndex) {
              observer.unobserve(el);
            }
          }
        });
      }, options);

      const cards = Array.from(document.querySelectorAll(".card"));
      cards.forEach((c) => observer.observe(c));
    },

    // -- data (full list kept, trimmed here for brevity but you already had full data)
    getIndustriesData(): Industry[] {
        return [
        {
          slug: "airline",
          title: "Airline",
          iconText: "✈️",
          excerpt: "An industry that provides air transportation services for passengers and cargo.",
          facilities: [
            "Natural Disasters: hurricanes, tornadoes, earthquakes, volcanic eruptions — disrupt flights and damage facilities.",
            "Terrorism: hijacks, explosives, terminal attacks — major operational & reputational impacts.",
            "Infrastructure: airports & runways require ongoing investment; failures cause delays and safety issues.",
          ],
          hse: [
            "Accidents: plane crashes and tarmac incidents despite heavy regulation.",
            "Health Hazards: infectious disease exposure, radiation risks, hazardous chemicals in maintenance.",
            "Fatigue: long hours/irregular schedules affecting performance and safety.",
            "Security Threats: terrorism targeting airports and flights.",
            "Environmental Concerns: emissions, hazardous waste, noise pollution.",
            "Ergonomic Hazards: musculoskeletal risks from heavy lifting and repetitive postures.",
          ],
          cyber: [
            "Cyber-attacks on infrastructure: reservations, flight control, ops systems disruptions.",
            "Phishing & social engineering: credential theft giving system access.",
            "Ransomware: encrypting critical systems causing cancellations/delays.",
            "Supply chain attacks: vendor compromise leading to airline system access.",
          ],
          it: [
            "Hardware & software failures: server crashes or software bugs causing outages.",
            "Power outages: affecting systems and operations.",
            "Human error: misconfigurations or accidental deletions.",
          ],
          business: [
            "Economic downturns: reduced travel demand and financing challenges.",
            "Labor disputes: strikes causing widespread cancellations and delays.",
          ],
          data: [
            "Theft of personal data: passenger PII & payment data targeted for fraud.",
            "Insider threats: employees exposing or misusing data.",
            "Third-party breaches: partner breaches exposing airline data.",
            "Cyber espionage: state-sponsored theft of proprietary information.",
          ],
          quickFacts: ["Passenger & cargo transport", "High-regulation industry", "Complex vendor ecosystem"],
        },

        {
          slug: "petrochemical",
          title: "Petrochemical",
          iconText: "🛢️",
          excerpt: "An industry that produces and markets chemicals and products derived from petroleum or natural gas.",
          facilities: [
            "Fires and Explosions: handling flammable materials creating major risk.",
            "Chemical Releases: equipment failures, human error or disasters releasing contaminants.",
            "Equipment Failures: pumps, valves, vessels failures causing safety & production impacts.",
            "Natural Disasters: hurricanes, floods damaging facilities.",
          ],
          hse: [
            "Worker Health & Safety: exposures to toxic chemicals and high-pressure systems.",
            "Process Safety Management: failures risk catastrophic incidents.",
            "Environmental Impact: air/water pollution, greenhouse gas emissions.",
            "Transportation Safety: hazardous materials transport risks.",
          ],
          cyber: [
            "Attacks on ICS: compromise of industrial control systems causing safety and production hazards.",
            "Ransomware: encrypting operational data.",
            "Intellectual Property Theft: proprietary process theft.",
            "Phishing & Insider Threats: credential theft and malicious insiders.",
          ],
          it: [
            "System Failures: process control and business systems disruptions.",
            "Natural Disasters: damage to IT infrastructure.",
            "Human Error: accidental deletion or misconfiguration.",
            "Supply Chain Disruptions: hardware component delays.",
          ],
          business: [
            "Health & Safety Incidents: fires/explosions causing production loss & reputational damage.",
            "Supply Chain Disruptions: raw material shortages and transport delays.",
            "Regulatory Compliance: fines and legal action.",
          ],
          data: [
            "IP Theft: R&D and process data targeted by competitors.",
            "Employee Data Breaches: sensitive HR data exposures.",
            "Third-Party Breaches: partner compromises exposing company data.",
          ],
          quickFacts: ["High hazard operations", "ICS-dependent", "Regulated heavily"],
        },

        {
          slug: "healthcare",
          title: "Healthcare",
          iconText: "🏥",
          excerpt: "Provision of medical services, products, and equipment for diagnosis and treatment.",
          facilities: [
            "Natural Disasters: earthquakes, hurricanes and floods damaging facilities.",
            "Physical Security Incidents: theft, vandalism and workplace violence risks.",
            "Infrastructure Failures: HVAC, power, water disruptions affecting care.",
            "Infectious Disease Outbreaks: facility closures and care interruptions.",
          ],
          hse: [
            "Occupational Health and Safety: exposures to infectious diseases and hazardous chemicals.",
            "Patient Safety: medication errors, HAIs, falls and other adverse events.",
            "Hazardous Waste Management: sharps, chemicals and biohazard risks.",
            "Emergency Preparedness: mass casualty and outbreak readiness.",
            "Indoor Air Quality: respiratory and allergy issues for patients/staff.",
          ],
          cyber: [
            "Ransomware Attacks: encrypting patient data affecting care delivery.",
            "Phishing: credential theft from staff.",
            "Insider Threats: misuse or accidental disclosure of patient data.",
            "Medical Device Security: connected devices vulnerable to attacks.",
          ],
          it: [
            "System Outages: EHR or imaging system downtime affecting care.",
            "Human Error: accidental deletion or misconfiguration of systems.",
            "Equipment Failure: servers, routers and storage failures.",
          ],
          business: [
            "Supply Chain Disruptions: shortages of meds and supplies.",
            "Human Resource Issues: staff shortages affecting operations.",
            "Legal & Regulatory Compliance: HIPAA and other privacy laws.",
          ],
          data: [
            "Insider Threats: internal misuse of patient data.",
            "Third-Party Risks: vendor compromises exposing PHI.",
            "Legacy Systems: unsupported, vulnerable systems.",
            "Physical Theft/Loss: lost laptops or devices containing PHI.",
          ],
          quickFacts: ["Patient safety focus", "PHI & regulatory constraints", "Critical uptime requirements"],
        },

        {
          slug: "manufacturing",
          title: "Manufacturing",
          iconText: "🏭",
          excerpt: "Production of goods using labor, machinery, and tools.",
          facilities: [
            "Equipment Failure: machine breakdowns causing downtime.",
            "Power Outages: interrupting production and causing damage.",
            "Environmental Disasters: floods/earthquakes damaging facilities.",
            "Fires and Explosions: hazardous materials and processes.",
            "Water Damage: leaks and floods disrupting operations.",
          ],
          hse: [
            "Occupational Safety: slips, trips, falls and machine hazards.",
            "Environmental Sustainability: waste and emissions management.",
            "Regulatory Compliance: fines and operational impacts when non-compliant.",
          ],
          cyber: [
            "Ransomware & Malware: production disruption and IP theft.",
            "Phishing & Social Engineering: credential compromise.",
            "Insider Threats: IP theft or sabotage by employees.",
          ],
          it: [
            "Equipment Failures: OT/automation downtime.",
            "Power Outages: impact on manufacturing lines.",
            "IT Systems Failures: ERP, MES or other tools crashing.",
          ],
          business: [
            "Supply Chain Disruptions: supplier shortages affecting output.",
            "Production Disruptions: quality issues or labor disputes.",
            "Financial Disruptions: cash flow & credit issues.",
            "Regulatory Compliance Issues: fines and shutdowns.",
          ],
          data: [
            "Insider Threats: employees misusing sensitive info.",
            "Supply Chain Vulnerabilities: partner weakness exposure.",
            "Physical Security Breaches: device theft containing sensitive data.",
            "Third-Party Provider Risks: outsourced services compromised.",
          ],
          quickFacts: ["Factory floor hazards", "Supply-chain dependent", "OT+IT convergence"],
        },

        {
          slug: "automotive",
          title: "Automotive",
          iconText: "🚗",
          excerpt: "Designs, manufactures, and markets motor vehicles and related components.",
          facilities: [
            "Natural Disasters: earthquakes, floods and storms damaging facilities.",
            "Industrial Accidents: fires and heavy machinery incidents.",
            "Equipment Malfunction: robotics or conveyor failures halting production.",
            "Power Outages: major impact on production and testing.",
          ],
          hse: [
            "Occupational Hazards: heavy machinery and chemical exposures.",
            "Ergonomic Issues: repetitive tasks leading to MSDs.",
            "Exposure to Chemicals: paints, solvents and adhesives.",
          ],
          cyber: [
            "Connected Car Vulnerabilities: remote ECU attacks.",
            "IP Theft: theft of designs and R&D.",
            "Supply Chain Vulnerabilities: vendor compromises.",
            "Insider Threats: sabotage or data exfiltration.",
          ],
          it: [
            "Hardware/Software Failures: server or tool downtime.",
            "Power Outages & Natural Disasters: data loss and downtime.",
            "Human Error: misconfigurations or accidental deletes.",
          ],
          business: [
            "Supply Chain Disruptions: part shortages and delays.",
            "Economic Downturns: reduced demand and revenue.",
            "Regulatory Compliance: safety and emissions rules.",
          ],
          data: [
            "Connected Car Data Breaches: location and personal data exposure.",
            "Customer Financial Data: payment information leaks.",
            "IP Theft: design schematics and trade secrets.",
          ],
          quickFacts: ["Heavy R&D investments", "Connected vehicles trend", "Global supply chains"],
        },

        {
          slug: "communication",
          title: "Communication",
          iconText: "📡",
          excerpt: "Telecommunications, broadcasting, and media services.",
          facilities: [
            "Natural Disasters: damage to towers, cables and data centers.",
            "Power Outages: service interruptions and revenue loss.",
            "Physical Security: vandalism and theft of equipment.",
            "Infrastructure Failures: routers, switches, and servers failing.",
          ],
          hse: [
            "Electrocution: risks for tower and line workers.",
            "RF radiation: long-term exposure concerns.",
            "Chemical Exposure: maintenance-related hazards.",
            "Workplace Violence: customer- or field-related incidents.",
            "Ergonomic Hazards: repetitive installation/repair tasks.",
          ],
          cyber: [
            "Attacks on Infrastructure: network & data center compromises.",
            "Malware and Ransomware: service disruption and data loss.",
            "Phishing: credential theft that leads to broader breaches.",
            "Insider threats: privileged staff misuse.",
            "IoT vulnerabilities: insecure connected devices on networks.",
          ],
          it: [
            "Network downtime: caused by failure or attack.",
            "Infrastructure failure: hardware or software problems.",
            "Vendor and supply chain issues: third-party outages impacting services.",
          ],
          business: [
            "Power outages: critical for continuous network operation.",
            "Equipment failure: high cost of replacement and downtime.",
            "Supply chain disruption: delays for network components.",
            "Employee safety: fieldwork hazards requiring strong safety programs.",
          ],
          data: [
            "APTs: long-term targeted exfiltration of data.",
            "Third-party vulnerabilities: vendor access risks.",
          ],
          quickFacts: ["Always-on service expectations", "Large infra footprint", "Regulated in many regions"],
        },

        {
          slug: "hospitality",
          title: "Hospitality",
          iconText: "🏨",
          excerpt: "Accommodation, food and guest services industry.",
          facilities: [
            "Fire hazards: kitchens and flammable supplies risk.",
            "Structural failures: poor maintenance leading to collapses.",
            "Natural disasters: storms and floods closing properties.",
            "Power outages: affecting guest comfort and services.",
            "Water damage: leaks causing property & inventory loss.",
            "Security breaches: theft and unauthorized access.",
          ],
          hse: [
            "Fire safety: vital precautions in kitchens and guest areas.",
            "Food safety: preventing foodborne illnesses with hygiene standards.",
            "Occupational hazards: slips, burns and ergonomic issues.",
            "Guest health & safety: sanitation and emergency response plans.",
            "Environmental impact: waste & energy management.",
          ],
          cyber: [
            "Data breaches: payment and guest PII targeted.",
            "Ransomware: encrypting reservation and operations data.",
            "Phishing: credential harvesting from staff.",
            "POS attacks: payment card theft via malware on POS systems.",
            "IoT attacks: smart-locks and thermostats abused as attack vectors.",
            "Insider threats: staff misuse or theft of guest data.",
          ],
          it: [
            "System downtime: booking or property management systems offline.",
            "Network failure: guest connectivity and booking issues.",
            "Inadequate backups: data loss risk.",
            "Malware and viruses: operations disruption from malware.",
            "Human error: accidental deletions or misconfigurations.",
            "Third-party vendor failures: cloud or payment providers downtime.",
          ],
          business: [
            "Power outages: guest experience and revenue hit.",
            "Pandemics: closures and long-term demand impacts.",
            "Supply chain disruptions: shortages in F&B and linen supplies.",
          ],
          data: [
            "Insider threats: employees exposing guest data.",
            "Third-party attacks: vendor access leading to breaches.",
            "Ransomware and POS vulnerabilities.",
            "Unsecured Wi-Fi: attackers leveraging guest networks.",
          ],
          quickFacts: ["Customer-data heavy", "High guest expectations", "IoT growth in properties"],
        },

        {
          slug: "mining",
          title: "Mining",
          iconText: "⛏️",
          excerpt: "Extraction and processing of minerals and resources from the earth.",
          facilities: [
            "Mining accidents: cave-ins, explosions and equipment failures.",
            "Structural failures: facility & structure collapse risks.",
            "Land subsidence: surface damage near mining sites.",
            "Tailings dam failures: catastrophic environmental consequences.",
            "Water management: heavy usage and contamination risks.",
            "Transportation: moving large materials safely.",
          ],
          hse: [
            "Occupational hazards: dust, noise, vibration, and radiation exposures.",
            "Accidents & injuries: heavy-equipment related trauma.",
            "Chemical exposure: cyanide, mercury, acids risks.",
            "Environmental hazards: pollution and habitat destruction.",
            "Ergonomics & heat stress: physical strain and heat illness risks.",
          ],
          cyber: [
            "Ransomware: impacting operational systems (SCADA/OT).",
            "Social engineering: phishing targeting staff.",
            "Malware attacks: data theft & operational disruption.",
          ],
          it: [
            "System failures: SCADA/OT downtime affecting operations.",
            "Supply chain disruptions: spare part shortages.",
            "Human error: misconfiguration or mistaken operations.",
          ],
          business: [
            "Equipment failure: downtime and production loss.",
            "Supply chain disruptions: incoming material & parts delays.",
            "Labor disputes: strikes impacting output.",
            "Regulatory changes: impact on permits and costs.",
            "Reputational risk: environmental scrutiny causing social license issues.",
            "Economic downturns: commodity price volatility.",
          ],
          data: [
            "Insider threats: employees or contractors leaking data.",
            "Physical theft or loss: stolen devices containing sensitive data.",
            "Third-party breaches: vendor compromises exposing data.",
          ],
          quickFacts: ["OT-critical systems", "Remote site challenges", "Heavy environmental scrutiny"],
        },

        {
          slug: "bank",
          title: "Bank",
          iconText: "🏦",
          excerpt: "Financial institutions offering deposit, payment and lending services.",
          facilities: [
            "Physical security threats: robberies, burglaries and vandalism.",
            "Natural disasters: floods, hurricanes, earthquakes affecting branches.",
            "Power outages: interruptions causing service disruption.",
            "Infrastructure failures: telecom or Internet outages impairing services.",
          ],
          hse: [
            "Fire and emergency response: needs robust procedures.",
            "Ergonomic hazards: desk-work related MSDs for staff.",
          ],
          cyber: [
            "Phishing & social engineering: credential theft.",
            "Malware & ransomware: system compromises.",
            "DDoS attacks: service outages from traffic floods.",
            "Insider threats: negligent or malicious employees.",
            "Third-party risks: vendor breaches.",
            "Legacy system vulnerabilities: unsupported systems with holes.",
            "Mobile & online banking risks: targeted attacks on customer channels.",
          ],
          it: [
            "Hardware/software failures: core banking system outages.",
            "Power outages: data center impacts.",
            "Network issues: connectivity affecting transactions.",
            "Third-party provider failures: vendor outages affecting bank services.",
            "Malicious insiders: deliberate data loss or sabotage.",
          ],
          business: [
            "Equipment failure: ATMs and branch systems malfunction.",
            "Power outages: stoppage of customer services.",
            "Human error: accidental data deletion or misconfiguration.",
            "Supply chain disruptions: critical vendor failures.",
            "Regulatory compliance: fines & legal action for breaches.",
          ],
          data: [
            "Insider threats: staff exfiltrating PII or payment data.",
            "Third-party risks: payment processors compromised.",
            "Physical security: ATM skimming & device theft.",
            "Compliance: PCI DSS / GDPR non-compliance impacts.",
          ],
          quickFacts: ["PII & financial data sensitivity", "Regulatory heavy", "24/7 transactional demands"],
        },

        {
          slug: "construction",
          title: "Construction",
          iconText: "🏗️",
          excerpt: "Design, construction and maintenance of buildings and infrastructure.",
          facilities: [
            "Natural disasters: storms, floods, earthquakes damaging sites & equipment.",
            "Fire: welding and electrical hazards.",
            "Equipment theft & vandalism: unsecured sites targeted.",
            "Power outages: tool and site stoppages.",
            "Water damage: pipe bursts and flooding on sites.",
            "Environmental hazards: asbestos, lead, silica exposures.",
            "Structural failures: collapse risk from design or execution errors.",
          ],
          hse: [
            "Falls from heights: scaffolding, roofs and ladders risks.",
            "Struck-by accidents: falling objects or vehicles.",
            "Electrocution: contact with live wires or equipment.",
            "Exposure to: Construction workers may come into contact with.",
          ],
          cyber: [
            "Phishing attacks: credential theft from staff.",
            "Ransomware attacks: locking project data.",
            "Supply chain attacks: subcontractor compromise.",
            "IP theft: blueprints targeted.",
          ],
          it: [
            "Hardware failures: server or workstation crashes causing delays.",
            "Power outages & natural disasters: site system impacts.",
            "Human error: accidental deletion or misconfiguration of project data.",
          ],
          business: [
            "Supply Chain Disruptions: material shortages delaying projects.",
            "Labor Shortages: skilled trades scarcity causing schedule slips.",
            "Equipment Failures: downtime and repair costs.",
            "Regulatory Compliance: building code and permit problems.",
          ],
          data: [
            "Third-party data breaches: subcontractor systems exposing project data.",
            "Insider threats: employees leaking sensitive data.",
            "Weak passwords & unsecured networks: easy attack vectors.",
          ],
          quickFacts: ["Site safety critical", "Distributed workforce", "Heavy subcontracting"],
        },

        {
          slug: "it",
          title: "IT",
          iconText: "💻",
          excerpt: "Development, implementation and maintenance of IT systems and software.",
          facilities: [
            "Power outages: risk to servers and workstations.",
            "HVAC malfunction: overheating equipment causing failures.",
            "Water damage: leaks impacting hardware.",
            "Fire hazards: overloaded electrical systems.",
            "Structural damage & physical security breaches.",
          ],
          hse: [
            "Ergonomic hazards: repetitive strain, long hours causing MSDs.",
            "Electrical hazards: data center electrical risks.",
            "Fire hazards from overheating equipment.",
          ],
          cyber: [
            "Malware & ransomware: infection and encryption of systems.",
            "Phishing & social engineering: credential compromise.",
            "DDoS: service unavailability.",
            "Insider threats & APTs: targeted intrusions.",
          ],
          it: [
            "Hardware/software failures: downtime and data loss.",
            "Cyber-attacks: ransomware and other disruptions.",
            "Human error: accidental deletions or misconfigurations.",
            "Supply chain disruptions: missing critical hardware/software.",
          ],
          business: [
            "Cyberattacks: causing long outages and revenue loss.",
            "Power outages & equipment failure: causing downtime.",
            "Natural disasters: data center infrastructure damage.",
            "Human error: operational mistakes costing time and data.",
          ],
          data: [
            "Phishing attacks: credential theft and account takeover.",
            "Malware: data exfiltration or corruption.",
            "Cloud risks: misconfiguration and shared infrastructure issues.",
            "Third-party risks: vendor compromises.",
          ],
          quickFacts: ["Security-first industry", "Rapid change & zero-day exposure", "Cloud dependency"],
        },

        {
          slug: "oil-gas",
          title: "Oil & Gas",
          iconText: "🛢️",
          excerpt: "Explores, extracts and refines petroleum and natural gas resources.",
          facilities: [
            "Equipment failure: complex machinery breakdowns.",
            "Natural disasters: hurricanes and earthquakes damaging assets.",
            "Fire & explosion: flammable product hazards.",
            "Environmental disasters: oil spills and contamination.",
          ],
          hse: [
            "Workplace accidents: drilling and transport hazards.",
            "Health hazards: chemical and noise exposures.",
            "Environmental impact: spills and emissions.",
            "Regulatory compliance: strict HSE rules to meet.",
          ],
          cyber: [
            "Ransomware: locking operational systems.",
            "Phishing & spear-phishing: targeted credential theft.",
            "Insider threats: staff causing damage or exfiltration.",
            "DDoS: affecting corporate-facing systems.",
          ],
          it: [
            "Power outages: IT & OT impacts.",
            "Hardware & software failures: operational downtimes.",
            "Human error: accidental data loss or misconfiguration.",
          ],
          business: [
            "Supply chain disruptions: equipment & part shortages.",
            "Price volatility: revenue & investment impacts.",
            "Health & Safety Risks: serious operational consequences.",
          ],
          data: [
            "Phishing & Spear-phishing attacks: targeted attacks.",
            "Insider threats: internal misuse of data.",
            "Third-party risks: contractor & vendor weaknesses.",
          ],
          quickFacts: ["Energy-sector criticality", "OT + IT risk convergence", "Price-sensitive industry"],
        },

        {
          slug: "pharmaceuticals",
          title: "Pharmaceuticals",
          iconText: "💊",
          excerpt: "R&D, manufacture and distribution of drugs and medications.",
          facilities: [
            "Natural disasters: damage to plants and storage facilities.",
            "Fire: plant and lab fire risks.",
            "Chemical spills: hazardous production risks.",
            "Power outages: production interruptions and spoilage.",
            "Security breaches: theft of IP and materials.",
            "Equipment failure: downtime and production loss.",
          ],
          hse: [
            "Chemical hazards: exposure to APIs, solvents and reagents.",
            "Accidents & injuries: heavy machinery and lab work risks.",
            "Waste management: hazardous and biohazardous wastes.",
            "Radiation exposure: for certain products and processes.",
            "Occupational health risks: respiratory and dermal hazards.",
          ],
          cyber: [
            "IP theft: R&D and formulas targeted.",
            "Ransomware: encrypting critical data and systems.",
            "Phishing attacks: targeted attacks against staff.",
            "Supply chain attacks: vendor compromise.",
            "Insider threats & DDoS: disrupt operations.",
          ],
          it: [
            "System failures: affecting manufacturing and R&D systems.",
            "Human error: accidental data loss or misconfigs.",
            "Power outages: affecting uptime and cold-chain storage.",
          ],
          business: [
            "Supply chain disruptions: raw material shortages.",
            "Regulatory compliance failures: severe fines and delays.",
            "Data loss: affecting product availability and trials.",
          ],
          data: [
            "Insider threats: staff leaking IP or PHI.",
            "Third-party risks: vendor access to sensitive data.",
            "Regulatory compliance: GDPR/HIPAA style requirements.",
          ],
          quickFacts: ["High-IP value", "Regulated R&D and manufacturing", "Cold-chain sensitivities"],
        },

        {
          slug: "retail",
          title: "Retail",
          iconText: "🛍️",
          excerpt: "Sale of goods through physical stores and online channels.",
          facilities: [
            "Natural disasters: store & warehouse damage from storms/floods.",
            "Fire hazards: electrical or storage-related fires.",
            "Structural issues: building defects causing unsafe conditions.",
            "Equipment failure: escalators/HVAC/lighting failures.",
            "Physical security threats: theft and vandalism.",
            "Power outages: impacting POS and refrigeration.",
          ],
          hse: [
            "Employee safety: lifting, forklift and slip/trip risks.",
            "Customer safety: crowded store hazards and emergency procedures.",
            "Fire safety: proper storage & disposal.",
          ],
          cyber: [
            "Phishing & social engineering: employee credential theft.",
            "Ransomware: encrypting inventory and POS systems.",
            "POS attacks: malware stealing payment data.",
            "Third-party vendor attacks: breaches via payment processors.",
          ],
          it: [
            "System downtime: storefront and e-commerce interruptions.",
            "Data loss: customer, inventory and financial data.",
            "Payment processing failures: revenue hit.",
            "Cloud provider failure: e-commerce interruptions.",
          ],
          business: [
            "Supply chain disruption: missing stock and delivery delays.",
            "Power outages: refrigeration and checkout interruptions.",
            "Pandemics: store closures & reduced foot traffic.",
            "Theft & vandalism: inventory & property loss.",
          ],
          data: [
            "POS attacks: payment card data compromises.",
            "Insider threats: employees leaking data.",
            "Online shopping fraud: account takeover & payment fraud.",
          ],
          quickFacts: ["Omnichannel operations", "Large POS footprint", "Inventory-driven margins"],
        },

        {
          slug: "shipping",
          title: "Shipping",
          iconText: "🚢",
          excerpt: "Transportation of goods by sea and waterways.",
          facilities: [
            "Natural disasters: hurricanes, floods damaging ports & docks.",
            "Accidents: ship collisions, fires and explosions at sea or ports.",
            "Infrastructure failures: power & communications affecting port ops.",
          ],
          hse: [
            "Ship collisions & groundings: pollution and crew harm.",
            "Fires & explosions: onboard or in ports.",
            "Chemical hazards: hazardous cargo handling risks.",
            "Exposure to extreme weather: storms causing injuries & damage.",
          ],
          cyber: [
            "Phishing: credential theft for shipping companies.",
            "Ransomware: encrypted booking & tracking systems.",
            "Supply chain attacks: vendors targeted to reach shipping systems.",
            "Insider threats: crew or staff facilitating breaches.",
          ],
          it: [
            "Network disruptions: loss of connectivity affecting tracking.",
            "Power outages: affecting terminal & shipboard IT.",
            "Human error: misrouting or data loss.",
            "Vendor/third-party risks: outsourced service failures.",
          ],
          business: [
            "Supply chain disruptions: port backlogs and route issues.",
            "Labor disputes: strikes halting cargo flow.",
            "Accidents & equipment failure: lost cargo and downtime.",
          ],
          data: [
            "Third-party breaches: vendor exposures leaking shipper/customer data.",
            "Insider threats: staff leaking manifest or cargo details.",
          ],
          quickFacts: ["Global routing complexity", "Port dependency", "Heavy regulatory overlay"],
        },

        {
          slug: "transport",
          title: "Transport",
          iconText: "🚚",
          excerpt: "Moving people and goods by air, land and water (broader transport sector).",
          facilities: [
            "Natural disasters: damage to roads, rails, ports and airports.",
            "Accidents: vehicle & equipment incidents causing downtime.",
            "Equipment failure: cranes, conveyors and handling gear failures.",
            "Infrastructure failure: bridges, tunnels and power line problems.",
          ],
          hse: [
            "Accidents: heavy-vehicle crashes causing serious injuries.",
            "Hazardous materials exposure: transporting dangerous goods.",
            "Workplace hazards: noise, vibration and extreme temperatures.",
            "Fatigue: driver/operator long shifts increasing accident risk.",
          ],
          cyber: [
            "Cyber-attacks on systems: ticketing, signaling or traffic control attacks.",
            "Phishing: employee credential theft.",
            "Ransomware: locking dispatch and scheduling systems.",
            "Insider threats: misuse of privileged access.",
          ],
          it: [
            "Hardware/software failures: downtime of scheduling & tracking systems.",
            "Power outages: control systems and communications affected.",
            "Human error: misconfiguration or accidental data deletion.",
          ],
          business: [
            "Technical failures: equipment & software breakdowns.",
            "Labor disputes: strikes disrupting services.",
            "Economic downturns: reduced demand.",
            "Regulatory compliance: fines for non-compliance.",
          ],
          data: [
            "Insider threats: staff leaking route or passenger data.",
            "Third-party breaches: vendor vulnerabilities exposing systems.",
          ],
          quickFacts: ["Intermodal overlap", "Scheduling & routing critical", "Driver safety focus"],
        },
      ];
    }
  }
});
</script>

<style scoped>

</style>
