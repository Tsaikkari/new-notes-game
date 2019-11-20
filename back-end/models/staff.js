const mongoose = require('mongoose')

const StaffSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  clef: {
    type: mongoose.SchemaTypes.ObjectId, 
    required: true
  },
  notes: [{
    type: mongoose.SchemaTypes.ObjectId, 
    required: true
  }],
  startPoints: [{
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  }],
  staffPositions: [{
    type: mongoose.SchemaTypes.ObjectId, 
    required: true
  }],
  testStaffPositions: [{
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  }]
})






 
 


