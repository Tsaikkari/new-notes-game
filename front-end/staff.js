class Staff {
  constructor(clef, level) {
    this.clef = clef
    this.level = level
  }

  providePlaces(staffPosition) {
    this.staffPosition = staffPosition
    staffPosition.note.push(this)
    staffPosition.clef.push(this)
  }

  representGameLevel() {
    if (clef === trebleClef) {
      level = Level1
    }

    if (clef === bassClef) {
        level = Level2
    }
  }
}

staff = new Staff("treble-clef", [c1, d1, e1, f1, g1, a1, b1])


 
 


