
function staffPositionTest() {
    let randomNote = document.getElementById("random-note")
    if (randomNote) 
    randomNote.css('display', 'block');
    console.log(randomNote)
    for (let i = 0; i < keyboardKeys.length; i++) {
        if ( randomNote === document.querySelector(".c-note")) {        
        staffPosition = keyboardKeys[0].staffPosition
        } else if (randomNote === document.querySelector(".d-note")) {
            staffPosition = keyboardKeys[1].staffPosition
        } else if (randomNote === document.querySelector(".e-note")) {
            staffPosition = keyboardKeys[2].staffPosition
        } else if (randomNote === document.querySelector(".f-note")) {
            staffPosition = keyboardKeys[3].staffPosition
        } else if (randomNote === document.querySelector(".g-note")) {
            staffPosition = keyboardKeys[4].staffPosition
        } else if (randomNote === document.querySelector(".a-note")) {
            staffPosition = keyboardKeys[5].staffPosition
        } else if (randomNote === document.querySelector(".b-note")) {
            staffPosition = keyboardKeys[6].staffPosition
        } else { 
            staffPosition = 0;
        }
    }
}
