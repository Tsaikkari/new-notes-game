// TODO: Fix this
function staffPositionTest() {
  for (let i = 0; i < keyboardKeys.length; i++) {
    if (document.getElementById("random-note") === document.querySelector(".c-note")) {
        staffPosition = 100;
    } else if (document.getElementById("random-note") === document.querySelector(".d-note")) {
        staffPosition = 100;
    } else if (document.getElementById("random-note") === document.querySelector(".e-note")) {
        staffPosition = 100;
    } else if (document.getElementById("random-note") === document.querySelector(".f-note")) {
        staffPosition = 100;      
    } else if (document.getElementById("random-note") === document.querySelector(".g-note")) {
        staffPosition = 100;    
    }  else if (document.getElementById("random-note") === document.querySelector(".a-note")) {
        staffPosition = 100;     
    } else if (document.getElementById("random-note") === document.querySelector(".b-note")) {
        staffPosition = 100;     
    } else { 
        staffPosition = 0;
    }
  }
}
