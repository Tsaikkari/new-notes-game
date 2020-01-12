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
        staffPosition = keyboardKeys[0].bottom;
      } else if (document.getElementById("random-note") === document.querySelector(".d-note")) {
          staffPosition = keyboardKeys[1].bottom;
      } else if (document.getElementById("random-note") === document.querySelector(".e-note")) {
          staffPosition = keyboardKeys[2].bottom;
      } else if (document.getElementById("random-note") === document.querySelector(".f-note")) {
          staffPosition = keyboardKeys[3].bottom;
      } else if (document.getElementById("random-note") === document.querySelector(".g-note")) {
          staffPosition = keyboardKeys[4].bottom;
      } else if (document.getElementById("random-note") === document.querySelector(".a-note")) {
          staffPosition = keyboardKeys[5].bottom;
      } else if (document.getElementById("random-note") === document.querySelector(".b-note")) {
          staffPosition = keyboardKeys[6].bottom;
      } else { 
          staffPosition = 0;
      }
      
    }
  };