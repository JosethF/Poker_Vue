<script setup>
</script>

<template>
  <div class="menu-container">
  <header>
    <div class="left">
      <a href="/">
        <img src="https://boldworkplanner.com/wp-content/themes/boldworkplannertheme/imgs/logo-bold.svg" alt="logo">
      </a>
      <h1>Create Game</h1>
    </div>
  </header>
  </div>
  <div class="space"></div>
  <main>
    <div class="container">
      <p>Choose a name for your game</p>
    <form action="game" method="GET">
      <div class="data">
          <input type="text" name="gamename" placeholder="Enter Game Name"/>
      </div>
      <div class="data">
          <button type="submit">Create Game</button>
      </div>
    </form>
    </div>
  </main>
</template>

<style>

</style>