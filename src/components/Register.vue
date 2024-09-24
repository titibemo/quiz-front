<template>

    <div class="register">
        <h2>S'inscrire</h2>
        <form action="http://localhost:3020/api/users/register" method="POST">
        <label for="username">Entrez votre nom d'utilisateur :</label><br>
        <input type="text" name="username" id="username" placeholder="john"><br>

        <label for="password">Entrez votre mot de passe :</label><br>
        <input type="password" name="password" id="password" placeholder="john"><br>

        <label for="name">Entrez votre nom :</label><br>
        <input type="text" name="name" id="name" placeholder="john"><br>

        <label for="firstname">Entrez votre prénom :</label><br>
        <input type="text" name="firstname" id="firstname" placeholder="john"><br>

        <button class="buttonRegister" type="submit">S'inscrire</button>

    </form>
</div>

    

</template>

<script setup>

</script>

<style scoped>
.register{
    background-color: rgba(211, 211, 211, 0.356);
    padding: 20px 10px;
    text-align: center;
    border-radius: 15px;
    margin: 10px auto 0 auto;
    display: flex;
    flex-direction: column;
}
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
.buttonRegister{
    margin-top: 15px;
    background-color: #4ade80;
    padding: 5px;
    width: 100%;
    border-radius: 15px;
}


</style>