<script>
// import { getName } from '../store/login/actions'
import axios from "axios";

export default {
  name: 'NameRoom',
  data () {
    return {
      gameName: ''
    }
  },
  methods: {
    async getNamefunction () {
        try{
            if(this.gameName==""){
                console.log('No puede haber campos vacios');
            }else{
                await axios({
                  url: "game",
                  method: "GET",
                  data: {gameName:this.gameName}
                }).then((response)=> {
                    console.log(response)
                    router.push({name: "game"})
                }).catch((e)=> {
                    console.log(e)
                })
            }
        }catch(e){
          console.log(e)
        }
    }
  }
}
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
    <form @submit.prevent="getNamefunction">
    <!-- <form method="GET" action="game"> -->
      <div class="data">
          <input 
          type="text" 
          name="gameName" 
          v-model="gameName"
          placeholder="Enter Game Name"
          required
          >
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