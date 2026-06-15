<script setup>
import {ref} from 'vue'
import GameCard from './components/GameCard.vue';

const jeux = ref([
  { id: 1, nom: 'The Legend of Zelda: BOTW', note: 97, image: 'https://placehold.co/300x180?text=Zelda' },
  { id: 2, nom: 'Elden Ring',                note: 96, image: 'https://placehold.co/300x180?text=Elden+Ring' },
  { id: 3, nom: 'Minecraft',                 note: 93, image: 'https://placehold.co/300x180?text=Minecraft' },
  { id: 4, nom: 'Hollow Knight',             note: 90, image: 'https://placehold.co/300x180?text=Hollow+Knight' },
])

function ajouterFavori(jeu) {
  alert(jeu.nom + ' est ajouté aux favoris')
}


</script>

<template>
  <h1>gamedex</h1>
  <div class="grille">
    <GameCard v-for="jeu in jeux" :key="jeu.id" :jeu="jeu" @favori="ajouterFavori"/>
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