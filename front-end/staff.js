class Staff {
  constructor(name, clef, notes = []) {
    this.name = name
    this.clef = clef
    this.notes = notes
  }

  representGameLevel() {
    if (clef === trebleClef) {
      level = level1;
      testLevel = testLevel1;
      notes = [c, d, e, f, g, a, b]; 
      testStaffPositions = [testC, testD, testE, testF, testG, testA, testB];
    }

    if (clef === bassClef) {
      level = level2;
      testLevel = testLevel2;
      notes = [c0, d0, e0, f0, g0, a0, b0]; 
      testStaffPositions = {};
    }
  }
  belongTo(game) {
    this.game = game.name
    game.levels.push(this)
  }
  
  static create({ name, clef, id }) {
    return new Staff(name, clef, id)
  }
}




 
 


