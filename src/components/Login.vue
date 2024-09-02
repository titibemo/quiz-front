<template>

    <form action="http://localhost:3020/api/users/login" method="POST">
        <label for="username">Entrez votre nom d'utilisateur</label><br>
        <input type="text" name="username" id="username" placeholder="john"><br>

        <label for="password">Entrez votre mot de passe</label><br>
        <input type="password" name="password" id="password" placeholder="john"><br>

        <button type="submit">Se connecter</button>
    </form>

    <button @click="disconnect">Je me déco</button>

</template>

<script setup>

let cookie = document.cookie;

const disconnect = () =>{

    window.location.href = "http://localhost:3020/api/users/logout";
}




</script>