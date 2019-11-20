const express = require('express')
const router = express.Router()

const StaffService = require('../services/staff-service')
const GameService = require('../services/game-service')

router.get('/all', async (req, res) => {
  const staffs = await StaffService.findAll()
  res.render('list', { items: staffs })
})

router.get('/:id', async (req, res) => {
  const staff = await StaffService.find(req.params.id)
  res.render('data', { data: staff })
})

router.post('/', async (req, res) => {
  const staff = await StaffService.add(req.body)
  res.send(staff)
})

router.delete('/:id', async (req, res) => {
  const staff = await StaffService.del(req.params.id)
  res.send(staff)
})

router.post('/:id/games', async (req, res) => {
  const staff = await StaffService.find(req.params.id)
  const game = await GameService.find(req.body.game)
  
  await StaffService.belongTo(staff, game)
  res.send(staff)
  res.send(game)
})

module.exports = router