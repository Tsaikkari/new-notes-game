let keysAvailable = [65, 83, 68, 70, 71, 72, 74];
let staffPositions = [550, 537, 524, 510, 497, 483, 470];
let notes = [];
let gameNotes = [];
let userChosenKeys = [];
let userChosenButtons = [];
let level = 0;
let started = false;

$("button").click(function() {
  $("section").hide();
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
    randomNote();
    started = true; 
    for (let i = 0; i < notes.length; i++) {
      var elem = document.getElementById([notes[i].id]);
      var pos = 0;
      var id = setInterval(frame, 37);

      function frame() {
        let staffPosition = this.staffPosition;
        if (pos === staffPosition) { 
          clearInterval(id);
        } else {
          pos++;
          elem.style.top = pos + 'px';
        }
      }
    }
  }
  let userChosenKeys = (function(event) {
  let keycode = event.which || event.keyCode;
  let userChosenKey = keysAvailable[keycode];
  userChosenKeys.push(userChosenKey);
  playSound(userChosenKey);
  check(userChosenKey);
  })
})

function randomNote() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
  
    function createNoteAboveKey(elem, html) {
      let note = document.createElement('h6');
      note.setAttribute("id", ""); 
      note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif;";
  
      let coords = elem.getBoundingClientRect();
      note.style.left = keyboardKeys[i].left + "px";
      note.style.top = 5 + "px";
      note.innerHTML = html;
      notes.push(note)
      let randomNote = notes[Math.floor(Math.random() * 7)]
      if (randomNote === notes[0]) {
        note.setAttribute("id", "1")
        note = "c";
        staffPosition = staffPositions[0];
      } else if (randomNote === notes[1]) {
        note.setAttribute("id", "2")
        note = "d";
        staffPosition = staffPositions[1];
      } else if (randomNote === notes[2]) {
        note.setAttribute("id", "3")
        note = "e";
        staffPosition = staffPositions[2];
      } else if (randomNote === notes[3]) {
        note.setAttribute("id", "4")
        note = "f";
        staffPosition = staffPositions[3];
      } else if (randomNote === notes[4]) {
        note.setAttribute("id", "5")
        note = "g";
        staffPosition = staffPositions[4];
      } else if (randomNote === notes[5]) {
        note.setAttribute("id", "6")
        note = "a";
        staffPosition = staffPositions[5];
      } else if (randomNote === notes[6]) {
        note.setAttribute("id", "7")
        note = "b";
        staffPosition = staffPositions[6];
      }
      
      return randomNote;
    }
    randomNote = createNoteAboveKey(elem, 'o');
    document.body.append(randomNote);
    gameNotes.push(randomNote);
    console.log(randomNote)
    playSound(randomNote);
  }
}

function check() {
  let userChosenKey = this.userChosenKey;
  if (randomNote === userChosenKey) {
    nextNote();
  } else {
    playSound("wrong")
    startOver();
  }
}

/*function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}*/

// Add event listener to piano keyboard keys
let numberOfKeys = document.querySelectorAll(".key").length;
for (let i = 0; i < numberOfKeys; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  playSound(event.key);
})

function playSound(key) {
  switch(key) {
    case "c":
      let c = new Audio("sounds/c.mp3");
      c.play();
      break;
      case "d":
        let d = new Audio("sounds/d.mp3");
        d.play();
      break;
      case "e":
        let e = new Audio("sounds/e.mp3");
        e.play();
      break;
      case "f":
        let f = new Audio("sounds/f.mp3");
        f.play();
      break;
      case "g":
        let g = new Audio("sounds/g.mp3");
        g.play();
      break;
      case "a":
        let a = new Audio("sounds/a.mp3");
        a.play();
      break;
      case "b":
        let b = new Audio("sounds/b.mp3");
        b.play();
      break;
      case "":
        let wrong = new Audio("sounds/wrong.mp3")
        wrong.play();
      break;
      default: console.log(key)
    }
  }

function startOver() {
  level = 0
  randomNotes = []
  started = false
}
