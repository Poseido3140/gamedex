<script setup>

defineProps({
  jeu: { type:Object, required: true}
})

const emit = defineEmits('favori')

</script>

<template>
  <div class="carte">
      <img :src="jeu.image" :alt="jeu.nom" />
      <h2>{{ jeu.nom }}</h2>
      <p :class="{green: jeu.note >= 90, orange: jeu.note < 90 }">Note : {{ jeu.note }}/100</p>
      <button @click="emit('favori',jeu)">Favori</button>
      <p v-if="jeu.note >= 95">Hit</p>
    </div>
</template>

<style scoped>
.green {color: green;}
.orange {color: orange;}
.carte { border: 1px solid #ddd; border-radius: 12px; padding: 1rem; }
.carte img { width: 100%; border-radius: 8px; }
</style>