<script setup>
import {ref} from 'vue'

const score = ref(0)

function augmenterScore() {
  score.value+=10
}

function reset() {
  score.value=0
}

</script>

<template>
  <h1>Gamedex</h1>
  <p>Score: {{score}}</p>
  <button v-on:click="augmenterScore">+10</button>
  <button v-on:click="reset">reset</button>
</template>

<style scoped>
h1 { color: #6d28d9; }
</style>