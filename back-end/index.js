const express = require('express')
const bodyParser = require('body-parser')

const GameService = require('./services/game-service')
const UserService = require('./services/user-service')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/game/all', async (req, res) => {
  const games = await GameService.findAll()
  res.render('game', { games: games })
})

app.get('/game:id', async (req, res) => {
  const id = req.params.id
  const game = await GameService.find(id)
  res.send(game)
})

app.post('/game', async (req, res) => {
  const game = await GameService.add(req.body)
  res.send(game)
})

app.delete('/game/:id', async (req, res) => {
  await GameService.del(req.params.id)
  res.send('ok')
})

app.get('/user/all', async (req, res) => {
  const players = await UserService.findAll()
  res.render('user', { players })
})

app.get('/user/:id', async (req, res) => {
  const player = await UserService.find(req.params.id)
  res.send(player)
})

app.post('/user', async (req, res) => {
  const player = await UserService.add(req.body)
  res.send(player)
})

app.delete('/user/:id', async (req, res) => {
  const player = await PersonService.del(req.params.id)
  res.send(player)
})

app.post('/game/:user', async (req, res) => {
  const user = await UserService.game(req.params.user, req.params.game)
  res.render('user', { game: game })
  user.play(game)
})

app.listen(3004, () => {
  console.log('Server listening')
})