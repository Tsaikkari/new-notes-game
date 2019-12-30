/*function staffPositionLevel() {
// Define note's stopping point
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let startPoint = keyboardKeys[i].left + "%";
    if (startPoint === keyboardKeys[0].left + "%") {
        staffPosition = keyboardKeys[0].top1;
    } else if (startPoint === keyboardKeys[1].left + "%") {
        staffPosition = keyboardKeys[1].top1;
    } else if (startPoint === keyboardKeys[2].left + "%") {
        staffPosition = keyboardKeys[2].top1;
    } else if (startPoint === keyboardKeys[3].left + "%") {
        staffPosition = keyboardKeys[3].top1;
    } else if (startPoint === keyboardKeys[4].left + "%") {
        staffPosition = keyboardKeys[4].top1;
    } else if (startPoint === keyboardKeys[5].left + "%") {
        staffPosition = keyboardKeys[5].top1;
    } else if (startPoint === keyboardKeys[6].left + "%") {
        staffPosition = keyboardKeys[6].top1;
    } else { 
        staffPosition = 0;
    }
  }
};*/
function staffPositionLevel() {
// Define note's stopping point
  for (let i = 0; i < keyboardKeys.length; ++i) {
    if (document.getElementById("random-note") == document.querySelector(".c-note")) {        
      staffPosition = keyboardKeys[0].top;
    } else if (document.getElementById("random-note") == document.querySelector(".d-note")) {
        staffPosition = keyboardKeys[1].top;
    } else if (document.getElementById("random-note") == document.querySelector(".e-note")) {
        staffPosition = keyboardKeys[2].top;
    } else if (document.getElementById("random-note") == document.querySelector(".f-note")) {
        staffPosition = keyboardKeys[3].top;
    } else if (document.getElementById("random-note") == document.querySelector(".g-note")) {
        staffPosition = keyboardKeys[4].top;
    } else if (document.getElementById("random-note") == document.querySelector(".a-note")) {
        staffPosition = keyboardKeys[5].top;
    } else if (document.getElementById("random-note") == document.querySelector(".b-note")) {
        staffPosition = keyboardKeys[6].top;
    } else { 
        staffPosition = 0;
    }
  }
};

/*function staffPositionTest() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    let startPoint = keyboardKeys[i].left + "%";
    randomNote = this.randomNote;
    //randomNote = document.getElementById("random-note");
    if (startPoint == keyboardKeys[0].left + "%") {
      randomNote = document.querySelector(".c-note");
      startPoint = keyboardKeys[3].left + "%";
      staffPosition = keyboardKeys[0].bottom;
    } else if (startPoint == keyboardKeys[1].left + "%") {
        randomNote = document.querySelector(".d-note");
        startPoint = keyboardKeys[3].left + "%";
        staffPosition = keyboardKeys[1].bottom;
    } else if (startPoint == keyboardKeys[2].left + "%") {
        randomNote = document.querySelector(".e-note");
        startPoint = keyboardKeys[3].left + "%";
        staffPosition = keyboardKeys[2].bottom;
    } else if (startPoint == keyboardKeys[3].left + "%") {
        randomNote = document.querySelector(".f-note");
        startPoint = keyboardKeys[3].left + "%";
        staffPosition = keyboardKeys[2].bottom;
    } else if (startPoint == keyboardKeys[4].left + "%") {
        randomNote = document.querySelector(".g-note");
        startPoint = keyboardKeys[3].left + "%";
        staffPosition = keyboardKeys[4].bottom;
    } else if (startPoint == keyboardKeys[5].left + "%") {
        randomNote = document.querySelector(".a-note");
        startPoint = keyboardKeys[3].left + "%";
        staffPosition = keyboardKeys[5].bottom;
    } else if (startPoint == keyboardKeys[6].left + "%") {
        randomNote = document.querySelector(".b-note");
        startPoint = keyboardKeys[3].left + "%";
        staffPosition = keyboardKeys[6].bottom;
    } 
  }
};*/
    
    