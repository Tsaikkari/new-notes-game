const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  startPoint: {
    type: Number, 
    required: true, 
    ref: 'Staff'
  },
  staffPosition: {
    type: Number, 
    required: true, 
    ref: 'Staff'
  },
  testStaffPosition: {
    type: Number, 
    required: true, 
    ref: 'Staff'
  },
  staffs: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Staff'
  }]
})

NoteSchema.plugin(require('mongoose-autopopulate'))

const NoteModel = mongoose.model('Note', NoteSchema)

module.exports = NoteModel
  
/*const c = new Note("c", "left: 333", "top: 552"); //TODO: calculate the staffPositions
const d = new Note("d", "left: 420", "top: 539");
const e = new Note("e", "left: 511", "top: 526");
const f = new Note("f", "left: 601", "top: 513");
const g = new Note("g", "left: 692", "top: 500");
const a = new Note("a", "left: 778", "top: 487");
const b = new Note("b", "left: 867", "top: 474");

const testC = new Note("c", '333', '288')
const testD = new Note("d", '420', '275')
const testE = new Note("e", '511', '262')
const testF = new Note("f", '601', '249')
const testG = new Note("g", '692', '236')
const testA = new Note("a", '778', '223')
const testB = new Note("b", '867', '210')

const c0 = new Note("c", '');
const d0 = new Note("d", '');
const e0 = new Note("e", '');
const f0 = new Note("f", '');
const g0 = new Note("g", '');
const a0 = new Note("a", '');
const b0 = new Note("b", '');*/











