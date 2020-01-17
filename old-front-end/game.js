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

$(".levels-tests").click(function() {
  $("#wrap").hide();
})

$(".menu").click(function() {
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
$('#level').on('click', function() {
  let a = $('#staff' + $('#a').val());
  let b = $('#klavier' + $('#b').val());
  b.css('background-color', '#f5ca99');
  swapElement(a, b);
  $('#klavier').show();
  $('#staff').show();
  $('.menu').show();
});

$('#test').on('click', function() {
  let a = $('#klavier' + $('#a').val());
  let b = $('#staff' + $('#b').val());
  a.css('background-color', 'grey');
  swapElement(a, b);
  $('#staff').show();
  $('#klavier').show();
  $('.menu').show();
});

// Starting the game
$(document).keydown(function() {
  if (!started)
  createNote();
  started = true;
})

$("button").on('click', function() {
  createRandomNote();
  if (randomNote)
  console.log(randomNote) 
  let elem = document.getElementById("random-note"); 
  console.log(randomNote) 
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

if (staffPositionTest()) {
  for (let i = 0; i < keyboardKeys.length; i++) {
    if (keyboardKeys[0].top) {
      keyboardKeys.top = 50
    } else if (keyboardKeys[1].top) {
      keyboardKeys.top = 50
    } else if (keyboardKeys[2].top) {
      keyboardKeys.top = 50
    } else if (keyboardKeys[3].top) {
      keyboardKeys.top = 50
    } else if (keyboardKeys[4].top) {
      keyboardKeys.top = 50
    } else if (keyboardKeys[5].top) {
      keyboardKeys.top = 50
    } else if (keyboardKeys[6].top) {
      keyboardKeys.top = 50
    }
  }
}
    
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
    if (userChosenKey){
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
      if (chosenKeyboardKey) 
      chosenKeyboardKey.css('background-color', '#fe7a47');
      chosenKeyboardKey.text(event.key);
      setTimeout(function() {
        chosenKeyboardKey.removeClass("clicked-key");
      }, 2500); // TODO: duration of sound needs to match
      if (chosenElem) chosenElem.css('display', 'block');
      playSound(userChosenKey);
      checkUserChoise(userChosenKey);
      console.log(userChosenKey)
    } else {
    gameover()
    }
  }
})

// TODO: must play "wrong" when hitting a wrong button
// Check if the user played right or wrong
function checkUserChoise(currentTone) {
  for (let i = 0; i < keysAvailable.length; i++) {
    this.randomNote = $("#random-note").attr("class");
    this.userChosenKey = keysAvailable[i];
    this.userChosenButton = $("button").attr("id");
    if (randomNotes[currentTone] === userChosenKeys[currentTone]) {
      if (randomNote === userChosenKey + "-note" && randomNote === userChosenButton + "-note") {
        console.log(userChosenKey)
      }
    } else {
      gameover()
    }
  }
}

// game over
function gameover(){
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
    
    let coords = elem.getBoundingClientRect();
    note.style.left = keyboardKeys[i].left + "%";
    note.style.top = keyboardKeys[i].top + "px";
    if (note.style.left === keyboardKeys[0].left + "%" && note.style.top === keyboardKeys[0].top + "px") {
      note.setAttribute("class", "c-note");
    } else if (note.style.left === keyboardKeys[1].left + "%" && note.style.top === keyboardKeys[1].top + "px") {
      note.setAttribute("class", "d-note");
    } else if (note.style.left === keyboardKeys[2].left + "%" && note.style.top === keyboardKeys[2].top + "px") {
        note.setAttribute("class", "e-note");
    } else if (note.style.left === keyboardKeys[3].left + "%" && note.style.top === keyboardKeys[3].top + "px") {
        note.setAttribute("class", "f-note");
    } else if (note.style.left === keyboardKeys[4].left + "%" && note.style.top === keyboardKeys[4].top + "px") {
        note.setAttribute("class", "g-note");
    } else if (note.style.left === keyboardKeys[5].left + "%" && note.style.top === keyboardKeys[5].top + "px") {
        note.setAttribute("class", "a-note");
    } else if (note.style.left === keyboardKeys[6].left + "%" && note.style.top === keyboardKeys[6].top + "px") {
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
  let randomNote = notes[Math.floor(Math.random() * 7)];
  if (randomNote) notes = $('.note-list > h6').each(function () {
    $(this).css('display', 'block');
    randomNote.setAttribute("id", "random-note");
    randomNote.setAttribute("class", $('button').attr('id') + '-note');
  })
  for (let i = 0; i < keyboardKeys.length; i++) {
    randomNote.style.left = 20 + "%";
    randomNote.style.top = keyboardKeys[i].top + "px";
  }
  randomNotes.push(randomNote)
  console.log(randomNote)
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
  
}







