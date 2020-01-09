<script>
import UserCard from '../components/user-card.vue'
export default {
  name: 'Home',
  components: {
  UserCard
  }
}
</script>

<template>
  <div class="container-fluid" id=intro>
    <h1 id="players">Players</h1>
  </div>
</template>

<style scoped>
#players {
  padding-left: 4%;
  padding-top: 1%;
}
</style>