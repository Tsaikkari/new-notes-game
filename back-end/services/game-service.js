const BaseService = require('./base-service')
const GameModel = require('../models/game')
const StaffModel = require('../models/staff')

class GameService extends BaseService {
    model = GameModel
}

module.exports = new GameService()