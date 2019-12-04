<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "Users",
  computed: { // to use the mapState and mapActions functions
    ...mapState([ 'users' ])
  },
  methods: {
      ...mapActions([ 'fetchUsers' ]) // to map the action to the incrementCounter value
  },
  created() {
      this.fetchUsers() // calling the function the moment the component is created
  }
}
</script>

<template lang="pug">
  main
    h1 Hello World
    div {{ users }}
</template>