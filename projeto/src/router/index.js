import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  },

  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../views/Contato.vue')
  },


  {
    path: '/aprender',
    name: 'Aprender',
    component: () => import('../views/Aprender.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
