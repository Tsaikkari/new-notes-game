const mongoose = require('mongoose')

const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  clef: {
    name: String,
    required: true
  },
  notes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note',
    autopopulate: {
        maxDepth: 1
    }
  }],
  startPoints: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note',
    autopopulate: {
        maxDepth: 1
    }
  }],
  staffPositions: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note',
    autopopulate: {
        maxDepth: 1
    }
  }],
  testStaffPositions: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Note',
    autopopulate: {
        maxDepth: 1
    }
  }]
})

StaffSchema.plugin(require('mongoose-autopopulate'))

const StaffModel = mongoose.model('Staff', StaffSchema)

module.exports = StaffModel
