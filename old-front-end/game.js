let notes = ['B', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'C'];
let keybind = ['S', 'C', 'K', 'D', 'L', 'E', 'F', 'M', 'G', 'N', 'A','O', 'B', 'Z'];

$(function () {
  setup();
  $('input[type="radio"]').change(function () {
    let checked = $('input[type="radio"]:checked').attr("id");
    if (checked == "shownote") {
      $("html").addClass("keybind");
    } else {
      $("html").removeClass("keybind");
    }
  });

  $(document).keydown(function (e) {
    let pressed = String.fromCharCode(e.which);
    if (keybind.indexOf(pressed) !== -1) {
      let index = keybind.indexOf(pressed);
      $('.key[data-note="' + notes[index] + '"]').mousedown();
      setTimeout(function () {
        $(".key").removeClass("active").unbind("mouseover");
      }, 200);
    }
  });

  notes.splice(0, 8);
  let note_element = $(".note_sheet.treble .note").children("span");

  function getNote() {
    let note = "";
    let created = false;
    let random_key = Math.round(Math.random() * 6);
    let onlyNote = notes[random_key];
    
    note = onlyNote;
    if (!created) {
      note_element.addClass('note-' + onlyNote);
    }
    removeBlackKeyNote(note);
    console.log(note)
    return [note];
  }
  // TODO: Fix
  function removeBlackKeyNote() {
    let black_key_note = $(note_element).attr("note-" + "data-note" + "#");
    if (black_key_note) {
      note_element.removeClass('note');
    }
  }

  function ambigNote(taskNote) {
    return taskNote;
  }

  let noteInfo = getNote();
  note = ambigNote(noteInfo[0]);
  // Check if the user played right or wrong
  function checkUserChoise(note, clickedNote) {
    let noteClicked = clickedNote;
    if (noteClicked == note) {
    console.log("Good");
    } else {
      console.log("wrong");
    }
  }
    
  // Clicks
  $(".key").mousedown(function () {
    let $this = $(this);
    let clickedNote = $(this).attr("data-note");
    play($this, clickedNote);
    checkUserChoise(note, clickedNote);
    noteInfo = getNote();
    note = noteInfo[0];

    $(".key").mouseover(function () {
      let $this = $(this);
      let clickedNote = $(this).attr("data-note");

    play($this, clickedNote);
    checkUserChoise(note, clickedNote);
    });

    $(document).mouseup(function () {
        $(".key").unbind("mouseover");
    });
  });
});

function setup() {
  $.each(notes, function (i, note) {
    let $key = $('<button class="key" data-bind="' + keybind[i] + '" data-note=' + note + '></button>');
    $(".keyboard").append($key);
  });
}

function animateButton(clickedNote) {
  $('.keyboard > .key').each(function () {
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
  play('wrong') 
    $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("#line").text("Game Over").addClass("game-over");
}

function play($this, name) {
let audio = new Audio("sounds/" + name + ".mp3");
$this.addClass("active");
console.log(name)
audio.play();
}








