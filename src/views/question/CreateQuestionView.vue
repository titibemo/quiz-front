<template>

  <h1>créer de nouvelles questions - Quiz : {{ quiz }}</h1>

    <!--action="`http://localhost:3020/api/question/validateQuestions/quiz-${id}`"-->
  <section class="quiz-container">
    <form > 

      <div class="formQuestion" v-for="count in totalCount" :key="numberQuestion">
        <form action="" @submit.prevent="nextQuestion">

          <div class="answerQuiz":style="{display: count == numberQuestion ? 'block' : 'none'}">
            <p>question {{count}}</p>
            <input class="titleQuestion" v-model="inputTest"  type="text" :name="`question${count}`" ><br>
            <button class="nextQuestion">question suivante</button>
            <button class="delete" type="button" @click="deleteQuestion">supprimer la question</button>
            
            
            <div v-for="(answer,i) in totalAnswer" :key="i">
              <label :for="`answer${answer}`">Réponse 1:</label>
              <input v-model="answerTest[i]" type="text" name="answer">
              <input @click="validateCorrectAnswer" type="radio" name="answer" :value="answerTest[i]">
              <button class="delete" type="button" @click="reduceAnswer(i)">retirer la réponse</button>
            </div>
            <button class="addQuestion" type="button" @click="duplicateAnswer">ajouter une réponse</button>
          </div>
          <br>
        </form>
      </div>
      
      <button @click="validateQuiz" type="button">ajouter le quiz</button>
    </form>
    
    <!-- TODO A EFFACER -->
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
    
    <button class="previousQuestion" @click="previewQuestion">Question précédente</button>
    <!--<button @click="duplicateQuestion">Ajouter une question</button>-->
    
</template>

<script setup>
import { computed, ref } from 'vue';
import  Quiz  from './../../type/config'


const id = window.location.href.slice(48);
const inputTest = ref('')
const answerTest = ref([])
const totalCount = ref(1);
const totalAnswer = ref(1)
const correctAnswer = ref("")
const numberQuestion = ref(totalCount.value);



const quiz = ref('')
const data = ref([]);



function validateCorrectAnswer (e){
  correctAnswer.value = e.target.value;
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
  
    let answers = [];
    answerTest.value.forEach(element => {
      answers.push(element)
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

  // ------------------------------------- TEST FETCH POST QUIZ

  


  
  const validateQuiz = () => {
    let sendId = []
    let sendQuestion = []
    let sendAnswer = []
    let sendCorrectAnswer = []
    let setAnswer = []
    
    data.value.forEach((d,i) => {
      console.log(d.id);
      
    sendId.push(d.id)
    sendQuestion.push(d.question)
    
    d.answer.forEach((a) => {
      setAnswer.push(a);
    });
    
    sendAnswer.push(d.answer)
    sendCorrectAnswer.push(d.goodAnswer)
    });

    console.log(
      // "id", sendId,
      // "Q", sendQuestion,
      "A", sendAnswer,
      // "CA", sendCorrectAnswer,
    );
    
    saveData(sendId, sendQuestion, sendAnswer, sendCorrectAnswer)

    
  }

  
const saveData = async (sendId, sendQuestion, sendAnswer, sendCorrectAnswer) => {

  try {
    const response = await fetch(`http://localhost:3020/api/question/validateQuestions/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        //idQuestion: sendId,
        "questions": sendQuestion,
        "answers": sendAnswer,
        "correctAnswer": sendCorrectAnswer
      })
      });
      const data = await response.json();
  // enter you logic when the fetch is successful
      console.log(data);
    } catch(error) {

    
  // enter your logic for when there is an error (ex. error toast)

      console.log(error)
      } 
}

const deleteQuestion = () =>{
  data.value.splice(totalCount.value-1, 1)
  numberQuestion.value--
  totalCount.value--
  previewQuestion()
}



  // const options2 = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type':'application/json'
  //     //"Access-Control-Request-Headers": "*",
  //     //"Access-Control-Request-Method": "*",
  //     //"Accept": "application/json",
  //     //"Origin": "http://localhost:8080"
  //   },
  //   body: JSON.stringify({
  //     idQuestion: sendId,
  //     questions: sendQuestion,
  //     answers: sendAnswer,
  //     correctAnswer: sendCorrectAnswer
  //   })
  // };
    
  // fetch(`http://localhost:3020/api/question/validateQuestions/${id}`, options2).then(handleFetch2);
  
  
  // function handleFetch2(response)
  // {
  //   if(response.ok)
  //     {
  //       response.json()
  //         .then(data=>{
  //            // quiz.value = data[0].name_quiz;
  //             console.log(data);
              
  //         })
  //         .catch(error=>console.error(error));
  //     }
  //     else
  //     {
  //         console.error(response.statusText);
  //     }
  //   }











</script>

<style scoped>
.main-container{
  width: 90%;
  margin: auto;
}

.optionQuestions{
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  padding: 10px;
}
.title{
  font-size: 1.5em;
  text-align: center;
  padding: 15px;
}
.titleQuestion{
  text-align: center;
  font-size: 1.2em;
  padding: 5px;
}

.inputQuizQuestion{
  display: block;
  padding: 5px;
  margin: 5px auto;
  width: 90%;
  text-align: center
 
}
.answerQuiz{
  justify-content: space-between;
  text-align: center;
  box-shadow: 4px 5px 1px -2px rgba(0,0,0,0.14);
  padding: 10px
}
.answerInputQuiz{
  margin: 5px;
  width: 50%;
}
.correctAnswer{
  margin: 5px;
}
.addAnswer{
  display: block;
  margin: 5px auto;
  background-color: lightblue;
  color: black;
  padding: 5px;
  border-radius: 15px;
}
.optionAnswerQuiz{
  margin-top: 10px;
  display: flex;
  justify-content: space-around
}
.nextQuestion, .previousQuestion{
  display: flex;
  justify-content: center;
  background-color: lightblue;
  margin: auto;
  border-radius: 15px;
  padding: 5px;
}
.validateQuiz{
  background-color: rgb(89, 224, 89);
  color: black;
  padding: 10px;
  border-radius: 15px;
  width: 100%;
}

.delete{
  background-color: rgb(248, 83, 83);
  color: white;
  padding: 5px;
  border-radius: 15px;
}

</style>

