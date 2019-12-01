<template>
  <div>
    <div v-bind:key="level.id" v-for="level in levels">
      <LevelLink v-bind:level="level"/>
    </div>
  </div>
</template>

<script>
import LevelLink from './LevelLink.vue'
export default {
  name: "Levels",
  components: {
    LevelLink
  },
  props: ['levels']
}
</script>

<style scoped>

</style>