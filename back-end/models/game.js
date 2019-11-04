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
    const game = new Game(name, users)

    game.users = users.map(User.create)

    return game
  }
}
const printName = user => console.log(user.name)
