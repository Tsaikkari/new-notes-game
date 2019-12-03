<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "Users",
  computed: { // to use the mapState and mapActions functions
    ...mapState([ 'counter' ])
  },
  methods: {
      ...mapActions([ 'incrementCounter' ]) // to map the action to the incrementCounter value
  },
  created() {
      this.incrementCounter() // calling the function the moment the component is created
  }
}
</script>

<template lang="pug">
  main
    h1 Hello World
    div {{ counter }}
</template>