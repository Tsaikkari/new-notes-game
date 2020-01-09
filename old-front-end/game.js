let keysAvailable = [{key: 67, keyCode: c}, {key: 68, keyCode: d}, {key: 69, keyCode: e}, {key: 70, keyCode: f}, {key: 71, keyCode: g}, {key: 65, keyCode: a}, {key: 66, keyCode: b}];
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
  var aNext = $('<div>').insertAfter(a);
  a.insertAfter(b);
  b.insertBefore(aNext);
  // remove marker div
  aNext.remove();
}

// TODO: Clicking level links only swaps elements when there's a test-view on the screen and vice versa with test links.
$('.test').on('click', function() {
  var a = $('#staff' + $('#a').val());
  var b = $('#klavier' + $('#b').val());
  swapElement(a, b);
});

$('.level').on('click', function() {
  var a = $('#klavier' + $('#a').val());
  var b = $('#staff' + $('#b').val());
    swapElement(a, b);
});

$(document).keydown(function() {
  if (!started) {
    createRandomNote();
    started = true; 
    
    // Random note starts dropping down when user starts the game
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
  }
})

$(document).keydown(function(event) {
  let key = event.key || event.keyCode;
  if (event.defaultPrevented) {
    return;
  }
  for (let i = 0; i < keysAvailable.length; i++) { 
    let userChosenKey = keysAvailable[i];
    if (key === "c" || key === 67) {
      userChosenKey = keysAvailable[0] 
    } else if (key === "d" || key === 68) {
      userChosenKey = keysAvailable[1]
    } else if (key === "e" || key === 69) {
      userChosenKey = keysAvailable[2]
    } else if (key === "f" || key === 70) {
      userChosenKey = keysAvailable[3]
    } else if (key === "g" || key === 71) {
      userChosenKey = keysAvailable[4]
    } else if (key === "a" || key === 65) {
      userChosenKey = keysAvailable[5]
    } else if (key === "b" || key === 66) {
      userChosenKey = keysAvailable[6]
    }
    userChosenKeys.push(userChosenKey);
    console.log(userChosenKey);
    checkUserChoise(userChosenKey);
    playSound(userChosenKey);
  }
})

function createRandomNote() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let elem = document.getElementById(keyboardKeys[i].id);
    function createNoteAboveKey(elem, html) {
    // Put a note above a key
    let note = document.createElement('h6');
    note.setAttribute("id", "note");
    note.style.cssText = "position:absolute; font-size: 3em; font-family: 'Raleway', sans-serif;";
    
    let coords = elem.getBoundingClientRect();
    if (document.querySelectorAll(".test").clicked == true) {
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
    } else if (elem != null) {
      note = elem.value;
    }
    else {
        note = null;
    }
    note.innerHTML = html;
    notes.push(note);

    // Make random-note
    let randomNote = notes[Math.floor(Math.random() * 7)]
    if (randomNote) 
    note.setAttribute("id", "random-note");
    randomNote = randomNote || "" 
    console.log(randomNote)
    return randomNote;
    }
    let randomNote = createNoteAboveKey(elem, 'o');
    document.body.append(randomNote);
    randomNotes.push(randomNote)

    let level = $('.level');
    let test = $('.test');
    if (level) {
      staffPositionLevel(randomNote);
    } else if (test) {
      staffPositionTest(randomNote);
    }
  }
}

function checkUserChoise() {
  for (let i = 0; i < keysAvailable.length; i++) {
    userChosenKey = keysAvailable[i][0];
    note = $(this).attr("class");
    userChosenButton = $(this).attr("id");
    if (userChosenKey + " -note" === note || userChosenButton + " -note" === note) {
      createRandomNote();
    } else {
      playSound('wrong')
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      $("#keyboard").text("Game Over, refresh the page and start over");
      startOver();
    }
  }
}

// Add event listener to piano keyboard keys
$('button').click(function() {
  let userChosenButton = $(this).attr("id");
  userChosenButtons.push(userChosenButton);
  playSound(userChosenButton);
  checkUserChoise(userChosenButton);
})

//Add event listener to detect key press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  randomNotes = [];
  started = false;
}




