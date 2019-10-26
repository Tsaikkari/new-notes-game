
 
window.onload = function noteFalls() {
    var elem = document.getElementById("note")
    var pos = 0;
    var id = this.setInterval(frame, 1)
    var repetition = setTimeout(noteFalls, 80);
      if (repetition == 198) {
          clearTimeout(repetition);
      }

      function frame() {
          if (pos === 200) {
              clearInterval(id);
          } else {
              pos++;
              elem.style.top = pos + 'px';
          }
      }
}

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

  /*playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }*/

  
