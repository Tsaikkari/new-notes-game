const BaseService = require(':/base-service')
const NoteModel = require('../note-model')

class NoteService extends BaseService {
  model = NoteModel

async goTo(note, staff)   {
  note.staffs.push(note)
  staff.notes.push(note)
  await note.save()
  await staff.save()
  } 
}

module.exports = new NoteService()