import {  createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GameDetailView from '../views/GameDetailView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/jeu/:gameId', component: GameDetailView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})