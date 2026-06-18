<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()


</script>

<template>
  <h1>  
    <RouterLink to="/">GameDex</RouterLink>
  </h1>

  <main>
    <RouterView />
  </main>
</template>