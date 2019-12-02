<template>
  <div class="tests">
  </div>
</template>

<script>
export default {
  name: "Tests",
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

  /*$('.test').on('click', function() {
    var a = $('#klavier' + $('#a').val());
    var b = $('#staff' + $('#b').val());
    swapElement(a, b);
  });*/
</script>