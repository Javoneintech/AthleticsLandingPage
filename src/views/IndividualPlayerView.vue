<script setup>
import { ref } from 'vue'; 
import {useRoute} from 'vue-router'

const roster = ref([]);
const route = useRoute();
const showStatsInput = ref(false); // Controls visibility of input container
const newStats = ref({ // Object to hold new stats
    points: 0,
    rebounds: 0,
    assists: 0,
    steals: 0,
    blocks: 0,
    threes: 0
});

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

const addStats = () => {
    showStatsInput.value = !showStatsInput.value; // Toggle visibility
};

const submitStats = () => {
    console.log('Submitting stats:', newStats.value); // Debugging line
    fetch(`http://localhost:3000/roster/${route.params.id}/stats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newStats: newStats.value,
            currentStats: roster.value[0],
        }) // Sending new stats
    })
    .then(response => {
        console.log('Response status:', response.status); // Log response status
        return response.text().then(text => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${text}`);
            }
            return JSON.parse(text); // Parse the text as JSON
        });
    })
    .then(data => {
        roster.value[0].points = data[0].points;
        roster.value[0].assists = data[0].assists;
        roster.value[0].rebounds = data[0].rebounds;
        roster.value[0].blocks = data[0].blocks;
        roster.value[0].steals = data[0].steals;
        roster.value[0].threes = data[0].threes;

        // Reset the input fields after submission
        newStats.value = { points: 0, rebounds: 0, assists: 0, steals: 0, blocks: 0, threes: 0 };
        showStatsInput.value = false; // Hide the input container after submission
    })
    .catch(error => {
        console.error('Error submitting stats:', error);
    });
};

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
                    <p>3pg: {{ player.threes }}</p>
                </div>
                <button @click="addStats">Add Stats</button>
                <div v-if="showStatsInput"> <!-- Container for input fields -->
                    <h3>Add Player Stats</h3>
                    <label>
                        Points:
                        <input type="number" placeholder="Points" v-model="newStats.points" />
                    </label>
                    <label>
                        Rebounds:
                        <input type="number" placeholder="Rebounds" v-model="newStats.rebounds" />
                    </label>
                    <label>
                        Assists:
                        <input type="number" placeholder="Assists" v-model="newStats.assists" />
                    </label>
                    <label>
                        Steals:
                        <input type="number" placeholder="Steals" v-model="newStats.steals" />
                    </label>
                    <label>
                        Blocks:
                        <input type="number" placeholder="Blocks" v-model="newStats.blocks" />
                    </label>
                    <label>
                        Threes made:
                        <input type="number" placeholder="Threes" v-model="newStats.threes" />
                    </label>
                    <button @click="submitStats">Submit</button>
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
