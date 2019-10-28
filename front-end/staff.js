let notes = [];
let levels = [];
let staffPositions = []

class Staff {
  constructor(name, clef) {
    this.name = name
    this.clef = clef
  }

  representGameLevel() {
    if (clef === trebleClef) {
      level = level1;
      notes = [c, d, e, f, g, a, b];
      staffPositions = {}; //find out
    }

    if (clef === bassClef) {
      level = level2;
      notes = [c0, d0, e0, f0, g0, a0, b0];
      staffPositions = {}; //find out
    }
  }
}

const level1 = new Staff("level1", "trebleClef")
const level2 = new Staff("level2", "bassClef")


 
 


