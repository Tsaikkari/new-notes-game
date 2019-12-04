// Random note starts dropping down when user starts the game
export const event = (() => {
  let started = false;
  let keysAvailable = [];
  let gameNotes = [];
  document.addEventListener("keydown", function() {
    if (!started) {
      nextNote();
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
        document.addEventListener('keydown', userClickedKeys);
      }
    }
  })
  function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  };
})       

    