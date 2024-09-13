<template>

  

    <h1>Modifier le quiz</h1>

    <form :action="`http://localhost:3020/api/quiz/modifyQuiz/${id}`" method="POST">
        <label for="quiz_name">Modifier le nom de votre quiz</label><br>
        <input type="text" name="quiz_name" id="quiz_name" :value="`${quiz}`"><br>

        <button type="submit">modifier le quiz</button>
    </form>



</template>

<script setup>
import { ref } from 'vue';

const quiz = ref(null)

const id = window.location.href.slice(45);



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
          console.log("data", data[0].name_quiz);
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }


</script>