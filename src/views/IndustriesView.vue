<template>

  <div id="top">
    <MainNavbar />

    <RegulatoryWidget />
    <section class="ihw " style="margin-top: 10%;">
      <div class="ihw-left">
        <!-- industries list (scrollable) -->
        <button v-for="(industry, index) in industries" :key="industry.id" type="button" class="ihw-industry"
          :class="{ 'is-active': index === activeIndustryIndex }" @click="selectIndustry(index)">
          {{ industry.name }}
        </button>
      </div>

      <div class="ihw-right">
        <div v-if="currentIndustry" class="ihw-right-inner">
          <!-- <img
          :src="currentIndustry.image"
          :alt="currentIndustry.name"
          class="ihw-image"
        /> -->

          <!-- Tabs -->
          <div class="ihw-tabs">
            <button v-for="tab in tabs" :key="tab.key" type="button" class="ihw-tab"
              :class="{ 'is-active': activeTab === tab.key }" @click="activeTab = tab.key">
              {{ tab.label }}
            </button>
          </div>

          <!-- Tab content -->
          <div v-if="tabContent" class="ihw-content">
            <h3>{{ tabContent.title }}</h3>
            <p class="ihw-subtitle">{{ tabContent.subtitle }}</p>
            <ul>
              <li v-for="(point, i) in tabContent.points" :key="i">
                {{ point }}
              </li>
            </ul>
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
import MainFooter from "@/components/MainFooter.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import RegulatoryWidget from "@/components/RegulatoryWidget.vue";
import { defineComponent } from "vue";

// ---- TYPES ----
type TabKey = "cybersecurity" | "businessContinuity" | "dataBreach";

interface Section {
  title: string;
  subtitle: string;
  points: string[];
}

type IndustryContent = Record<TabKey, Section>;

interface Industry {
  id: string;
  name: string,
  content: IndustryContent;
}

interface Tab {
  key: TabKey;
  label: string;
}

