const express = require('express')
const router = express.Router()

const NoteService = require('../services/note-service')
const StaffService = require('../services/staff-service')

router.get('/all', async (req, res) => {
  const notes = await NoteService.findAll()
  res.render('list', { items: notes })
})

router.get('/:id', async (req, res) => {
  const note = await NoteService.find(req.params.id)
  res.render('data', { data: note })
})

router.post('/', async (req, res) => {
  const note = await NoteService.add(req.body)
  res.send(note)
})

router.delete('/:id', async (req, res) => {
  const note = await NoteService.del(req.params.id)
  res.send(note)
})

router.post('/:id/staffs', async (req, res) => {
  const note = await NoteService.find(req.params.id)
  const staffs = await StaffService.find(req.body.game)
  
  await NoteService.goTo(note, staffs)
  res.send(note)
  res.send(staffs)
})

module.exports = router