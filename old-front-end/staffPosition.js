
function staffPositionTest() {
    let randomNote = document.getElementById("random-note")
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if ( randomNote === document.querySelector(".c-note")) {        
    staffPosition = keyboardKeys[7](keyboardKeys[0].top);
    } else if (randomNote === document.querySelector(".d-note")) {
        staffPosition = keyboardKeys[7](keyboardKeys[1].top);
    } else if (randomNote === document.querySelector(".e-note")) {
        staffPosition = keyboardKeys[7](keyboardKeys[2].top);
    } else if (randomNote === document.querySelector(".f-note")) {
        staffPosition = keyboardKeys[7](keyboardKeys[3].top);
    } else if (randomNote === document.querySelector(".g-note")) {
        staffPosition = keyboardKeys[7](keyboardKeys[4].top);
    } else if (randomNote === document.querySelector(".a-note")) {
        staffPosition = keyboardKeys[7](keyboardKeys[5].top);
    } else if (randomNote === document.querySelector(".b-note")) {
        staffPosition = keyboardKeys[7](keyboardKeys[6].top);
    } else { 
        staffPosition = 0;
    }
  }
};