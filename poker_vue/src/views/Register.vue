<script setup>
</script>

<template>
<div class="container">
    <h2>REGISTER</h2>
    <form action="login" method="GET">
        <div class="data">
            <label for="username">Username:</label>
            <input type="text" name="username" placeholder="Enter Username"/>
        </div>
        <div class="data">
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="Enter Password"/>
        </div>
        <div class="data">
            <label for="password2">Confirm Password:</label>
            <input type="password2" name="password2" placeholder="Corfirm Password"/>
        </div>
        <div class="data">
            <button type="submit">Enter</button>
        </div>
        <div>
            <a href="login">Login</a>
        </div>
    </form>
</div>
</template>

<style>
</style>