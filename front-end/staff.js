let notes = [];
let levels = [];

class Staff {
  constructor(clef) {
    this.clef = clef
    this.staffPositions = []
  }

  representGameLevel() {
    if (clef === trebleClef) {
      level = 1
      notes = ["c", "d", "e", "f", "g", "a", "b"];
    }

    if (clef === bassClef) {
        level = 2
        notes = ["c0", "d0", "e0", "f0", "g0", "a0", "b0"];
    }
  }
}

level1 = new Staff("treble-clef")


 
 


