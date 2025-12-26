import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainSignin from '@/components/MainSignin.vue'
import IndustriesView from '@/views/IndustriesView.vue'
import CybersecurityView from '@/views/CybersecurityView.vue'
import FaqView from '@/views/FaqView.vue'
import AboutusView from '@/views/AboutusView.vue'
import PrivacypolicyView from '@/views/PrivacypolicyView.vue'
import CookiesModal from '@/components/CookiesModal.vue'
import RegulatoryRequirementsView from '@/views/RegulatoryRequirementsView.vue'
import BusinessContinuityView from '@/views/BusinessContinuityView.vue'
import DataPrivacyView from '@/views/DataPrivacyView.vue'
import EsgView from '@/views/EsgView.vue'
import EmailConfirmView from '@/views/EmailConfirmView.vue'
import MagiclinkView from '@/views/MagiclinkView.vue'
import DomainView from '@/views/DomainView.vue'
import MattermostView from '@/views/MattermostView.vue'
import WelcomeStepper from '@/components/WelcomeStepper.vue'
import OrganisationView from '@/views/OrganisationView.vue'
import LocationView from '@/views/LocationView.vue'
import MainSignup from '@/components/MainSignup.vue'
import AddUsersView from '@/views/AddUsersView.vue'
import ConfigureTeamsView from '@/views/ConfigureTeamsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: MainSignin,
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/industries',
      name: 'industries',
      component: IndustriesView,
    },

    {
      path: '/cyber-security',
      name: 'cyber-security',
      component: CybersecurityView,
    },

    {
      path: '/business-continuity',
      name: 'business-continuity',
      component: BusinessContinuityView,
    },

    {
      path: '/data-privacy',
      name: 'data-privacy',
      component: DataPrivacyView,
    },

    {
      path: '/esg',
      name: 'esg',
      component: EsgView,
    },

    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutusView,
    },

    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacypolicyView,
    },

    {
      path: '/cookies',
      name: 'cookies',
      component: CookiesModal,
    },

    {
      path: '/regulatory-requirments',
      name: 'regulatory-requirments',
      component: RegulatoryRequirementsView,
    },

    {
      path: '/email',
      name: 'email',
      component: EmailConfirmView,
    },

    {
      path: '/magic-link',
      name: 'magic-link',
      component: MagiclinkView,
    },

    {
      path: '/domain',
      name: 'domain',
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
      }
    },


    {
      path: '/welcome-stepper',
      name: 'Welcome-stepper',
      component: WelcomeStepper
    },

    {
      path: '/organisation',
      name: 'organisation',
      component: OrganisationView
    },

    {
      path: '/location',
      name: 'location',
      component: LocationView
    },
    {
      path: '/signup',
      name: 'signup',
      component: MainSignup
    },

    {
      path: '/add-users',
      name: 'add-users',
      component: AddUsersView
    },

    {
      path: '/config-teams',
      name: 'config-teams',
      component: ConfigureTeamsView
    },

    





  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  },
})

export default router
