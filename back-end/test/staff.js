import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new staff', async t => {
  t.plan(3)
  const staffToCreate = {
    name: 'Level1',
    clef: 'Treble Clef',
    notes: [],
    games: [],
    startPoints: [],
    staffPositions: [], 
    testStaffPositions: []
  }

  const res = await request(app)
  .post('/staff')
  .send(staffToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, staffToCreate.name)
  t.is(res.body.clef, staffToCreate.clef )
})

test('Fetch a staff', async t => {
  t.plan(3)
  const staffToCreate = {
      name: 'Level2',
      clef: 'Bass Clef',
      notes: [],
      games: [],
      startPoints: [],
      staffPositions: [], 
      testStaffPositions: []
  }

  const level3Created = (await request(app)
  .post('/staff')
  .send(staffToCreate)).body

  const fetchRes = await request(app).get(`/staff/${level3Created._id}`)

  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/staff/${level3Created._id}/json`)

  t.is(fetchResJson.status, 200)

  const level3Fetched = fetchResJson.body

  t.deepEqual(level3Fetched, level3Created)
})

test('Delete level5 staff', async t => {
  t.plan(3)

  const staffToCreate = { name: 'Level4', clef: 'Bass Clef', notes: [], games: [], startPoints: [], staffPositions: [], testStaffPositions: [] }

  const level5Created = (await request(app)
  .post('/staff')
  .send(staffToCreate)).body

  const deleteRes = await request(app).delete(`/staff/${level5Created._id}`)

  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  const fetchJson = await request(app).get(`/staff/${level5Created._id}/json`)

  t.is(fetchJson.status, 404)
})

test('Get list of staffs', async t => {
  t.plan(4)
  const staffToCreate = { name: 'Level3', clef: 'Treble Clef', notes: [], games: [], startPoints: [], staffPositions: [], testStaffPositions: [] }

  const _= await request(app)
  .post('/staff')
  .send(staffToCreate)

  const res = await request(app).get('/staff/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('staff/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)
})

test('Staff can belong to a game', async t => {
    const level4 = { name: 'Level4', clef: 'Bass Clef', notes: [], games: [], startPoints: [], staffPosition: [], testStaffPositions: [] }
    const notesGame  = { name: 'Notes Game', staffs: 'Treble Cleff', tests: [], players: [] }

    // create staff
    const createdStaff = (await request(app)
    .post('/staff')
    .send(level4)).body
    
    
    // create game
    const createdGame = (await request(app)
    .post('/game')
    .send(notesGame)).body

    // Staff called level4 belongs to Notes Game
    const belongToRes = await request(app)
    .post(`/staff/${createdStaff._id}/games`)
    .send({ game: createdGame._id })

    t.is(belongToRes.status, 200)

    const staffAltered = belongToRes.body
    // check that staff's game is the game that was created
    t.deepEqual(staffAltered.games[0], createdGames)
})
