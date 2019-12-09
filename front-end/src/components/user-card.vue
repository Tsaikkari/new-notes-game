<script>
export default {
  name: 'UserCard',
  props: ['user'],
  computed: {
    userUrl() {
      return `/user/${this.user._id}`
    }
  }
}
</script>

<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${user._id}`", alt="")
  h2.card-title
    router-link(:to="userUrl") {{ user.name }}   
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-left: 5%;
  margin-bottom: 3%;
  min-width: 200px;
}

a {
  color: #fe7a47;
}
</style>

