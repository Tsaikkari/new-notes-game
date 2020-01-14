let keysAvailable = ["c", "d", "e", "f", "g", "a", "b"];
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
  let aNext = $('<div>').insertAfter(a);
  a.insertAfter(b);
  b.insertBefore(aNext);
  // remove marker div
  aNext.remove();
}

// TODO: Clicking level links only swaps elements when there's a test-view on the screen and vice versa with test links.

$('#level').on('click', function() {
  let a = $('#staff' + $('#a').val());
  let b = $('#klavier' + $('#b').val());
  swapElement(a, b);
});

$('#test').on('click', function() {
  let a = $('#klavier' + $('#a').val());
  let b = $('#staff' + $('#b').val());
    swapElement(a, b);
});

// Starting the game
$(document).keydown(function() {
  if (!started) {
    createNote();
    started = true; 
  }
})

// Random note starts dropping down when a user starts the game
let dropNote = function() {
  $(document).keydown(function() {
    createRandomNote();
    let elem = document.getElementById("random-note");
    let pos = 0
    let id = setInterval(frame, 5);
    
    function frame() {
      let staffPosition = this.staffPosition;
      if (pos === staffPosition) { 
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
      }
    } 
  })
}();

// Add event listener to detect which key is pressed out of the 7 keys
$(document).keydown(function(event) {
  let key = event.keyCode || event.key;
  for (let i = 0; i < keysAvailable.length; i++) { 
    let userChosenKey;
    if (key === 67) {
      userChosenKey = keysAvailable[0];
    } else if (key === 68) {
      userChosenKey = keysAvailable[1];
    } else if (key === 69) {
      userChosenKey = keysAvailable[2];
    } else if (key === 70) {
      userChosenKey = keysAvailable[3];
    } else if (key === 71) {
      userChosenKey = keysAvailable[4];
    } else if (key === 65) {
      userChosenKey = keysAvailable[5];
    } else if (key === 66) {
      userChosenKey = keysAvailable[6];
    }
<<<<<<< HEAD
    userChosenKeys.push(userChosenKey);
    playSound(userChosenKey);
    checkUserChoise(userChosenKey);
    console.log(userChosenKey)
    //return userChosenKey;
=======
    
    if (userChosenKey){
        userChosenKeys.push(userChosenKey);
        // hide the existing nodes
        $('.note-list > h6').each(function () {
          $(this).css('display', 'none');
        })

        $('#keyboard > button').each(function () {
          $(this).css('background-color', '');
        })

        let chosenElemtn = $('.' + userChosenKey + '-note');
        let chosenKeyBoard = $('#' + userChosenKey);
        if (chosenKeyBoard) chosenKeyBoard.css('background-color', 'grey');
        if (chosenElemtn) chosenElemtn.css('display', 'block')
        playSound(userChosenKey);
        checkUserChoise(userChosenKey);
        console.log(userChosenKey)
      }else {
      gameover()
      }
>>>>>>> b2e8d2bfc1947aa7b735e7cf9139b05c9c1e84f4
  }
})

// Check if the user played right or wrong
function checkUserChoise(userChosenKey) {
  // f

  for (let i = 0; i < keysAvailable.length; i++) {


    this.randomNote = $("#random-note").attr("class");
    this.userChosenKey = keysAvailable[i];
    this.userChosenButton = $("button").attr("id");
    if (randomNotes[userChosenKey] === userChosenKeys[userChosenKey]) {
      if (randomNote === userChosenKey + "-note" || randomNote === userChosenButton + "-note") {
        console.log(userChosenKey)
      }
    } else {
      gameover()
    }
  }
}

// game over

function gameover(){
  playSound('wrong') // TODO: must play "wrong" when hitting a wrong key
      $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("#line").text("Game Over, refresh the page and start over");
  startOver();
}
// Create a note on the fly
function createNote() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
    function createNoteAboveKey(elem, html) {
  
    let note = document.createElement('h6');
    note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif; display:none;";
    
    let coords = elem.getBoundingClientRect();
    if (document.querySelector("#test").clicked == true) {
      note.style.left = 45 + "%";
    } else {
    note.style.left = keyboardKeys[i].left + "%";
    }
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
    } else {
        note = null;
    }
    note.innerHTML = html;
    return note;
    }
    let note = createNoteAboveKey(elem, "o");
    // adding new notes to the list
    $('.note-list').append(note);
    notes.push(note);
  }
}

// Transform the note into a random note
function createRandomNote() {
  let randomNote = notes[Math.floor(Math.random() * 7)]
  if (randomNote) 
  randomNote.setAttribute("id", "random-note");
  randomNotes.push(randomNote)
  randomNote = randomNote || "" 
  console.log(randomNote)

  let level = $('#level');
  let test = $('#test');
  if (level) {
    staffPositionLevel();
  } else if (test) {
    staffPositionTest();
  }
}

// Add event listener to piano keyboard keys
$('button').click(function() {
  let userChosenButton = $(this).attr("id");
  userChosenButtons.push(userChosenButton);
  playSound(userChosenButton);
  checkUserChoise(userChosenButton);
})

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  randomNotes = [];
  started = false;
  createNote();
}






