module.exports = class Game {
    constructor(name, levels = [], tests = [], players = [], games = [], id) {
        this.name = name
        this.levels = levels
        this.tests = tests
        this.players = players
        this.games = games
        this.id = id
    }

    report() {
        console.log((this.name), 'number of players', this.players.length)
    }

    static create({ name, levels, tests, players, games, id }) {
        return new Game(name, levels, tests, players, games, id)
    }
}