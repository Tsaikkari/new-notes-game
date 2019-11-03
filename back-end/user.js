module.exports = class User {
  constructor(name, level) {
    this.name = name
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