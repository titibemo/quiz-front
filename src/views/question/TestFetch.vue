<template>

    <h1>Test récupération</h1>

</template>
  
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import type { Quiz, Test } from './../../type/config'
  
const aaa :Test = {
    testName: "10"
}

const b :Quiz[] = [{
    idQuiz: 10,
    nomQuiz: "10",
    question: 10,
}]
  
</script>
  
<style scoped>
  
  .quiz-container{
    display: flex;
    justify-content: space-evenly;
  }
  
</style>
  
  