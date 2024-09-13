<template>

    <h1>Voici la liste des quiz :</h1>

    <ul>
        <li v-for="quiz in listQuiz">
           {{ quiz.id_quiz }} - {{quiz.name_quiz}}
                <a :href="`http://localhost:8080/quiz/${quiz.slug_quiz}/${quiz.id_quiz }`">Démarrer le quiz</a>
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