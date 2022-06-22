<script setup>
</script>

<template>
  <div class="menu-container">
      <header>
        <div id="left">
          <a href="/">
            <img src="https://boldworkplanner.com/wp-content/themes/boldworkplannertheme/imgs/logo-bold.svg" alt="logo">
          </a>
        </div>
        <div id="right">
          <ul>
            <li> <a href="login">LOGIN</a></li>
            <li> <a href="#">SIGN UP</a></li>
            <div id="button">
              <li> <a href="#">START NEW GAME</a></li>
            </div>
          </ul>
        </div>
      </header>
  </div>
</template>

<style>
.menu-container {
    top:0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0,0,0,.1);
    background-color: #fff;
    font-family: "Roboto",sans-serif;
    text-align: center;
    margin:auto;
    font-weight: bold;
    font-size: 1em;
  }
  header,#right > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  header {
    width: 95%;
    margin: auto;
    align-items: center;
  }
  
  #right > ul{
    list-style-type: none;
    align-items: center;
  }
  
  a{
    text-decoration: none;
  }
  a:hover{
    color: #74b3ff;
  }
  #left{
    width:10rem
  }
  #left > img{
    width: 100%;
  }
  #right{
    width: 30rem;
  }
  #button{
    height: 3em;
    padding: 0.3em;
    background-color: #3993ff;
    text-align: center;
    align-items: center;
    border-radius: .8rem;
    display: inline-flex;
    cursor: pointer;
    letter-spacing: .02em;
    transition: all .09s linear;
  }
  
  #button:hover{
    background-color: #74b3ff;
  }
  
  #button > li > a {
    color: white;
  }
</style>