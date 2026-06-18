<script setup>
import { computed } from 'vue';
import { router } from '../router';
import { useRoute } from 'vue-router'
import { useFavorisStore } from '../stores/favoris';

const store = useFavorisStore()


const route = useRoute()
const scoreMin = computed(() => route.query.scoreMin || 0)

defineProps({
  jeu: { type:Object, required: true}
})

const test = true

</script>

<template>
  
  <div v-if="scoreMin <= jeu.metacritic"  class="carte">
    <router-link :to="`/jeu/${jeu.id}`">
      <div>
        <img :src="jeu.background_image" :alt="jeu.name" />
        <h2>{{ jeu.name }}</h2>
        <p :class="{green: jeu.metacritic >= 90, orange: jeu.metacritic < 90 }">Note : {{ jeu.metacritic }}/100</p>
        <p v-if="jeu.metacritic >= 95" class="hit">Hit</p>
      </div>
    </router-link>
    <button @click="store.basculer(jeu)" v-if="store.estFavori(jeu.id) === false"> ♡ </button>
    <button @click="store.basculer(jeu)" v-else> ♥ </button>
  </div>

</template>

<style scoped>
.hit {color: red;}
.green {color: green;}
.orange {color: orange;}
.carte { border: 1px solid #ddd; border-radius: 12px; padding: 1rem; }
.carte img { width: 100%; border-radius: 8px; }
</style>