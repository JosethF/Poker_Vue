<script setup>
import users from '../mock/users';
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
                    <th scope="col">Modify</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="user in users" :key="user.id" @click="">
                    <td>{{user.username}}</td> 
                    <td>{{user.privileges}}</td>
                    <td>
                      <div class="right">
                        <ul>
                          <div class="button-mod">
                            <li> <a href="creategame">EDIT</a></li>
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
table{
    margin: auto;
    width: 80%;
    border: 0.15rem solid;
    border-color: #dee2e6;
    text-align: left;
}
th, td{
    padding: 0.40rem;
}
</style>