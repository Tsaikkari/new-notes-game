let notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
let keybind = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let score = 0;

$(function () {
  $('input[type="radio"]').change(function () {
    let checked = $('input[type="radio"]:checked').attr("id");
    if (checked == "shownote") {
      $("button > span").attr("key-name");
    } else {
      $("button > span").removeClass("key-name");
    }
  });

  $(document).keydown(function (e) {
    let pressed = String.fromCharCode(e.which);
    if (keybind.indexOf(pressed) !== -1) {
      let index = keybind.indexOf(pressed);
      $('.key[data-note="' + notes[index] + '"]').mousedown();
      setTimeout(function () {
        $(".key").removeClass("active").unbind("mouseover");
      }, 20);
    }
  });

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
    console.log(note)
    return [note];
  }

  function ambigNote(taskNote) {
    return taskNote;
  }

  let noteInfo = getNote();
  note = ambigNote(noteInfo[0]);
  let notes_score = $('#notes_score');
  notes_score.innerHTML = score;
  
  // Check if the user played right or wrong
  function checkUserChoise(note, clickedNote) {
    let noteClicked = clickedNote;
    if (noteClicked == note) {
      score+=1;
      console.log(score);
      console.log("Good");
    } else {
      score-=1;
      console.log("wrong");
      $('.key').addClass("clicked-button");
      setTimeout(function() {
        $('.key').removeClass("clicked-button");
      }, 1000);
    }
  }

  // Clicks
  $(".key").mousedown(function () {
    let $this = $(this);
    let clickedNote = $(this).attr("data-note");
    play($this, clickedNote);
    animateButton(clickedNote);
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

function animateButton() {
  let colored_button = $('.key');
  setTimeout(function () {
    $('.key').removeClass("active");
    $(colored_button).css({'background-color': 'none', 'box-shadow': 'none'})
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









