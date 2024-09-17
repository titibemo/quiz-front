<template>

    <section class="main-container">
        <h1 class="section-title">Créer un quiz</h1>
        
            <form action="http://localhost:3020/api/quiz/newQuiz" method="POST">
                <label for="quiz_name">Créer le nom de votre quiz :</label><br>
                <input type="text" name="quiz_name" id="quiz_name" placeholder="javascript pour les débutants"><br>
        
                <button class="validate" type="submit">créer le quiz</button>
            </form>

    </section>

</template>

<script setup>

</script>

<style scoped>
.main-container{
    width: 90%;
    margin: auto;
    background-color: rgba(211, 211, 211, 0.356);
}
form{
   padding: 10px;
    margin: auto
}
.section-title{
    text-align: center;
    margin: 15px 0;
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
.validate{
    margin-top: 15px;
    background-color: #4ade80;
    padding: 5px;
    width: 100%;
    border-radius: 15px;
}

</style>