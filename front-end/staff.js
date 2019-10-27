class Staff {
  constructor(clef, level) {
    this.clef = clef
    this.level = level
    this.staffPositions = []
  }

  providePlaceFor(note) {
    this.note = note.name
    staffPosition.notes.push(this)
  }

  representGameLevel() {
    if (clef === trebleClef) {
      level = 1
    }

    if (clef === bassClef) {
        level = 2
    }
  }
}

staff = new Staff("treble-clef", [c1, d1, e1, f1, g1, a1, b1])


 
 