export default defineComponent({
  name: "IndustriesHowItWorks",

  components: { MainNavbar, RegulatoryWidget, MainContact, MainFooter },

  data() {
    const industries: Industry[] = [

      {
        id: "airline",
        name: "Airline",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "An industry that provides air transportation services for passengers and cargo.",
            points: [
              "Cyber-attacks on infrastructure: reservations, flight control, ops systems disruptions.",
              "Phishing & social engineering: credential theft giving system access.",
              "Ransomware: encrypting critical systems causing cancellations/delays.",
              "Supply chain attacks: vendor compromise leading to airline system access.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "An industry that provides air transportation services for passengers and cargo.",
            points: [
              "Economic downturns: reduced travel demand and financing challenges.",
              "Labor disputes: strikes causing widespread cancellations and delays.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Theft of personal data: passenger PII & payment data targeted for fraud.",
              "Insider threats: employees exposing or misusing data.",
              "Third-party breaches: partner breaches exposing airline data.",
              "Cyber espionage: state-sponsored theft of proprietary information.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Accidents: plane crashes and tarmac incidents despite heavy regulation.",
              "Health Hazards: infectious disease exposure, radiation risks, hazardous chemicals in maintenance.",
              "Fatigue: long hours/irregular schedules affecting performance and safety.",
              "Security Threats: terrorism targeting airports and flights.",
              "Environmental Concerns: emissions, hazardous waste, noise pollution.",
              "Ergonomic Hazards: musculoskeletal risks from heavy lifting and repetitive postures.",
            ]
          }
        },
      },


      {
        id: "petrochemical",
        name: "Petrochemical",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Attacks on ICS: compromise of industrial control systems causing safety and production hazards.",
              "Ransomware: encrypting operational data.",
              "Intellectual Property Theft: proprietary process theft.",
              "Phishing & Insider Threats: credential theft and malicious insiders.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Health & Safety Incidents: fires/explosions causing production loss & reputational damage.",
              "Supply Chain Disruptions: raw material shortages and transport delays.",
              "Regulatory Compliance: fines and legal action.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "IP Theft: R&D and process data targeted by competitors.",
              "Employee Data Breaches: sensitive HR data exposures.",
              "Third-Party Breaches: partner compromises exposing company data.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Worker Health & Safety: exposures to toxic chemicals and high-pressure systems.",
              "Process Safety Management: failures risk catastrophic incidents.",
              "Environmental Impact: air/water pollution, greenhouse gas emissions.",
              "Transportation Safety: hazardous materials transport risks.",
            ]
          }
        },
      },



      {
        id: "healthcare",
        name: "Healthcare",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Ransomware Attacks: encrypting patient data affecting care delivery.",
            "Phishing: credential theft from staff.",
            "Insider Threats: misuse or accidental disclosure of patient data.",
            "Medical Device Security: connected devices vulnerable to attacks.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
                "Supply Chain Disruptions: shortages of meds and supplies.",
            "Human Resource Issues: staff shortages affecting operations.",
            "Legal & Regulatory Compliance: HIPAA and other privacy laws.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Insider Threats: internal misuse of patient data.",
            "Third-Party Risks: vendor compromises exposing PHI.",
            "Legacy Systems: unsupported, vulnerable systems.",
            "Physical Theft/Loss: lost laptops or devices containing PHI.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
               "Occupational Health and Safety: exposures to infectious diseases and hazardous chemicals.",
            "Patient Safety: medication errors, HAIs, falls and other adverse events.",
            "Hazardous Waste Management: sharps, chemicals and biohazard risks.",
            "Emergency Preparedness: mass casualty and outbreak readiness.",
            "Indoor Air Quality: respiratory and allergy issues for patients/staff.",
            ]
          }
        },
      },


      {
        id: "manufacturing",
        name: "Manufacturing",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Ransomware & Malware: production disruption and IP theft.",
            "Phishing & Social Engineering: credential compromise.",
            "Insider Threats: IP theft or sabotage by employees.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
             "Supply Chain Disruptions: supplier shortages affecting output.",
            "Production Disruptions: quality issues or labor disputes.",
            "Financial Disruptions: cash flow & credit issues.",
            "Regulatory Compliance Issues: fines and shutdowns.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Insider Threats: employees misusing sensitive info.",
            "Supply Chain Vulnerabilities: partner weakness exposure.",
            "Physical Security Breaches: device theft containing sensitive data.",
            "Third-Party Provider Risks: outsourced services compromised.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
                  "Occupational Safety: slips, trips, falls and machine hazards.",
            "Environmental Sustainability: waste and emissions management.",
            "Regulatory Compliance: fines and operational impacts when non-compliant.",
            ]
          }
        },
      },


      {
        id: "automotive",
        name: "Automotive",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Connected Car Vulnerabilities: remote ECU attacks.",
            "IP Theft: theft of designs and R&D.",
            "Supply Chain Vulnerabilities: vendor compromises.",
            "Insider Threats: sabotage or data exfiltration.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
               "Supply Chain Disruptions: part shortages and delays.",
            "Economic Downturns: reduced demand and revenue.",
            "Regulatory Compliance: safety and emissions rules.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
               "Connected Car Data Breaches: location and personal data exposure.",
            "Customer Financial Data: payment information leaks.",
            "IP Theft: design schematics and trade secrets.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
                 "Occupational Hazards: heavy machinery and chemical exposures.",
            "Ergonomic Issues: repetitive tasks leading to MSDs.",
            "Exposure to Chemicals: paints, solvents and adhesives.",
            ]
          }
        },
      },


      {
        id: "communication",
        name: "Communication",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             "Attacks on Infrastructure: network & data center compromises.",
            "Malware and Ransomware: service disruption and data loss.",
            "Phishing: credential theft that leads to broader breaches.",
            "Insider threats: privileged staff misuse.",
            "IoT vulnerabilities: insecure connected devices on networks.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
               "Power outages: critical for continuous network operation.",
            "Equipment failure: high cost of replacement and downtime.",
            "Supply chain disruption: delays for network components.",
            "Employee safety: fieldwork hazards requiring strong safety programs.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
               "APTs: long-term targeted exfiltration of data.",
            "Third-party vulnerabilities: vendor access risks.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Electrocution: risks for tower and line workers.",
            "RF radiation: long-term exposure concerns.",
            "Chemical Exposure: maintenance-related hazards.",
            "Workplace Violence: customer- or field-related incidents.",
            "Ergonomic Hazards: repetitive installation/repair tasks.",
            ]
          }
        },
      },


      {
        id: "hospitality",
        name: "Hospitality",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Data breaches: payment and guest PII targeted.",
            "Ransomware: encrypting reservation and operations data.",
            "Phishing: credential harvesting from staff.",
            "POS attacks: payment card theft via malware on POS systems.",
            "IoT attacks: smart-locks and thermostats abused as attack vectors.",
            "Insider threats: staff misuse or theft of guest data.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
            "Power outages: guest experience and revenue hit.",
            "Pandemics: closures and long-term demand impacts.",
            "Supply chain disruptions: shortages in F&B and linen supplies.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Insider threats: employees exposing guest data.",
            "Third-party attacks: vendor access leading to breaches.",
            "Ransomware and POS vulnerabilities.",
            "Unsecured Wi-Fi: attackers leveraging guest networks.",
            ],
          },

          
           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Fire safety: vital precautions in kitchens and guest areas.",
            "Food safety: preventing foodborne illnesses with hygiene standards.",
            "Occupational hazards: slips, burns and ergonomic issues.",
            "Guest health & safety: sanitation and emergency response plans.",
            "Environmental impact: waste & energy management.",
            ]
          }
        },
      },


      {
        id: "mining",
        name: "Mining",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
               "Ransomware: impacting operational systems (SCADA/OT).",
            "Social engineering: phishing targeting staff.",
            "Malware attacks: data theft & operational disruption.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Equipment failure: downtime and production loss.",
            "Supply chain disruptions: incoming material & parts delays.",
            "Labor disputes: strikes impacting output.",
            "Regulatory changes: impact on permits and costs.",
            "Reputational risk: environmental scrutiny causing social license issues.",
            "Economic downturns: commodity price volatility.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Insider threats: employees or contractors leaking data.",
            "Physical theft or loss: stolen devices containing sensitive data.",
            "Third-party breaches: vendor compromises exposing data.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Occupational hazards: dust, noise, vibration, and radiation exposures.",
            "Accidents & injuries: heavy-equipment related trauma.",
            "Chemical exposure: cyanide, mercury, acids risks.",
            "Environmental hazards: pollution and habitat destruction.",
            "Ergonomics & heat stress: physical strain and heat illness risks.",
            ]
          }
        },
      },

      {
        id: "bank",
        name: "Bank",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Phishing & social engineering: credential theft.",
            "Malware & ransomware: system compromises.",
            "DDoS attacks: service outages from traffic floods.",
            "Insider threats: negligent or malicious employees.",
            "Third-party risks: vendor breaches.",
            "Legacy system vulnerabilities: unsupported systems with holes.",
            "Mobile & online banking risks: targeted attacks on customer channels.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
             "Equipment failure: ATMs and branch systems malfunction.",
            "Power outages: stoppage of customer services.",
            "Human error: accidental data deletion or misconfiguration.",
            "Supply chain disruptions: critical vendor failures.",
            "Regulatory compliance: fines & legal action for breaches.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
               "Insider threats: staff exfiltrating PII or payment data.",
            "Third-party risks: payment processors compromised.",
            "Physical security: ATM skimming & device theft.",
            "Compliance: PCI DSS / GDPR non-compliance impacts.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
               "Fire and emergency response: needs robust procedures.",
            "Ergonomic hazards: desk-work related MSDs for staff.",
            ]
          }
        },
      },



      {
        id: "construction",
        name: "Construction",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             "Phishing attacks: credential theft from staff.",
            "Ransomware attacks: locking project data.",
            "Supply chain attacks: subcontractor compromise.",
            "IP theft: blueprints targeted.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Supply Chain Disruptions: material shortages delaying projects.",
            "Labor Shortages: skilled trades scarcity causing schedule slips.",
            "Equipment Failures: downtime and repair costs.",
            "Regulatory Compliance: building code and permit problems.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
                "Third-party data breaches: subcontractor systems exposing project data.",
            "Insider threats: employees leaking sensitive data.",
            "Weak passwords & unsecured networks: easy attack vectors.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
               "Falls from heights: scaffolding, roofs and ladders risks.",
            "Struck-by accidents: falling objects or vehicles.",
            "Electrocution: contact with live wires or equipment.",
            "Exposure to: Construction workers may come into contact with.",
            ]
          }
        },
      },


      {
        id: "it",
        name: "IT",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             "Malware & ransomware: infection and encryption of systems.",
            "Phishing & social engineering: credential compromise.",
            "DDoS: service unavailability.",
            "Insider threats & APTs: targeted intrusions.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Cyberattacks: causing long outages and revenue loss.",
            "Power outages & equipment failure: causing downtime.",
            "Natural disasters: data center infrastructure damage.",
            "Human error: operational mistakes costing time and data.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
          "Phishing attacks: credential theft and account takeover.",
            "Malware: data exfiltration or corruption.",
            "Cloud risks: misconfiguration and shared infrastructure issues.",
            "Third-party risks: vendor compromises.",
            ],
          },

           hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
               "Falls from heights: scaffolding, roofs and ladders risks.",
            "Struck-by accidents: falling objects or vehicles.",
            "Electrocution: contact with live wires or equipment.",
            "Exposure to: Construction workers may come into contact with.",
            ]
          }
        },
      },


      {
        id: "oil-gas",
        name: "Oil & Gas",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
              "Ransomware: locking operational systems.",
            "Phishing & spear-phishing: targeted credential theft.",
            "Insider threats: staff causing damage or exfiltration.",
            "DDoS: affecting corporate-facing systems.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Supply chain disruptions: equipment & part shortages.",
            "Price volatility: revenue & investment impacts.",
            "Health & Safety Risks: serious operational consequences.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
               "Phishing & Spear-phishing attacks: targeted attacks.",
            "Insider threats: internal misuse of data.",
            "Third-party risks: contractor & vendor weaknesses.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Workplace accidents: drilling and transport hazards.",
            "Health hazards: chemical and noise exposures.",
            "Environmental impact: spills and emissions.",
            "Regulatory compliance: strict HSE rules to meet.",
            ]
          }
        },
      },


      {
        id: "pharmaceuticals",
        name: "Pharmaceuticals",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             
               "IP theft: R&D and formulas targeted.",
            "Ransomware: encrypting critical data and systems.",
            "Phishing attacks: targeted attacks against staff.",
            "Supply chain attacks: vendor compromise.",
            "Insider threats & DDoS: disrupt operations.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Supply chain disruptions: raw material shortages.",
            "Regulatory compliance failures: severe fines and delays.",
            "Data loss: affecting product availability and trials.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Insider threats: staff leaking IP or PHI.",
            "Third-party risks: vendor access to sensitive data.",
            "Regulatory compliance: GDPR/HIPAA style requirements.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
                "Chemical hazards: exposure to APIs, solvents and reagents.",
            "Accidents & injuries: heavy machinery and lab work risks.",
            "Waste management: hazardous and biohazardous wastes.",
            "Radiation exposure: for certain products and processes.",
            "Occupational health risks: respiratory and dermal hazards.",
            ]
          }
        },
      },


      
      {
        id: "retail",
        name: "Retail",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             
              "Phishing & social engineering: employee credential theft.",
            "Ransomware: encrypting inventory and POS systems.",
            "POS attacks: malware stealing payment data.",
            "Third-party vendor attacks: breaches via payment processors.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
           "Supply chain disruption: missing stock and delivery delays.",
            "Power outages: refrigeration and checkout interruptions.",
            "Pandemics: store closures & reduced foot traffic.",
            "Theft & vandalism: inventory & property loss.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
               "POS attacks: payment card data compromises.",
            "Insider threats: employees leaking data.",
            "Online shopping fraud: account takeover & payment fraud.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
              "Employee safety: lifting, forklift and slip/trip risks.",
            "Customer safety: crowded store hazards and emergency procedures.",
            "Fire safety: proper storage & disposal.",
            ]
          }
        },
      },


      
      {
        id: "shipping",
        name: "Shipping",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             
             "Phishing: credential theft for shipping companies.",
            "Ransomware: encrypted booking & tracking systems.",
            "Supply chain attacks: vendors targeted to reach shipping systems.",
            "Insider threats: crew or staff facilitating breaches.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
             "Supply chain disruptions: port backlogs and route issues.",
            "Labor disputes: strikes halting cargo flow.",
            "Accidents & equipment failure: lost cargo and downtime.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Third-party breaches: vendor exposures leaking shipper/customer data.",
            "Insider threats: staff leaking manifest or cargo details.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
                  "Ship collisions & groundings: pollution and crew harm.",
            "Fires & explosions: onboard or in ports.",
            "Chemical hazards: hazardous cargo handling risks.",
            "Exposure to extreme weather: storms causing injuries & damage.",
            ]
          }
        },
      },


      
      {
        id: "transport",
        name: "Transport",
        content: {
          cybersecurity: {
            title: "01. Cybersecurity",
            subtitle: "Secure your banking operations",
            points: [
             
               "Cyber-attacks on systems: ticketing, signaling or traffic control attacks.",
            "Phishing: employee credential theft.",
            "Ransomware: locking dispatch and scheduling systems.",
            "Insider threats: misuse of privileged access.",
            ],
          },
          businessContinuity: {
            title: "02. Business Continuity",
            subtitle: "Keep services always available",
            points: [
              "Technical failures: equipment & software breakdowns.",
            "Labor disputes: strikes disrupting services.",
            "Economic downturns: reduced demand.",
            "Regulatory compliance: fines for non-compliance.",
            ],
          },
          dataBreach: {
            title: "03. Data Breach",
            subtitle: "Protect customer data",
            points: [
              "Insider threats: staff leaking route or passenger data.",
            "Third-party breaches: vendor vulnerabilities exposing systems.",
            ],
          },

          hse: {
            title: "04. Hse",
            subtitle: "Protect customer data",
            points: [
                   "Accidents: heavy-vehicle crashes causing serious injuries.",
            "Hazardous materials exposure: transporting dangerous goods.",
            "Workplace hazards: noise, vibration and extreme temperatures.",
            "Fatigue: driver/operator long shifts increasing accident risk.",
            ]
          }
        },
      },



    

      // add remaining 15 industries here...
    ];

    const tabs: Tab[] = [
      { key: "cybersecurity", label: "Cybersecurity" },
      { key: "businessContinuity", label: "Business Continuity" },
      { key: "dataBreach", label: "Data Breach" },
      { key: "hse", label: "Hse" },
    ];

    return {
      industries,
      tabs,                       // <-- now tabs exists
      activeIndustryIndex: 0,
      activeTab: "cybersecurity" as TabKey,
    };
  },

  computed: {
    currentIndustry(): Industry | null {
      return this.industries[this.activeIndustryIndex] ?? null;
    },

    currentIndustryContent(): IndustryContent | null {
      return this.currentIndustry ? this.currentIndustry.content : null;
    },

    tabContent(): Section | null {
      if (!this.currentIndustryContent) return null;
      // currentIndustryContent is Record<TabKey, Section>
      return this.currentIndustryContent[this.activeTab];
    },
  },

  methods: {
    selectIndustry(index: number) {   // <-- index is typed
      this.activeIndustryIndex = index;
      // reset tab when industry changes
      this.activeTab = "cybersecurity";
    },
  },
});
</script>


