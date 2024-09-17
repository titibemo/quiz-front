<template>
<h1>Modification de l'utilisateurs</h1>

<form :action="`http://localhost:3020/api/users/modifyUser/${id}`" method="POST">

    <label for="firstname"> Prénom de l'utilisateur</label><br>
    <input :value=firstname name="firstname" type="text" for="firstname"><br>

    <label for="name"> nom de l'utilisateur</label><br>
    <input :value="name" name="name" type="text" for="name"><br>

    <label for="username"> Pseudo Utilisateur</label><br>
    <input :value="username" name="username" type="text" for="username"><br>

    <button type="submit">Modifier l'utilisateur</button>
</form>
<!--<label for="password"> Mot de passe de l'utilisateur</label><br>
<input type="password" for="password"><br>-->

</template>


<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';


const route = useRoute()
const id = route.params.id
const firstname = ref(null)
const name = ref(null)
const username = ref(null)

onMounted(() => {

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch(`http://localhost:3020/api/users/getUserById/${id}`, options).then(handleFetch);

function handleFetch(response)
{

  if(response.ok)
    {
      response.json()
        .then(data=>{
           //user.value = data;
           firstname.value = data[0].firstname
           name.value = data[0].name
           username.value = data[0].username
           //console.log("data", user.value[0].firstname);
           //console.log(firstname.value);
           
          //console.log(data);
          
        })
        .catch(error=>console.error(error));
    }
    else
    {
        console.error(response.statusText);
    }
  }
})

    


</script>

<style>


</style>
