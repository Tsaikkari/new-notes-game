module.exports = class Staff {
    constructor(clef, notes) {
        this.clef = clef
        this.notes = []
        this.gameNotes = []
    }

    showNotesPosition() {
        this.gameNotes.forEach(notePosition)
    }
}

notePosition = note => console.log(note.staffPosition);
