<script setup>
import { useRoute, useRouter } from 'vue-router'

import { getGameDetails } from '../services/rawg';
import { onMounted, ref } from 'vue';

const router = useRouter()
const route = useRoute()
const erreur = ref('')
const gameDetails = ref({})

const loading = ref(true);
async function chargeGameDetail() {
    try{
        gameDetails.value = await getGameDetails(route.params.gameId)
    }
    catch(e) {
        erreur.value = e
    } finally {
        loading.value =false;
    }
} 

onMounted(chargeGameDetail)

</script>

<template>
    <div v-if="loading">
        Chargement en cours...
    </div>
    
    <div v-else>
        <h1>{{gameDetails.name}}</h1>
        <h2>{{ gameDetails.metacritic }}/100</h2>
        <h2 v-if="gameDetails.metacritic >= 95">Hit</h2>
        <div v-else>
            <h2 v-if="gameDetails.metacritic >= 90">Exellent</h2>
            <div v-else>
                 <h2 v-if="gameDetails.metacritic >= 80">Bon</h2>
            </div>
        </div>
       

        <p v-if="erreur != '' ">{{ erreur }}</p>
        <div>
            <img :src="gameDetails.background_image" :alt="gameDetails.name" />
            <div v-html="gameDetails.description"></div>
        </div>
    </div>
</template>