import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import RouterManagmentView from '@/views/RouterManagmentView.vue'
import UserTrackingView from '@/views/UserTrackingView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/router-managment',
      name: 'router-managment',
      component: RouterManagmentView
    },
    {
      path: '/user-tracking',
      name: 'user-tracking',
      component: UserTrackingView
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
  ],
})

export default router
