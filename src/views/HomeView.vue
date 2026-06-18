<script setup>
import { useRoute, useRouter } from 'vue-router'

import {ref , onMounted, toRaw, computed, watch} from 'vue'
import GameCard from '../components/GameCard.vue';
import { getGames, searchGame } from '../services/rawg.js';
import { useFavorisStore } from '../stores/favoris';

const store = useFavorisStore()
const router = useRouter()
const route = useRoute()
const jeux = ref([])
const loading = ref(true)
const erreur = ref('')
const page = ref(0)
const searchOrNot = ref(true)

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search, scoreMin: scoreMin.value } })
  }
})

const scoreMin = computed({
  get() {
    return route.query.scoreMin ?? ''
  },
  set(scoreMin) {
    router.replace({ query: { search: search.value, scoreMin } })
  }
})

onMounted(() => {
  chargerJeux();
})
//---------------------------------------------------------------------------------
async function chargerJeux() {
  loading.value = true
  page.value ++
  try {
    jeux.value.push(...(await getGames(15, page.value )))
  }
  catch(e) {
    erreur.value = e
  }
  loading.value = false
}



let timemout 

watch(search, () => {
  clearTimeout(timemout)
  timemout = setTimeout(showSearchedGame, 400)
})

async function showSearchedGame() {
  loading.value = true
  try {
    jeux.value = await searchGame(search.value)
  }
  catch(e) {
    erreur.value = e
  }
  loading.value = false
}

//------------------------------------------------------------------------------------


</script>

<template>
  <div>
    <RouterLink to="/favoris">
      <p>{{ store.nombre }}</p>
    </RouterLink>
  </div>

  <div class="grille">

    <GameCard v-for="jeu in jeux" :key="jeu.id" :jeu="jeu" />
  </div>

  <button @click="chargerJeux()">More</button>
</template>


<style scoped>
.grille { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.carte  { border: 1px solid #ddd; border-radius: 12px; padding: 1rem; }
.carte img { width: 100%; border-radius: 8px; }
</style>

<style scoped>
h1 { color: #6d28d9; }
</style>