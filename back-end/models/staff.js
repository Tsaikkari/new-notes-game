const mongoose = require('mongoose')

const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  clef: {
    type: String,
    required: true
  },
  notes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note'
  }],
  games: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Game',
    autopopulate: {
        maxDepth: 1
    }
  }],
  startPoints: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note'
  }],
  staffPositions: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note'
  }],
  testStaffPositions: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note'
  }]
})

StaffSchema.plugin(require('mongoose-autopopulate'))

const StaffModel = mongoose.model('Staff', StaffSchema)

module.exports = StaffModel
