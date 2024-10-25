<script setup>
import { ref, computed } from 'vue'; 
import PlayerCardComponent from '@/components/PlayerCardComponent.vue';

const roster = ref([]); 
const searchQuery = ref(''); // New search query state

const filteredRoster = computed(() => {
    return roster.value.filter(player => 
        player.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

// Fetching roster data
fetch('http://localhost:3000/collegesearch')
    .then(response => {
        console.log('Raw response:', response); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        roster.value = data;  
    })
    .catch(error => {
        console.error('Error fetching roster:', error);  
    });
</script>

<template>
    <div>
        <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search players..." 
            class="search-bar" 
        />
        <div class="grid-container">  
            <PlayerCardComponent 
                v-for="player in filteredRoster" 
                :key="player.id" 
                :player="player" 
            /> 
        </div>
    </div>
</template>

<style scoped>
.search-bar {
    width: 100%; /* Full width */
    padding: 10px; /* Padding for better appearance */
    margin-bottom: 20px; /* Space below the search bar */
    border: 1px solid #ccc; /* Border styling */
    border-radius: 4px; /* Rounded corners */
}
.grid-container {
    display: grid;  
    grid-template-columns: repeat(3, 1fr);  
    gap: 10px; 
    max-width: 1200px;  
    margin: auto;  
}
</style>
