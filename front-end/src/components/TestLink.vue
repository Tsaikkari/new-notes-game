<template>
  <div id="test-link">
    <TestLink v-on:click="{test.clicked}" v-on:change="swapElement"/>
  </div>
</template>

<script>
export default {
  name: "TestLink",
  props: ["tests"], 
  methods: {
    swapElement(a, b) {
    // create a temporary marker div
    var aNext = $('<div>').insertAfter(a);
    a.insertAfter(b);
    b.insertBefore(aNext);
    // remove marker div
    aNext.remove();
      this.test.clicked = !this.test.clicked
    }
  }
}
</script>