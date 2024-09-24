<template>

  <section>

    <h1 class="section-title">Les quiz de l'utilisateur</h1>

    <div v-for="(quiz, index) in countQuiz" :key="index" class="accordion-item">
      <h3 @click="toggle(index)" class="accordion-header">{{nameQuiz[index]}}</h3>
      <div v-if="activeIndex === index" class="accordion-content">
        <table>
          <thead>
            <tr>
              <th>question</th>
              <th>Réponse correct</th>
              <th>Réponse utilisateur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div v-for="(displayQuestions, numberQuestion) in nameQuestions[index]">
                  <p class="data">Q°{{numberQuestion+1}} {{displayQuestions}}</p>
                </div>
              </td>
              <td> 
                <div v-for="displayCorrectAnswers in correctAnswers[index]">
                  <p class="data">{{ displayCorrectAnswers }}</p>
                </div>
              </td>
              <td> 
                <div v-for="(displayAnswersUser,i) in userAnswers[index]">
                  <p :style="{backgroundColor: displayAnswersUser == correctAnswers[index][i] ? 'green' : 'red'}" class="data">{{ displayAnswersUser }}</p>
                </div>
              </td>
       
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </section>

  
  
  




<!--
const nameQuiz = ref([]);
const nameQuestions = ref(null);
const answers = ref(null);
const correctAnswers = ref(null);
const userAnswers = ref(null);
-->




<!--
  <div>
    <div v-for="(quiz, index) in countQuiz" :key="index" class="accordion-item">
      <h3 @click="toggle(index)" class="accordion-header">Titre question {{ index }}</h3>
      <div v-if="activeIndex === index" class="accordion-content">
        <p> Le contenu de tout ce que l'utilisateur a fait </p>
      </div>
    </div>
  </div>
-->




<!--
<div v-for="(quiz, index) in countQuiz" :key="index" class="accordion-item">
  <table>
    <thead>
      <tr>
        <th>question</th>
        <th>Réponse correct</th>
        <th>Réponse utilisateur</th>
        <th>Valider </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div v-for="displayQuestions in nameQuestions[index]">
            <p>{{displayQuestions}}</p>
          </div>
        </td>
        <td> 
          <div v-for="displayCorrectAnswers in correctAnswers[index]">
            <p>{{ displayCorrectAnswers }}</p>
          </div>
        </td>
        <td> 
          <div v-for="displayAnswersUser in userAnswers[index]">
            <p>{{ displayAnswersUser }}</p>
          </div>
        </td>
        <td class="validation"> 
          <div v-for="(displayAnswersUser,i) in userAnswers[index]">
              <p class="validation" :style="{backgroundColor: displayAnswersUser == correctAnswers[index][i] ? 'green' : 'red'}"></p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
-->


    

</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
console.log("id", id);

const nameQuiz = ref([]);
const nameQuestions = ref([]);
const answers = ref([]);
const correctAnswers = ref([]);
const userAnswers = ref(([]));
const countQuiz = ref(0);




/* Test accordeon */

    // Déclarer les données réactives
    const activeIndex = ref(null);
    /*const items = ref([
      { title: "Section 1", content: "Contenu de la section 1" },
      { title: "Section 2", content: "Contenu de la section 2" },
      { title: "Section 3", content: "Contenu de la section 3" },
    ]);*/
    /*
    const items = ref([
      { title: "Section 1", content: "Contenu de la section 1" },
      { title: "Section 2", content: "Contenu de la section 2" },
      { title: "Section 3", content: "Contenu de la section 3" },
    ]);*/

    // Méthode pour gérer l'index actif
    const toggle = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    // Retourner les données et méthodes à utiliser dans le template




/* Fin test accordeon */






const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch(`http://localhost:3020/api/users/getUserQuizById/${id}`, options).then(handleFetch);

function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(d=>{
           console.log("All data", d);
            // nameQuiz.value = d[0].name_quiz;
            // nameQuestions.value = JSON.parse(d[0].name_question);
            // answers.value = JSON.parse(d[0].answers_question);
            // correctAnswers.value = JSON.parse(d[0].correct_answer);
            // userAnswers.value = JSON.parse(d[0].answers);

            // console.log("val", 
            // nameQuiz.value, 
            // nameQuestions.value, 
            // answers.value, 
            // correctAnswers.value, 
            // userAnswers.value);

            for (let i = 0; i < d.length; i++) {
            countQuiz.value++
            nameQuiz.value.push(d[i].name_quiz);
            nameQuestions.value.push(JSON.parse(d[i].name_question));
            answers.value.push(JSON.parse(d[i].answers_question));
            correctAnswers.value.push(JSON.parse(d[i].correct_answer));
            userAnswers.value.push(JSON.parse(d[i].answers));
            
          }
          console.log("nameques", nameQuestions.value);

            console.log(d.length);
            
                        
                    
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }

</script>

<style>
.section-title{
  text-align: center;
  margin: 15px 0;
}

.accordion-item {
  margin-bottom: 10px;
}

.accordion-header {
  cursor: pointer;
  background-color: #eee;
  padding: 10px;
  border: 1px solid #ccc;
  width: 90%;
  margin: auto;
}

.accordion-content {
  padding: 10px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #f9f9f9;
}

.validation{
  height: 10px;
  width: 30px;
  padding: 5px;
  margin: 5px;
}
.validation-mark{
  height: 10px;
  margin: 10px;
}

table {
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto 20px auto;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
}
th {
  background-color: lightgrey;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
.data{
  background-color: aquamarine;
  border: solid 1px black;
  margin-top: 15px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Tableaux */

/*
td{
  display: flex;
  flex-direction: column;
}
  */
</style>