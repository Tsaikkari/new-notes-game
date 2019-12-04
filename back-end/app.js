const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routes/user')
const gameRouter = require('./routes/game')
const staffRouter = require('./routes/staff')
const noteRouter = require('./routes/note')

require('./mongo-connection')

const app = express()
app.use(cors())

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/game', gameRouter)
app.use('/staff', staffRouter)
app.use('/note', noteRouter)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app