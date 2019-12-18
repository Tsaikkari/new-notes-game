let keysAvailable = [65, 83, 68, 70, 71, 72, 74];
let staffPositions = [550, 537, 524, 510, 497, 483, 470];
let notes = [];
let randomNotes = [];
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
    createRandomNote();
    started = true; 
    //for (let i = 0; i < randomNotes.length; i++) {
    var elem = document.getElementById("random-note");
    var pos = 0;
    var id = setInterval(frame, 1);

    function frame() {
      let staffPosition = this.staffPosition;
      if (pos === staffPosition) { 
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
      }
      nextNote();
    }
  }
//}
})
    
function nextNote() {
  document.addEventListener("keydown", function(event) {
    for (let i = 0; i < keysAvailable.length; i++) {
      let keycode = event.which || event.keyCode;
      let userChosenKey = keysAvailable[keycode];
      userChosenKeys.push(userChosenKey);
      console.log(userChosenKey);
      check(userChosenKey);
      randomNotes = [];
    }  
  })
}

function staffPositionOfRandomNote() {
  // Define note's stopping point
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let startPoint = keyboardKeys[i].left + "px";
    if (startPoint === keyboardKeys[0].left + "px") {
      staffPosition = staffPositions[0];
    } else if (startPoint === keyboardKeys[1].left + "px") {
      staffPosition = staffPositions[1];
    } else if (startPoint === keyboardKeys[2].left + "px") {
      staffPosition = staffPositions[2];
    } else if (startPoint === keyboardKeys[3].left + "px") {
      staffPosition = staffPositions[3];
    } else if (startPoint === keyboardKeys[4].left + "px") {
      staffPosition = staffPositions[4];
    } else if (startPoint === keyboardKeys[5].left + "px") {
      staffPosition = staffPositions[5];
    } else if (startPoint === keyboardKeys[6].left + "px") {
      staffPosition = staffPositions[6];
    } else { 
      staffPosition = 0;
    }
  }
}

function createRandomNote() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
    function createNoteAboveKey(elem, html) {
    // Put a note above a key
    let note = document.createElement('h6');
    note.setAttribute("id", "note");
    note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif;";
    
    let coords = elem.getBoundingClientRect();
    note.style.left = keyboardKeys[i].left + "px";
    note.style.top = 5 + "px";
    note.innerHTML = html;
    notes.push(note);
    
    let randomNote = notes[Math.floor(Math.random() * 7)]
    if (randomNote)
    note.setAttribute("id", "random-note");
    staffPositionOfRandomNote(randomNote);
    console.log(randomNote)
    
    return randomNote;
    }
    randomNote = createNoteAboveKey(elem, 'o');
    document.body.append(randomNote);
    nextNote();   
  }
}

function check() {
  let randomNote = this.randomNote;
  let userChosenKey = this.userChosenKey;
  if (randomNote == userChosenKey) {
    playSound(userChosenKey);
    createRandomNote();
  } else {
    playSound("wrong")
    startOver();
  }
}

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
