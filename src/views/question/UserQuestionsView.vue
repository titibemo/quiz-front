<template>

    <h1>quiz - {{ titleQuiz }} </h1>

    <form action="">

        <section v-for="(question,i) in listQuestion">
            <h2>
                {{ question }}
            </h2>

            <p v-for="answer in listAnswers[i]">
                <label for="">{{answer}}</label>
                <input type="radio" :name="`answer${i}`" :value=answer>
            </p>
            <hr>

        </section>

    </form>
  

</template>

<script setup>
import { ref } from 'vue';

const id = window.location.href.slice(37);


const listQuestion = ref(null);
const listAnswers = ref([]);
let titleQuiz;




const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch(`http://localhost:3020/api/question/showQuestions/${id}`, options).then(handleFetch);



function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(data=>{
            //listQuestion.value = data;
            console.log("data", data);
            listQuestion.value = JSON.parse(data[0].name_question)
            listAnswers.value = JSON.parse(data[0].answers_question)
            titleQuiz = data[0].name_quiz
            console.log("listQ", JSON.parse(data[0].name_question))
            console.log("listA", JSON.parse(data[0].answers_question))
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }


</script>