<style scoped>
/* ================================
   ROOT SECTION
================================ */
.ihw {
  padding: 80px 0;
  /* background: linear-gradient(180deg, #050608 0%, #0b0d13 100%); */
  color: #ffffff;
  padding: 60px 20px;
  border-radius: 48px;
  margin: 24px;
  overflow: hidden;
  background: #f4f5f8;
}

/* ================================
   LAYOUT
================================ */
.ihw {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.ihw-left {
  width: 360px;
  max-height: 420px;
  overflow-y: auto;
  padding-right: 6px;
}

.ihw-right {
  flex: 1;
}

/* ================================
   LEFT LIST (INDUSTRIES)
================================ */
.ihw-industry {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 20px;
  margin-bottom: 12px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  text-align: left;

  background: #11131a;
  color: #e5e7eb;
  font-size: 15px;
  font-weight: 500;

  transition: all 0.25s ease;
}

.ihw-industry:hover {
  background: #181b26;
  transform: translateX(2px);
}

.ihw-industry.is-active {
  background: #ffffff;
  color: #050608;
  font-weight: 600;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
}

/* Scrollbar */
.ihw-left::-webkit-scrollbar {
  width: 4px;
}

.ihw-left::-webkit-scrollbar-thumb {
  background: #2a2f45;
  border-radius: 10px;
}

/* ================================
   RIGHT CARD
================================ */
.ihw-right-inner {
  background: #0f1118;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
}

/* ================================
   IMAGE AREA
================================ */
.ihw-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  background: #e5eef6;
}

