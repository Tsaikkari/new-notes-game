const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const GameService = require('../services/game-service')

router.get('/all', async (req, res) => {
  const users = await UserService.findAll()
  res.render('list', { items: users })
})

router.get('/all/json', async (req, res) => {
  const users = await UserService.findAll()
  res.send(users)
})

router.get('/:id', async (req, res) => {
  const user = await UserService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await UserService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user)
})

router.post('/:id/games', async (req, res) => {
  const user = await UserService.find(req.params.id)
  const game = await GameService.find(req.body.game)
  
  await UserService.playGame(user, game)
  res.send(user)
  res.send(game)
})

module.exports = router