let startPoint = [];// find out
let userClickedKeys = [];
let started = false;

document.querySelector(".btn-danger").addEventListener("click", function() {
  nextNote();
  started = true;
})
// how to get this working inside the event listener function?
if (started = true) {
  window.onload = function noteFall() {
    var elem = document.getElementById("note");
    var pos = 0;
    startPoint = this.startPoint; // note's starting point at the screen above corresponding keyboard key (button)
    var id = setInterval(frame, 10);
    
    function frame() {
      if (pos === 500) { //500 is at a moment a placeholder for staffPositions
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
      }
    }
  }
}
 
/*write a (function() {
  let userChosenKey = 
  userClickedKeys.push(userChosenKey);
  playSound(userChosenKey);
})*/

function nextNote(randomNote) {
  userClickedKeys = [];
  var randomNumber = Math.floor(Math.random() * 7);
  var randomNote = notes[randomNumber]
  gameNotes.push(randomNote)
      
    if (gameNotes === userClickedKeys) {
      goTo();
      nextNote();
    } else {
      playSound("wrong")
    }
}

 function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0
  gameNotes = []
  started = false
}

  /*function playSound(key) {
    switch(key) {
      case "c":
        var c = new Audio("sounds/c.mp3")
        c.play();
      break;
      case "d":
        var d = new Audio("sounds/d.mp3")
        d.play();
      break;
      case "e":
        var e = new Audio("sounds/e.mp3")
        e.play();
      break;
      case "f":
        var f = new Audio("sounds/f.mp3")
        f.play();
      break;
      case "g":
        var g = new Audio("sounds/g.mp3")
        g.play();
      break;
      case "a":
        var a = new Audio("sounds/a.mp3")
        a.play();
      break;
      case "b":
        var b = new Audio("sounds/b.mp3")
        b.play();
      break;
      case "wrong":
        var wrong = new Audio("sounds/wrong.mp3")
        wrong.play();
      break;
      default: console.log(key);
    }
  }*/



  

  
