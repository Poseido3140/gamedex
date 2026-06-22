<script setup>
import { ref } from 'vue';
import { questions } from '../data/questions';

const index = ref(2)
const responseIndex = ref('')

const props = defineProps({
  questionIndex: {type : Number}
})

const emit = defineEmits(['responseTrue','responseFalse'])

function emitResponse(response) {
    const bonne = questions[props.questionIndex].bonne

    if (response === bonne) {
        emit('responseTrue')
    } else {
        emit('responseFalse')
    }
}



</script>


<template>
    <p>{{ questions[props.questionIndex].question }}</p>
    <button @click="emitResponse(0)" >{{ questions[props.questionIndex].reponses[0] }}</button><button @click="emitResponse(1)" >{{ questions[props.questionIndex].reponses[1] }}</button>
    <button @click="emitResponse(2)" >{{ questions[props.questionIndex].reponses[2] }}</button><button @click="emitResponse(3)" >{{ questions[props.questionIndex].reponses[3] }}</button>

</template>


<style>

</style>