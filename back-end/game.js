module.exports = class Game {
  constructor(name, levels = '') {
    this.name = name
    this.levels = levels
    this.users = []
  } 

  printUserNames() {
    this.users.forEach(printName)
  }
}

const printName = user => console.log(user.name)
