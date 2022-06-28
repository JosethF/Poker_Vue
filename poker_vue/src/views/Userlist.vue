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
                <tr v-for="{username,privileges} in users" :key="id">
                    <td>{{username}}</td> 
                    <td>{{privileges}}</td>
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

</style>