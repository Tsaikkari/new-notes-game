function staffPositionLevel() {
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
};

function StaffPositionTest() {
  for (let i = 0; i < keyboardKeys.length; ++i) {
    startPoint = keyboardKeys[3].left + "%";
    let randomNote = keyboardKeys[i].id;
    if (randomNote === keyboardKeys[0].id) {
      staffPosition = keyboardKeys[0].top2;
    } else if (randomNote === keyboardKeys[1].id) {
        staffPosition = keyboardKeys[1].top2;
    } else if (randomNote === keyboardKeys[2].id) {
        staffPosition = keyboardKeys[2].top2;
    } else if (randomNote === keyboardKeys[3].id) {
        staffPosition = keyboardKeys[3].top2;
    } else if (randomNote === keyboardKeys[4].id) {
        staffPosition = keyboardKeys[4].top2;
    } else if (randomNote === keyboardKeys[5].id) {
        staffPosition = keyboardKeys[5].top2;
    } else if (randomNote === keyboardKeys[6].id) {
        staffPosition = keyboardKeys[6].top2;
    } else { 
        staffPosition = 0;
    }
  }   
}