import { createRouter, createWebHistory } from 'vue-router'
import RootView from '../views/RootView.vue'

export const routes = [
  {
    path: '/',
    name: 'root',
    component: RootView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
