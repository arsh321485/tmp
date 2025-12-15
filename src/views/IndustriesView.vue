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
            title: "Cybersecurity",
            subtitle: "Modern airlines operate on digital trust — a single vulnerability can ground fleets, halt bookings, and compromise passenger safety.",
            points: [
              {
                 title: "Flight Operations System Intrusion", 
                 description: " Cyberattacks targeting flight scheduling, dispatch, or crew systems that can delay thousands of passengers and disrupt global operations."

               },
              {
                 title: "Ransomware on Airport or Airline Backend Systems", 
                 description:  "  Criminal groups encrypt critical systems like baggage handling or boarding, forcing costly shutdowns and reputational damage."
                 },

                 {
                title: "Navigation & Communication System Interference",
                description: " Attempts to manipulate or jam aircraft communications (ACARS) or navigation systems, creating direct safety and compliance risks."
              },

              {
                title: "Reservation & Ticketing System Exploits",
                description: " Attackers inject malware or exploit APIs to manipulate bookings, steal financial details, or shut down online check-ins."
              },

              {
                title: "Loyalty Program Account Takeovers",
                description: "Fraudsters breach frequent-flyer systems, stealing miles, customer identity data, and damaging customer trust."
              },

              {
                title: "Supply Chain Cyber Attacks (Ground Handlers, Catering, MRO Partners)",
                description: "Weak links in third-party vendors expose airlines to breaches that ripple into core operations. "
              },

            ]
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Every minute of downtime costs millions — continuity failures cascade across routes, fleets, crews, and global travelers",
            points: [
              {
                title: "Airport or Airline System Outage (Check-In, Boarding, Baggage)",
                description: " Technology outages paralyze passenger movement, creating operational chaos and financial losses."
              },

              {
                title: "Ground Operations Disruption",
                description: "Failures in refueling, maintenance, pushback, or gate operations halt flights and disrupt schedules. "
              },

              {
                title: "Crew Scheduling or Duty Time System Failure",
                description: " If crew roster systems fail, flights cannot legally operate — grounding entire routes. "
              },

              {
                title: "Vendor or Partner Failure (Catering, Security, Baggage Handling)",
                description: "Third-party service interruptions instantly impact customer experience and safety obligations."
              },

              {
                title: "Fuel Supply Unavailability or Contamination Incident",
                description: " Lack of safe fuel supply impacts on-time performance and route viability."
              },

              {
                title: "Extreme Weather or Geopolitical Disruptions",
                description: " Volcanic ash, airport closures, conflict zones, and sudden regulatory changes disrupt entire networks."
              },
            ],
          },
            dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Airlines hold some of the world’s most sensitive travel and identity data — any breach directly impacts trust and safety.",
            points: [
              {
                title: "Passenger Name Record (PNR) Data Leakage",
                description: " Exposure of travel histories, passport numbers, and special service requests compromises passenger safety."
              },

              {
                title: "Payment & Loyalty Program Data Breach",
                description: " Attackers target high-value personal and financial details stored in loyalty systems."
              },

              {
                title: "Data Sharing Risks Across Alliances & Code-Share Partners",
                description: "Inconsistent privacy controls across partner airlines increase the risk of unauthorized access."
              },

              {
                title: "Insider Threats from Staff or Contractors",
                description: " Unauthorised viewing of manifests, VIP lists, or crew information."
              },

              {
                title: "Insecure Mobile App or Kiosk Data Capture Points",
                description: " Vulnerabilities in check-in kiosks, mobile apps, or Wi-Fi systems expose passenger data."
              },

              {
                title: "Biometric Identity Data Misuse (Face Recognition, e-Gates)",
                description: " Emerging biometric systems create high-impact risks if data is mishandled or breached."
              },
            ],
          },
          Esg: {
            title: "Esg",
            subtitle: "Airlines operate under high public scrutiny — environmental impact, safety culture, and ethical governance define brand reputation.",
            points: [
              {
                title: "Fuel Spill or Environmental Contamination Incident",
                description: " Accidental spills or mishandling of hazardous materials lead to severe regulatory penalties and reputational harm."
              },

              {
                title: "Carbon Emissions Reporting Inaccuracies",
                description: " Misstated emissions or non-compliant reporting impacts sustainability ratings and investor confidence."
              },

              {
                title: "Safety Culture Failures in Ground Operations",
                description: " Injuries or unsafe ramp practices create serious operational and compliance challenges."
              },

              {
                title: "Noise Pollution and Community Impact Violations",
                description: " Breaches of airport or regulatory noise limits trigger fines and public backlash."
              },

              {
                title: "Labour & Workforce Welfare Issues",
                description: "  Fatigue management failures among crew or ground staff affect safety and compliance obligations."
              },

              {
                title: "Ethical Misconduct or Governance Failures",
                description: " Bribery, corruption, or procurement misconduct damages the airline’s global credibility."
              },
            ]
          }
        }
      },

      {
        id: "automotive",
        name: "Automotive",
        image:
         "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Connected vehicles and digital factories mean one breach can shut down production, compromise safety, and expose proprietary designs",
            points: [
              {
                title: "Connected Vehicle Hacking",
                description: "  Attackers exploit telematics, infotainment, or OTA updates to unlock vehicles, manipulate features, or steal data."
              },

              {
                title: "Ransomware Stalling Production Lines",
                description: " Malware impacts robotic arms, conveyor belts, and ICS systems, halting manufacturing for days or weeks."
              },


              {
                title: "IP Theft of Designs & Prototypes",
                description: "Threat actors target CAD files, R&D data, EV battery research, and autonomous driving algorithms."
              },

              {
                title: "Compromise of Supplier or Tier-1 Systems",
                description: "Attackers infiltrate suppliers and use the connection to breach OEM networks."
              },

              {
                title: "Weaknesses in EV Charging Networks",
                description: " Attackers target charging infrastructure to manipulate billing, overload stations, or steal user data."
              },

              {
                title: "Compromised Diagnostic & Service Tools",
                description: "  Manipulated tools used by dealers/technicians can introduce malware or misconfigure vehicles."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Production stops mean millions lost — supply chain delays and factory outages instantly destabilize delivery commitments.",
            points: [
              {
                title: "Manufacturing Line Shutdown",
                description: "  A breakdown in robotics, ICS, or power systems halts high-volume production."
              },

              {
                title: "Supplier Shortages or Delays",
                description: "  A missing component — even a $5 chip — can stall vehicles worth $30,000+."
              },

              {
                title: "Logistics Disruptions",
                description: " Port closures, container shortages, or transport failures delay global deliveries."
              },

              {
                title: "Quality Control System Failure",
                description: "  If inspection systems go offline, production cannot proceed without risking defects or recalls."
              },

              {
                title: "Labour Shortage or Workforce Strike",
                description: " Sudden unavailability of specialized workers affects operations and output schedules."
              },

              {
                title: "Recall Management Failure",
                description: " A large-scale recall without continuity readiness causes brand damage and operational strain."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Modern vehicles collect massive user telemetry — mishandling this data risks regulatory action and customer trust.",
            points: [
              {
                title: "Vehicle Telematics Data Breach",
                description: "GPS history, driving behavior, and in-car recordings fall into unauthorized hands."
              },

              {
                title: "Customer & Dealer Network Data Exposure",
                description: " Leaks of customer profiles, financing paperwork, service records, and warranty claims."
              },

              {
                title: "Misuse of Data Collected from Vehicle Apps",
                description: " Apps syncing contacts, locations, and driving patterns risk privacy litigation."
              },

              {
                title: "Unauthorized Access by Dealership Staff",
                description: "Insider misuse of financing documents or customer credentials."
              },

              {
                title: "Insecure Data Exchange with Tier-1 & Tier-2 Suppliers",
                description: "Weak privacy protocols across partners increase exposure."
              },

              {
                title: "Inadequate Data Governance in Autonomous Vehicles",
                description: " Cameras, sensors, and LiDAR collect sensitive public data requiring strict controls."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Sustainability, safety, and responsible sourcing now define brand reputation and regulatory compliance.",
            points: [

              {
                title: "Emissions & Fuel Efficiency Reporting Issues",
                description: "Wrong reporting — intentional or accidental — leads to fines and reputational loss."
              },


              {
                title: "Battery Waste & Hazardous Material Violations",
                description: " Improper handling of lithium or chemicals triggers environmental risk."
              },


              {
                title: "Worker Safety Incidents in Factories",
                description: " Injuries from robots, heavy machinery, or assembly lines."
              },


              {
                title: "Unsafe Sourcing of Raw Materials",
                description: " Ethical issues around cobalt, rare earth metals, and labour exploitation."
              },


              {
                title: "Water & Energy Mismanagement in Plants",
                description: " Excessive use or wastage impacts ESG ratings."
              },



              {
                title: "Misalignment with Global ESG Standards",
                description: " Inconsistent reporting or missing documentation impacts investor relations."
              },
            ]
          }
        },
      },

          {
        id: "banking",
        name: "Banking",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "In banking, trust is everything — even a small breach can cause financial loss, fraud, and customer panic.",
            points: [
              {
                title: "Core Banking System Attacks",
                description: "Hackers target CBS, causing transaction failures, downtime, and potential data corruption."
              },

              {
                title: "ATM/POS Network Compromises",
                description: " Cybercriminals manipulate card data, plant skimmers, or exploit ATM operating systems."
              },

              {
                title: "Large-Scale Account Takeover Fraud",
                description: " Credential stuffing or phishing leads to draining of customer accounts."
              },

              {
                title: "SWIFT & Payment Rail Attacks",
                description: " Threat actors attempt unauthorized wire transfers through SWIFT or RTGS systems."
              },

              {
                title: "Ransomware on Branch or Data Center Systems",
                description: " Malware encrypts critical servers, stalling customer transactions."
              },

              {
                title: "Insider Threats in Operations & Treasury Teams",
                description: " High-privilege insiders misuse access to financial systems or client data."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Banking downtime means lost confidence — continuity failures trigger regulatory action and customer distress.",
            points: [
              {
                title: "Digital Banking Channel Outage",
                description: " Mobile and online platforms go down, leaving customers locked out."
              },

              {
                title: "Core Infrastructure Failure (Data Center, Network)",
                description: " Interruptions halt payments, transfers, and ATM operations."
              },

              {
                title: "Third-Party Fintech or Cloud Provider Failures",
                description: "Dependency on APIs, cloud hosting, and fintech integrations increases systemic risk."
              },

              {
                title: "Cash Logistics Disruptions",
                description: " ATMs go empty during transport strikes or vendor outages."
              },

              {
                title: "Branch Workforce Unavailability",
                description: " Pandemic, emergencies, or regional disruption affects branch operations."
              },

              {
                title: "Regulatory Enforcement Shutdown Risks",
                description: " Non-compliance impacts continuity, licensing, and customer access."
              },
            ],
          },
          dataPrivacy: {
            title: " Data Privacy",
            subtitle: "Banks hold some of the world’s most sensitive personal and financial data — privacy failures lead to massive penalties.",
            points: [
              {
                title: "Leakage of KYC/AML Documentation",
                description: "Passport scans, signatures, and financial declarations are high-value targets."
              },

              {
                title: "Transaction History Exposure",
                description: " Unauthorized access reveals spending patterns, income, and account balances."
              },

              {
                title: "Insider Misuse of VIP or HNI Account Details",
                description: "Staff misuse privileged access for personal gain."
              },

              {
                title: "Data Sharing Risks with Fintech Partners",
                description: "API-based data flows create exposure if controls are weak."
              },

              {
                title: "Call Center and Customer Support Privacy Gaps",
                description: " Recording systems and customer data desks are prone to mishandling."
              },

              {
                title: "Loss of Data via Misconfigured Cloud Storage",
                description: "Banks migrating to cloud risk configuration errors exposing PII and financial data."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Ethics, sustainability, and responsible governance shape a bank’s credibility with regulators and investors.",
            points: [
              {
                title: "Anti-Money Laundering (AML) Failures",
                description: " Misreporting or non-detection of suspicious activity risks major penalties."
              },

              {
                title: "Unethical Lending & Investment Practices",
                description: " Financing high-risk or unsustainable industries damages brand credibility."
              },

              {
                title: "Workforce Discrimination or Diversity Non-Compliance",
                description: "Social governance failings impact employer reputation."
              },

              {
                title: "Data Center Energy Mismanagement",
                description: "High-power systems create sustainability pressures."
              },

              {
                title: "Corruption or Procurement Misconduct",
                description: " Governance lapses severely impact trust."
              },

              {
                title: "Failure to Meet Global Sustainability Reporting Standards",
                description: " Missing or incorrect ESG disclosures affect investor ratings."
              },
            ]
          }
        },
      },


         {
        id: "communication",
        name: "Communication (Telecom)",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Telecom networks are national lifelines — a single breach can disrupt millions of people, governments, and critical services.",
            points: [
              {
                title: "Core Network (5G/4G) Penetration Attempts",
                description: " Attackers target core signaling systems (SS7, Diameter) to intercept calls, track users, or disrupt connectivity."
              },

              {
                title: "DDoS Attacks Crippling Voice/Data Services",
                description: " Massive botnet attacks overwhelm telecom networks, causing widespread outages."
              },

              {
                title: "SIM Swap Fraud & Identity Takeovers",
                description: " Criminals exploit weak verification to hijack customer mobile numbers and access banking OTPs."
              },

              {
                title: "Compromise of Telecom Towers & Edge Devices",
                description: " Vulnerabilities in edge equipment impact coverage, bandwidth, and emergency service connectivity."
              },

              {
                title: "Breach in ISP Billing & CRM Systems",
                description: "Hackers steal customer identity data, call records, and payment information."
              },

              {
                title: "Attacks Through Third-Party VAS Providers",
                description: " Value-added service integrations become backdoors for malware and data theft."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Every second of network downtime impacts millions — continuity failures escalate into national-level disruptions.",
            points: [
              {
                title: "Nationwide Network Outages",
                description: " Power failures, routing issues, or cyberattacks collapse mobile and broadband services."
              },

              {
                title: "Fiber Cuts Affecting Regional Connectivity",
                description: "  Construction work or sabotage disrupts internet backbone routes."
              },

              {
                title: "Data Center or Switching Station Failures",
                description: "  Core infrastructure issues cause long-duration outages."
              },

              {
                title: "Vendor or Tower Operator Dependency Failures",
                description: " Outages at tower or infrastructure partners instantly impact customer experience."
              },

              {
                title: "Disasters Affecting Field Work Teams",
                description: " Inability to deploy engineers quickly disrupts repair timelines."
              },

              {
                title: "Regulatory Shutdowns or License Restrictions",
                description: " Compliance lapses trigger service suspensions or fines impacting operations."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Telecoms hold the most sensitive form of personal data — real-time location and communication history.",
            points: [
              {
                title: "Call Detail Record (CDR) Breaches",
                description: "  Exposure of who called whom, when, and from where — a major privacy violation."
              },

              {
                title: "Location Tracking Data Leakage",
                description: " Unauthorized access reveals subscriber movement patterns."
              },
              {
                title: "Weak Controls at Retail Stores & Franchisees",
                description: " Local stores mishandle SIM registration data and customer documents."
              },
              {
                title: "Insider Misuse of Subscriber Identity Data",
                description: "  Staff access and leak sensitive customer profiles."
              },
              {
                title: "API Exposure to OTT & Third-Party Applications",
                description: " Integration with apps increases risk of over-permissioned access."
              },
              {
                title: "Unsecured Public Wi-Fi and Hotspot Services",
                description: "Customer devices connect through weakly secured access points."
              },

            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Telecom companies must balance expansion with environmental and community responsibilities.",
            points: [
              {
                title: "Radiation & Health Compliance Violations",
                description: " Failure to meet RF emission standards impacts public trust."
              },
              {
                title: "Tower Energy Consumption & Carbon Impact",
                description: " High generator usage increases carbon footprint and operating cost."
              },
              {
                title: "Worker Safety Incidents at Tower Sites",
                description: " Falls, electrocution, and equipment mishandling remain major risks."
              },
              {
                title: "E-Waste & Battery Disposal Failures",
                description: " Improper disposal of telecom equipment leads to regulatory penalties."
              },
              {
                title: "Community Protests Over Tower Installations",
                description: " Local resistance delays operations, triggering service expansion issues."
              },
              {
                title: "Governance Issues with Vendor Oversight",
                description: " Subpar vendor practices create ESG and legal risks."
              },
            ]
          }
        },
      },


        {
        id: "construction",
        name: "Construction",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Modern construction runs on digital tools — cyberattacks can expose blueprints, halt projects, and inflate timelines.",
            points: [
              {
                title: "Theft of Architectural & Engineering Blueprints",
                description: " Hackers target CAD data, exposing intellectual property and client confidentiality."
              },

              {
                title: "Ransomware on Project Management Platforms",
                description: " Construction schedules, resource plans, and costing get encrypted, freezing progress."
              },

              {
                title: "Attack on IoT Equipment (Cranes, Sensors, Site Cameras)",
                description: " Compromised equipment creates safety hazards and operational delays."
              },

              {
                title: "Supply Chain Cyber Exploits",
                description: " Weak subcontractor systems become entry points for attackers."
              },

              {
                title: "Insecure Access by Temporary Site Staff",
                description: " Shared credentials and unmanaged access expose sensitive project data."
              },

              {
                title: "Drone Surveillance System Hacking",
                description: "  Compromised drones leak site imagery and layout details."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Construction delays are costly — continuity failures push timelines, inflate budgets, and strain client relationships.",
            points: [

              {
                title: "Site Shutdown Due to Safety or Environmental Incidents",
                description: "A single accident stops work for days while investigations take place."
              },


              {
                title: "Material Supply Delays",
                description: " Cement, steel, or critical equipment shortages stall progress."
              },


              {
                title: "Heavy Equipment Failure",
                description: " Cranes, excavators, and concrete pumps going offline directly halt work."
              },


              {
                title: "Shortage of Skilled Labor or Workforce Unavailability",
                description: " Workforce strikes or health crises impact progress."
              },


              {
                title: "Extreme Weather Disruptions",
                description: " Floods, storms, and heatwaves delay operations and damage material."
              },


              {
                title: "Vendor or Contractor Insolvency",
                description: " Financial collapse of subcontractors creates cascading delays."
              },

            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Construction involves large volumes of workforce, contractor, and client data — mishandling it leads to reputational loss.",
            points: [
              {
                title: "Exposure of Client or Project Confidential Information",
                description: " Project owners’ plans, costing, and layouts are attractive targets."
              },
              {
                title: "Contractor & Workforce Data Leaks",
                description: " IDs, bank details, and contracts get mishandled or breached."
              },
              {
                title: "Weak Access Controls for Temporary Staff",
                description: "High turnover increases risk of unauthorized access."
              },
              {
                title: "Improper Storage of Compliance Documentation",
                description: " Worker safety documents or certifications are vulnerable."
              },
              {
                title: "Insecure Mobile Apps Used on Site",
                description: " Workforce attendance or safety apps often lack strong security."
              },
              {
                title: "Drone & Camera Footage Misuse",
                description: "Footage of restricted sites gets leaked or mishandled."
              },
            ],
          },

          Esg: {
            title: "Hse",
            subtitle: "Construction faces strict scrutiny on worker safety, environmental impact, and ethical project practices.",
            points: [
              {
                title: "Worker Injuries and Site Safety Incidents",
                description: " Falls, equipment failures, and unsafe practices lead to investigations."
              },
              {
                title: "Environmental Violations (Dust, Waste, Noise)",
                description: "Poor controls trigger complaints and regulatory action."
              },
              {
                title: "Illegal Waste Disposal of Construction Materials",
                description: "Improper dumping of debris leads to fines and community backlash."
              },
              {
                title: "Unethical Labor Practices",
                description: "Contractor misuse of workforce, underpaying, or unsafe accommodations."
              },
              {
                title: "Non-Compliance with Green Building Standards",
                description: " Failure to meet sustainability certifications affects project approvals."
              },
              {
                title: "Corruption or Misconduct in Vendor Contracts",
                description: " Ethical lapses undermine governance and profitability."
              },
            ]
          }
        },
      },



      
      {
        id: "healthcare",
        name: "Healthcare",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Healthcare is life-critical — cyberattacks directly threaten patient safety and hospital operations.",
            points: [
              {
                title: "Ransomware Freezing Medical Systems",
                description: "Attackers encrypt EHRs, lab systems, and imaging devices, halting patient care."
              },
              {
                title: "Attacks on Connected Medical Devices",
                description: " Infusion pumps, pacemakers, and imaging devices become targets for manipulation."
              },
              {
                title: "Phishing Attacks on Doctors & Nurses",
                description: " Healthcare staff are frequently targeted for credential theft."
              },
              {
                title: "Breach of Diagnostic & Laboratory Systems",
                description: " Access to pathology, radiology, or pharmacy systems exposes sensitive data."
              },
              {
                title: "Cloud Misconfigurations in Health Platforms",
                description: " Telemedicine and patient portals often have security gaps."
              },
              {
                title: "Third-Party Vendor Compromise (Labs, Insurance, Clinics)",
                description: " Weak links expose sensitive patient data."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Healthcare downtime is not an inconvenience — it’s a life-or-death risk.",
            points: [
              {
                title: "Hospital Information System (HIS) Outage",
                description: " Admissions, diagnostics, and operations freeze."
              },
              {
                title: "Power Failures Affecting Critical Care Equipment",
                description: " Ventilators, ICU monitors, and surgical tools cannot afford interruptions."
              },
              {
                title: "Supply Chain Disruptions for Medicines & Blood Products",
                description: "Shortages lead to cancellations of surgeries and treatments."
              },
              {
                title: "Clinical Workforce Shortages",
                description: " Emergencies or outbreaks reduce available staff."
              },
              {
                title: "Emergency Room Overload Scenarios",
                description: " Pandemics or disasters create overwhelming surges."
              },
              {
                title: "Failure of Life-Supporting Systems",
                description: " HVAC, oxygen supply, and sterilization systems cannot fail."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Patient data is deeply personal — privacy breaches break trust and invite strict regulatory action.",
            points: [
              {
                title: "Exposure of Electronic Health Records (EHR)",
                description: " Medical histories, diagnoses, and treatment plans leaked."
              },
              {
                title: "Misuse of Diagnostic Images and Test Reports",
                description: " X-rays, scans, and lab results exposed through insecure systems."
              },
              {
                title: "Insider Snooping into Patient Records",
                description: " Especially high-profile or VIP cases."
              },
              {
                title: "Unsecured Telemedicine Platforms",
                description: " Video consultations or chat systems leaking patient discussions."
              },
              {
                title: "Improper Data Sharing with Insurance or Diagnostic Partners",
                description: " Weak governance around sensitive data exchange."
              },
              {
                title: "Loss of Patient Data through Stolen or Unencrypted Devices",
                description: " Laptops or tablets used during rounds or home care."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Healthcare organizations must ensure safety, ethical care, and environmental responsibility — without exception.",
            points: [
              {
                title: "Biomedical Waste Mishandling",
                description: " Improper disposal of infected waste leads to legal action."
              },
              {
                title: "Patient or Staff Safety Incidents",
                description: " Slips, falls, or equipment injuries inside healthcare facilities."
              },
              {
                title: "Ethical Violations in Clinical Trials",
                description: " Consent failures or poor governance risk public backlash."
              },
              {
                title: "Water & Energy Waste in Hospital Operations",
                description: " High consumption impacts ESG performance."
              },
              {
                title: "Pharmaceutical Disposal Violations",
                description: "Improper discarding of expired drugs harms the environment."
              },
              {
                title: "Governance Failures in Patient Rights & Consent Management",
                description: " Lack of proper consent documentation damages trust."
              },
            ]
          }
        },
      },


      {
        id: "hospitality",
        name: "Hospitality",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Hotels rely on guest trust — cyberattacks can expose identities, payment information, and personal stay details.",
            points: [
              {
                title: "Reservation System Breach",
                description: " Hackers steal guest identity data, stay history, and payment info."
              },
              {
                title: "POS Malware Targeting Restaurants & Front-Desk Payments",
                description: " Attackers harvest customer card data in real time."
              },
              {
                title: "Smart Room IoT Device Exploits",
                description: " Compromised smart locks, lighting, or HVAC systems create security risks."
              },
              {
                title: "Wi-Fi Network Hijacking",
                description: " Guest networks are prime targets for man-in-the-middle attacks."
              },
              {
                title: "Vendor Compromise (Laundry, Concierge, Catering)",
                description: " Third parties introduce vulnerabilities into hotel systems."
              },
              {
                title: "Access Control System Manipulation",
                description: " Attackers tamper with room key cards, staff access privileges, or elevators."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Service interruptions directly impact guest experience — continuity failures damage reputation instantly.",
            points: [
              {
                title: "Property Management System (PMS) Outage",
                description: " Check-ins, housekeeping, billing — all go offline."
              },
              {
                title: "Food Supply Chain Disruptions",
                description: "  Shortages prevent restaurants from serving guests properly."
              },
              {
                title: "HVAC, Power, or Water System Failure",
                description: " Guests face discomfort, forcing refunds or relocations."
              },
              {
                title: "Unavailability of Essential Staff",
                description: " Front desk, housekeeping, or chefs becoming unavailable impacts service delivery."
              },
              {
                title: "Fire Safety or Security System Malfunctions",
                description: " Alarm or surveillance failures create operational risk."
              },
              {
                title: "Unexpected Local Events (Strikes, Weather, Protests)",
                description: "These lead to cancellations and logistical challenges."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Guest data is extremely sensitive — privacy breaches reveal personal preferences, movements, and financial details.",
            points: [
              {
                title: "Leakage of Guest Identity & Passport Details",
                description: " High-value target for identity fraud."
              },
              {
                title: "Exposure of Guest Stay History",
                description: " Reveals travel patterns and sensitive personal information."
              },
              {
                title: "Credit Card and Billing Data Compromise",
                description: " Payment systems are common attack vectors."
              },
              {
                title: "CCTV Footage Misuse",
                description: " Guest movement trails being leaked or misused."
              },
              {
                title: "Lack of Governance Over Vendor Shared Data",
                description: " Laundry, event planners, and taxi partners access guest information."
              },
              {
                title: "Inadequate Privacy Controls in Loyalty Programs",
                description: " Points theft and misuse of stored personal profiles."
              },
            ],
          },


          Esg: {
            title: "Esg",
            subtitle: "Sustainable operations, ethical workforce practices, and safe facilities define hospitality leadership.",
            points: [
              {
                title: "Food Safety Violations",
                description: "  Contamination or improper storage risks guest health."
              },
              {
                title: "Waste Management Failures",
                description: " Poor disposal of food, water, and materials impacts environmental compliance."
              },
              {
                title: "Energy Inefficiency Across Facilities",
                description: " High usage drives costs and ESG score reductions."
              },
              {
                title: "Improper Handling of Chemicals & Cleaning Agents",
                description: " Impacts worker safety and environmental risk."
              },
              {
                title: "Workforce Well-Being Challenges",
                description: " Overworked housekeeping or kitchen staff affect service quality and safety."
              },
              {
                title: "Governance Issues in Vendor Contracts",
                description: " Exploitation or poor compliance by partners reflects on the hotel brand."
              },
            ]
          }
        },
      },


      {
        id: "it",
        name: "Information Technology (IT)",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "In IT, one breach can expose client systems, leak source code, and collapse service delivery across thousands of users.",
            points: [
              {
                title: "Source Code Theft from Repositories",
                description: " Attackers target Git, Bitbucket, and CI/CD pipelines to steal proprietary code or inject malicious modifications."
              },
              {
                title: "Cloud Infrastructure Compromise",
                description: "Misconfigurations or vulnerabilities in multi-cloud environments expose entire workloads."
              },
              {
                title: "Zero-Day Exploits Targeting Software Products",
                description: " Attackers exploit newly discovered vulnerabilities before patches exist — often impacting end-customers."
              },
              {
                title: "Attacks on SaaS and API Integrations",
                description: " An insecure API becomes the weak link, exposing multiple tenants and client applications."
              },
              {
                title: "Phishing and Credential Theft of Developers",
                description: " Developers with elevated access become prime social engineering targets."
              },
              {
                title: "Ransomware on IT Service Providers or MSPs",
                description: " Compromise in a managed service provider cascades into multiple client environments."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "IT outages disrupt entire ecosystems — your downtime becomes your clients’ downtime.",
            points: [
              {
                title: "Cloud Service Outages (AWS/Azure/GCP)",
                description: "Unplanned downtime stalls client applications, SLAs, and critical services."
              },
              {
                title: "Data Center Disruptions",
                description: " Cooling, power, or network failures impact hosting and managed services."
              },
              {
                title: "Vendor Dependency Failures",
                description: " API providers, security tools, or license servers go down, impacting your operations."
              },
              {
                title: "Loss of Key Technical Staff or Engineering Knowledge",
                description: " Sudden attrition stalls critical development or support operations."
              },
              {
                title: "Software Deployment Failures",
                description: "  A faulty release impacts thousands of customers simultaneously."
              },
              {
                title: "Network Congestion or Routing Issues",
                description: "  Poor connectivity disrupts support, delivery, and client experience."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "IT companies process massive volumes of client data — privacy failures damage long-term trust and partnerships.",
            points: [
              {
                title: "Exposure of Client Data via Misconfigured Cloud Storage",
                description: "  Open S3 buckets or shared databases cause damaging leaks."
              },
              {
                title: "Access Misuse by Developers or Support Engineers",
                description: " Elevated privileges allow accidental or unauthorized data access."
              },
              {
                title: "Improper Data Retention and Backup Practices",
                description: " Legacy logs or backups containing sensitive info become exposed."
              },
              {
                title: "Lack of Anonymization in Test Environments",
                description: " Production data used for QA leads to major privacy violations."
              },
              {
                title: "Client Data Leakage Through Vulnerable Integrations",
                description: " Third-party tools or plugins expose sensitive data."
              },
              {
                title: "Remote Work Security Gaps",
                description: "Distributed teams introduce device, network, and privacy risks."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Sustainability, diversity, ethical data use, and governance now define leadership in the tech sector.",
            points: [
              {
                title: "High Energy Consumption from Data Centers",
                description: " Poor efficiency impacts carbon footprint and investor perception."
              },
              {
                title: "Workforce Stress, Burnout & Overutilization",
                description: " High-pressure development cycles create social and well-being risks."
              },
              {
                title: "Lack of Diversity and Inclusion Compliance",
                description: " Equity issues affect organizational reputation and governance."
              },
              {
                title: "Ethical Concerns in AI & Data Use",
                description: "Bias, misuse of data, or non-transparent AI models."
              },
              {
                title: "E-Waste Mismanagement",
                description: "Improper disposal of servers, devices, and hardware."
              },
              {
                title: "Weak Governance Over Third-Party Vendors",
                description: " Supplier misconduct or poor ESG performance reflects on the organization."
              },
            ]
          }
        },
      },

      {
        id: " manufacturing",
        name: " Manufacturing",
        image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Manufacturing is now digital — attacks can halt production, corrupt machinery, and disrupt global supply chains.",
            points: [
              {
                title: "ICS/SCADA System Attacks",
                description: "Cybercriminals manipulate or shut down industrial control systems."
              },
              {
                title: "Ransomware Locking Down Production Lines",
                description: " Malware freezes machines, creating days (or weeks) of downtime."
              },
              {
                title: "IP Theft of Product Designs & Formulations",
                description: " CAD files, prototypes, and material recipes are high-value targets."
              },
              {
                title: "Compromised Industrial IoT Devices",
                description: " Sensors, PLCs, or robotic arms manipulated by attackers."
              },
              {
                title: "Supply Chain Compromise from Tier-1/Tier-2 Vendors",
                description: "  A small vendor breach escalates into massive operational risk."
              },
              {
                title: "Tampering with Quality Control Systems",
                description: " Attackers manipulate inspection data to cause defects or safety issues."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Even one hour of production downtime means huge revenue losses and delivery delays.",
            points: [
              {
                title: "Critical Machinery Failure",
                description: " Breakdowns stall production and cause bottlenecks."
              },
              {
                title: "Supply Shortages of Raw Materials",
                description: "Steel, chips, chemicals, or components become unavailable."
              },
              {
                title: "Logistics and Warehouse Disruptions",
                description: " Shipping delays or inventory issues impact delivery timelines."
              },
              {
                title: "Factory Utility Failures (Power, Water, Gas)",
                description: " Interruptions halt continuous production processes."
              },
              {
                title: "Labor Unavailability or Safety Shutdowns",
                description: " Accidents or workforce strikes cause downtime."
              },
              {
                title: "Natural Disasters Affecting Plants",
                description: "Floods, storms, or earthquakes damage infrastructure."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Manufacturers must protect employee data, supplier information, and proprietary product data from exposure.",
            points: [
              {
                title: "Leakage of Supplier Contracts & Pricing Data",
                description: " Competitors gain access to sensitive commercial terms."
              },
              {
                title: "Exposure of Employee Medical or HR Data",
                description: " Health records or personal details mishandled."
              },
              {
                title: "Insufficient Privacy Controls in Smart Factories",
                description: " IoT devices collect workforce and production data."
              },
              {
                title: "Data Sharing Risks with Global Vendors",
                description: " Weak governance over cross-border data exchange."
              },
              {
                title: "Improper Disposal of Old Devices Containing Data",
                description: " Legacy laptops or PLCs risk data leakage."
              },
              {
                title: "Insecure Mobile Apps Used on Production Floors",
                description: " Attendance, maintenance, or QC apps without encryption."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Manufacturing faces intense expectations around emissions, safety, and ethical sourcing.",
            points: [
              {
                title: "Industrial Pollution Violations",
                description: " Emission breaches impacting air and water quality."
              },
              {
                title: "Worker Safety Incidents",
                description: " Injuries from machinery, chemicals, or automation."
              },
              {
                title: "Hazardous Waste Disposal Failures",
                description: " Improper handling of industrial byproducts."
              },
              {
                title: "Non-Compliance with Occupational Health Standards",
                description: "Safety equipment, audits, and protocols not followed."
              },
              {
                title: "Conflict Minerals or Unethical Sourcing Issues",
                description: " Raw material origins lead to governance challenges."
              },
              {
                title: "Energy Inefficiency Across Factories",
                description: "High consumption impacts sustainability scores."
              },
            ]
          }
        },
      },



      {
        id: "mining",
        name: "Mining",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Modern mines depend on digital systems — cyberattacks can endanger workers, halt extraction, and misreport reserves.",
            points: [
              {
                title: "SCADA & Mining Equipment Attacks",
                description: " Hackers manipulate haul trucks, drilling systems, or conveyor belts."
              },
              {
                title: "GPS Spoofing of Autonomous Mining Vehicles",
                description: " Autonomous trucks or drones get misdirected, causing safety risks."
              },
              {
                title: "Theft of Geological Survey & Exploration Data",
                description: "Competitors or states target seismic data or reserve information."
              },
              {
                title: "Ransomware Targeting Operational Sites",
                description: " Malware freezes operations at remote mining fields."
              },
              {
                title: "Compromise of Environmental Monitoring Systems",
                description: "Attackers manipulate readings to hide pollution."
              },
              {
                title: "Third-Party Engineering Contractor Breaches",
                description: "Weak vendor access leads to unauthorized entry."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Mining interruptions trigger massive downstream impacts — from extraction delays to global commodity shortages.",
            points: [
              {
                title: "Equipment Breakdown in Critical Operations",
                description: " Crushers, haul trucks, or mills failing brings extraction to a halt."
              },
              {
                title: "Worker Unavailability in Remote Sites",
                description: " Logistics issues prevent workforce deployment."
              },
              {
                title: "Fuel Supply Shortages",
                description: " Critical for operating machinery in remote locations."
              },
              {
                title: "Extreme Weather Blocking Access Roads",
                description: " Floods, storms, or landslides prevent transportation."
              },
              {
                title: "Safety Shutdowns After Incidents",
                description: "Any accident triggers extensive audits and downtime."
              },
              {
                title: "Port or Rail Transport Disruptions",
                description: " Mining relies heavily on logistics for export."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Mining companies collect sensitive workforce, operational, and environmental data — a breach threatens licenses and compliance.",
            points: [
              {
                title: "Exposure of Worker Identity & Health Data",
                description: " Sensitive medical fitness and shift details get leaked."
              },
              {
                title: "Unauthorized Access to Exploration & Reserve Data",
                description: " High-value intellectual property becomes exposed."
              },
              {
                title: "Weak Oversight Over Contractor Data Handling",
                description: " Contractors mishandle or improperly store sensitive data."
              },
              {
                title: "Insecure IoT Monitoring Systems",
                description: " Sensors tracking vibrations, emissions, or drilling parameters leak data."
              },
              {
                title: "Unprotected Communication Between Remote Sites",
                description: " Satellite or radio communication lacks encryption."
              },
              {
                title: "Improper Disposal of Field Devices or Drives",
                description: " Old devices contain residual sensitive data."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Mining is under the global ESG microscope — environmental, worker safety, and community impact risks are enormous.",
            points: [
              {
                title: "Environmental Incidents (Leaks, Contamination, Runoff)",
                description: " Failures contaminate rivers, soil, and local habitats."
              },
              {
                title: "Worker Safety Risks (Cave-Ins, Explosions, Accidents)",
                description: " High-fatality potential without strict safety protocols."
              },
              {
                title: "Community Impact & Displacement Issues",
                description: " Mining operations often face strong socio-environmental opposition."
              },
              {
                title: "Failure to Meet Emissions & Waste Requirements",
                description: "Improper waste disposal leads to legal action."
              },
              {
                title: "Unethical Labour Practices by Contractors",
                description: " Harsh working conditions or compliance failures."
              },
              {
                title: "Governance Failures in Reporting & Transparency",
                description: " Misreporting production or environmental impact affects licenses."
              },
            ]
          }
        },
      },


      {
        id: "oil-gas",
        name: "Oil & Gas",
        image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Oil & Gas infrastructure is mission-critical — a single cyberattack can disrupt national energy supply and jeopardize safety.",
            points: [
              {
                title: "SCADA & Pipeline Control System Attacks",
                description: " Attackers manipulate pressure controls, valves, and flow meters, risking explosions or shutdowns."
              },
              {
                title: "Ransomware on Refinery or Rig Systems",
                description: "Malware locks critical control systems, halting refining or drilling operations."
              },
              {
                title: "Theft of Seismic, Reserve & Exploration Data",
                description: " Highly sensitive geological data stolen for competitive or geopolitical advantage."
              },
              {
                title: "Compromise of OT-IT Convergence Networks",
                description: " Weak segmentation allows attackers to pivot from IT into operational environments."
              },
              {
                title: "Supply Chain Cyber Breaches (Drilling Contractors, EPC Vendors)",
                description: " Third-party partners with weaker security become entry points."
              },
              {
                title: "Attacks on Field IoT Sensors & Monitoring Systems",
                description: " Manipulated sensor readings cause misinformed decisions or safety lapses."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Operational disruptions can halt extraction, refining, transportation — and ripple through the global economy.",
            points: [
              {
                title: "Pipeline Shutdown Due to Mechanical or SCADA Failure",
                description: " Even small pressure issues cause full pipeline stoppage."
              },
              {
                title: "Rig or Refinery Equipment Breakdown",
                description: " Critical systems like compressors or pumps fail, halting operations."
              },
              {
                title: "Port or Terminal Closure",
                description: " Weather or regulatory intervention disrupts export of crude or LNG."
              },
              {
                title: "Fuel Supply Shortages Affecting Operations",
                description: " Drilling sites rely heavily on continuous supply."
              },
              {
                title: "Workforce Unavailability in Remote Locations",
                description: " Transportation disruptions affect rig crews or plant operators."
              },
              {
                title: "Natural Disasters Impacting Offshore or Coastal Sites",
                description: " Hurricanes, storms, and earthquakes cause high-risk shutdowns."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Oil & Gas firms manage sensitive personnel, contractor, and environmental data — privacy mishaps cause regulatory escalation.",
            points: [
              {
                title: "Exposure of Crew & Contractor Identity Data",
                description: " Offshore and onshore personnel data is sensitive and frequently targeted."
              },
              {
                title: "Leakage of Environmental & Incident Reports",
                description: " Mismanaged incident data impacts regulatory and reputational standing."
              },
              {
                title: "Improper Access to Inspection & Compliance Records",
                description: "  Sensitive audit records accessed without authorization."
              },
              {
                title: "Cross-Border Data Transfers Lacking Controls",
                description: " Global operations make privacy governance complex."
              },
              {
                title: "Insecure Transmission of Field Data from Remote Sites",
                description: " Satellite, radio, or LTE networks often lack strong encryption."
              },
              {
                title: "Mismanaged Data in GIS, SCADA & Sensor Platforms",
                description: " Massive operational datasets risk exposure if unprotected."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Environmental responsibility, safety culture, and governance practices define the social license to operate.",
            points: [
              {
                title: "Oil Spills & Environmental Contamination",
                description: " Leaks or ruptures trigger large-scale environmental and financial damage."
              },
              {
                title: "Explosions, Fires, or Blowouts",
                description: " Safety lapses cause catastrophic incidents."
              },
              {
                title: "Greenhouse Gas Emission Non-Compliance",
                description: "  Failure to meet carbon targets impacts ESG scoring."
              },
              {
                title: "Unsafe Working Conditions on Rigs & Plants",
                description: " Hazardous equipment and high-risk work environments."
              },
              {
                title: "Community Impact & Land Use Conflicts",
                description: " Host communities demand accountability and transparency."
              },
              {
                title: "Governance Failures in Reporting & Permit Management",
                description: " Misreporting or misfiling impacts licensing and reputation."
              },
            ]
          }
        },
      },


      {
        id: "petrochemical",
        name: "Petrochemical",
        image:"https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Petrochemical plants rely on precision automation — cyberattacks can trigger chemical reactions, shutdowns, or safety hazards.",
            points: [
              {
                title: "ICS Manipulation Affecting Chemical Processing",
                description: " Attackers alter temperature, pressure, or mixing parameters causing operational hazards."
              },
              {
                title: "Ransomware Targeting Plant Automation Systems",
                description: " Malware locks critical controllers, forcing emergency shutdowns."
              },
              {
                title: "IP Theft of Chemical Formulations",
                description: " Proprietary formulas for polymers, plastics, and compounds are prime targets."
              },
              {
                title: "Compromise of Chemical Monitoring Sensors",
                description: "Attackers manipulate readings, hiding leaks or contamination."
              },
              {
                title: "Insecurity in Vendor-Integrated Control Systems",
                description: "  EPC or automation vendors introduce vulnerabilities."
              },
              {
                title: "Unauthorized Access to Lab & R&D Systems",
                description: " Sensitive testing and formulation data at risk."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Even minor disruption to a petrochemical plant can halt entire supply chains and trigger environmental risks.",
            points: [
              {
                title: "Plant Shutdown Due to Equipment Failure",
                description: " Reactors, compressors, and heat exchangers are critical and costly to repair."
              },
              {
                title: "Chemical Supply Shortages",
                description: "  Lack of key feedstock halts production."
              },
              {
                title: "Transport Disruptions for Hazardous Materials",
                description: " Regulatory delays in shipping chemicals create bottlenecks."
              },
              {
                title: "Utility Failures (Steam, Power, Water)",
                description: "Essential for maintaining stable chemical processes."
              },
              {
                title: "Unplanned Maintenance or Overhaul Delays",
                description: "  Specialized parts or technicians unavailable."
              },
              {
                title: "Fire or Explosion Incidents Leading to Lockdowns",
                description: " Safety events cause long-term operational pauses."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Petrochemical operations involve sensitive worker, supplier, and process data — privacy lapses risk legal and operational consequences.",
            points: [
              {
                title: "Exposure of Lab & Testing Data",
                description: " Confidential process analyses leaked to competitors."
              },
              {
                title: "Contractor Workforce Data Breaches",
                description: " Large contractor ecosystems complicate data control."
              },
              {
                title: "Insecure Operational Logs Containing Process Data",
                description: "  OT logs reveal operational secrets."
              },
              {
                title: "Weak Controls in Safety & Incident Reporting Systems",
                description: " Unsafe handling of sensitive incident details."
              },
              {
                title: "Data Sharing Gaps with Global Chemical Partners",
                description: "  Inconsistent privacy standards across borders."
              },
              {
                title: "Improper Disposal of Old Field Devices",
                description: " Devices contain sensitive operational info."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Chemical industries face intense scrutiny — safety, environment, and community welfare are non-negotiable.",
            points: [
              {
                title: "Chemical Leaks & Hazardous Spills",
                description: " Immediate health, environmental, and regulatory crises."
              },
              {
                title: "Air Emissions and Flaring Violations",
                description: " Regulatory penalties for exceeding emission limits."
              },
              {
                title: "Unsafe Handling of Hazardous Waste",
                description: " Poor waste management damages community trust."
              },
              {
                title: "Worker Exposure to Toxins",
                description: " Chemical burns, inhalation risks, and PPE failures."
              },
              {
                title: "Non-Compliance with Environmental Licensing",
                description: " Missteps trigger shutdowns and fines."
              },
              {
                title: "Governance Failures in Safety Reporting",
                description: " Underreported or inaccurate data affects trust and compliance."
              },
            ]
          }
        },
      },


      {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Pharma companies depend on secure research and supply chains — cyberattacks threaten intellectual property and patient safety",
            points: [

              {
                title: "IP Theft of Drug Formulas & Clinical Research Data",
                description: " Attackers steal years of R&D, impacting competitive advantage."
              },
              {
                title: "Ransomware Attacks on Research Labs & Manufacturing",
                description: " Malware halts experiments, trials, and production."
              },
              {
                title: "Compromised Smart Lab Equipment",
                description: " Manipulated lab devices produce falsified or unsafe results."
              },
              {
                title: "Third-Party CMO/CDMO Cyber Risks",
                description: " Contract manufacturers with weak controls expose operational data."
              },
              {
                title: "Attacks Targeting Cold Chain Monitoring Systems",
                description: " Spoiled vaccines or biologics due to manipulated temperature data."
              },
              {
                title: "Supply Chain System Compromise",
                description: " APIs, intermediates, and excipient suppliers targeted."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Pharma supply chain disruptions affect patients globally — continuity is essential from research to distribution.",
            points: [
              {
                title: "Manufacturing Plant Shutdown",
                description: "  Shutdowns affect drug supply, leading to shortages."
              },
              {
                title: "Cold Chain Failures",
                description: " Temperature excursions ruin entire batches."
              },
              {
                title: "Clinical Trial Delays or Interruptions",
                description: "  Failures in site operations impact regulatory timelines."
              },
              {
                title: "Regulatory Hold on Manufacturing Lines",
                description: " Non-compliance halts production."
              },
              {
                title: "Shortage of Raw Materials or APIs",
                description: " Global dependency creates vulnerability."
              },
              {
                title: "Logistics Disruptions During Transportation",
                description: " Delays or mishandling impact time-critical medicines."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Pharma firms handle some of the most sensitive patient and clinical data — privacy breaches cause massive legal fallout.",
            points: [
              {
                title: "Leakage of Clinical Trial Participant Data",
                description: "  Sensitive patient treatment info exposed."
              },
              {
                title: "Exposure of Research & Lab Data Containing Personal Markers",
                description: " Genetic or biological identifiers included in datasets."
              },
              {
                title: "Unsecured Data Shared with CRO Partners",
                description: "Variation in privacy standards across trial sites."
              },
              {
                title: "Mismanagement of Adverse Event & Drug Safety Reports",
                description: " Sensitive medical histories mishandled."
              },
              {
                title: "Insecure Patient Support Program Platforms",
                description: " Support program data frequently includes PHI."
              },
              {
                title: "Legacy Systems with Poor Data Retention Controls",
                description: " Old systems store sensitive patient data beyond mandated timelines."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Ethical research, safe production, and environmental responsibility shape the pharmaceutical industry’s reputation.",
            points: [
              {
                title: "Improper Drug or Chemical Disposal",
                description: "  Contaminates soil and water, causing regulatory issues."
              },
              {
                title: "Ethical Failures in Clinical Trials",
                description: " Consent violations or poor site governance."
              },
              {
                title: "Unsafe Worker Exposure to Chemicals",
                description: " Hazardous environments create health risks."
              },
              {
                title: "Greenhouse Gas Emissions from Manufacturing",
                description: " High energy consumption impacts sustainability."
              },
              {
                title: "Packaging Waste & Environmental Burden",
                description: "  Excessive single-use materials increase footprint."
              },
              {
                title: "Governance Failures in Safety Reporting",
                description: "  Underreporting adverse events affects compliance."
              },
            ]
          }
        },
      },



      {
        id: "retail",
        name: "Retail",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Retailers operate across digital and physical touchpoints — cyberattacks disrupt sales, payments, and customer trust.",
            points: [

              {
                title: "POS Malware Stealing Card Data",
                description: " Criminals intercept payment information in real time."
              },
              {
                title: "E-Commerce Platform Breaches",
                description: " Attackers compromise checkout flows, customer accounts, and product databases."
              },
              {
                title: "Bot Attacks & Online Fraud",
                description: " Bots target promotions, loyalty points, and inventory manipulation."
              },
              {
                title: "Supply Chain Cyber Risks via Logistics Partners",
                description: " Inventory data and shipment schedules exposed."
              },
              {
                title: "Compromised Smart Store Devices",
                description: " IoT cameras, sensors, or kiosks become attack vectors."
              },
              {
                title: "Weak Security at Franchise or Store-Level Systems",
                description: " Small outlets often lack proper controls."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Retail downtime equals lost revenue — every hour of outage impacts sales and customer experience.",
            points: [
              {
                title: "E-Commerce Downtime During Peak Hours",
                description: " Black Friday, holiday sales, or seasonal peaks disrupted."
              },
              {
                title: "Warehouse or Distribution Center Disruptions",
                description: "  Inability to ship or restock stores impacts sales commitments."
              },
              {
                title: "POS Outage Across Stores",
                description: " Billing failures prevent transactions."
              },
              {
                title: "Product Shortages Due to Supply Chain Breakdowns",
                description: " Stockouts damage brand trust."
              },
              {
                title: "Workforce Shortages in Key Seasons",
                description: "  Festive or seasonal load without enough staff."
              },
              {
                title: "Transport Disruptions Affecting Delivery Timelines",
                description: " Delays negatively impact customer satisfaction."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Retailers handle identity, payment, behavior, and preference data — privacy gaps directly impact brand loyalty.",
            points: [
              {
                title: "Customer PII Exposure from E-Commerce Systems",
                description: " Names, addresses, phone numbers leaked."
              },
              {
                title: "Payment Card Data Breach",
                description: "  PCI failures leading to theft of cardholder data."
              },
              {
                title: "Loyalty Program Account Takeovers",
                description: " Stored personal preferences and points stolen."
              },
              {
                title: "Insecure Handling of Return & Refund Documents",
                description: " Paper forms containing customer data mishandled."
              },
              {
                title: "Inadequate Controls for In-Store CCTV Footage",
                description: " Video data often stored insecurely."
              },
              {
                title: "Third-Party Marketplace or Vendor Data Sharing Risks",
                description: " Customer orders and preferences exposed."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Ethical sourcing, waste reduction, and workforce fairness are now central to responsible retail operations.",
            points: [
              {
                title: "Unethical Supply Chain Practices",
                description: " Child labor, unfair wages, or unsafe conditions."
              },
              {
                title: "High Carbon Emissions from Logistics",
                description: " Delivery fleets and shipping practices impact ESG scores."
              },
              {
                title: "Packaging Waste & Environmental Burden",
                description: " Excessive or non-recyclable packaging affects compliance."
              },
              {
                title: "Food Safety & Hygiene Failures (for grocery/food retail)",
                description: " Spoilage or contamination risks."
              },
              {
                title: "Inadequate Workforce Safety & Working Conditions",
                description: " Fast-paced environments create risks."
              },
              {
                title: "Governance Failures in Vendor Selection & Oversight",
                description: " Non-compliant partners harming brand reputation."
              },
            ]
          }
        },
      },



      {
        id: "shipping",
        name: "Shipping",
        image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Global shipping relies on digital navigation — cyberattacks threaten vessel safety and cargo integrity.",
            points: [

              {
                title: "GPS & Navigation System Interference",
                description: " Manipulating navigation data risks collisions or route deviations."
              },
              {
                title: "Attacks on Port Operating Systems",
                description: " Cyberattacks halt loading/unloading operations."
              },
              {
                title: "Ransomware Targeting Logistics Systems",
                description: "  Malware disrupts cargo scheduling and documentation."
              },
              {
                title: "Compromised Vessel Control Systems",
                description: " Engine, ballast, or steering systems manipulated."
              },
              {
                title: "Cargo Tracking System Breach",
                description: " Attackers alter shipment routes or manifest data."
              },
              {
                title: "Third-Party Maritime Vendor Vulnerabilities",
                description: " Weak security at port service providers exposes entire fleets."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Shipping disruptions ripple across global trade — continuity issues delay entire supply networks.",
            points: [
              {
                title: "Port Closures Due to Weather or Security Events",
                description: " Storms, strikes, or piracy disrupt logistics."
              },
              {
                title: "Vessel Mechanical Failures",
                description: " Engine or hull issues delaying voyages."
              },
              {
                title: "Customs or Regulatory Delays",
                description: " Documentation or compliance issues slow movement."
              },
              {
                title: "Crew Shortages or Quarantine Scenarios",
                description: " Inability to staff vessels impacts operations."
              },
              {
                title: "Cargo Handling Equipment Failure",
                description: " Cranes or container handlers breaking down."
              },
              {
                title: "Supply and Fuel Shortages",
                description: " Bunkering delays affect voyage schedules."
              },
            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Shipping companies handle sensitive cargo, crew, and client data — privacy failures threaten global supply chains.",
            points: [
              {
                title: "Crew Identity & Certification Data Exposure",
                description: " Sensitive documents frequently mishandled."
              },
              {
                title: "Cargo Manifest Leakage",
                description: " Traders and competitors gain unfair insights."
              },
              {
                title: "Insecure Communication Between Ships & Ports",
                description: " Radio, satellite, and email data stolen or intercepted."
              },
              {
                title: "Third-Party Freight Forwarder Data Risks",
                description: " Multiple intermediaries increase privacy gaps."
              },
              {
                title: "Weak Data Governance Over Tracking Systems",
                description: " AIS and GPS data exposed online."
              },
              {
                title: "Improper Retention of Voyage Documentation",
                description: " Excessive data stored unnecessarily."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Environmental and safety compliance in shipping directly impacts global trade and public trust.",
            points: [
              {
                title: "Marine Pollution Incidents",
                description: " Oil spills or chemical leaks harming ecosystems."
              },
              {
                title: "Crew Safety Incidents at Sea",
                description: " Harsh working conditions and emergency risks."
              },
              {
                title: "Excessive Emissions & Fuel Inefficiency",
                description: " Regulations increasingly limit emissions."
              },
              {
                title: "Non-Compliance with Ballast Water Management",
                description: " Biodiversity risks and port restrictions."
              },
              {
                title: "Ship Recycling & Waste Disposal Issues",
                description: " End-of-life vessel handling challenges."
              },
              {
                title: "Governance Failures in Cargo Documentation",
                description: " Misreporting or falsification affects global compliance."
              },
            ]
          }
        },
      },



      {
        id: "transport",
        name: "Transport & Logistics",
        image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1600&auto=format&fit=crop",
        content: {
          cybersecurity: {
            title: "Cybersecurity",
            subtitle: "Logistics is a data-driven ecosystem — cyberattacks disrupt routes, fleets, warehouses, and customer deliveries.",
            points: [

              {
                title: "Fleet Telematics System Breaches",
                description: " Attackers manipulate GPS, fuel data, or vehicle diagnostics."
              },
              {
                title: "Ransomware on Routing & Dispatch Systems",
                description: " Dispatch centers freeze, stopping deliveries."
              },
              {
                title: "Compromised Warehouse Automation Systems",
                description: " Robotics, scanners, or sortation systems manipulated."
              },
              {
                title: "Insecure IoT Sensors on Shipments",
                description: " Temperature, humidity, or GPS sensors hijacked."
              },
              {
                title: "Attacks Through Third-Party Carriers",
                description: " Multiple carrier integrations increase risk."
              },
              {
                title: "API Exploits in Logistics Platforms",
                description: " Vulnerabilities in integrations expose supply chain data."
              },
            ],
          },
          businessContinuity: {
            title: "Business Continuity",
            subtitle: "Any delay in logistics has a domino effect — continuity failures disrupt entire supply chains.",
            points: [
              {
                title: "Vehicle Breakdown or Fleet Unavailability",
                description: " Impacts last-mile and long-distance delivery."
              },
              {
                title: "Warehouse Outage or Fire",
                description: " Storage and distribution halt instantly."
              },
              {
                title: "Route Blockages Due to Weather or Accidents",
                description: " Delays ripple through delivery schedules."
              },
              {
                title: "Labor Shortages in Warehousing or Transport",
                description: " Drivers, loaders, or warehouse staff unavailable."
              },
              {
                title: "Fuel Supply Fluctuations",
                description: "  Fuel shortages or price spikes affect operations."
              },
              {
                title: "Failure at Logistic Hubs or Customs Points",
                description: " Congestion or system downtime slows shipping."
              },

            ],
          },
          dataPrivacy: {
            title: "Data Privacy",
            subtitle: "Transport companies handle real-time tracking and customer data — privacy failures expose entire supply chains.",
            points: [
              {
                title: "Leakage of Customer Shipment & Tracking Data",
                description: " Delivery trails reveal customer patterns."
              },
              {
                title: "Driver Identity & License Data Exposure",
                description: " Sensitive operational data mishandled."
              },
              {
                title: "Insecure Data Shared Across Carriers & Brokers",
                description: " Multiple handovers increase exposure."
              },
              {
                title: "Exposure of Warehouse CCTV & Scan Data",
                description: " Footage and digital trails reveal sensitive operations."
              },
              {
                title: "Weak Access Controls for Temporary Workforce",
                description: " Contract workers mishandle data."
              },
              {
                title: "Insecure Mobile Apps Used for Delivery & Tracking",
                description: " Driver apps often lack strong security."
              },
            ],
          },

          Esg: {
            title: "Esg",
            subtitle: "Sustainable logistics demands efficient fleets, responsible operations, and strong workforce practices.",
            points: [
              {
                title: "High Emissions from Transport Fleet",
                description: "  Fuel inefficiency and lack of green fleet planning."
              },
              {
                title: "Poor Driver Working Conditions",
                description: " Excessive hours and inadequate rest periods."
              },
              {
                title: "Warehouse Waste Management Failures",
                description: " Packaging waste and damaged goods mishandled."
              },
              {
                title: "Unsafe Loading & Material Handling Practices",
                description: " Incidents during loading/unloading."
              },
              {
                title: "Governance Failures in Vendor Selection",
                description: " Non-compliant third parties harm the brand."
              },
              {
                title: "Non-Adherence to Sustainability Reporting Standards",
                description: " Poor emissions or energy reporting affects ESG scoring."
              },
            ]
          }
        },
      },





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
