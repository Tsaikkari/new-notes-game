<script>
import UserCard from '../components/user-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Users',
  components: {
    UserCard
  },
  /*data() {
    return {
      name: ''
    }

  },*/
  computed: { // to use the mapState and mapActions functions
    ...mapState([ 'users' /*,'user'*/])
  },
  methods: {
      ...mapActions([ 'fetchUsers' ]) // to map the action to the fetchUsers and addUser value
  },
  /*addUser() {
    this.users.push(user)
  },*/
  created() {
      this.fetchUsers() // calling the function the moment the component is created
      //this.addUser()
  }
}
</script>

<template lang="pug">
  main
    section
      user-card(v-for="user in users", :user="user") 
</template>



