<script setup>

import { useRouter } from 'vue-router';  


const props = defineProps({
    player: {
        type: Object,
        required: true
    }
});

const router = useRouter();  

 const handleClick = () => {
     router.push({ name: 'IndividualPlayer', params: { id: props.player.players_id } });
};
</script>

<template>
    <button class="card-component" @click="handleClick">  
        <img :src="player.image" :alt="player.name + ' image'" />  
        <div class="player-details">
            <p class="jersey-number">{{ player.jerseyNumber }}</p>  
            <p class="player-name">{{ player.name }}</p>  
            <p class="player-year">{{ player.year }}</p>  
        </div>
    </button>
</template>

<style scoped>
.card-component {
    border: 1px solid #ccc;  
    border-radius: 10px;  
    width: 200px;  
    padding: 10px;  
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);  
    text-align: center;  
    background: white;  
    cursor: pointer;  
    outline: none;  
    transition: transform 0.2s, box-shadow 0.2s;  
}

.card-component:hover {
    transform: scale(1.05);  
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);  
}

.card-component img {
    width: 100%;  
    border-radius: 10px;  
    height: auto;  
}

.player-details {
    margin-top: 5px;  
}

.jersey-number, .player-name, .player-year {
    margin: 2px 0;  
    font-size: 12px; 
    color: #333;  
}
</style>