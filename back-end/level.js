module.exports = class Level {
    constructor(name) {
        this.name = name
        this.users = []
    }

    levelUp(game) {
        this.game = game
        game.levels.push(this)
    }
}