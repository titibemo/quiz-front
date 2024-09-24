<template>

  <nav>
    <img class="logo" src="./assets/pictures/quiz-land-logo.png" alt="">
  <!--<router-link class="nav" to="/">Accueil</router-link> -->
      <div v-if="userRole === 'admin'">
        <router-link class="nav" to="/admin">Admin →</router-link> 
        <router-link class="nav" to="/quiz">Liste des quiz</router-link> 
        <router-link class="nav" to="/liste-utilisateur">Liste des utilisateurs</router-link> 
        <router-link class="nav" to="/enregistrer-utilisateur">Enregistrer un nouveau utilisateurs</router-link> 
        <router-link class="nav" to="/admin/creer-un-quiz">Créer un quiz</router-link> 
        <router-link class="nav" to="/admin/les-quiz">Voir les quiz</router-link>
      </div>
      <div v-if="userRole == 'user'">
        <router-link class="nav" to="#">user →</router-link> 
        <router-link class="nav" to="/quiz">Liste des quiz</router-link> 
      </div>
      <div v-if="cookie != ''">
        <a class="nav" href="http://localhost:3020/api/users/logout">Se déconnecter</a>
      </div>
      <div v-else>
        <router-link class="nav" to="/connexion">Connexion</router-link> 
      </div>

  </nav>
  <router-view/>
</template>


<script setup>
import { ref } from 'vue';

//const currentPath = window.location.href




let cookie = document.cookie.slice(13);



const userId = ref(null)
const userRole = ref(null)
fetch('http://localhost:3020/api/users/test', {
  headers: {Authorization: `Bearer ${cookie}`}
}).then(resp => resp.json())
  .then(data => {
    console.log(data);
    userId.value = data.id
    userRole.value = data.role
  })




/*
fetch('http://localhost:3020/api/users/test', {
  headers: {Authorization: `Bearer ${cookie}`}
}).then(resp => resp.json())
  .then(data => {
    console.log(data);
    userId.value = data.id
    userRole.value = data.role
  })
*/



</script>

<style>
*, ::before, ::after
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}
:root
{
    --main-light-color: #FBF8F7;
    --main-color: #4C50A9;
    --main-color-hover: #508960;
}

body{
  /*background-color: rgb(238, 238, 238);*/
  background-color: #FBFAF8;
}

h1{
  font-weight: 500;
  color: var(--main-color);
}

nav{
  display: flex;
  background-color:  var(--main-color);
  color: white;
  height: 100%;
  padding: 15px;
}
.logo{
  width: 75px;

}
.nav{
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  margin-left: 10px;
}
.nav a{
  text-decoration: none;
}
.nav a:hover, .nav div:hover{
  color: black
}



</style>