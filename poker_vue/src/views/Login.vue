<script setup>
import {ref} from 'vue';

let user = ref("")
let password = ref("")


</script>

<template>
<div class="container">
    <h2>LOGIN</h2>
    <form action="logged" method="GET">
        <div class="data">
            <label for="username">Username:</label>
            <input 
            type="text" 
            name="username" 
            placeholder="Enter Username"
            required
            v-model="user"
            >
        </div>
        <div class="data">
            <label for="password">Password:</label>
            <input 
            type="password" 
            name="password" 
            placeholder="Enter Password"
            required
            v-model="password"
            >
        </div>
        <div class="data">
            <button type="submit" >Enter</button>
        </div>
        <div>
            <a href="register">Regístrate</a>
        </div>
    </form>
</div>
</template>

<style>
</style>