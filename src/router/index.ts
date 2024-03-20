import { createRouter, createWebHistory } from 'vue-router'
import MapView from '../views/MapView.vue'
import RootView from '../views/RootView.vue'

export const routes = [
  {
    path: '/',
    name: 'root',
    component: RootView
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
