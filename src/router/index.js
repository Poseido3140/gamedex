import {  createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GameDetailView from '../views/GameDetailView.vue'
import FavorisView from '../views/FavorisView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/jeu/:gameId', component: GameDetailView },
  { path: '/favoris', component: FavorisView}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})