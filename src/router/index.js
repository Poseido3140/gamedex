import {  createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SoloView from '../views/SoloView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/play/', component: SoloView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})