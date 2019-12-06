let startPoints = { "c": 349, "d": 440,"e": 525, "f": 615, "g": 707, "a": 794, "b": 880 }
let keysAvailable = [65, 83, 68, 70, 71, 72, 74];
let gameNotes = [];
let userChosenKeys = [];
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

<<<<<<< HEAD
// Random note begins to drop down when user starts the game
=======
// keyboard key-buttons
let keyboardKeys = [
  { 
    id: "c", 
    left: 349, 
    staffPosition: 550 
  },
  {
    id: "d", 
    left: 440, 
    staffPosition: 540
  },
  {
    id: "e", 
    left: 525, 
    staffPosition: 528
  },
  {
    id: "f", 
    left: 615, 
    staffPosition: 513
  },
  {
    id: "g", 
    left: 707, 
    staffPosition: 500
  },
  {
    id: "a", 
    left: 794, 
    staffPosition: 487
  },
  {
    id: "b", 
    left: 880, 
    staffPosition: 473
  },
  ]

for (let i = 0; i < keyboardKeys.length; ++i) {
  let elem = document.getElementById(keyboardKeys[i].id);

  function createNoteAboveKey(elem, html) {
    let note = document.createElement('h6');
    note.setAttribute("id","note");
    note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif;";

    let coords = elem.getBoundingClientRect();
    note.style.left = keyboardKeys[i].left + "px";
    note.style.top = 5 + "px";
    note.innerHTML = html;
    return note;
  }
  let note = createNoteAboveKey(elem, 'o');
  document.body.append(note);
}

// Random note starts dropping down when user starts the game
>>>>>>> game
$(document).keydown(function() {
  if (!started) {
    nextNote();
    started = true; 
<<<<<<< HEAD
    let elem = document.getElementById("note")
    let pos = 0;
=======
    var elem = document.getElementById('note');
    var pos = 0;
>>>>>>> game
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
  let userChosenKeys = (function(event) {
    let keycode = event.which || event.keyCode;
    let userChosenKey = keysAvailable[keycode];
    userChosenKeys.push(userChosenKey);
    playSound(event.userChosenKey);
    check(event.userChosenKey);
  })
})



function nextNote() {
  let randomNumber = Math.floor(Math.random() * 7);
  let randomStartPoint = startPoints[randomNumber];
  gameNotes.push(randomStartPoint);
  if (randomStartPoint === "c") {
    staffPosition = 550;
  } else if (randomStartPoint === "d") {
    staffPosition = 540;
  } else if (randomStartPoint === "e") {
    staffPosition = 528;
  } else if (randomStartPoint === "f") {
    staffPosition = 513;
  } else if (randomStartPoint === "g") {
    staffPosition = 500;
  } else if (randomStartPoint === "a") {
    staffPosition = 487;
  } else if (randomStartPoint === "b") {
    staffPosition = 473;
  }
}

function check() {
<<<<<<< HEAD
  if (startPoint === userChosenKey) {
=======
  if (randomStartPoint === userChosenKey) {
>>>>>>> game
    nextNote();
  } else {
    playSound("wrong");
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
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
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
