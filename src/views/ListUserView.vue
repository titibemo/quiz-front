<template>
    <h1>Liste des utilisateurs</h1>

    <ul>
        <li v-for="user in userList">
          {{ user.id }}
          {{ user.name }}
          {{ user.firstname }}
        </li>
      </ul>

</template>

<script setup>
import { ref } from 'vue';


const userList = ref(null)


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json', 
  }
};

fetch('http://localhost:3020/api/users', options).then(handleFetch);

function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(data=>{
          userList.value = data;
          console.log("data", userList.value);
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }

</script>