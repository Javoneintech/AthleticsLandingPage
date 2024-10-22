<script setup>
import { ref } from 'vue';

const form = ref({
    role: '',
    school: '',
    address: '',
    contact: '',
    email: '',
    password: ''
});

const submitRegistration = () => {
    // Handle form submission logic here
    console.log(form.value);
};
</script>

<template>
<h1>Register</h1>
<form @submit.prevent="submitRegistration">
    <div>
        <label for="role">Role:</label>
        <select id="role" v-model="form.role" required>
            <option value="" disabled>Select your role</option>
            <option value="teacher">Teacher</option>
            <option value="administrator">Administrator</option>
            <option value="student">Student</option>
        </select>
    </div>
    <div>
        <label for="school">School Name:</label>
        <input type="text" id="school" v-model="form.school" required />
    </div>
    <div>
        <label for="address">School Address:</label>
        <input type="text" id="address" v-model="form.address" required />
    </div>
    <div>
        <label for="contact">Contact Number:</label>
        <input type="tel" id="contact" v-model="form.contact" required />
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" required />
    </div>
    <button type="submit">Register</button>
</form>

<p class="mission-statement">
    To bridge the gap between athletes and NIL deals. We strive to create opportunities for student-athletes to maximize their potential. Our platform connects schools, athletes, and businesses in a seamless manner. We believe that every athlete deserves the chance to benefit from their hard work and dedication. By fostering partnerships, we aim to empower the next generation of sports leaders. Together, we can redefine the landscape of athletic opportunities.
</p>
</template>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;
}

form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;  
}

div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="password"]:focus,
select:focus {
    border-color: #007bff;
    outline: none;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.mission-statement {
    text-align: center;
    margin: 20px 15%;  
    font-size: 18px;
    color: #555;
    font-style: italic;
}
</style>