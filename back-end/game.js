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
}
const printName = user => console.log(user.name)
