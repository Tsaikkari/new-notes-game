import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Create new note', async t => {
  t.plan(5)
  const noteToCreate = {
    name: 'c',
    startPoint: 333,
    staffPosition: 552, 
    testStaffPosition: 288,
    staffs: []
  }

  const res = await request(app)
  .post('/note')
  .send(noteToCreate)

  t.is(res.status, 200)
  t.is(res.body.name, noteToCreate.name)
  t.is(res.body.startPoint, noteToCreate.startPoint)
  t.is(res.body.staffPosition, noteToCreate.staffPosition)
  t.is(res.body.testStaffPosition, noteToCreate.testStaffPosition)
})
//this
test('Fetch a note', async t => {
  t.plan(1)
  const noteToCreate = {
      name: 'd',
      startPoint: 420,
      staffPosition: 539,
      testStaffPosition: 275,
      staffs: []
  }

  const dNoteCreated = (await request(app)
  .post('/note')
  .send(noteToCreate)).body

  const fetchRes = await request(app).get(`/note/${dNoteCreated._id}`)
  t.is(fetchRes.status, 200)

  /*const fetchResJson = await request(app).get(`/note/${dNoteCreated._id}/json`)
  t.is(fetchResJson.status, 200)

  const dNoteFetched = fetchResJson.body
  t.deepEqual(dNoteFetched, dNoteCreated)*/
})

test('Delete a note', async t => {
  t.plan(4)

  const noteToCreate = { name: 'h', starPoint:  867, staffPosition: 474, testStaffPosition: 210, staffs: [] }

  const hNoteCreated = (await request(app)
  .post('/note')
  .send(noteToCreate)).body

  const deleteRes = await request(app).delete(`/note/${hNoteCreated._id}`)

  t.is(deleteRes.status, 200)
  t.is(deleteRes.ok, true)

  // trying to render the detail page for the deleted note
  //const fetch = await request(app).get(`/note/${hNoteCreated._id}`)
  //t.is(fetch.status, 404)

  const fetchJson = await request(app).get(`/note/${hNoteCreated._id}/json`)
  t.is(fetchJson.status, 404)
})
//this
test('Get list of notes', async t => {
  t.plan(1)
  const noteToCreate = { name: 'g', startPoint: 692, staffPosition: 500, testStaffPosition: 236, staffs: [] }

  const _ = await request(app)
  .post('/user')
  .send(noteToCreate)

  const res = await request(app).get('/note/all')
  t.is(res.status, 200)

  /*const jsonRes = await request(app).get('note/all/json')
  t.is(jsonRes.status, 200)
  t.true(Array.isArray(jsonRes.body), 'Body should be an array')
  t.true(jsonRes.body.length > 0)*/
})
//this
test('Note can go to a staff into its staffPosition', async t => {
  const a = { name: 'a', startPoint: 778, staffPosition: 487, testStaffPosition: 223, staffs: [] }
  const staff = { name: 'Level1', clef: 'Treble Cleff', notes: [], games: [], startPoints: [], staffPositions: [], testStaffPositions: [] }

  // create note
  const createdNote = (await request(app)
    .post('/note')
    .send(a)).body

    // create staff
  const createdStaff = (await request(app)
    .post('/staff')
    .send(staff)).body

    // a note goes to staff
  const goToRes = await request(app)
    .post(`/note/${createdNote._id}/staffs`)
    .send({ staff: createdStaff._id })

  t.is(goToRes.status, 200)

  // response body is the altered data of the note
  const noteAltered = goToRes.body

  t.is(noteAltered.staffs[0]._id, createdStaff._id)
  
  // check that note's staff is the staff that was created
  t.deepEqual(noteAltered.staffs[0], createdStaff)

  t.notDeepEqual(noteAltered, createdNote)
})