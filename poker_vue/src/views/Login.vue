<script setup>
</script>

<template>
<div class="container">
    <h2>LOGIN</h2>
    <form>
        <div class="data">
            <label for="username">Username:</label>
            <input type="text" name="username" placeholder="Enter Username"/>
        </div>
        <div class="data">
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="Enter Password"/>
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
body{
    margin: 0;
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
    font-weight: 700 !important;
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

</style>