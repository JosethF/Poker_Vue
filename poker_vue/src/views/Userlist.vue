<script>
import axios from 'axios';
export default {
  name: "get-UserList",
  data() {
    return {  
      User:{} 
    }
  },
  mounted(){
    axios.get('http://localhost:3001/userList')
    .then((response)=>{
      console.log(response.data.User)
      this.User = response.data.User;
    })
    .catch((e)=>{
      console.log(e)
    })
  }
};

</script>

<template>
<div class="menu-container">
  <header>
    <div class="left">
      <a href="/">
        <img src="https://boldworkplanner.com/wp-content/themes/boldworkplannertheme/imgs/logo-bold.svg" alt="logo">
      </a>
      <h1>User List</h1>
    </div>
  </header>
  </div>
  <div class="space"></div>
  <main>
    <article>
        <table>
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Privileges</th>
                    <th scope="col"><p>Modify</p></th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="user in User" :key="user.id">
                    <td>{{user.username}}</td> 
                    <td>{{user.permiss}}</td>
                    <td>
                      <div class="right">
                        <ul>
                          <div class="button-mod">
                            <li> EDIT</li>
                          </div>
                          <div class="button-mod">
                            <li> <a href="creategame">DELETE</a></li>
                          </div>
                          </ul>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </article>
  </main>
</template>

<style>
table > thead > tr > th > p{
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 13rem;
}
</style>