import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainSignin from '@/components/MainSignin.vue'
import IndustriesView from '@/views/IndustriesView.vue'
import CybersecurityView from '@/views/CybersecurityView.vue'
import FaqView from '@/views/FaqView.vue'
import AboutusView from '@/views/AboutusView.vue'

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
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutusView,
    },
  ],
})

export default router
