<script >

import axios from 'axios';
import { LoginAPI } from '../store/login/actions'


export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
        try{
            // const response = await axios.post('http://localhost:3001/log', {
            //     params: {username:this.username,password:this.password}
            // })
            LoginAPI(this.username, this.password)
            // const response = await axios({
            //     url: "http://localhost:3001/log",
            //     method: "POST",
            //     data: {
            //         username: this.username,
            //         password: this.password
            //     }
            // })
        }catch(e){
            console.log(e)
        }  
        
    }

  }
}


</script>

<template>
    <div class="container">
        <h2>LOGIN</h2>
        <form  @submit.prevent ="login">
            <div class="data">
                <label for="username">Username:</label>
                <input 
                type="text" 
                name="username" 
                placeholder="Enter Username"
                required
                v-model="username"
                >
            </div>
            <div class="data">
                <label for="password">Password:</label>
                <input 
                v-model="password"
                type="password" 
                name="password" 
                placeholder="Enter Password"
                required

                >
            </div>
            <div class="data">
                <button type="submit">Enter</button>
            </div>
            <div>
                <a href="register">Regístrate</a>
            </div>
        </form>
    </div>
</template>

<style>
</style>