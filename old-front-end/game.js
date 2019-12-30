let keysAvailable = [67, 68, 69, 70, 71, 65, 66];
let notes = [];
let randomNotes = [];
let userChosenKeys = [];
let userChosenButtons = [];
let level = 0;
let started = false;

$(".levels-tests").click(function() {
  $("section").hide();
})

$(".menu").click(function() {
  $("section").show();
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
  var a = $('#staff' + $('#a').val());
  var b = $('#klavier' + $('#b').val());
  swapElement(a, b);
});

$('.level').on('click', function() {
  var a = $('#klavier' + $('#a').val());
  var b = $('#staff' + $('#b').val());
    swapElement(a, b);
});


// Random note starts dropping down when user starts the game
$(document).keydown(function(event) {
  if (!started) {
    createRandomNote();
    started = true; 
    let elem = document.getElementById("random-note");
    let pos = 0
    if (document.querySelectorAll(".test").clicked == true) {
      randomNote = document.getElementById("random-note").css("padding-left", "45%")
      staffPositionTest(randomNote);
    } else {
      staffPositionLevel();
    }
    let id = setInterval(frame, 5);

    function frame() {
    let staffPosition = this.staffPosition;
      if (pos == staffPosition) { 
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
      }
    }
  }
  
  let keycode = event.keyCode;
  let userChosenKey = keysAvailable[keycode];
  userChosenKeys.push(userChosenKey);
  console.log(userChosenKey);
  playSound(userChosenKey);
  checkUserChoise(userChosenKey);
})

function checkUserChoise() {
  let note = this.note;
  let userChosenKey = this.userChosenKey;
  if (note === userChosenKey) {
    createRandomNote();
  } else {
    //playSound('wrong')
    startOver();
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
    note.style.left = keyboardKeys[i].left + "%";
    //note.style.top = 0 + "px";
    note.innerHTML = html;
    notes.push(note);
    
    if (note.style.left === keyboardKeys[0].left + "%") {
      note.setAttribute("class", "c-note");
    } else if (note.style.left === keyboardKeys[1].left + "%") {
       note.setAttribute("class", "d-note");
    } else if (note.style.left === keyboardKeys[2].left + "%") {
        note.setAttribute("class", "e-note");
    } else if (note.style.left === keyboardKeys[3].left + "%") {
        note.setAttribute("class", "f-note");
    } else if (note.style.left === keyboardKeys[4].left + "%") {
        note.setAttribute("class", "g-note");
    } else if (note.style.left === keyboardKeys[5].left + "%") {
        note.setAttribute("class", "a-note");
    } else if (note.style.left === keyboardKeys[6].left + "%") {
        note.setAttribute("class", "b-note");
    } 
    
    let randomNote = notes[Math.floor(Math.random() * 7)]
    if (randomNote)
    note.setAttribute("id", "random-note");

    console.log(randomNote)
    return randomNote;
    }
    let randomNote = createNoteAboveKey(elem, 'o');
    document.body.append(randomNote);

    /*let level = $('.level');
    if (level) {
      staffPositionLevel(randomNote);
    } else {
      staffPositionTest(randomNote);
    }  */ 
  }
}

// Add event listener to piano keyboard keys
$('button').click(function() {
  let buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML)
})

//Add event listener to detect key press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  randomNotes = [];
  started = false;
}
