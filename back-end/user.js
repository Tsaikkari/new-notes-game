module.exports = class User {
  constructor(userName, level) {
    this.userName = userName
    this.level = level
  }

  play(game) {
    this.game = game.name
    game.users.push(this)
  }

  choose(level) {
    this.level = level.name
    user.levels.push(this)
  }
}