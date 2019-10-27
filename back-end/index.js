const Game = require('./game')
const User = require('./user')
const PlanckJS = require('planck-js')
const Database = require('./database')

const notesGame = new Game('notes-game')

const kirsi = new User('Kirsi', 'level8')
const omur = new User('Omur', '')
const armagan = new User('Armagan', '')
const mert = new User('Mert', '')

kirsi.play(notesGame)
omur.play(notesGame)
armagan.play(notesGame)
mert.play(notesGame)

notesGame.printUserNames()

Database.save('game.json', notesGame)
Database.save('user.json', kirsi)

const loadedFile = Database.load('game.json')
console.log(loadedFile)



