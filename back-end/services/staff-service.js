const BaseService = require('./base-service')
const StaffModel = require('../models/staff')

class StaffService extends BaseService {
    constructor() {
        super(StaffModel, `${__dirname}/../staff-database.json`)
    }
}

module.exports = new StaffService()