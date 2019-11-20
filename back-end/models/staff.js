class Staff {
  constructor(name, clef, notes = [], startPoints = [], staffPositions = [], testStaffPositions = []) {
    this.name = name
    this.clef = clef
    this.notes = notes
    this.startPoints = startPoints
    this.staffPositions = staffPositions
    this.testStaffPositions = testStaffPositions
  }

  belongTo(game) {
    this.game = game.name
    game.levels.push(this)
  }
  
  static create({ name, clef, notes, startPoints, staffPositions, testStaffPositions }) {
    return new Staff(name, clef, notes, startPoints, staffPositions, testStaffPositions)
  }
}




 
 


