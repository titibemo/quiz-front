<template>

<section>
  <h1 class="section-title">Modifier le quiz</h1>

  <form :action="`http://localhost:3020/api/quiz/modifyQuiz/${id}`" method="POST">
      <label for="quiz_name">Modifier le nom de votre quiz</label><br>
      <input type="text" name="quiz_name" id="quiz_name" :value="`${quiz}`"><br>

      <button class="validateUpdate" type="submit">modifier le quiz</button>
  </form>

</section>

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

<style scoped>
section{
  width: 90%;
  margin: auto;
}
.section-title{
  text-align: center;
  margin: 15px 0;
}
label{
  margin: 5px 0;
  padding: 5px 0;
  font-size: 1.1em;
}
input{
  padding: 5px;
  margin: 15px 0;
  border-radius: 10px;
  width: 100%;
}
.validateUpdate{
  display: block;
  background-color: #4ade80;
  color: black;
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  width: 100%;
  margin: auto
}
</style>