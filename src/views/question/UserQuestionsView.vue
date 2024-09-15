<template>

    <h1>quiz - {{ titleQuiz }} </h1>

   <!-- <form action="">

        <section class="questions" v-for="(question,i) in listQuestion">
            <h2 class="titleQuestion">
                {{ question }}
            </h2>

            <div class="answers" >
              <div class="radio-group" v-for="answer in listAnswers[i]">
                <input type="radio" :name="`answer${i}`" :value=answer>
                <label :for=answer> {{answer}}</label>
              </div>
            </div>

            <hr>

        </section>

    </form>
-->
    <hr>

    <div class="quiz-container">
      <form>
          <div class="quiz-question" v-for="(question,i) in listQuestion">
              <p class="titleQuestion">{{ question}}</p>
              <div class="answerContainer">
                <div class="answer" v-for="answer in listAnswers[i]">
                  <div class="radio-group">
                    <input type="radio" :id="answer" :name="`answer${i}`" :value="answer">
                    <label class="labelAnswer" :for="answer"> {{ answer }}</label>
                  </div>              
                </div>
              </div>
          </div>
      </form>
  </div>

    <hr>

    <!--
    <div class="quiz-container">
      <form>
          <div class="quiz-question">
              <p>Quel est le capital de la France ?</p>
              <div class="radio-group">
                  <input type="radio" id="paris" name="answer" value="paris">
                  <label for="paris">Paris</label>
              </div>
              <div class="radio-group">
                  <input type="radio" id="lyon" name="answer" value="lyon">
                  <label for="lyon">Lyon</label>
              </div>
              <div class="radio-group">
                  <input type="radio" id="marseille" name="answer" value="marseille">
                  <label for="marseille">Marseille</label>
              </div>
              <div class="radio-group">
                  <input type="radio" id="toulouse" name="answer" value="toulouse">
                  <label for="toulouse">Toulouse</label>
              </div>
          </div>
      </form>
  </div>
  -->

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

<style scoped>



.titleQuestion{
  text-align: center;
  font-size: 1.2em;
  padding: 5px;
  margin: 15px 0;
  width: 100%;
  background-color: #ddd;
}

.answers{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  gap: 10px;
}

.answerContainer{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.answer{
  display: flex;
  justify-content: center;
  padding: 5px;
}
.labelAnswer{
  width: 100%;
}



.nextQuestion, .previousQuestion{
  display: flex;
  justify-content: center;
  background-color: #7dd3fc;
  margin: auto;
  border-radius: 15px;
  padding: 5px;
}
.validateQuiz{
  display: block;
  background-color: #4ade80;
  color: black;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  margin: auto
}

.delete{
  background-color: #f43f5e;
  color: white;
  padding: 5px;
  border-radius: 15px;
}

.quiz-container {
  background: #fff;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.radio-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}

.radio-group input[type="radio"] {
  display: none;
}

.radio-group label {
  display: inline-block;
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
}

.radio-group input[type="radio"]:checked + label {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
  width: 90%;
}

.radio-group label:hover {
  background-color: #e0e0e0;
}

</style>