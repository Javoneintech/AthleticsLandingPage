<script setup>
import { ref } from 'vue'; 
import {useRoute} from 'vue-router'

const roster = ref([]);
const route = useRoute();
fetch(`http://localhost:3000/roster/${route.params.id}`)
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
    
    <div class="player-card" v-for="player in roster" :key="player.id"> 
        <div class="player-info"> 
            <img :src="player.image" alt="Player Image" class="player-image" /> 
            <div class="player-details"> 
                <h2 class="player-name">{{ player.name }}</h2> 
                <div class="player-stats"> 
                    <p>Position: {{ player.position }}</p> 
                    <p>Year: {{ player.year }}</p> 
                    <p>Points: {{ player.points }}</p>
                    <p>Rebounds: {{ player.rebounds }}</p>
                    <p>Assists: {{ player.assists }}</p> 
                    <p>Steals: {{ player.steals }}</p>
                    <p>Blocks: {{ player.blocks }}</p>
                    <p>Threes: {{ player.threes }}</p>
                </div>
                <p class="about-me">
                    I am a dedicated and passionate basketball player at GRC. 
                    I strive to improve my skills every day and work hard to support my team. 
                    My goal is to excel both on and off the court, and I am excited about the opportunities that lie ahead! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis similique exercitationem ipsa mollitia ea fugit quo doloremque incidunt omnis qui error, nobis accusamus adipisci praesentium placeat nesciunt delectus possimus asperiores dolor magnam! Ipsa, officia aliquid quibusdam incidunt totam modi similique rerum dolorem aperiam qui et tempore pariatur veritatis? Molestias, deleniti? Consequatur adipisci voluptas nihil a commodi, vel non molestiae dolorum doloremque ducimus quibusdam tenetur accusantium. Cumque adipisci exercitationem debitis nulla commodi neque id, magnam aspernatur! Nobis doloremque ipsam, iusto earum reiciendis, fugit ducimus non unde aspernatur nostrum voluptatibus obcaecati! Officiis iste quaerat magnam accusamus exercitationem amet ullam id asperiores mollitia?
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped> 


.player-card {
    text-align: center;  
    margin: 20px;  
    /* height: 150vh; */
}

.player-info {
    display: flex;  
    flex-direction: column;  
    align-items: center;  
}

.player-image {
    width: 33.33vw;  
    height: auto;    
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  
}

.player-details {
    display: flex;  
    flex-direction: column;  
    align-items: center; 
}

.player-stats {
    display: flex;  
    flex-direction: row;  
    justify-content: center;  
    flex-wrap: wrap;  
}

.player-name {
    font-size: 1.5em;  
    margin: 10px 0;  
}

 .player-info p {
    margin: 5px 10px;  
    font-weight: bold;  
    color: #333;  
}

.about-me {
    margin: 10px 0;  
    padding-top: 50px;  
    padding-left: 100px; 
    padding-right: 100px;      
    text-align: center;  
}

</style>
