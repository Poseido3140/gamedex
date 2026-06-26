<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()


</script>

<template>
  <h1>  
    <RouterLink to="/" class="title">GameDex</RouterLink>
  </h1>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.title {color: blueviolet ; size:  ;}

</style>