module.exports = class User {
  constructor(userName) {
    this.userName = userName
  }

  play(game) {
    this.game = game.name
    game.users.push(this)
  }

  skill(level) {
    this.level = level.name
    level.users.push(this)
  }
}