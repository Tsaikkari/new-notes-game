<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/" class="menu">NOTES GAME</router-link> |
      <router-link to="/level" class="level">Level1</router-link>
      <router-link to="/test" class="test">Test1</router-link>
      <router-link to="/level" class="level">Level2</router-link>
      <router-link to="/test" class="test">Test2</router-link>
      <router-link to="/level" class="level">Level3</router-link>
      <router-link to="/test" class="test">Test3</router-link>
      <router-link to="/level" class="level">Level4</router-link>  
      <router-link to="/test" class="test">Test4</router-link>
    </div>
    <router-view/>-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
      <h2>NOTES GAME</h2>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link level" id="level1" href="#notes-route">Level 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test" id="test1" href="#notes-route">Test 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link level" id="level2" href="#notes-route">Level 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test" id="test2" href="#notes-route">Test 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link level" id="level3" href="#notes-route">Level 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test" id="test3" href="#notes-route">Test 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link level" id="level4" href="#notes-route">Level 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link test" id="test4" href="#notes-route">Test 4</a>
          </li>
          <li class="nav-item level">
            <a class="nav-link" id="menu" href="#intro">MENU</a>
          </li>
        </ul>
      </div>
    </nav>
    <HelloWorld/>
    <Levels/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Levels from './components/Levels.vue'

export default {
  name: 'app', 
  components: {
    HelloWorld,
    Levels
  },
  data() {
    return {
      levels: [
        {
          id: 1, 
          name: 'Level1', 
          clef: 'Treble Cleff',
          keyboardOnBottom: true,
          clicked: false
        },
        {
          id: 2, 
          name: 'Level2', 
          clef: 'Bass Clef',
          keyboardOnBottom: true,
          clicked: false
        },
        {
          id: 3, 
          name: 'Level3', 
          clef: 'Treble Cleff',
          keyboardOnBottom: true,
          clicked: false
        },
        {
          id: 4, 
          name: 'Level4', 
          clef: 'Bass Clef',
          keyboardOnBottom: true,
          clicked: false
        },
      ],
      tests: [
        {
          id: 1, 
          name: 'Test1', 
          clef: 'Treble Cleff',
          keyboardOnTop: true,
          clicked: true
        },
        {
          id: 2, 
          name: 'Test2', 
          clef: 'Bass Clef',
          kexboardOnTop: true,
          clicked: true
        },
        {
          id: 3, 
          name: 'Test3', 
          clef: 'Treble Cleff',
          keyboardOnTop: true,
          clicked: true
        },
        {
          id: 4, 
          name: 'Test4', 
          clef: 'Bass Clef',
          keyboardOnTop: true,
          clicked: true
        }
      ]
    }
  },
  methods: {
    swapMethod(a, b) {
    // create a temporary marker div
    var aNext = $('<div>').insertAfter(a);
    a.insertAfter(b);
    b.insertBefore(aNext);
    // remove marker div
    aNext.remove();
      this.test.clicked = !this.test.clicked
    }
  }
}
// TODO: Clicking level links only swaps elements when there's a test-view on the screen and vice versa with test links.
  /*$('.test').on('click', function() {
    var a = $('#klavier' + $('#a').val());
    var b = $('#staff' + $('#b').val());
    swapElement(a, b);
  });

  $('.level').on('click', function() {
    var a = $('#staff' + $('#a').val());
    var b = $('#klavier' + $('#b').val());
      swapElement(a, b);
  });*/
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

.navbar-light .navbar-nav .nav-link {
  color: #d8412f;
  text-transform: uppercase;
  padding-right: 43px;
}

footer {
  text-align: center;
}
</style>
