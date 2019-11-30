<template>
  <div class="container-fluid" id=intro>
    <h1>{{ msg }}</h1>
    <h3 class="intro-header"><i class="fas fa-music"></i>Learn names of the keyboard keys<br> & their corresponding notes on the staff</h3> 
      <h5 class="how">How to play</h5>
        <p class="instructions"><strong>Levels:</strong> Click the key on your keyboard (not the piano keyboard key on the screen) 
          corresponding to the name of the key that the note is approaching. If you hit the right key the note will go to its place on the staff. 
          Put the sound on (loud)!<i class="fas fa-volume-up"></i></p>
        <p class="test-instructions"><strong>Tests:</strong> Click the keyboard key on the screen corresponding to the note on the staff.</p>
        <p class="starting">Choose a level and press any key to start</p>
    
    <section>
      <div id="piano-kb">
        <div id="kbk"> 
          <div class="k c wk">C</div>
            <div class="k c_sharp bk"></div>
            <div class="k d wk">D</div>
            <div class="k d_sharp bk"></div>
            <div class="k e wk">E</div>
            <div class="k f wk">F</div>
            <div class="k f_sharp bk"></div>
            <div class="k g wk">G</div>
            <div class="k g_sharp bk"></div>
            <div class="k a wk">A</div>
            <div class="k a_sharp bk"></div>
            <div class="k b wk">B</div>
          </div>
        </div>
      </section>

      <div class="container-content" id="klavier">
      <div id="keyboard">
        <button type="button" class="btn btn-light c key" id="c"></button>
        <button type="button" class="btn btn-dark black key"></button>
        <button type="button" class="btn btn-light d key" id="d"></button>
        <button type="button" class="btn btn-dark black key"></button>
        <button type="button" class="btn btn-light e key" id="e"></button>
        <button type="button" class="btn btn-light f key" id="f"></button>
        <button type="button" class="btn btn-dark black key"></button>
        <button type="button" class="btn btn-light g key" id="g"></button>
        <button type="button" class="btn btn-dark black key"></button>
        <button type="button" class="btn btn-light a key" id="a"></button>
        <button type="button" class="btn btn-dark black key"></button>
        <button type="button" class="btn btn-light b key" id="b"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotesGame',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*little-keyboard*/
section {
  width: 250px;
  height: 120px;
  text-align: center;
  margin-left: 10%;
  border: solid 1px #000;
}

#piano-kb {
  height: 100%;
  flex-flow: column;
  display: flex;
  flex: 4;  
  padding: 1%;
}
/*keyboard keys*/
#kbk {
  position: relative;
  height: 100%;
  display: flex;
  flex: 8;
  justify-content: center;
}
/*key*/
.k {
  display: inline-flex;
  flex: 1;
  align-items: center;
}
/*black key*/
.bk {
  position: relative;
  float: right;
  height: 60%;
  max-width: 9%;
  justify-content: center;
  background-color: #000;
  margin: 0 -4%
}

/*white key*/
.wk {
  flex-flow: column;
  justify-content: flex-end;
  background-color: #fff;
  color: #000;
  outline: 2px solid #474747;;
  padding-bottom: 2.5%;
}

/* instructions*/
#intro {
  margin-top: 11%;
  padding: 1%;
  background-color: #f5ca99;
}

.intro-header {
  text-align: center;
  padding-bottom: 2%;
  padding-top: 2%;
  border-bottom: double;
  border-top: double;
  background-color: #fe7a47;
}

.how {
  color: #fcfdfe;
}

.starting {
  font-size: 1.5em;
  color: #d8412f;
  text-align: center;
}

/*icons*/
.fa-music {
  padding-right: 1%;
}

.fa-volume-up {
  padding-left: 1%;
}

/* note */
.fa-circle {
  padding-top: 10%;
  font-size: 1.6em;
  position: absolute;
  /*padding-left: 333px;*/
}

#notes-route {
  min-height: 150px;
}

#keyboard {
  position: relative;
  left: 25%;
}

.black {
  position: absolute;
  margin: 0 -2.2%;
  height: 59%;
  width: 4%;
}

.btn-light {
  padding-left: 5.5%;
  padding-top: 20%;
  border: solid black 1px;
  background-color: white;
}

.btn-light:hover {
  background-color: white;
  border: solid black 1px;
}

</style>
