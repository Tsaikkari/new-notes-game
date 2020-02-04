let keybind = ["C", "D", "E", "F", "G", "A", "B"];
let notes = ["c", "d", "e", "f", "g", "a", "b"];

$(document).keydown(function (e) {
  getNote();
  let pressed = String.fromCharCode(e.which);
  let index = keybind.indexOf(pressed);
  $('.key[data-note="' + notes[index] + '"]').mousedown();
  setTimeout(function () {
    $(".key").removeClass("active").unbind("mouseover");
  }, 200);
});

let note_element = $(".keyboard-container .note")
function getNote() {
  let note = "";
  let created = false;
  note = notes[note];
  if (!created) {
    note_element.addClass(note + '-note');
  }
  return [note];
}

function getRandomNote(note) {
  let randomKey = Math.round(Math.random() * 6);
  let randomNote = notes[randomKey];
  note = randomNote;
  note_element.addClass(randomNote + '-note');
  return [note];
}

function removeNote(guessedNote) {
  note_element.removeClass(guessedNote[0] + "-note");
}

function ambigNote(taskNote) {
  return taskNote;
}

let randomNoteInfo = getRandomNote();
let randomNote = ambigNote(randomNoteInfo[0]);
// Check if the user played right or wrong
function checkUserChoise(randomNote, clickedNote) {
  let noteClicked = clickedNote;
  if (noteClicked == randomNote) {
   console.log("Good");
  } else {
    gameover();
  }
}

$(".key").mousedown(function () {
  let $this = $(this);
  let clickedNote = $(this).attr("data-note");
  playSound($this, clickedNote);
  animateButton(clickedNote);
  //checkUserChoise(note, clickedNote);
  //removeNote(note);
  noteInfo = getNote();
  note = noteInfo[0];

  $(".key").mouseover(function () {
    let $this = $(this);
    let clickedNote = $(this).attr("data-note");
    playSound($this, clickedNote);
    //checkUserChoise(note, clickedNote);
});

  $(document).mouseup(function () {
      $(".key").unbind("mouseover");
  });
});

function animateButton(clickedNote) {
  $('#keyboard > button').each(function () {
    $(this).css('background-color', '');
    $(this).addClass("clicked-key");
  })
  let clickedButton = $('#' + clickedNote);
  clickedButton.css('background-color', '#4897d8')
}

// game over
function gameover() {
  playSound('wrong') 
    $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("#line").text("Game Over").addClass("game-over");
}

function playSound($this, name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  $this.addClass("active");
  console.log(name)
  audio.play();
}



// This code is inspired by a React-guy in Berlin




