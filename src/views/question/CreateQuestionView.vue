<template>

  <h1 class="title">créer de nouvelles questions - Quiz : TODO AFFICHER NOM Quiz</h1>

  {{ totalCount }}

  <section class="quiz-container">
    <form class="answerQuiz"> 

      <form action="" @submit.prevent="nextQuestion">
        <div class="formQuestion" v-for="count in totalCount" :key="numberQuestion">

          <div :style="{display: count == numberQuestion ? 'block' : 'none'}">
            <div class="optionQuestions">
              <button class="previousQuestion" @click="previewQuestion">Question précédente</button>
              <button class="delete" type="button" @click="deleteQuestion">Supprimer la question</button>
              <button class="nextQuestion">Question suivante</button>
            </div>
            <p>question {{count}}</p>
            <input class="titleQuestion" v-model="inputTest"  type="text" :name="`question${count}`" ><br>
            
            
            <div class="answerQuiz" v-for="(answer,i) in totalAnswer" :key="i">
              <label :for="`answer${answer}`">Réponse {{ answer }}:</label>
              <input class="inputQuizAnswer" v-model="answerTest[i]" type="text" name="answer">
              <input class="correctAnswer" @click="validateCorrectAnswer" type="radio" name="answer" :value="answerTest[i]">
              <button class="delete" type="button" @click="reduceAnswer(i)">Retirer la réponse</button>
            </div>
            <button class="addAnswer" type="button" @click="duplicateAnswer">+</button>
          </div>
          
        </div>
      </form>
      
      <button class="validateQuiz" @click="validateQuiz" type="button">Ajouter le quiz</button>
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
    
    <!--<button @click="duplicateQuestion">Ajouter une question</button>-->
    
</template>

<script setup>
import { computed, ref } from 'vue';
import  Quiz  from './../../type/config'

const id = window.location.href.slice(48);
//------------------------------- TEST RECOVERY DATA

const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch(`http://localhost:3020/api/question/showQuestions/${id}`, options2).then(handleFetch2);

/*
data.value.splice(totalCount.value-1, 1, {
        question: inputTest.value,
        id: totalCount.value,
        answer: answers,
        goodAnswer: correctAnswer.value
      })
*/


function handleFetch2(response)
{
  let listQuestion;

  if(response.ok)
    {
      response.json()
        .then(d=>{
            //listQuestion.value = data;
            console.log("data", d);
            //listQuestion = JSON.parse(d[0].name_question)
            listQuestion = JSON.parse(d[0].name_question)
            //listAnswers.value = JSON.parse(data[0].answers_question)
            //titleQuiz = data[0].name_quiz
            //console.log("listQ", JSON.parse(data[0].name_question))
            //console.log("listA", JSON.parse(data[0].answers_question))
                    
            listQuestion.forEach((element,i) => {
              totalCount.value++
              numberQuestion.value++
              data.value.splice(i, 1, {
              question: element,
            })

              console.log(
                "Finaldata", data.value,
              );

            });
           
/*
            data.value.push({
              question: listQuestion
            })
*/
            /*listQuestion.forEach(element => {
              data.value.push({
              question: element,
              //id: totalCount.value,
              //answer: answers,
              //goodAnswer: correctAnswer.value
            })*/
              
              //totalCount.value = 3
              //nextQuestion()

              //TODO boucler dans l'objet pour afficher toutes les données
              
            
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }


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
  previewQuestion()
  nextQuestion()
  // TODO GOOD VALUE numberQuestion.value--
  // TODO GOOD VALUE totalCount.value--
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

.formQuestion{
  width: 100%;
  margin-bottom: 50px;
}

.optionQuestions{
  display: grid;
  grid-template-columns: repeat(3, 150px);
  padding: 10px;
  justify-content: space-around;
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
  width: 90%;
  margin: 15px;
}

.inputQuizQuestion{
  display: block;
  padding: 5px;
  margin: 5px auto;
  width: 90%;
  text-align: center
 
}
.answerQuiz{
  margin: 5px;
  justify-content: space-between;
  text-align: center;
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.52);
  padding: 10px
}
.inputQuizAnswer{
  margin: 5px;
  width: 50%;
}
.correctAnswer{
  margin: 5px;
}
.addAnswer{
  display: block;
  margin: 10px auto;
  background-color: #7dd3fc;
  color: black;
  padding: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px

}
.optionAnswerQuiz{
  margin-top: 10px;
  display: flex;
  justify-content: space-around
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

</style>

