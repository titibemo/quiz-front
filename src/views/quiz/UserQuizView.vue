<template>

  <section>
    <h1>Voici la liste des quiz :</h1>
      <div class="quizList" v-for="quiz in listQuiz">
        <div class="titleQuiz">
          <a :href="`http://localhost:8080/quiz/${quiz.slug_quiz}/${quiz.id_quiz }`">{{quiz.name_quiz}}</a>
        </div>
      </div>
  </section>

  



</template>

<script setup>
import { ref } from 'vue';

const listQuiz = ref(null)


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch('http://localhost:3020/api/quiz/listAvailableQuiz', options).then(handleFetch);

function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(data=>{
            listQuiz.value = data;
          console.log("data", listQuiz.value);
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }

</script>

<style scoped>

.quizList{
  width: 350px;
  height: 200px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,0.8) 0%, rgba(153,172,240,0.8) 49%, rgba(2,0,36,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleQuiz a{
  background-color: rgba(211, 211, 211, 0.301);
  padding: 5px;
  color: white;
  font-size: 2em;
  text-decoration: none;
}

</style>