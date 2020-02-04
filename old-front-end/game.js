let keybind = ["C", "D", "E", "F", "G", "A", "B"];
let notes = ["c", "d", "e", "f", "g", "a", "b"];
let level = 0;
let started = false;

$(document).keydown(function (e) {
  if (!started)
  getNote();
  started = true;
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
  note = notes[note];
  note_element.addClass(note + '-note');
  return [note];
}

function getRandomNote() {
  let note = "";
  let created = false;
  let randomKey = Math.round(Math.random() * 6);
  let randomNote = notes[randomKey];
  note = randomNote;
  if (!created) {
    note_element.addClass(randomNote + '-note');
  }
  return [note];
}

function removeNote(guessedNote) {
  note_element.removeClass(guessedNote[0] + "-note");
}

function ambigNote(taskNote) {
  return taskNote;
}

// Check if the user played right or wrong
let randomNoteInfo = getRandomNote();
let randomNote = ambigNote(randomNoteInfo[0]);

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





