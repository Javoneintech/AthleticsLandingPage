<script setup>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import { RouterLink, RouterView } from 'vue-router'; // Add this import

let roster =[
  {
    image:'',
    name: 'Ava Mattingly',
    number:'',
    year: '2027',
    position: '',
    height: '',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    twos:'',
  },
    {
    image:'@/assets/cardinal-head.png',
    name: 'Kennedy Stamper' ,
    number: 0,
    year: '2027',
    position: 'PG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Kyleigh-Chestnut- card.jpeg',  
    name: 'Kyleigh Chestnut',
    number: 1,
    year: '2029',
    position: '',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Teigh-Yeast-card.jpeg',  
    name: 'Teigh Yeast',
    number: 2,
    year: '2027',
    position: 'SG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Ciara-Byars-card.webp',  
    name: 'Ciara Byars',
    number: 3,
    year: '2026',
    position: 'PG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Jailenn-Green-card.jpeg',  
    name: 'Jailenn Green',
    number: 4,
    year: '2026',
    position: 'SG',
    height: "5'8" ,
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Kyleigh-Chestnut- card.jpeg',  
    name: 'Kyleigh Stakelin',
    number: 5,
    year: '',
    position: '',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Madelyn-Settles-card.jpeg',  
    name: 'Madelyn Settles',
    number: 11,
    year: '2026',
    position: 'PG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Jaylynn-Goodwin-card.jpeg',  
    name: 'Jaylynn Goodwin',
    number: 13,
    year: '',
    position: '',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Leah-Howard-card.png',  
    name: 'Leah Howard',
    number: 14,
    year: 2028,
    position: 'SF',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Anaya-Chestnut-card.webp',  
    name: 'Anaya Chestnut',
    number: 25,
    year: '2027',
    position: 'PG',
    height:"5'7",
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'',  
    name: 'Annette Miller',
    number: 30,
    year: '2027',
    position: 'SG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Annette-Miller-card.jpeg',  
    name: 'Aliyah Hudson',
    number: 30,
    year: '2026',
    position: 'SG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Sanai-Brock-card.jpeg',  
    name: 'Sanai Brock',
    number: 42,
    year: '2026',
    position: 'SG',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  },
    {
    image:'@/assets/Jadie-Balser-card.jpeg', 
    name: 'Jadie Balser',
    number: 44,
    year: '2026',
    position: 'SF',
    height:'',
    points: '',
    rebounds:'',
    assists:'',
    steals:'',
    blocks:'',
    freethrows: '',
    threes: '',
    fieldGoals:'',
  }
  
]


//     let image = ref("");
//     let name =ref("");
//     let number = ref("");
//     let year = ref("");
//     let position  = ref("");
//     let height = ref("");







</script>

<template>
  <div class="app-container">
    <Header>
      <RouterLink to="/"><img class="header-cardinal-head" src="@/assets/cardinal-head.png" alt=""></RouterLink>
      <h1 class="header-title" >GRC HOOPS</h1>
      <div class="header-link" >
        <RouterLink style="color: white" to="/about">about</RouterLink>
      </div>
      <div class="header-link">
        <RouterLink style="color: white" to="/roster">roster</RouterLink>
      </div>
      <div class="header-link" style="color: #0070d2">
        <RouterLink style="color: white"to="/schedule">schedule</RouterLink>
      </div>
    </Header>

    <main class="main-content">
      <RouterView/> 
    </main>

    <footer class="footer">
      <h1>here</h1>
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

header{
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 110px;
  width: 100vw;
  margin-top: 0px;
  border: solid black 5px;
}

.header-title{
  font-size:100px;
 
}


.header-cardinal-head{
  height: 100px;
  width: 100px;
  background-color: white;
  border: solid black 2px;
  border-radius: 50%;
}

.header-link{
font-size: larger;
font-family: 'Times New Roman', Times, serif;
}

.footer{
  background-color: red;
  padding: 20px;
  margin-top: auto;
}
</style>
