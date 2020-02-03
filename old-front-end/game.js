let keysAvailable = ["c", "d", "e", "f", "g", "a", "b"];
let level = 0;
let started = false;

// Starting the game
$(document).keydown(function () {
  if (!started)
  createNote();
  started = true;
})

function popRandomNote() {
  //localStorage.removeItem('learn');
  $('button').click(function () {
    // e.preventdefault();
    // check if its learn or exam 
    // let isLearn = localStorage.getItem('learn') ==="true";
    // if(isLearn) return ;
    let notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let randomNotes = [];
    let randomNote = notes[Math.floor(Math.random() * notes.length)];
    randomNotes.push(randomNote);
    let userClickedButton = $('.' + randomNote + '-test-note');
    if (userClickedButton){
      $(userClickedButton).find('span').removeClass('hidden');
    }
    return [randomNote];
  })
}

// Add event listener to detect which key is pressed
$(document).keydown(function (event) {
  //localStorage.setItem('learn', true);
  let userChosenKeys = [];
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
    if (userChosenKey) {
      userChosenKeys.push(userChosenKey);
      // hide the existing nodes
      $('.note-list > h6').each(function () {
        $(this).css('display', 'none');
      })
      $('#keyboard > button').each(function () {
        $(this).css('background-color', '');
        $(this).addClass("clicked-key");
      })

      let chosenElem = $('.' + userChosenKey + '-note');
      let chosenKeyboardKey = $('#' + userChosenKey);
      chosenKeyboardKey.text(event.key);
      setTimeout(function () {
        chosenKeyboardKey.removeClass("clicked-key");
      }, 1500); // TODO: duration of sound needs to match
      if (chosenKeyboardKey) chosenKeyboardKey.css('background-color', '#4897d8');
      if (chosenElem) chosenElem.css('display', 'block');
      playSound(userChosenKey);
      console.log(userChosenKey)
    } else {
    gameover()
    }
  }
})

function ambigNote(taskNote) {
  return taskNote;
}

// Check if the user played right or wrong
let randomNoteInfo = popRandomNote();
//let randomNote = ambigNote(randomNoteInfo[0]);
function checkUserChoise(randomNote, userClickedButton, userChosenButton) {
  let buttonClicked = userClickedButton;
  if (buttonClicked == randomNote) {
    if (randomNote === userChosenButton + "-note") {
      console.log("Good")
    }
  } else {
    gameover();
  }
  /*if (randomNotes[currentTone] === userChosenButtons[currentTone]) {
  }*/
}

// game over
function gameover() {
  playSound('wrong') 
    $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("#line").text("Game Over").addClass("game-over");
  startOver();
}

// Create a note on the fly
function createNote() {
  let notes = [];
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
    function createNoteAboveKey(elem, html) {
    let note = document.createElement('h6');
    note.setAttribute("id", "note");
    note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif; display:none;";
    note.style.left = keyboardKeys[i].left + "%";
    note.style.top = keyboardKeys[i].top + "%";
    note.setAttribute("class", keyboardKeys[i].class);
    note.innerHTML = html;
    return note;
    }
    let note = createNoteAboveKey(elem, "o");
    // adding new notes to the list
    $('.note-list').append(note);
    notes.push(note);
  }
}

// Add event listener to piano keyboard keys
$('button').click(function () {
  //let isLearn = localStorage.getItem('learn') === "true";
  //if (isLearn) return;

  // user should be able to see random notes
  popRandomNote();
  let userChosenButtons = [];
  let userChosenButton = $(this).attr("id");
  userChosenButtons.push(userChosenButton);
  playSound(userChosenButton);
})

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  randomNotes = [];
  notes = [];
  started = false;
}





