<script setup>
import { ref } from 'vue'; 
import PlayerCardComponent from '@/components/PlayerCardComponent.vue';

const roster = ref([]); 

fetch('http://localhost:3000/roster')
    .then(response => {
        console.log('Raw response:', response); 
        return response.json(); 
    })
    .then(data => {
        roster.value = data;  
        console.log(data); 
    })
    .catch(error => {
        console.error('Error fetching roster:', error);  
    });
</script>

<template>
    <div class="grid-container">  
        <PlayerCardComponent v-for="player in roster" :key="player.id" :player="player" /> 
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;  
    grid-template-columns: repeat(3, 1fr);  
    gap: 10px; 
    max-width: 1200px;  
    margin: auto;  
}
</style>