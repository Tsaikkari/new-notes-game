import test from 'ava'
import request from 'supertest'
import app from '../app'

test('App can render the index file', async t => {
  t.plan(1)
  const fetch = await request(app).get('/')
  t.is(fetch.status, 200)
})