<template>

    <h1>créer de nouvelles questions - Quiz : {{ quiz }}</h1>
    <!--action="http://localhost:3020/api/question/newQuestion"-->

      <div v-for="count in totalCount">
        <div :style="{display: count == totalCount ? 'block' : 'none'}">
          <p>question {{count}}</p>
          <input ref="inputTest" type="text" :name="`question${count}`" ><br>
        </div>

<!--     <div v-for="answer in totalAnswer">
          <label for="answer1">Réponse 1:</label>
          <input type="text" name="answer1"></input>
          <input type="radio" :name="`question${count}`">
        </div>
        
        <label for="answer2">Réponse 2:</label>
        <input type="text" name="answer2"></input>
        <input type="radio" value="">
        
        <label for="answer3">Réponse 3:</label>
        <input type="text" name="answer3"></input>
        <input type="radio" :name="`question${count}`">
        
        <label for="answer4">Réponse 4:</label>
        <input type="text" name="answer4"></input>
        <input type="radio" :name="`question${count}`">
        </div>
      -->  

      </div>
      
      <button @click="data" type="submit">Sauvegarder le quiz</button>

    <button @click="previewQuestion">Revenir à la question précédente</button>
    <!--<button @click="duplicateQuestion">Ajouter une question</button>-->
    <button @click="nextQuestion">ajouter une autre question</button>
    
</template>

<script setup>
import { ref } from 'vue';
//import Question from './../../components/Question.vue'
//import Answers from '@/components/Answers.vue';

const test = ref('')

const inputTest = ref(null)

const quiz = ref('')
const totalAnswer = ref(1)
const totalCount = ref(1);
const data = ref([]);
const id = window.location.href.slice(48);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch(`http://localhost:3020/api/quiz/getQuizById/${id}`, options).then(handleFetch);

function handleFetch(response)
{
  if(response.ok)
    {
      response.json()
        .then(data=>{
            quiz.value = data[0].name_quiz;
          //console.log("data", data[0].name_quiz);
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }



function duplicateQuestion () {
  
}

let a = [];

function nextQuestion(e){
  e.preventDefault();

  //a.push(inputTest.value)

  console.log("a", inputTest.value);
  
  

  totalCount.value++


//let myForm = document.getElementById("myForm");
//let formData = new FormData(myForm);
//console.log(formData);

//data.value.push(formData);
//console.log(data.value);


/*
*/

/*
  data.value.push[test.value];
  console.log(data.value);
  totalCount.value++
*/
}

function previewQuestion(){
  if(totalCount.value == 1){
    return
  }
  totalCount.value--
}



</script>

<style scoped>



</style>

