const express = require('express')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user')
const gameRouter = require('./routes/game')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/game', gameRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening')
})
