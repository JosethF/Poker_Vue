<script setup>
import {ref} from 'vue'
import issues from '../mock/issues';
const isOpen = ref(false)
</script>


<template>
  <div class="todo">
    <div class="menu-container">
    <header>
      <div class="left">
        <a href="/">
          <img src="https://boldworkplanner.com/wp-content/themes/boldworkplannertheme/imgs/logo-bold.svg" alt="logo">
        </a>
        <h1>Session 1</h1>
      </div>
      <div class="right">
            <ul>
              <li> Player 1</li>
              <div class="button-mod">
                <li> <a href="invite">New Players</a></li>
              </div>
              <div class="button-mod" @click="isOpen=true">
                <li> <i class="fa fa-bars" aria-hidden="true"></i></li>
              </div>
            </ul>
          </div>
    </header>
    </div>
    <teleport to="body">
      <div class="show-issues" v-if="isOpen">
        <div class="dentro">
          <div class="top">
            <h1>Issues from Repository Github</h1>
            <i @click="isOpen = false" class="fa fa-window-close" aria-hidden="true"></i>
          </div>
          <form action="#" method="GET">
            <div class="data">
                <input type="text" name="username" placeholder="Enter Status"/>
                <button type="submit">Search</button>
            </div>
          </form>
          <div class="issues">
            <table v-for="{name,status,label} in issues" :key="id">
                <thead>
                    <tr>
                        <th scope="col">Name Issues</th>
                        <th scope="col">Status</th>
                        <th scope="col">Label</th>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                        <td>{{name}}</td> 
                        <td>{{status}}</td>
                        <td>{{label}}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </teleport>
    <div class="space"></div>
  </div>
</template>

<style>
.button-mod > li > i {
  font-size: 170%;
  color: white ;
}
.todo{
  position: relative;
}
.show-issues{
  position: absolute;
  width: 35rem;
  display: flex;
  flex-direction: column;
  /*top: 0; */
}
.dentro{
  width: 90%;
  margin: auto;
}
.top{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.top > i{
  margin: auto;
}
.dentro > .data {
  width: 100%;
}

.show-issues > .dentro > .issues > table{
  width: 30rem;
  margin-bottom: 1rem;
}
</style>