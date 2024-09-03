<template>

        <div>
            <p>question {{QuestionNumber}}</p>
            <input type="text" :name="`question${QuestionNumber}`" ><br>
        </div>


</template>

<script setup>
import {defineProps} from 'vue';
import Answers from './../components/Answers.vue';

const props = defineProps({
    QuestionNumber: Number,
    
    //modelValue: String,
}
)
/*
const emits = defineEmits([
    'update:modelValue',
])
    */


</script>