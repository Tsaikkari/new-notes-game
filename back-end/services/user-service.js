const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = PersonModel

    async playGame(user, game) {
        user.games.push(game)
        game.players.push(user)
        await user.save()
        await game.save()
    }
}


module.exports = new UserService()