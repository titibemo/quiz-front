<template>

    <div v-if=" userRole === 'admin'">
        <h1>administrateur</h1>
        <p>bonjour</p>
    </div>
    <div v-else>
        <p>Veuillez vous connecter </p>
    </div>


    



</template>

<script setup>
import { ref } from 'vue';

let cookie = document.cookie.slice(13);

const userId = ref(null)
const userRole = ref(null)

fetch('http://localhost:3020/api/users/test', {
    headers: {Authorization: `Bearer ${cookie}`}
}).then(resp => resp.json()).then(data => {
    console.log(data);
        userId.value = data.id
        userRole.value = data.role
    })
 



/*
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    "authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMCIsImlhdCI6MTcyNTAyMTY3MSwiZXhwIjoxNzI1MDM5NjcxfQ.SpRrnLpVUzk8iYgYy3teO9MiUSSRM5Xfot60m0WOVeE'
  }
};
*/











</script>