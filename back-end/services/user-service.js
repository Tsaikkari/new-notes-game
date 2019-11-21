const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
  model = UserModel

  async playGame(user, game) {
    user.games.push(game)
    game.users.push(user)
    await user.save()
    await game.save()
  }
}

module.exports = new UserService()