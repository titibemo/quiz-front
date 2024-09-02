<template>
<h1>Créer un quiz</h1>

    <form action="http://localhost:3020/api/quiz/newQuiz" method="POST">
        <label for="quiz_name">Créer le nom de votre quiz</label><br>
        <input type="text" name="quiz_name" id="quiz_name" placeholder="javascript pour les débutants"><br>

        <button type="submit">créer le quiz</button>
    </form>

</template>

<script setup>


</script>