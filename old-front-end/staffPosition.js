
function staffPositionTest() {
    let randomNote = document.getElementById("random-note")
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if ( randomNote === document.querySelector(".c-note")) {        
    staffPosition = 150;
    } else if (randomNote === document.querySelector(".d-note")) {
        staffPosition = 150;
    } else if (randomNote === document.querySelector(".e-note")) {
        staffPosition = 150;
    } else if (randomNote === document.querySelector(".f-note")) {
        staffPosition = 150;
    } else if (randomNote === document.querySelector(".g-note")) {
        staffPosition = 150;
    } else if (randomNote === document.querySelector(".a-note")) {
        staffPosition = 150;
    } else if (randomNote === document.querySelector(".b-note")) {
        staffPosition = 150;
    } else { 
        staffPosition = 0;
    }
  }
};