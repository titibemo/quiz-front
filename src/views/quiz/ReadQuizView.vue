<template>
<h1>Les quiz</h1>

<ul>
    <li v-for="quiz in listQuiz">
       {{ quiz.id_quiz }} - {{quiz.name_quiz}}
       <form action="http://localhost:3020/api/quiz/eraseQuiz" method="post">
            <input type="hidden" name="id_quiz" :value="`${quiz.id_quiz }`" >
            <button type="submit">effacer le quiz : {{ quiz.name_quiz }}</button>
          </form>
          <!--
            <form action="http://localhost:3020/api/quiz/getQuizById" method="post">
              <input type="hidden" name="id_quiz" :value="`${quiz.id_quiz }`" >
              <button type="submit">modifier le quiz : {{ quiz.name_quiz }}</button>
            </form>
            -->
            <a :href="`http://localhost:8080/admin/modifier-un-quiz/${quiz.id_quiz }`">Modifier un quiz</a>
            <a :href="`http://localhost:8080/admin/ajouter-question/${quiz.id_quiz }`">Modifier les questions du quiz</a>
            <hr>
    </li>
    
</ul>
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

fetch('http://localhost:3020/api/quiz/listQuiz', options).then(handleFetch);

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