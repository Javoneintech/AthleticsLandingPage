<script setup>

</script>

<template>
  <header class="global-header">
    <RouterLink to="/">
      <h1>Welcome to Our A.R.C.</h1>
    </RouterLink>
    <nav>
      <ul>
        <li><RouterLink to="/ARCspeech">Future Athletes</RouterLink></li>
        <li><RouterLink to="/CollegeHome">College Home</RouterLink></li>
        <li><RouterLink to="/CollegeSearch">College Search</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.global-header {
    background-color: #333; 
    padding: 5px 10px; 
    text-align: center;
    height: 45px;
}

.global-header h1 {
    font-size: 18px; 
    margin: 0; 
}

.global-header nav ul {
    list-style: none;
    padding: 0;
    margin: 0; 
}

.global-header nav ul li {
    display: inline;
    margin: 0 10px; 
}

.global-header nav ul li a {
    color:  #333;
    text-decoration: none;
}
h1{
    color: white;
}
</style>
