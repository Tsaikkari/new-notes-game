var notes = ["c", "d", "e", "f", "g", "a", "b"];
var gameNotes = [];
var userChosenKeys = [];
var started = false;

// game start when user clicks start button
document.querySelector(".btn-danger").addEventListener("click", function() {
    window.onload = function noteFalls() {
    var elem = document.getElementById("notes-route")
    var pos = 0;
    var startPoint = this.startPoint; // above the corresponding key
    };

      function frame() {
          if (pos === staffPosition) {
              clearInterval(id);
          } else {
              pos++;
              elem.style.top = pos + 'px';
          }
      }
})

started = true;

document.addEventListener("keydown", function(event) {
  function playSound(key) {
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
  }

  playSound(event.key);
})

/*var userChosenKey = document.querySelector(this).setAttribute("id");
userChosenKeys.push(userChosenKey);*/



  /*playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }*/

  
