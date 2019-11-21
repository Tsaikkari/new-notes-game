import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new game', async t => {
  t.plan(2)
  const gameToCreate = {
    name: 'Notes Game',
  }

  const res = await request(app)
  .post('game')
  .send(gameToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, gameToCreate.name)
})

test('Fetch a game', async t => {
  t.plan(3)
  const gameToCreate = {
      name: 'Ping Pong1',
  }

  const pingPong1Created = (await request(app)
  .post('/game')
  .send(gameToCreate)).body

  const fetchRes = await request(app).get(`/game/${pingPong1Created._id}`)

  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/game/${pingPong1Created._id}/json`)

  t.is(fetchResJson.status, 200)

  const pingPong1Fetched = fetchResJson.body

  t.deepEqual(pingPong1Fetched, pingPong1Created)
})

test('Delete Ping Pong 2 game', async t => {
  t.plan(3)

  const gameToCreate = { name: 'Ping Pong 2', staffs: [], tests: [], players: [] }

  const pingPong2Created = (await request(app)
  .post('/game')
  .send(gameToCreate)).body

  const deleteRes = await request(app).delete(`/game/${pingPong2Created._id}`)

  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  const fetch = await request(app).get(`/game/${pingPong2Created._id}/json`)

  t.is(fetch.status, 404)
})

test('Get list of games', async t => {
  t.plan(4)
  const gameToCreate = { name: 'Tetris', staffs: [], tests: [], players: [] }

  const _= await request(app)
  .post('/game')
  .send(gameToCreate)

  const res = await request(app).get('/game/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('game/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)
})


