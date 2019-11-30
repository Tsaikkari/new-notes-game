<template>
  <div class="container-fluid" id=notes-route>
    <i class="far fa-circle" id="note"></i>
  </div>
</template>

<script>

export default {
  name: 'Note',
  components: {
    Note
  },
  props: {
    note: ID
  }, 
  data() {
    return {
      notes: [
        {
          id: 1
        },
        {
          id: 2 
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-circle {
  padding-top: 10%;
  font-size: 1.6em;
  position: absolute;
  /*padding-left: 333px;*/
}
</style>

