import test from 'ava'
import request from 'supertest'
import app from '..app'

test('Create new note', async t => {
  t.plan(4)
  const userToCreate = {
    name: 'c',
    startPoint: 333,
    staffPosition: 552, 
    testStaffPosition: 288
  }

  const res = await request(app)
  .post('note')
  .send(noteToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, noteToCreate.name)
  t.is(res.body.startPoint, noteToCreate.startPoint)
  t.is(res.body.staffPosition, noteToCreate.staffPosition)
  t.is(res.body.testStaffPosition, noteToCreate.testStaffPosition)
})

test('Fetch a note', async t => {
  t.plan(4)
  const noteToCreate = {
      name: 'd',
      startPoint: 420,
      staffPosition: 539,
      testStaffPosition: 275
  }

  const eNoteCreated = (await request(app)
  .post('/note')
  .send(noteToCreate)).body

  const fetchRes = await request(app).get(`/note/${eNoteCreated._id}`)

  t.is(fetchRes.status, 200)

  const fetchResJson = await request(app).get(`/note/${eNoteCreated._id}/json`)

  t.is(fetchResJson.status, 200)

  const eNoteFetched = fetchResJson.body

  t.deepEqual(eNoteFetched, eNoteCreated)
})

test('Delete a note', async t => {
  t.plan(4)

  const noteToCreate = { name: 'h', starPoint:  867, staffPosition: 474, testStaffPosition: 210 }

  const hNoteCreated = (await request(app)
  .post('/note')
  .send(noteToCreate)).body

  const deleteRes = await request(app).delete(`/note/${hNoteCreated._id}`)

  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  const fetch = await request(app).get(`/note/${hNoteCreated._id}/json`)

  t.is(fetch.status, 404)
})

test('Get list of notes', async t => {
  t.plan(4)
  const noteToCreate = { name: 'g', startPoint: 692, staffPosition: 500, testStaffPosition: 236 }

  const _= await request(app)
  .post('/user')
  .send(noteToCreate)

  const res = await request(app).get('/note/all')
  t.is(res.status, 200)

  const jsonRes = await request(app).get('note/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)
})

test('Note can belong to a staff', async t => {
    const a = { name: 'a', startPoint: 778, staffPosition: 487, testStaffPosition: 223 }
    const staff = { name: 'Level1', clef: 'Treble Cleff', notes: [], startPoints: [], staffPositions = [], testStartPositions = [] }

    // create note
    const createARes = await request(app)
    .post('/note')
    .send(a)
    const mertUser = createARes.body
    
    // create staff
    const createStaffRes = await request(app)
    .post('/staff')
    .send(staff)
    const createdStaff = createStaffRes.body

    // a goes to staff
    const goToRes = await request(app)
    .post(`/note/${aNote._id}/staffs`)
    .send({ staff: createdStaff._id })

    t.is(goToRes.status, 200)
    const alteredA = goToRes.body

    t.is(alteredA.staffs[0]._id, createdStaff._id)
    console.log(createARes)
})

