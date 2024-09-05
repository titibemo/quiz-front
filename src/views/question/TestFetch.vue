<template>

    <h1>créer de nouvelles questions - Quiz :</h1>
  
    
    <button @click="datasend">Clique sur moi</button>
  
      <!--<button @click="duplicateQuestion">Ajouter une question</button>-->
      
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  
 
    // ------------------------------------- TEST FETCH POST QUIZ
  
    
    const datasend = async () => {
        try{
            const response = fetch(`http://localhost:3020/api/question/validateQuestions/4`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json" 
                },
                //body: JSON.stringify({data: 'toto'})
            })
        .then(response =>{
            if(response.ok){
                console.log("ok");
            }   
            else{
                console.log("miss");
            }
         })
        .then(data => console.log(data))    
        }
        catch(e){
        console.log(e);
    
        }
    }

datasend()
    
  
  </script>
  
  <style scoped>
  
  .quiz-container{
    display: flex;
    justify-content: space-evenly;
  }
  
  </style>
  
  