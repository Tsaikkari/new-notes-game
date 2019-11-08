module.exports = class Staff {
  constructor(name, clef, id) {
    this.name = name
    this.clef = clef
    this.id = id
    this.position = []
    this.notes = []
    this.levels = []
    this.testLevels = []
    this.staffPositions = []
  }

  representGameLevel() {
    if (clef === trebleClef) {
      level = level1;
      testLevel = testLevel1;
      notes = [c, d, e, f, g, a, b];
      staffPositions = {}; 
      testStaffPositions = {};
    }

    if (clef === bassClef) {
      level = level2;
      testLevel = testLevel2;
      notes = [c0, d0, e0, f0, g0, a0, b0];
      staffPositions = {}; 
      testStaffPositions = {};
    }
  }
  belongTo(game) {
    this.game = game.name
    game.levels.push(this)
  }
  
  static create({ name, clef }) {
    return new Staff(name, clef)
  }
}




 
 


