const BaseService = require('./base-service')
const StaffModel = require('../models/staff')

class StaffService extends BaseService {
  model = StaffModel

async belongTo(staff, game) {
  staff.games.push(staff)
  game.staffs.push(staff)
  await staff.save()
  await game.save()
  }
}

module.exports = new StaffService()
