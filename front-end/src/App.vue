<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Levels/>
    <Users/>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'
import Home from './views/Home.vue'
import Levels from './views/Levels.vue'
import Users from './views/Users.vue'

export default {
  name: 'app', 
  components: {
    Navbar,
    Home,
    Levels,
    Users
  },
  data() {
    return {
      staffs: [],
      notes:[]
    }
  },
  methods: {
    nextNote() {
      let keysAvailable = {'99': 'c', '100': 'd', '101': 'e', '102': 'f','103': 'g', '97': 'a', '98': 'b'};
      let gameNotes = [];
      let level = 0;
      var randomNumber = Math.floor(Math.random() * 7);
      var randomNote = keysAvailable[randomNumber]
      gameNotes.push(randomNote)

      let userClickedKeys = (function(event) {
        let keycode = event.which || event.keyCode
        let userChosenKey = keysAvailable[keycode]
          if (randomNote === userChosenKey) {
            playSound(userChosenKey);
            nextNote();
          } else {
            playSound("wrong")
          }
      })
      $(document).on('keydown', userClickedKeys);
    },
    playSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    },
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
