let keybind = ["C", "D", "E", "F", "G", "A", "B"];
let notes = ["c", "d", "e", "f", "g", "a", "b"];

$(document).keydown(function (e) {
  let pressed = String.fromCharCode(e.which);
  let index = keybind.indexOf(pressed);
  $('.key[data-note="' + notes[index] + '"]').mousedown();
  setTimeout(function () {
    $(".key").removeClass("active").unbind("mouseover");
  }, 200);
  getNote(); // TODO: add note and coords in css
  showNote();
});

let note_element = $(".keyboard-container .note .key");
function getNote() {
  let note = "";
  let created = false;
  note = notes[note];
  if (!created) {
    note_element.addClass(note + '-note');
  }
  return [note];
}

function getRandomNote() {
  let randomKey = Math.round(Math.random() * 6);
  let randomNote = notes[randomKey];
  return randomNote;
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

function showNote(index) {
  $('.key[data-note="' + notes[index] + '-note' + '"]').each(function () {
    $(this).css({'left': '', 'top': ''});
    let note = notes[note];
  });
  return note;
}

function showRandomNote(clickedNote, randomNote) {
  $('#keyboard > span').each(function () {
    clickedNote = $('.' + randomNote + 'test-note');
    if (clickedNote) {
      $(randomNote).find('span').removeClass('hidden');
    }
  })
  return randomNote;
}

$(".key").mousedown(function () {
  let $this = $(this);
  let clickedNote = $(this).attr("data-note");
  playSound($this, clickedNote);
  animateButton(clickedNote);
  getRandomNote();
  showRandomNote();
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
    $(this).css({'background-color': '', 'box-shadow': ''});
    $(this).addClass("clicked-key");
  })
  let clickedButton = $('#' + clickedNote);
  clickedButton.css({'background-color': '#4897d8', 'box-shadow': '0 0 20px white'});
  setTimeout(function () {
    $('#' + clickedNote).removeClass("clicked-key");
    $(clickedButton).css({'background-color': 'none', 'box-shadow': 'none'})
  }, 1500);
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









