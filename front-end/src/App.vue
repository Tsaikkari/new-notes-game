<script>
import Home from './views/Home.vue'
import Users from './views/Users.vue'

export default {
  name: 'app', 
  components: {
    Home,
    Users
  }
}
</script>

<template>
  <div id="app">
    <Home/>
    <Users/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {width: auto!important; overflow-x: hidden!important}

body {
  font-family: 'Lora', serif;
}

h1, h2, h3, h4, h5, p {
  font-family: 'Lora', serif;
}

h2 {
  color: #fe7a47;
}

body {
  background-color: #f5ca99;
}
</style>
