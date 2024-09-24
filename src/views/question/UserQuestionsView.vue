<template>

  <section>

    <h1 class="section-title">quiz - {{ titleQuiz }} </h1>
    
    <div class="quiz-container">
      <form>
          <div class="quiz-question" v-for="(question,i) in listQuestion">
              <p class="titleQuestion">{{ question}}</p>
              <div class="answerContainer">
                <div class="answer" v-for="answer in listAnswers[i]">
                  <div class="radio-group">
                    <input @click="addAnswer(answer, i)" type="radio" :id="answer" :name="`answer${i}`" :value="answer">
                    <label class="labelAnswer" :for="answer"> {{ answer }}</label>
                  </div>              
                </div>
              </div>
          </div>
          <button class="submit" @click.prevent="validateUserQuiz" type="submit">Valider le quiz</button>
      </form>
    </div>

  </section>


</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id



const listQuestion = ref(null);
const listAnswers = ref([]);
const userAnswers = ref([]);
const userId = ref(null)
const quizId = ref(null)
let titleQuiz;

function addAnswer (answer, i){
  userAnswers.value[i] = answer;
  console.log(userId.value);
  
}

const validateUserQuiz = async () => {

try {
  const response = await fetch(`http://localhost:3020/api/question/validateUserQuiz/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      "userAnswers": userAnswers.value,
      "idUser": userId.value,
      "idQuiz": quizId.value
      })
    });
    const data = await response.json();
// enter you logic when the fetch is successful
    console.log("donnees envoye", data);
  } catch(error) {

  
// enter your logic for when there is an error (ex. error toast)

    console.log(error)
    } 
}







let cookie = document.cookie.slice(13);
fetch('http://localhost:3020/api/users/test', {
  headers: {Authorization: `Bearer ${cookie}`}
}).then(resp => resp.json())
  .then(data => {
    userId.value = data.id
  })


console.log(id);


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
            quizId.value = JSON.parse(data[0].id_quiz)
            listQuestion.value = JSON.parse(data[0].name_question)
            listAnswers.value = JSON.parse(data[0].answers_question)
            titleQuiz = data[0].name_quiz
            console.log("listQ", JSON.parse(data[0].name_question))
            console.log("listA", JSON.parse(data[0].answers_question))
            console.log("numberQuestion", listQuestion.value)
            listQuestion.value.forEach(question => {
              question = ""
              userAnswers.value.push(question)
            });
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

.titleQuestion{
  text-align: center;
  font-size: 1.2em;
  padding: 5px;
  margin: 15px 0;
  width: 100%;
  background-color: #b11fa7f3;
  color: white;
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
.submit{
  margin-top: 15px;
  background-color: #4ade80;
  padding: 5px;
  width: 100%;
  border-radius: 15px;
}

</style>