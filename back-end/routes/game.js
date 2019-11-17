const express = require('express')
const router = express.Router()

const GameService = require('../services/game-service')

router.get('/all', async (req, res) => {
  const games = await GameService.findAll()
  res.render('list', { items: games })
})

router.get('/:id', async (req, res) => {
  const game = await GameService.find(req.params.id)
  res.render('data', { data: game })
})

router.post('/', async (req, res) => {
  const game = await GameService.add(req.body)
  res.send(game)
})

router.delete('/:id', async (req, res) => {
  const game = await GameService.del(req.params.id)
  res.send(game)
})

module.exports = router
