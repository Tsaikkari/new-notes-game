const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async playGame(user, game) {
        user.games.push(game)
        game.players.push(user)
        await user.save()
        await game.save()
    }

    async chooseLevel(user, level) {
        this.levels.push(level)
        game.levels.push(this)
        await user.save()
        await level.save()
    }
}

module.exports = new UserService()