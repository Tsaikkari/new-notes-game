const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const GameService = require('../services/game-service')

router.get('/all', async (req, res) => {
  const people = await UserService.findAll()
  res.render('list', { items: people })
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
  const user = await UserService.find(req.id)
  const game = await GameService.find(req.body.meetup)
  user.play(game)
  res.send(game)
})

router.post('/:id/:level/game', async (req, res) => {
    const user = await UserService.find(req.id)
    const game = await GameService.find(req.level.game)
    user.choose(level)
    res.send(level)
})

module.exports = router