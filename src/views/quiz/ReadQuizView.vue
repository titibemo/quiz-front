<template>

<section>
  <h1 class="section-title">Les quiz</h1>

  <table>
    <thead>
      <tr>
        <th>Quiz</th>
        <th>activer/désactiver le quiz</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(quiz,i) in listQuiz">
        <td>{{quiz.name_quiz}}</td>
        <td>

          <div class="toggle-container">
            <input :checked="`${quiz.available}` == 'true'" class="toggle-checkbox" v-model="checkToggle[i]" :value=checkToggle[i] @change="toggle" type="checkbox" name="available" :id="`${quiz.id_quiz}`">
            <label :for="`${quiz.id_quiz}`" class="toggle-label">
                <span class="toggle-slider"></span>
            </label>
        </div>
          
          
          </td>
        <td class="actions">
          <a class="edit" :href="`http://localhost:8080/admin/modifier-un-quiz/${quiz.id_quiz }`">Modifier le nom du quiz</a>
          <a class="add" :href="`http://localhost:8080/admin/creer-question/quiz-${quiz.id_quiz}`">Modifier les questions</a>
          <form action="http://localhost:3020/api/quiz/eraseQuiz" method="POST">
            <input type="hidden" name="id_quiz" :value="`${quiz.id_quiz }`" >
            <button class="delete" type="submit">effacer le quiz</button>
          </form>
        </td>
      </tr>
    </tbody>
  </table>


</section>


<!--
<h1>Les quiz</h1>

<ul>
    <li v-for="quiz in listQuiz">
       {{ quiz.id_quiz }} - {{quiz.name_quiz}}
       <form action="http://localhost:3020/api/quiz/eraseQuiz" method="post">
            <input type="hidden" name="id_quiz" :value="`${quiz.id_quiz }`" >
            <button type="submit">effacer le quiz : {{ quiz.name_quiz }}</button>
        </form>
        <a :href="`http://localhost:8080/admin/modifier-un-quiz/${quiz.id_quiz }`">Modifier un quiz</a>
        <a :href="`http://localhost:8080/admin/creer-question/quiz-${quiz.id_quiz}`">Ajouter des questions</a>
            <hr>
            
    </li>
    
</ul>-->
</template>

<script setup>
import { ref } from 'vue';

let a = true

const listQuiz = ref(null)
const checkToggle = ref([])

//const checkboxTrue = ref(true)


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
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }

  const toggle = async (e) =>{
    try {
    const toggleValue = e.target.value
    const idQuiz = e.target.id

    const response = await fetch(`http://localhost:3020/api/quiz/availableQuiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        "toggleValue": toggleValue,
        "idQuiz": idQuiz
      })
    });
      const data = await response.json();
  
      console.log(data);
    }
    catch(error) {
      console.log(error)
    } 
  }

  /*
  function toggle (e){

    
    
    

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
    },
    body: JSON.stringify({
      "toggleValue": toggleValue,
      "idQuiz": idQuiz
    })
  };

fetch('http://localhost:3020/api/quiz/availableQuiz', options).then(handleFetch);

function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(data=>{
            // listQuiz.value = data;
            // test.value = data[0].available;
          console.log(data);
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }

  }
*/

</script>


<style scoped>


.section-title{
  text-align: center;
  margin: 15px 0;
}

table {
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto 20px auto;
}
th, td {
  padding: 10px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
tr:nth-child(even) {
  background-color: #f9f9f9;
}
.actions {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

/*--TOGGLE*/


/* Styles pour le checkbox caché */
.toggle-container{
  display: flex;
  justify-content: center;
}
.toggle-checkbox {
  display: none;
}

/* Styles pour le label du toggle */
.toggle-label {
  display: block;
  width: 100px;
  height: 30px;
  background-color: #ccc;
  border-radius: 34px;
  position: relative;
  cursor: pointer;
}

/* Styles pour le slider du toggle */
.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

/* Styles quand le toggle est activé */
.toggle-checkbox:checked + .toggle-label {
  background-color: #4CAF50;
}

.toggle-checkbox:checked + .toggle-label .toggle-slider {
  transform: translateX(70px);
}

.btn {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.add{
  background-color: #45a049;
  padding: 5px;
  margin: 5px;
  color: white;
  text-decoration: none;
  border-radius: 15px;
  padding: 5px;
}
.edit {
  text-decoration: none;
  background-color: rgb(255, 187, 62);
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  padding: 5px;
}
.delete {
  background-color: #f44336;
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
  padding: 5px;
}
.edit:hover {
  background-color: orange;
}
.delete:hover {
  background-color: red;
}
.add:hover{
  background-color: green;
}
</style>
