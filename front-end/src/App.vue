<template>
  <div id="app">
    <Levels v-bind:levels="levels"/>>
    <div id="nav">
      <router-link to="/">NOTES GAME</router-link> |
      <router-link to="/level">Level1</router-link>
      <router-link to="/level">Test1</router-link>
      <router-link to="/level">Level2</router-link>
      <router-link to="/level">Test2</router-link>
      <router-link to="/level">Level3</router-link>
      <router-link to="/level">Test3</router-link>
      <router-link to="/level">Level4</router-link>  
      <router-link to="/level">Test4</router-link>
    </div>
    <router-view/>
    <HelloWorld/>
    <Staff/>
    <Note/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Staff from './components/Staff.vue'
import Note from './components/Note.vue'
import Levels from './views/Levels.vue'
import Tests from './views/Tests.vue'

export default {
  name: 'app', 
  components: {
    HelloWorld,
    Staff,
    Note,
    Levels,
    Tests
  },
  data() {
    return {
      levels: [
        {
          id: 1, 
          name: 'Level1', 
          clicked: false
        },
        {
          id: 2, 
          name: 'Level2', 
          clicked: false
        },
        {
          id: 3, 
          name: 'Level3', 
          clicked: false
        },
        {
          id: 4, 
          name: 'Level4', 
          clicked: false
        },
      ],
      tests: [
        {
          id: 1, 
          name: 'Test1', 
          clicked: true
        },
        {
          id: 2, 
          name: 'Test2', 
          clicked: true
        },
        {
          id: 3, 
          name: 'Test3', 
          clicked: true
        },
        {
          id: 4, 
          name: 'Test4', 
          clicked: true
        }
      ]
    }
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
  color: #000;
  text-transform: uppercase;
  padding-right: 43px;
}

footer {
  text-align: center;
}
</style>
