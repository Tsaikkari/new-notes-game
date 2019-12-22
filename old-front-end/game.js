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
    var elem = document.getElementById("random-note");
    var pos = 0;
    var id = setInterval(frame, 25);

    function frame() {
      let staffPosition = this.staffPosition;
      if (pos === staffPosition) { 
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + '%';
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
  let randomNote = this.randomNote;
  let userChosenKey = this.userChosenKey;
  if (randomNote === userChosenKey) {
    createRandomNote();
  } else {
    //playSound('wrong')
    startOver();
  }
}
   
/*function nextNote() {
  document.addEventListener("keydown", function(event) {
    let keycode = event.keyCode;
    let userChosenKey = keysAvailable[keycode];
    userChosenKeys.push(userChosenKey);
    console.log(userChosenKey);
    checkUserChoise(userChosenKey);
    randomNotes = []; 
  })
}*/

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
    note.style.top = 1 + "%";
    note.innerHTML = html;
    notes.push(note);
    
    let randomNote = notes[Math.floor(Math.random() * 7)]
    if (randomNote)
    note.setAttribute("id", "random-note");
    console.log(randomNote)
    return randomNote;
    }
    randomNote = createNoteAboveKey(elem, 'o');
    document.body.append(randomNote);

    let level = $('.level');
    if (level) {
      staffPositionLevel(randomNote);
    } else {
    staffPositionTest(randomNote);
    }     
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
  level = 0
  randomNotes = []
  started = false
}
