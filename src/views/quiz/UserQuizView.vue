<template>

  <section>
    <h1 class="section-title">Voici la liste des quiz disponibles :</h1>

    <div class="displayQuiz">
      <div v-for="quiz in listQuiz">
        <div class="quizList" >
          <div class="titleQuiz">
            <a :href="`http://localhost:8080/quiz/${quiz.slug_quiz}/${quiz.id_quiz }`">{{quiz.name_quiz}}</a>
          </div>
        </div>
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
.section-title{
  text-align: center;
  margin: 15px 0;
}
.displayQuiz{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.quizList{
  width: 350px;
  height: 200px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,0.8) 0%, rgba(153,172,240,1) 50%, rgba(2,0,36,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.titleQuiz{
  background-color: rgba(211, 211, 211, 0.301);
  width: 100%;
  text-align: center;
}

.titleQuiz a{
  color: white;
  font-size: 2em;
  text-decoration: none;
}

.titleQuiz a:hover{
  background-color: rgba(211, 211, 211, 0.401);
}

</style>