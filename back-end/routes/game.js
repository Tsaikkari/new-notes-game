const express = require('express')
const router = express.Router()

const GameService = require('../services/game-service')

router.get('/all', async (req, res) => {
  const games = await GameService.findAll()
  res.render('game', { games: games })
})

router.get('/:id', async (req, res) => {
  const game = await GameService.find(req.params.id)
  res.render('game', { game: game })
})

router.post('/', async (req, res) => {
  const game = await GameService.add(req.body)
  res.send(game)
})

router.post('/game/:gameId/user/:userId', async (req, res) => {
    const games = await GameService.find()
})

router.delete('/:id', async (req, res) => {
  const game = await GameService.del(req.params.id)
  res.send(game)
})

module.exports = router
