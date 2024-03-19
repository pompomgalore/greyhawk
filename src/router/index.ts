import { createRouter, createWebHistory } from 'vue-router'
import MapView from '../views/MapView.vue'
import RootView from '../views/RootView.vue'
import GridView from '@/views/GridView.vue'

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
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
