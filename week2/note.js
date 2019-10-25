module.exports = class Note {
    constructor(name, startPoint, staffPosition, staffs) {
        this.name = name
        this.startPoint = startPoint
        this.staffPosition = staffPosition
        this.staffs = []
    }

    belongTo(staff) {
        this.staffs.push(staff)
        staff.gameNotes.push(this)
    }

    nextNote(randomNote) {
        var randomNumber = Math.floor(Math.random() * 7);
        var randomNote = notes[randomNumber]
        gameNotes.push(randomNote)
        
        if (gameNotes === userChosenKeys) {
          belongTo();
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
