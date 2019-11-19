const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const GameService = require('../services/game-service')

router.get('/all', async (req, res) => {
  const players = await UserService.findAll()
  res.render('list', { items: players })
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

router.post('/:id/:level/game', async (req, res) => {
  const { id, level } = req.params;

  try {
    const user = await UserService.find(id);
    const game = await GameService.find(req.body.game);

    const result = UserService.chooseLevel(user, game, level);

    res.send({
      user: user,
      game: game
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(`Server Error: ${err.message}`);
  }
});

router.get('/:id/player-over-level1', async (req, res) => {
  const user = await UserService.find(req.params.id)
  const player = await user.findPlayerLevelOver1()
  res.send(player)
})

module.exports = router