<template>

  <section class="mainPage">

    <div class="container">
      <h1 class="description">Bienvenue sur<br>
          l'espace apprenant
      </h1>
      <h2 class="title">Quiz'land</h2>
    </div>
    <!--
    <div>
      <Login></Login>
    </div>
    <div>
      <Register></Register>
    </div>
    -->
    
  </section>

</template>

<script setup lang="ts">
import Login from './../components/Login.vue';
import Register from './../components/Register.vue';

</script>

<style scoped>

.mainPage{
  height: 92vh;
  background-color:antiquewhite;
  background: rgba(0, 0, 0, 0.4) url("./../assets/pictures/bg-homePage.jpg");
  background-size: cover;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-position: center;
  /*display: flex;
  height: 600px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.description{
  text-align: center;
  font-size: 4em;
  color: white;
}
.title{
  margin-top: 20px;
  color: white;
  font-size: 3em;
  text-align: center;
}

</style>
