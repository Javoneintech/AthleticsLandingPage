<script setup>
import { ref, onMounted } from 'vue';

const todos = ref([]);
const newTodo = ref('');

// Load todos from localStorage when the component is mounted
onMounted(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
});

const addTodo = () => {
    if (newTodo.value.trim()) {
        todos.value.push(newTodo.value);
        newTodo.value = '';
        saveTodos(); // Save todos to localStorage after adding
    }
};

// Function to save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos.value));
};
</script>

<template>
    <h1>Todo List</h1>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button @click="addTodo">Add</button>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
</template>

<style scoped>
h1 {
    text-align: center;
    color: #333;
}

input {
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    display: block;
    border: 2px solid #007BFF;
    border-radius: 5px;
    font-size: 16px;
}

button {
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px auto;
    display: block;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.3s;
}

li:last-child {
    border-bottom: none; /* Remove border from last item */
}

li:hover {
    background-color: #f0f0f0;
}
</style>
