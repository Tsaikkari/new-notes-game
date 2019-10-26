Note = class {
    constructor(name, startPoint, staffPosition) {
        this.name = name
        this.startPoint = startPoint
        this.staffPosition = staffPosition
    }

    goTo(staff) {
        this.staffs.push(staff)
        staff.gameNotes.push(this)
    }

    nextNote(randomNote) {
        var randomNumber = Math.floor(Math.random() * 7);
        var randomNote = notes[randomNumber]
        gameNotes.push(randomNote)
        
        if (gameNotes === userChosenKeys) {
          goTo();
          nextNote();
        } else {
          playSound("wrong")
        }
    }

    startOver() {
        level = 0
        gameNotes = []
        started = false
    }
}
