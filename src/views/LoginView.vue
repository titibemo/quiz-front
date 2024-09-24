<template>
<section>
    <Login></Login>
    <div class="separator"></div>
    <Register></Register>
</section>

</template>

<script setup>
import { ref } from "vue";
import Login from "./../components/Login.vue";
import Register from "./../components/Register";

</script>

<style>

section{
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 5px 1fr;
}
.separator{
    margin: 20px 0;
    height: 100%;
    width: 2px;
    background-color: black;
}

</style>

