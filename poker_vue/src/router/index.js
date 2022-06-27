import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/creategame',
      name: 'creategame',
      component: () => import('../views/Creategame.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/Game.vue')
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: () => import('../views/Userlist.vue')
    },
    {
      path: '/logged',
      name: 'logged',
      component: () => import('../views/Logged.vue')
    },
  ]
})

export default router
