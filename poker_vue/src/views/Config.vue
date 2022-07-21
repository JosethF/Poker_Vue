<script setup>
</script>

<template>
<div class="container">
    <h2>CONFIGURATION</h2>
    <form>
        <div class="data">
            <label for="repository">Repository:</label>
            <input type="text" name="repository" placeholder="Enter Repository Name"/>
        </div>
        <div class="data">
            <label for="token">Personal access token:</label>
            <input type="password" name="token" placeholder="Enter Token"/>
        </div>
        <div class="data">
            <label for="project">Repository Project:</label>
            <input type="project" name="project" placeholder="Enter Project Name"/>
        </div>
        <div class="data">
            <button type="submit">Save Information</button>
        </div>
    </form>
</div>
</template>

<style>
</style>