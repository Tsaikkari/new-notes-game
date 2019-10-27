module.exports = class Level {
    constructor(name) {
        this.name = name
        this.users = []
    }

    levelUp(user) {
        this.user = user.name
        users.level.push(this)
    }
}