const BaseService = require('./base-service')
const NoteModel = require('../models/note')

class NoteService extends BaseService {
  model = NoteModel

// TODO: Use conditional to define that a note goes either to its staffPosition or testStaffPosition / Create models for those

async goTo(note, staff) {
  staff.notes.push(note)
  await note.save()
  await staff.save()
  } 
} 

module.exports = new NoteService()