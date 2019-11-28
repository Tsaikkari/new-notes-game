<script>
export default {
  name: 'Notes',
  components: {
      Note
  },
  props: {
    note: String
  },
    data() {
    return {
      notes: [
        {
          id: 1, 
          name: 'c',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

