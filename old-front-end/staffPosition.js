// Define note's stopping point
function staffPositionLevel() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (document.getElementById("random-note") == document.querySelector(".c-note")) {        
      staffPosition = keyboardKeys[0].top;
    } else if (document.getElementById("random-note") === document.querySelector(".d-note")) {
        staffPosition = keyboardKeys[1].top;
    } else if (document.getElementById("random-note") === document.querySelector(".e-note")) {
        staffPosition = keyboardKeys[2].top;
    } else if (document.getElementById("random-note") === document.querySelector(".f-note")) {
        staffPosition = keyboardKeys[3].top;
    } else if (document.getElementById("random-note") === document.querySelector(".g-note")) {
        staffPosition = keyboardKeys[4].top;
    } else if (document.getElementById("random-note") === document.querySelector(".a-note")) {
        staffPosition = keyboardKeys[5].top;
    } else if (document.getElementById("random-note") === document.querySelector(".b-note")) {
        staffPosition = keyboardKeys[6].top;
    } else { 
        staffPosition = 0;
    }
  }
};

function staffPositionTest() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (document.getElementById("random-note") === document.querySelector(".c-note")) {        
      staffPosition = keyboardKeys[0].top - 500;
    } else if (document.getElementById("random-note") === document.querySelector(".d-note")) {
        staffPosition = keyboardKeys[1].top - 480;
    } else if (document.getElementById("random-note") === document.querySelector(".e-note")) {
        staffPosition = keyboardKeys[2].top - 460;
    } else if (document.getElementById("random-note") === document.querySelector(".f-note")) {
        staffPosition = keyboardKeys[3].top - 440;
    } else if (document.getElementById("random-note") === document.querySelector(".g-note")) {
        staffPosition = keyboardKeys[4].top - 420;
    } else if (document.getElementById("random-note") === document.querySelector(".a-note")) {
        staffPosition = keyboardKeys[5].top - 400;
    } else if (document.getElementById("random-note") === document.querySelector(".b-note")) {
        staffPosition = keyboardKeys[6].top - 380;
    } else { 
        staffPosition = 0;
    }
    
  }
};