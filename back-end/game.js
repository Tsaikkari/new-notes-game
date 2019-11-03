module.exports = class Game {
  constructor(name, userNames = []) {
    this.name = name
    this.userNames = userNames
    this.levels = []
    this.testLevels = []
    this.users = []
  } 
  printUserNames() {
    this.users.forEach(printName)
  }
  static create({ name, userNames}) {
    return new Game(name, userNames)
  }
}
const printName = user => console.log(user.name)
