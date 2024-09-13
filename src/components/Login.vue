<template>
<div class="login">
    <h2>Se connecter</h2>
    <form action="http://localhost:3020/api/users/login" method="POST">
        <label for="username">Entrez votre nom d'utilisateur:</label><br>
        <input type="text" name="username" id="username" placeholder="john"><br>

        <label for="password">Entrez votre mot de passe:</label><br>
        <input type="password" name="password" id="password" placeholder="john"><br>

        <button class="connexion" type="submit">Se connecter</button>
    </form>
    <p class="notRegister">Vous n'êtes pas encore inscrit ?</p>
    <button class="register">S'inscrire</button>
</div>
    

    <!--<button @click="disconnect">Je me déco</button>-->

</template>

<script setup>
/*
let cookie = document.cookie;

const disconnect = () =>{

    window.location.href = "http://localhost:3020/api/users/logout";
}
*/
</script>

<style scoped>
    .login{
        background-color: rgba(211, 211, 211, 1);
        padding: 20px 10px;
        text-align: center;
        border-radius: 15px;
    }
    h2{
        margin-bottom: 15px;
    }
    label{
        margin: 5px 0;
        padding: 5px 0;
        font-size: 1.1em;
    }
    input{
        padding: 5px;
        margin: 15px 0;
        border-radius: 10px;
        width: 100%;
    }
    .connexion, .register{
        margin-top: 15px;
        background-color: #4ade80;
        padding: 5px;
        width: 100%;
        border-radius: 15px;
    }
    .notRegister{
        margin-top: 10px;
        font-size: 1.1em;
    }


</style>