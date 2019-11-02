const Game = require('./game')
const User = require('./user')
const PlanckJS = require('planck-js')
const Database = require('./database')
const Staff = require('./staff')

const notesGame = new Game('notes-game')

const kirsi = new User('Kirsi', 'level4')
const omur = new User('Omur', '')
const armagan = new User('Armagan', '')
const mert = new User('Mert', '')

const level1 = new Staff("level1", "trebleClef")
const level2 = new Staff("level2", "bassClef")

kirsi.play(notesGame)
omur.play(notesGame)
armagan.play(notesGame)
mert.play(notesGame)

notesGame.printUserNames()

Database.save('game.json', notesGame)
Database.save('user.json', kirsi)
Database.save('staff.json', [level1, level2])

const loadedFile = Database.load('game.json')
const loadedUsers = Database.load('user.json')
const loadedStaffs = Database.load('staff.json')
    
console.log(loadedFile)
console.log(loadedUsers)
console.log(loadedStaffs)



