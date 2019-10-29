let startPoints = [];
let gameNotes = [];
let keysAvailable = {'99': 'c', '100': 'd', '101': 'e', '102': 'f','103': 'g', '97': 'a', '98': 'b'};
let level = 0;
let started = false;

$(document).keydown(function() {
  if (!started) {
    var elem = document.getElementById("note");
    var pos = 0;
    startPoint = this.startPoint; // note's starting point at the screen above corresponding keyboard key (button)
    var id = setInterval(frame, 10);

    function frame() {
      if (pos === 1077) { //1177 is at the moment a placeholder for staffPositions
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
      }
    }
    //nextNote();
    started = true;
  }
})

userClickedKeys = (function(event) {
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
})

$(document).on('keydown', userClickedKeys);

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0
  gameNotes = []
  started = false
}

  

  

  
