<script setup>
import { useRoute, useRouter } from 'vue-router'
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard.vue';
import { ref } from 'vue';

const score = ref(0)
const index = ref(0)
const playing = ref(false)
Timer

function nextQuestion (response){
    Timer()
  if (index.value < 9) {
    if (response === 1){
        score.value = score.value + 1
    }
    index.value++
  }else{
    score.value = score.value + 1
    playing.value = false
  }
}


</script>

<template class="all">
    <div v-if="playing">
        <QuestionCard :questionIndex="index" @responseTrue="nextQuestion(1)" @responseFalse="nextQuestion(0)" />
        <p>score : {{ score }}</p>
    </div>
    <div v-else>
        <p>score : {{ score }}/10</p>
        <button @click="playing = true , score = 0">Jouer</button>
    </div>
</template>

<style>

</style>