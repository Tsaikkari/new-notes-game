let startPoints = [];
let gameNotes = [];
let keysAvailable = {'99': 'c', '100': 'd', '101': 'e', '102': 'f','103': 'g', '97': 'a', '98': 'b'};
let level = 0;
let started = false;

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

/*let levelsAndTests = {id: 'level1', id: 'test1', id: 'level2', id: 'test2', id: 'level3', id: 'test3', id: 'level4', id: 'test4'}
for(let i = 0; i < levelsAndTests.length; ++i) {
  let links = $("#navbarSupportedContent a");
  if(i%2 === 0){
    $(links[i]).*/$('.test').on('click', function() {
      var a = $('#klavier' + $('#a').val());
      var b = $('#staff' + $('#b').val());
      swapElement(a, b);
    })/*
  } else {
    $(links[i]).$('.level').on('click', function() {
      var a = $('#staff' + $('#a').val());
      var b = $('#klavier' + $('#b').val());
      swapElement(a, b);
    });
  }
}*/
$(document).keydown(function() {
  if (!started) {
    var elem = document.getElementById("note");
    var pos = 0;
    startPoint = this.startPoint; // note's starting point at the screen above corresponding keyboard key (button)
    var id = setInterval(frame, 20);

    function frame() {
      if (pos === 513) { //513 is a placeholder for staffPositions
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
      }
    }
      
    let userClickedKeys = (function(event) {
      let keycode = event.which || event.keyCode
      let userChosenKey = keysAvailable[keycode]
      let nextNote = function(randomNote) {
        var randomNumber = Math.floor(Math.random() * 7);
        var randomNote = keysAvailable[randomNumber]
        gameNotes.push(randomNote)
        if (randomNote === userChosenKey) {
          playSound(userChosenKey);
          nextNote();
        } else {
          playSound("wrong")
        }
      }
      nextNote();
      started = true;
    })
    $(document).on('keydown', userClickedKeys);
  }
})

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0
  gameNotes = []
  started = false
}

  

  

  
