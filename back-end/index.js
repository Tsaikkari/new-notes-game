const Game = require('./game')
const Level = require('./level')
const User = require('./user')
const PlanckJS = require('planck-js')
const Database = require('./database')

const notesGame = new Game('notes-game')
const level1 = new Level('level1')
const level2 = new Level('level2')
const level3 = new Level('level3')
const level4 = new Level('level4')
const level5 = new Level('level5')
const level6 = new Level('level6')
const level7 = new Level('level7')
const level8 = new Level('level8')

const kirsi = new User('Kirsi')
const omur = new User('Omur')
const armagan = new User('Armagan')
const mert = new User('Mert')

kirsi.play(notesGame)
kirsi.skill(level8)
omur.play(notesGame)
armagan.play(notesGame)
mert.play(notesGame)

notesGame.printUserNames()

Database.save('game.json', notesGame)
Database.save('user.json', kirsi)

const loadedFile = Database.load('game.json')
console.log(loadedFile)



