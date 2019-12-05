let startPoints = { "c": (x = 349, y = 0), "d": (x = 440, y = 0),"e": (x = 525, y = 0), "f": (x = 615, y = 0), "g": (x = 707, y = 0), "a": (x= 794, y = 0), "b": (x = 880, y = 0) }
let keysAvailable = {'99': 'c', '100': 'd', '101': 'e', '102': 'f','103': 'g', '97': 'a', '98': 'b'};
let gameNotes = [];
let level = 0;
let started = false;

// Hides game introduction when level or test is clicked
$(".nav-link").on("click", function() {
  $("#intro").hide();
})

$("#menu").on("click", function() {
  $("#intro").show();
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
    var a = $('#klavier' + $('#a').val());
    var b = $('#staff' + $('#b').val());
    swapElement(a, b);
  });

  $('.level').on('click', function() {
    var a = $('#staff' + $('#a').val());
    var b = $('#klavier' + $('#b').val());
      swapElement(a, b);
  });

// Random note starts dropping down when user starts the game
$(document).keydown(function() {
  if (!started) {
    startingUp();
    started = true; 
    var elem = document.getElementById("note");
    var pos = 0;
    var id = setInterval(frame, 20);

    function frame() {
      if (pos === this.staffPosition) { 
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
      }
    }
  }
})

nextNote();

function startingUp() {
for (let i = 0; i < startPoints.length; i++) {
  let startPoint = startPoints[i].document.elementFromPoint(x, y);
  gameNotes.push(startNote);
  if (startPoint === "c") {
    staffPosition = 550;
  } else if (startPoint === "d") {
    staffPosition = 540;
  } else if (startPoint === "e") {
    staffPosition = 528;
  } else if (startPoint === "f") {
    staffPosition = 513;
  } else if (startPoint === "g") {
    staffPosition = 500;
  } else if (startPoint === "a") {
    staffPosition = 487;
  } else if (startPoint === "b") {
    staffPosition = 473;
  }
}
}
  
/*let userClickedKeys = (function(event) {
  let keycode = event.which || event.keyCode
  let userChosenKey = keysAvailable[keycode]
  playSound(userChosenKey);
})
$(document).on('keydown', userClickedKeys);*/

function nextNote() {
  var randomNumber = Math.floor(Math.random() * 7);
  var randomNote = keysAvailable[randomNumber]
  gameNotes.push(randomNote)

  let userClickedKeys = (function(event) {
    let keycode = event.which || event.keyCode
    let userChosenKey = keysAvailable[keycode]
      if (randomNote === userChosenKey) {
        playSound(userChosenKey);
        nextNote();
      } else {
        playSound("wrong")
      }
  })
  $(document).on('keydown', userClickedKeys);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Add event listener to piano keyboard keys
let numberOfKeys = document.querySelectorAll(".key").length;
for (let i = 0; i < numberOfKeys; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

/*function playSound(button) {
  switch(button) {
    case "c":
      let c = new Audio("sounds/c.mp3");
      c.play();
      break;
      case "d":
        let d = new Audio("sounds/d.mp3");
        d.play();
      break;
      case "e":
        let e = new Audio("sounds/e.mp3");
        e.play();
      break;
      case "f":
        let f = new Audio("sounds/f.mp3");
        f.play();
      break;
      case "g":
        let g = new Audio("sounds/g.mp3");
        g.play();
      break;
      case "a":
        let a = new Audio("sounds/a.mp3");
        a.play();
      break;
      case "b":
        let b = new Audio("sounds/b.mp3");
        b.play();
      break;
      case "*":
        let wrong = new Audio("sounds/wrong.mp3")
        wrong.play();
      break;
      default: console.log(key)
    }
  }*/ 

function startOver() {
  level = 0
  randomNotes = []
  started = false
}
