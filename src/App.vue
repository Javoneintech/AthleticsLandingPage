<script setup>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import { RouterLink, RouterView } from 'vue-router';
import GlobalHeader from './components/GlobalHeader.vue'; // Import the new header component

</script>

<template>
  <div id="app">
    <GlobalHeader /> 
    <Header v-if="$route.name !== 'login' && $route.name !== 'register' && $route.name !== 'ARCspeech'">
      <RouterLink to="/home"><img class="header-cardinal-head" src="@/assets/cardinal-head.png" alt=""></RouterLink>
      <h1 class="header-title">GRC HOOPS</h1>
      <div class="header-link">
        <RouterLink style="color: white" to="/about">about</RouterLink>
      </div>
      <div class="header-link">
        <RouterLink style="color: white" to="/roster">roster</RouterLink>
      </div>
      <div class="header-link" style="color: #0070d2">
        <RouterLink style="color: white" to="/schedule">schedule</RouterLink>
      </div>
    </Header>

    <main class="main-content">
      <RouterView/> 
    </main>

    <footer class="footer" v-if="$route.name !== 'login' && $route.name !== 'register' && $route.name !== 'ARCspeech'">
      <h1>George Rogers Clark High School</h1>
      <p>2745 Boonesboro Rd, Winchester, KY 40391</p>
      <p>Phone: (859) 744-4545</p>
      <p>&copy; 2023 George Rogers Clark High School. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  
}

header {
  background-color: red; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 110px;
  width: 100vw;
  margin-top: 0px;
  border: none; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
}

.header-title {
  font-size: 80px; 
  font-family: 'Arial', sans-serif; 
  color: white; 
}

.header-cardinal-head {
  height: 80px; 
  width: 80px; 
  background-color: white;
  border: solid 2px black; 
  border-radius: 50%;
}

.header-link {
  font-size: larger;
  font-family: 'Arial', sans-serif;  
  color: white;  
  transition: color 0.3s;  
}

.header-link:hover {
  color: #ffcc00;  
}

.footer {
  background-color: red;  
  padding: 20px;
  margin-top: auto;
  text-align: center;  
  border-top: none; 
}
</style>
