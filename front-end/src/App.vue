<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Levels/>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'
import Home from './views/Home.vue'
import Levels from './views/Levels.vue'
//import { event } from './unit/event.js'

export default {
  name: 'app', 
  components: {
    Navbar,
    Home,
    Levels,
  },
  data() {
    return {
      staffs: [],
      notes:[]
    }
  },
  methods: {
    startOver() {
      level = 0
      randomNotes = []
      started = false
    }
  },
  created() {
    
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

footer {
  text-align: center;
}
</style>
