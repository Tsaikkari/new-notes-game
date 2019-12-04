<script>
export default {
  name: "Levels",
  data() {
    return {
      staffs: [],
      notes:[]
    }
  },
  created() {
    
  }
}

</script>

<template>
  <div>
    <div class="container-fluid" id="notes-route">
      <i class="far fa-circle" id="note"></i>
    </div>
    
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

    <div class="container-content" id="staff">
      <hr>
      <hr>
      <hr>
      <hr>
      <hr>
      <hr id="ledger-line">
    </div>

  </div>
</template>

<style scoped>
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

hr {
  margin: 2%;
  background-color: black;
}

#ledger-line {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 26.4%;
  margin-right: 70%;
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