module.exports = class Game {
  constructor(name, users = []) {
    this.name = name
    this.users = users
    this.levels = []
    this.testLevels = []  
  } 
  printUserNames() {
    this.users.forEach(printName)
  }
  static create({ name, users }) {

    return new Game(name, users)
  }
}
const printName = user => console.log(user.name)
