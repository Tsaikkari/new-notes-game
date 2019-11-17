const BaseService = require('./base-service')
const GameModel = require('../models/game')

class GameService extends BaseService {
    model = GameModel
}

module.exports = new GameService()