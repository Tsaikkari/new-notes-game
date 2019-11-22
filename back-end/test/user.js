import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new user', async t => {
  t.plan(2)
  const userToCreate = {
    name: 'Armagan',
    games: []
  }

  const res = await request(app)
  .post('/user')
  .send(userToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, userToCreate.name)
})
//this
test('Fetch a user', async t => {
  t.plan(1)
  const userToCreate = {
      name: 'Omur',
      games: []
  }

  const omurUserCreated = (await request(app)
  .post('/user')
  .send(userToCreate)).body

  const fetchRes = await request(app).get(`/user/${omurUserCreated._id}`)
  t.is(fetchRes.status, 200)

  /*const fetchResJson = await request(app).get(`/user/${omurUserCreated._id}/json`)

  const omurUserFetched = fetchResJson.body

  t.is(fetchResJson.status, 200)
  t.deepEqual(omurUserFetched, omurUserCreated)*/
})

test('Delete a user', async t => {
  t.plan(3)

  const userToCreate = { name: 'Kirsi', games: [] }

  const kirsiUserCreated = (await request(app)
  .post('/user')
  .send(userToCreate)).body

  const deleteRes = await request(app).delete(`/user/${kirsiUserCreated._id}`)
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  // trying to render the detail page for the deleted user
  //const fetch = await request(app).get(`/user/${kirsiUserCreated._id}`)
  //t.is(fetch.status, 404)

  const fetchJson = await request(app).get(`/user/${kirsiUserCreated._id}/json`)
  t.is(fetchJson.status, 404)
})
//this
test('Get list of users', async t => {
  t.plan(1)
  const userToCreate = { name: 'Maria', games: [] }

  const _ = await request(app)
  .post('/user')
  .send(userToCreate)

  const res = await request(app).get('/user/all')
  t.is(res.status, 200)

  /*const jsonRes = await request(app).get('/user/all/json')
  t.is(jsonRes.status, 200)
  // check the response whether it's an array
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  // check the response whether at least there's one element
  t.true(jsonRes.body.length > 0)*/
})

test('User can play a game', async t => {
  const mert = { name: 'Mert', games: [] }
  const game = { name: 'Notes Game', staffs: [], tests: [], players: [] }

  // create user
  const createMertRes = await request(app)
  .post('/user')
  .send(mert)
  const mertUser = createMertRes.body
  
  // create game
  const createGameRes = await request(app)
  .post('/game')
  .send(game)
  const createdGame = createGameRes.body

  // mert plays game
  const playGameRes = await request(app)
  .post(`/user/${mertUser._id}/games`)
  .send({ game: createdGame._id })

  t.is(playGameRes.status, 200)
  const alteredMert = playGameRes.body

  t.is(alteredMert.games[0]._id, createdGame._id)
  console.log(createMertRes)

  // check that user's game is the game we created
  t.deepEqual(alteredMert.games[0], createdGame)

  // Altered is not the same with the first created user
  // createdUser had no games
  // userAltered has the meetup amongst their list of meetups
  t.notDeepEqual(alteredMert, mertUser)
})



