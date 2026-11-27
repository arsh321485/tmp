import { createRouter, createWebHistory } from "vue-router";
import MarketingPage from "../views/MarketingPage.vue";
import MainSignin from "@/components/MainSignin.vue";
import IndustriesView from "@/views/IndustriesView.vue";
import CybersecurityView from "@/views/CybersecurityView.vue";
import FaqView from "@/views/FaqView.vue";
import AboutusView from "@/views/AboutusView.vue";
import PrivacypolicyView from "@/views/PrivacypolicyView.vue";
import CookiesModal from "@/components/CookiesModal.vue";
import RegulatoryRequirementsView from "@/views/RegulatoryRequirementsView.vue";
import BusinessContinuityView from "@/views/BusinessContinuityView.vue";
import DataPrivacyView from "@/views/DataPrivacyView.vue";
import EsgView from "@/views/EsgView.vue";
import EmailConfirmView from "@/views/EmailConfirmView.vue";
import MagiclinkView from "@/views/MagiclinkView.vue";
import DomainView from "@/views/DomainView.vue";
import MattermostView from "@/views/MattermostView.vue";
import WelcomeStepper from "@/components/WelcomeStepper.vue";
import OrganisationView from "@/views/OrganisationView.vue";
import LocationView from "@/views/LocationView.vue";
import AddUsersView from "@/views/AddUsersView.vue";
import ConfigureTeamsView from "@/views/ConfigureTeamsView.vue";
import ParticipantFlowView from "@/views/ParticipantFlowView.vue";
import CommandCenterView from "@/views/CommandCenterView.vue";
import DashboardView from "@/views/DashboardView.vue";
import TeamsPortalView from "@/views/TeamsPortalView.vue";
import ScenarioPortalView from "@/views/ScenarioPortalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: MainSignin,
    },

    {
      path: "/home",
      name: "home",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/home.html",
        frameName: "tmp|Landing Page.html|",
      },
    },
    {
      path: "/home/how-it-works",
      name: "how-it-works",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/how-it-works.html",
        frameName: "tmp|How It Works.html|",
      },
    },
    {
      path: "/home/live-threats",
      name: "live-threats",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/live-threats.html",
        frameName: "tmp|Live Threats.html|",
      },
    },
    {
      path: "/home/knowledge-base",
      name: "knowledge-base",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/knowledge-base.html",
        frameName: "tmp|Knowledge Base.html|",
      },
    },
    {
      path: "/home/partners",
      name: "partners",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/partners.html",
        frameName: "tmp|Partners.html|",
      },
    },
    {
      path: "/home/support",
      name: "support",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/support.html",
        frameName: "tmp|Support.html|",
      },
    },
    {
      path: "/home/privacy",
      name: "home-privacy",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/privacy.html",
        frameName: "tmp|Privacy.html|",
      },
    },
    {
      path: "/home/terms",
      name: "home-terms",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/terms.html",
        frameName: "tmp|Terms.html|",
      },
    },
    {
      path: "/home/dpa",
      name: "home-dpa",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/dpa.html",
        frameName: "tmp|DPA.html|",
      },
    },
    {
      path: "/home/sub-processors",
      name: "home-sub-processors",
      component: MarketingPage,
      meta: {
        marketingSrc: "/marketing/sub-processors.html",
        frameName: "tmp|Sub-processors.html|",
      },
    },

    {
      path: "/industries",
      name: "industries",
      component: IndustriesView,
    },

    {
      path: "/cyber-security",
      name: "cyber-security",
      component: CybersecurityView,
    },

    {
      path: "/business-continuity",
      name: "business-continuity",
      component: BusinessContinuityView,
    },

    {
      path: "/data-privacy",
      name: "data-privacy",
      component: DataPrivacyView,
    },

    {
      path: "/esg",
      name: "esg",
      component: EsgView,
    },

    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutusView,
    },

    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacypolicyView,
    },

    {
      path: "/cookies",
      name: "cookies",
      component: CookiesModal,
    },

    {
      path: "/regulatory-requirments",
      name: "regulatory-requirments",
      component: RegulatoryRequirementsView,
    },

    {
      path: "/email",
      name: "email",
      component: EmailConfirmView,
    },

    {
      path: "/magic-link",
      name: "magic-link",
      component: MagiclinkView,
    },

    {
      path: "/domain",
      name: "domain",
      component: DomainView,
    },

    //  {
    //   path: '/mattermost',
    //   name: 'mattermost',
    //   component: MattermostView,
    // },

    {
      path: "/mattermost",
      component: MattermostView,
      beforeEnter: (to) => {
        if (to.query.provider !== "email") {
          return "/location";
        }
      },
    },

    {
      path: "/welcome-stepper",
      name: "Welcome-stepper",
      component: WelcomeStepper,
    },

    {
      path: "/organisation",
      name: "organisation",
      component: OrganisationView,
    },

    {
      path: "/location",
      name: "location",
      component: LocationView,
    },
    {
      path: "/add-users",
      name: "add-users",
      component: AddUsersView,
    },

    {
      path: "/config-teams",
      name: "config-teams",
      component: ConfigureTeamsView,
    },

    {
      path: "/participant-flow",
      name: "participant-flow",
      component: ParticipantFlowView,
    },

    {
      path: "/command-center",
      name: "command-center",
      component: CommandCenterView,
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },

    {
      path: "/teams-portal",
      name: "teams-portal",
      component: TeamsPortalView,
    },

    {
      path: "/scenario-portal",
      name: "scenario-portal",
      component: ScenarioPortalView,
    },
  ],

  scrollBehavior(to) {
    if (to.hash && !to.meta.marketingSrc) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});

export default router;
