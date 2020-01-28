let keysAvailable = ["c", "d", "e", "f", "g", "a", "b"];
let notes = [];
let randomNotes = [];
let userChosenKeys = [];
let userChosenButtons = [];
let level = 0;
let started = false;

$('#staff').hide();
$('#klavier').hide();
$('.menu').hide();

$(".levels-tests").click(function () {
  $("#wrap").hide();
})

$(".menu").click(function () {
  $("#wrap").show();
  $('#staff').hide();
  $('#klavier').hide();
  $('.menu').hide();
  $('h6').hide();
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
$('#level').on('click', function () {
  localStorage.setItem('learn', true)
  let a = $('#staff' + $('#a').val());
  let b = $('#klavier' + $('#b').val());
  b.css('background-color', '#f8a055');
  swapElement(a, b);
  $('#klavier').show();
  $('#staff').show();
  $('.menu').show();
  $('#cheering').text("Let's play! Press the C, D, E, F, G, A, or B key on your keyboard.")
});

$('#test').on('click', function () {
  localStorage.removeItem('learn')
  let a = $('#klavier' + $('#a').val());
  let b = $('#staff' + $('#b').val());
  a.css('background-color', '#bcbabe');
  swapElement(a, b);
  $('#ledger-line').hide();
  $('#staff').show();
  $('#klavier').show();
  $('.menu').show();
  $('#cheering').text('Press any keaboard key on the screen to start.');
  calcNewTopCoords();
  dropRandomNote();
  createNote();
  createRandomNote();
});

// Starting the game
$(document).keydown(function () {
  if (!started)
  createNote();
  started = true;
})

function dropRandomNote() {
  $('button').click(function (e) {
    // e.preventdefault();
    // check if its learn or exam 
    // let isLearn = localStorage.getItem('learn') ==="true";
    // if(isLearn) return ;
          let notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
          let getRandomNote = notes[Math.floor(Math.random() * notes.length)];

    let userClickedButton = $('.' + getRandomNote+ '-test-note');
    if (userClickedButton){
      // let note = createNoteAboveKey(userClickedButton, "o");
      // adding new notes to the list
      $(userClickedButton).find('span').removeClass('hidden');
    }
    let elem = document.getElementById("random-note"); 
    let pos = 0
<<<<<<< HEAD
    let id = setInterval(frame, 5);
=======
    let id = setInterval(frame, 50);
>>>>>>> cb1dde05f0d0badace9347f561f9a4116baeee39
    
    function frame() {
      staffPosition = this.staffPosition;
      if (pos === staffPosition) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
      }
    }
  })
} 

// Add event listener to detect which key is pressed
$(document).keydown(function (event) {
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
      if (chosenKeyboardKey) {
        chosenKeyboardKey.css('background-color', '#4897d8');
        chosenKeyboardKey.text(event.key);
      }
      setTimeout(function () {
        chosenKeyboardKey.removeClass("clicked-key");
      }, 2500); // TODO: duration of sound needs to match
      if (chosenElem) chosenElem.css('display', 'block');
      playSound(userChosenKey);
      console.log(userChosenKey)
    } else {
    gameover()
    }
  }
})

// TODO: must play "wrong" when hitting a wrong button
// Check if the user played right or wrong
function checkUserChoise(currentTone) {
  let randomNote = this.randomNote;
  let userChosenButton = this.userChosenButton;
  if (randomNotes[currentTone] === userChosenButtons[currentTone]) {
    if (randomNote === userChosenButton + "-note") {
      console.log("Good")
    }
  } else {
  gameover()
  }
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
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
    function createNoteAboveKey(elem, html) {
    let note = document.createElement('h6');
    note.setAttribute("id", "note");
    note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif; display:none;";
    
    note.style.left = keyboardKeys[i].left + "%";
    note.style.top = keyboardKeys[i].top + "px";
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

function calcNewTopCoords() {
  for (let i = 0; i < keyboardKeys.length; i++) {
    keyboardKeys[i].top = keyboardKeys[i].top - 299;
   // staffPosition = keyboardKeys[i].top;
    console.log(keyboardKeys);
    //console.log(staffPosition);
    //break;
  }
}


/*function defStaffPosition() {
  for (let i = 0; i < keyboardKeys.length; i++) {
    if (document.getElementById("random-note") == document.querySelector(".c-note")) {        
      staffPosition = keyboardKeys[0].top;
    } else if (document.getElementById("random-note") == document.querySelector(".d-note")) {
      staffPosition = keyboardKeys[1].top;
    } else if (document.getElementById("random-note") == document.querySelector(".e-note")) {
      staffPosition = keyboardKeys[2].top;
    } else if (document.getElementById("random-note") == document.querySelector(".f-note")) {
      staffPosition = keyboardKeys[3].top;
    } else if (document.getElementById("random-note") == document.querySelector(".g-note")) {
      staffPosition = keyboardKeys[4].top;
    } else if (document.getElementById("random-note") == document.querySelector(".a-note")) {
      staffPosition = keyboardKeys[5].top;
    } else if (document.getElementById("random-note") == document.querySelector(".b-note")) {
      staffPosition = keyboardKeys[6].top;
    } else { 
        staffPosition = 0;
    }
  }
}*/

function createRandomNote() {
  //defStaffPosition();
  let randomNote = notes[Math.floor(Math.random() * 7)];
  if (randomNote) {
    randomNote.setAttribute("id", "random-note");
    randomNote.style.left = 18 + "%";
    let staffPosition;
    for (let i = 0; i < keyboardKeys.length; i++) {
      randomNote.style.top = keyboardKeys[i].top + "px";
      if ($('h6').attr('class') === document.querySelectorAll('.' + keyboardKeys[i].class) && $('#random-note')) {
        staffPosition = randomNote.style.top;
        console.log(staffPosition)
      }
    }
  }
  randomNotes.push(randomNote);
  console.log(randomNote)
}

  
// Add event listener to piano keyboard keys
$('button').click(function () {
  let isLearn = localStorage.getItem('learn') === "true";
  if (isLearn) return;

  // user should be able to see random notes
  dropRandomNote()
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
  notes = [];
  started = false;
}





