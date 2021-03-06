import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new game', async t => {
  t.plan(2)
  const gameToCreate = {
    name: 'Notes Game',
    staffs: [],
    users: []
  }

  const res = await request(app)
  .post('/game')
  .send(gameToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, gameToCreate.name)
})
//this
test('Fetch a game', async t => {
  t.plan(1)
  const gameToCreate = {
      name: 'Ping Pong1',
      staffs: [],
      users: []
  }

  const pingPong1Created = (await request(app)
  .post('/game')
  .send(gameToCreate)).body

  const fetchRes = await request(app).get(`/game/${pingPong1Created._id}`)
  t.is(fetchRes.status, 200)

  /*const fetchJsonRes = await request(app).get(`/game/${pingPong1Created._id}/json`)
  t.is(fetchJsonRes.status, 200)
  const pingPong1Fetched = fetchJsonRes.body

  
  t.deepEqual(pingPong1Fetched, pingPong1Created)*/
})

test('Delete Ping Pong game', async t => {
  t.plan(3)

  const gameToCreate = {
    name: 'Ping Pong',
    staffs: [],
    users: []
  }

  const pingPongCreated = (await request(app)
    .post('/game')
    .send(gameToCreate)).body

  const deleteRes = await request(app).delete(`/game/${pingPongCreated._id}`)
  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  // trying to render the detail page for the deleted game
  //const fetch = await request(app).get(`/game/${pingPongCreated._id}`)
  //t.is(fetch.status, 404)

  const fetchJson = await request(app).get(`/game/${pingPongCreated._id}/json`)
  t.is(fetchJson.status, 404)
})
//this
test('Get list of games', async t => {
  t.plan(1)
  const gameToCreate = { name: 'Tetris', staffs: [], users: [] }

  const _ = await request(app)
  .post('/game')
  .send(gameToCreate)

  const res = await request(app).get('/game/all')
  t.is(res.status, 200)

  /*const jsonRes = await request(app).get('game/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)*/
})




