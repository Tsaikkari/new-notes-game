let started = false;

// Hides game introduction when level or test is clicked
$(".nav-link").on("click", function() {
    $("#intro").hide();
  })
  
  $("#menu").on("click", function() {
    $("#intro").show();
  })

  // Switches the position of the keyboard with the position of the staff depending on user clicking either level or test link.
  function swapElement(a, b) {
    // create a temporary marker div
    var aNext = $('<div>').insertAfter(a);
    a.insertAfter(b);
    b.insertBefore(aNext);
    // remove marker div
    aNext.remove();
  }
  
  // TODO: Clicking level links only swaps elements when there's a test-view on the screen and vice versa with test links.
  $('.test').on('click', function() {
    var a = $('#klavier' + $('#a').val());
    var b = $('#staff' + $('#b').val());
    swapElement(a, b);
  });

  $('.level').on('click', function() {
    var a = $('#staff' + $('#a').val());
    var b = $('#klavier' + $('#b').val());
      swapElement(a, b);
  });

  // Random note starts dropping down when user starts the game
$(document).keydown(function() {
  if (!started) {
    nextNote();
    started = true; 
    var elem = document.getElementById("note");
    var pos = 0;
    var id = setInterval(frame, 20);
  
    function frame() {
    if (pos === this.staffPosition) { 
      clearInterval(id);
      } else {
      pos++;
      elem.style.top = pos + 'px';
      }
    }
  }
});

export default event;
    