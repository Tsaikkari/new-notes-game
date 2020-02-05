let keybind = ["C", "D", "E", "F", "G", "A", "B"];
let notes = ["c", "d", "e", "f", "g", "a", "b"];

$(document).keydown(function (e) {
  let pressed = String.fromCharCode(e.which);
  let index = keybind.indexOf(pressed);
  $('.key[data-note="' + notes[index] + '"]').mousedown();
  setTimeout(function () {
    $(".key").removeClass("active").unbind("mouseover");
  }, 200);
});

let note_element = $(".keyboard-container .note .key");
function getNote() {
  let note = "";
  let created = false;
  let randomKey = Math.round(Math.random() * 6);
  randomNote = notes[randomKey];
  note = randomNote;
  if (!created) {
    note_element.addClass(note + 'test-note');
  }
  console.log(note)
  return [note];
}

function removeNote(guessedNote) {
  note_element.removeClass(guessedNote[0] + "-test-note");
}

function ambigNote(taskNote) {
  return taskNote;
}

let noteInfo = getNote();
let note = ambigNote(noteInfo[0]);
// Check if the user played right or wrong
function checkUserChoise(note, clickedNote) {
  let noteClicked = clickedNote;
  if (noteClicked == note) {
   console.log("Good");
  } else {
    gameover();
  }
}

function showNote(clickedNote, note) {
  $('#keyboard > span').each(function () {
    clickedNote = $('.' + note + 'test-note');
    if (clickedNote) {
      $(note).find('span').removeClass('hidden');
    }
  })
  return randomNote;
}

$(".key").mousedown(function () {
  let $this = $(this);
  let clickedNote = $(this).attr("data-note");
  playSound($this, clickedNote);
  animateButton(clickedNote);
  getNote();
  showNote();
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









