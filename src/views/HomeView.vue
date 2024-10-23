<script setup>
import WeatherWidget from '@/components/WeatherWidget.vue';
import { ref } from 'vue';

const newsData = ref([]);
const currentIndex = ref(0); 

fetch('http://localhost:3000/news')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        newsData.value = data; 
        currentIndex.value = 0; 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
</script>

<template>
  <div class="welcome-message">
    <h2>Welcome Coach Graham to ARC!</h2>
    <p>
      At ARC, we are dedicated to providing the best resources and support for coaches and athletes alike. 
      Join us in our mission to enhance performance, foster teamwork, and build a community of champions. 
      Let's achieve greatness together!
    </p>
  </div>
  <weather-widget/>
  <div class="flex-container">
     <v-carousel v-model="currentIndex">
      <v-carousel-item v-for="news in newsData" :key="news.url">
        <div class="carousel-item">
            <p class="news-title">{{ news.title }}</p>
          <a :href="news.url" target="_blank" rel="noopener noreferrer"> 
            <img class="news-image" :src="news.urlToImage" alt="news thumbnail">
          </a>
          
        </div>
      </v-carousel-item>
     </v-carousel>
 </div>

</template>

<style scoped>

.flex-container {
    display: flex;
    align-items: center; 
    justify-content: center;
    height: 200vh; 
    width: 100%; 
    background-image: url('src/assets/GRC-BACKGROUND.png');  
    background-size: cover;  
    background-position: center; 
}

.v-carousel {
    width: 50%; 
    max-width: 800px; 
}

.news-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border: 2px solid black;
    
}

.carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;  
    height: auto;  
    max-width: 100%;  
}

.news-image {
    width: 100%;  
    height: auto;  
    max-height: 70vh;  
    object-fit: cover;  
    margin: 0;  
}

.description{
    margin-top: 20px;
}

.news-title {
    margin-top: 10px;  
    text-align: center;  
    font-size: 1.5em;  
    color: #000;  
}

.welcome-message {
    text-align: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);  
    border: 1px solid #ccc;  
    margin-bottom: 20px;  
}
</style>
