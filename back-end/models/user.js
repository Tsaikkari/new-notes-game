module.exports = class User {
    constructor(name, levels = [], id) {
        this.name = name
        this.levels = levels
        this.id = id
        this.games = []
    }

    play(game) {
        this.games.push(game)
        game.players.push(this)
    }

    choose(level) {
        this.levels.push(level)
        game.levels.push(this)
    }

    static create({ name, levels, id }) {

        return new User(name, levels, id)
    }
}
