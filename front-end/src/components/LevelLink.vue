<template>
  <div id="level-link">
    <LevelLink @click="$emit('swapElement', level.id)"/>
  </div>
</template>

<script>
//v-on:click="{level.clicked}" v-on:change="swapElement"
export default {
  name: "LevelLink",
  props: ["level"], 
  methods: {
    swapElement(a, b) {
    // create a temporary marker div
    var aNext = $('<div>').insertAfter(a);
    a.insertAfter(b);
    b.insertBefore(aNext);
    // remove marker div
    aNext.remove();
      this.level.clicked = !this.level.clicked; // Set the clicked value to opposite value
    }
  }
}
$('.level').on('click', function() {
    var a = $('#staff' + $('#a').val());
    var b = $('#klavier' + $('#b').val());
      swapElement(a, b);
  });
</script>