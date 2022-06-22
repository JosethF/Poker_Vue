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
body{
    margin: 0;
    letter-spacing: .04em;
}
.container{
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto",sans-serif;
    margin: auto;
}
h2{
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
}
form{
    width: 100%;
}
.data{
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem !important;
}
.data > label{
    margin-bottom: .5rem !important;
}
input{
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: .375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;  
}
button{
    height: 2.5rem;
    padding: 0.3rem;
    background-color: #0d6efd;
    border-radius: .8rem;
    cursor: pointer;
    transition: all .09s linear;
    color: #fff;
    font-family: "Roboto",sans-serif;
    font-size: 1rem;
}
button:hover{
    background-color: #0b5ed7;
}
</style>