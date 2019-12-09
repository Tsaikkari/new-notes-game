let startPoints = { "c": 349, "d": 440,"e": 525, "f": 615, "g": 707, "a": 794, "b": 880 }
let keysAvailable = [65, 83, 68, 70, 71, 72, 74];
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


// Random note begins to drop down when user starts the game
$(document).keydown(function() {
  if (!started) {
    nextNote();
    started = true; 
    for (var i = 0; i < notes.length; i++) {
      var elem = document.getElementById(notes[i]);
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
  }
  // Detect keys that are pressed
  let userChosenKeys = (function(event) {
    let keycode = event.which || event.keyCode;
    let userChosenKey = keysAvailable[keycode];
    userChosenKeys.push(userChosenKey);
    playSound(event.userChosenKey);
    check(event.userChosenKey);
  })
})

function nextNote() {
  // Select piano keys
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
    // Create note above piano key
    function createNoteAboveKey(elem, html) {
      let note = document.createElement('h6');
      note.setAttribute("id", "random-note");
      note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif;"
      
      let coords = elem.getBoundingClientRect();
      note.style.left = keyboardKeys[i].left + "px";
      note.style.top = 5 + "px";
      note.innerHTML = html;
      // Add note to notes array
      notes.push(note)
      // modify note to be a random note
      let randomNote = notes[Math.floor(Math.random(0, notes.length-1))];
      
      return randomNote;  
    }
    let randomNote = createNoteAboveKey(elem, 'o');
    document.body.append(randomNote);
    gameNotes.push(randomNote);

    let startPoint = startPoints[randomNote];
    if (startPoint === "c") {
      staffPosition = 550;
    } else if (startPoint === "d") {
      staffPosition = 540;
    } else if (startPoint === "e") {
      staffPosition = 528;
    } else if (startPoint === "f") {
      staffPosition = 513;
    } else if (startPoint === "g") {
      staffPosition = 500;
    } else if (startPoint === "a") {
      staffPosition = 487;
    } else if (startPoint === "b") {
      staffPosition = 473;
    } /*else {
      staffPosition = 0;
    }*/
      playSound(randomNote);
    }
} 

function check() {
  if (this.randomNote === this.userChosenKey || this.randomNote === this.userChosenButton) {
    nextNote();
  } else {
    playSound("wrong");
    startOver();
  }
}

// Add event listener to piano keyboard keys
let numberOfKeys = document.querySelectorAll(".key").length;
for (let i = 0; i < numberOfKeys; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    let userChosenButton = $(this).attr("id");
    userChosenButtons.push(userChosenButton);
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    check(userChosenButton);
  });
}

// Add event listener to keys: for levels
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
        let wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
      break;
      default: console.log(key);
    }
  }

function startOver() {
  level = 0;
  gameNotes = [];
  started = false;
}