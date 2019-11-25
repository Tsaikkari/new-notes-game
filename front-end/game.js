let keysAvailable = {'99': 'c', '100': 'd', '101': 'e', '102': 'f','103': 'g', '97': 'a', '98': 'b'};
let startPoints = {'1': 'c', '2': 'd', '3': 'e', '4': 'f', '5': 'g', '6': 'a', '7': 'b'}; 
let gameNotes = [];
let Staffpositions = [];
let level = 0;
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
// TODO: Choosing the level at the start of the game should not swap the elements. 
//Clicking level links only swaps elements when there's a test-view on the screen and vice versa with test links.

$('.level').on('click', function() {
  var a = $('#staff' + $('#a').val());
  var b = $('#klavier' + $('#b').val());
  swapElement(a, b);
});

$('.test').on('click', function() {
  var a = $('#klavier' + $('#a').val());
  var b = $('#staff' + $('#b').val());
  swapElement(a, b);
})

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

    function nextNote() {
      var randomNumber = Math.floor(Math.random() * 7);
      var randomNote = keysAvailable[randomNumber]
      gameNotes.push(randomNote)

      let userClickedKeys = (function(event) {
        let keycode = event.which || event.keyCode
        let userChosenKey = keysAvailable[keycode]
          if (randomNote === userChosenKey) {
            playSound(userChosenKey);
            nextNote();
          } else {
            playSound("wrong")
          }
      })
      $(document).on('keydown', userClickedKeys);
    }
    nextNote();
    started = true;
  }
})
    
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0
  randomNotes = []
  started = false
}
