<template>

    <form action="http://localhost:3020/api/users/register" method="POST">
        <label for="username">Entrez votre nom d'utilisateur</label><br>
        <input type="text" name="username" id="username" placeholder="john"><br>

        <label for="password">Entrez votre mot de passe</label><br>
        <input type="password" name="password" id="password" placeholder="john"><br>

        <label for="name">Entrez votre nom</label><br>
        <input type="text" name="name" id="name" placeholder="john"><br>

        <label for="firstname">Entrez votre prénom</label><br>
        <input type="text" name="firstname" id="firstname" placeholder="john"><br>

        <button type="submit">Se connecter</button>

    </form>

</template>

<script setup>

</script>