/* ================================
   TABS
================================ */
.ihw-tabs {
  display: flex;
  gap: 10px;
  padding: 20px 24px 0;
  flex-wrap: wrap;
}

.ihw-tab {
  padding: 7px 14px;
  font-size: 13px;
  border-radius: 999px;
  cursor: pointer;

  border: 1px solid #2b2f45;
  background: transparent;
  color: #c7c9d3;

  transition: all 0.2s ease;
}

.ihw-tab:hover {
  border-color: #ffffff;
  color: #ffffff;
}

.ihw-tab.is-active {
  background: #ffffff;
  color: #050608;
  border-color: #ffffff;
  font-weight: 600;
}

/* ================================
   CONTENT
================================ */
.ihw-content {
  padding: 24px;
}

.ihw-content h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 6px;
}

.ihw-subtitle {
  font-size: 15px;
  color: #a9abb6;
  margin-bottom: 16px;
}

/* Bullet points */
.ihw-content ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.ihw-content li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 1.5;
  color: #e5e7eb;
}

.ihw-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #4f7cff;
  font-weight: bold;
}

/* ================================
   RESPONSIVE
================================ */
@media (max-width: 1024px) {
  .ihw {
    flex-direction: column;
  }

  .ihw-left {
    width: 100%;
    max-height: unset;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 8px;
  }

  .ihw-industry {
    min-width: 260px;
    margin-bottom: 0;
    white-space: nowrap;
  }
}

@media (max-width: 640px) {
  .ihw {
    padding: 56px 0;
  }

  .ihw-image {
    height: 200px;
  }

  .ihw-content h3 {
    font-size: 19px;
  }

  .ihw-content li {
    font-size: 14px;
  }
}
</style>
