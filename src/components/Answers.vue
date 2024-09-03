<template>
    <label for="">Réponse 1:</label>
    <input type="text"></input>
    <input type="radio" :name="`question${Answer}`">
    
    <label for="">Réponse 2:</label>
    <input type="text"></input>
    <input type="radio" :name="`question${Answer}`">
    
    <label for="">Réponse 3:</label>
    <input type="text"></input>
    <input type="radio" :name="`question${Answer}`">
    
    <label for="">Réponse 4:</label>
    <input type="text"></input>
    <input type="radio" :name="`question${Answer}`">
    

</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    Answer: String,
}
)
</script>