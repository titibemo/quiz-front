<template>
<h1>loginView test</h1>
  

<Login></Login>


 
</template>

<script setup>
//import { onMounted } from "vue";
import Login from "./../components/Login.vue";

/*
    async function getData() {
      const url = "http://localhost:3020/api/users";
    try {
    await fetch(url)
    .then(response => console.log(response)
    )
    .catch(err => console.log("err", err));
    }
    catch (error) {
    console.error("erreur encore", error.message);
    }
  }
*/
    
//getData();

let a;

async function getData() {
    await fetch('http://localhost:3020/api/users', {
    method: "GET",
    headers: {
      Accept: 'application/json', 
      "Content-Type": "application/json",
    },
    })
    .then(response => a = response
    )
    .catch(err => console.log("encore une erreur :", err));
  }

  getData();

  console.log(a);
  

  


    

  


    /*
    async function getData() {
  const url = "http://localhost:3020/api/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("erreur", error.message);
  }
}

getData();
*/
    
   //})
    

</script>
