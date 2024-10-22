<script setup>

</script>

<template>
  <div class="login-container">
    <img src="@/assets/ARC.png" alt="ARC Logo" class="logo">

    <div class="input-group">
      <label for="email">Email:</label>
      <input type="text" name="email" id="email">
    </div>
    <div class="slect-option">
      <label for="role">Role:</label>
      <select name="role" id="role" placeholder="">
        <option value="" disabled selected>Select your role</option> <!-- Added empty option -->
        <option value="highSchool">High School Coach</option>
        <option value="college">College Coach</option>
      </select>
    </div>
    <div class="input-group">
      <label for="password">Password:</label>
      <input type="password" name="password" id="password">
    </div>
    
    <RouterLink to="/home" class="login-button">Login</RouterLink> 

    <p>Need to register? <a href="#" @click.prevent="$router.push('/register')">register.</a></p> 
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  text-align: center; 
  background-image: url('src/assets/ARC-background.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}

.logo {
  margin-bottom: 10px; 
}

.input-group {
  display: flex;
  align-items: center;
  margin: 10px 0;
  justify-content: flex-start;
}

label {
  margin-right: 10px;
  text-align: right;
  width: 120px;
  flex-shrink: 0;
}

.login-button {
  margin-top: 20px;  
  padding: 10px 20px; 
  background-color: #0070d2;  
  color: white;  
  border: none;  
  border-radius: 5px;  
  cursor: pointer;  
  font-size: 16px;  
  text-decoration: none;  
  display: inline-block;  
}

.login-button:hover {
  background-color: #0056b3;  
}

.slect-option{
  margin-left: 55px;
}

input[type="text"],
input[type="password"],
select {
  background-color: white;  
  border: 1px solid #ccc;  
  padding: 8px;  
  border-radius: 4px;  
}
</style>