<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

</script>

<template>
  <RouterLink to="/">
    <h1>SuperQuiz</h1>
  </RouterLink>
  <RouterView />
</template>

<style scoped>

</style>