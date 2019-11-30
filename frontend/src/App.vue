<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/level1">Level1</router-link>
      <router-link to="/level1">Test1</router-link>
      <router-link to="/level1">Level2</router-link>
      <router-link to="/level1">Test2</router-link>
      <router-link to="/level1">Level3</router-link>
      <router-link to="/level1">Test3</router-link>
      <router-link to="/level1">Level4</router-link>  
      <router-link to="/level1">Test4</router-link>
    </div>
    <router-view/>
    <NotesGame msg="NOTES GAME"/>
    <Note note="${}"/>
    <Staff/>
  </div>
</template>

<script>
import NotesGame from './components/NotesGame.vue'

export default {
  name: 'app', 
  components: {
    NotesGame,
    Note,
    Staff
  }
}
</script>

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  text-align: center;
}
</style>
