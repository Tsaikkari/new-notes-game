module.exports = class Game {
  constructor(name) {
    this.name = name
    this.levels = []
    this.testLevels = []
    this.users = []
  } 
  printUserNames() {
    this.users.forEach(printName)
  }
}
const printName = user => console.log(user.name)
