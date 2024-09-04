<template>

  <h1>créer de nouvelles questions - Quiz : {{ quiz }}</h1>
    <!--action="http://localhost:3020/api/question/newQuestion"-->

  <section class="quiz-container">

    
    


    <div v-for="count in totalCount" :key="numberQuestion">
      <form action="" @submit.prevent="nextQuestion">

      <div :style="{display: count == numberQuestion ? 'block' : 'none'}">
        <p>question {{count}}</p>
        <input  v-model="inputTest"  type="text" :name="`question${count}`" ><br>
        <button >ajouter une autre question</button>


        <div v-for="(answer,i) in totalAnswer" :key="i">
          <label :for="`answer${answer}`">Réponse 1:</label>
          <input v-model="answerTest[i]" type="text" name="answer">
          <input @click="miou" type="radio" name="answer" :value="answerTest[i]">
          <button type="button" @click="duplicateAnswer">ajouter une réponse</button>
          <button type="button" @click="reduceAnswer(i)">retirer la réponse</button>
        </div>
      </div>
      


      </form>
    </div>




    <div v-for="d in data">
      <p>le numéro de la question : {{d.id}}</p>
      <p> la question :{{d.question}}</p>
      <p>bonne réponse :{{d.goodAnswer}}</p>
      <div v-for="(a,i) in d.answer">
        <p>
         les réponses {{ a }}
        </p>
      </div>
      
    </div>
    
      

  </section>



      
      
      <button @click="data" type="submit">Sauvegarder le quiz</button>

    <button @click="previewQuestion">Revenir à la question précédente</button>
    <!--<button @click="duplicateQuestion">Ajouter une question</button>-->
    
</template>

<script setup>
import { computed, ref } from 'vue';

const inputTest = ref('')
const answerTest = ref([])
const totalCount = ref(1);
const totalAnswer = ref(1)
const correctAnswer = ref("")
const numberQuestion = ref(totalCount.value);


const quiz = ref('')
const data = ref([]);
const id = window.location.href.slice(48);

function miou (e){
  console.log(e);
  
}

function duplicateAnswer () {
totalAnswer.value++
}

function reduceAnswer (i) {

  answerTest.value.splice(i,1)
  totalAnswer.value--

  console.log("index:", i, "totalans:", answerTest.value);
  
  //answerTest.value.slice(i-1, 1)
}



  const nextQuestion = () => {



console.log("ca: ", correctAnswer.value);

  
    let answers = [];
    answerTest.value.forEach(element => {
      answers.push(element)
      console.log(answers);
    });

    

      data.value.splice(totalCount.value-1, 1, {
        question: inputTest.value,
        id: totalCount.value,
        answer: answers,
        goodAnswer: correctAnswer.value
      })

    /*if (data.value[numberQuestion.value].question != undefined){
      inputTest.value = data.value[numberQuestion.value].question;
    }*/

    totalCount.value++
    numberQuestion.value++
    totalAnswer.value = 1
    answerTest.value = []
    console.log("numberquestion :", numberQuestion.value);
    try{
      inputTest.value = data.value[numberQuestion.value-1].question
    }
    catch{
      inputTest.value = ''
      //answerTest.value = ''
    }


    try{
    totalAnswer.value = 0
    const a = []
    data.value[numberQuestion.value-1].answer.forEach(element => {
      a.push(element)
      answerTest.value = a
      totalAnswer.value++
    })
  }
  catch{
    totalAnswer.value = 1
  }
    
    //console.log("finaltest:", data.value[0].answer[0]);
    //inputTest.value = '';
  }


function previewQuestion(){
  
  totalCount.value--
  
  
  if(totalCount.value < 1 || numberQuestion.value < 1){
    totalCount.value++
    return
  }
  else{
    numberQuestion.value--
  totalAnswer.value = 1
  
  //inputTest.value = data.value[numberQuestion].question

  console.log(
    "totalCount: ", totalCount.value,
    "numberQuestion :",  numberQuestion.value

  );
  
  inputTest.value = data.value[numberQuestion.value-1].question;
 
  try{
    totalAnswer.value = 0
    const a = []
    data.value[numberQuestion.value-1].answer.forEach(element => {
      a.push(element)
      answerTest.value = a
      totalAnswer.value++
    })
  }
  catch{
    totalAnswer.value = 1
  }
  }
 


  /*
  data.value[numberQuestion.value-1].answer.forEach(element => {
    answerTest.value.push(element)
    totalAnswer.value++
  });
*/
}





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
          //console.log("data", data[0].name_quiz);
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

.quiz-container{
  display: flex;
  justify-content: space-evenly;
}

</style>

