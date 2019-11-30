<template>
  <div class="container-content" id=staff>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr id="ledger-line">
  </div>
</template>

<script>
export default {
  name: 'Staff',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
