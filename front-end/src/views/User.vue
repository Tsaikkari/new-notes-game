<script>
import UserCard from '../components/user-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'User',
  components: {
    UserCard
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  created() {
    this.fetchUsers(this.$route.params.id)
  }
}
</script>

<template lang="pug">
  main
    section(:id="users")
      user-card(:user="user")
</template>

<style scoped>

</style>
