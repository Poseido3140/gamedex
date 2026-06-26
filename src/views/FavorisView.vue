<script setup>
import { useRoute, useRouter } from 'vue-router'

import {ref , onMounted, toRaw, computed, watch} from 'vue'
import GameCard from '../components/GameCard.vue';
import { getGames, searchGame } from '../services/rawg.js';
import { useFavorisStore } from '../stores/favoris';

const store = useFavorisStore()
const router = useRouter()
const route = useRoute()




//------------------------------------------------------------------------------------


</script>

<template>
  <div>
    <p>{{ store.nombre }}</p>

  </div>

  <p v-if="loading">Chargement en cours ...</p> 
  <div v-else class="grille">
    <p v-if=" erreur != ''">{{erreur}}</p>
    <GameCard v-for="jeu in store.liste" :key="jeu.id" :jeu="jeu" />
  </div>
</template>

<style scoped>
.grille { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.carte  { border: 1px solid #ddd; border-radius: 12px; padding: 1rem; }
.carte img { width: 100%; border-radius: 8px; }
</style>

<style scoped>
h1 { color: #6d28d9; }
</style>