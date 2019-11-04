const Game = require('./game')
const User = require('./user')
const Staff = require('./staff')
const GameService = require('./services/game-service')
const UserService = require('./services/user-service')
const StaffService = require('./services/staff-service')
//const PlanckJS = require('planck-js')

async function main() {
  const kirsi = new User('Kirsi', 'level4')
  const omur = new User('Omur', '')
  const armagan = new User('Armagan', '')
  const mert = new User('Mert', '')

  const notesGame = new Game('Notes Game', '')
  kirsi.play(notesGame)
  omur.play(notesGame)
  armagan.play(notesGame)
  mert.play(notesGame)

  await UserService.add(kirsi)
  await UserService.add(omur)
  await UserService.add(armagan)
  await UserService.add(mert)

  const players = await UserService.findAll()

  console.log(players[0].name)

  const level1 = new Staff("level1", "trebleClef")
  const level2 = new Staff("level2", "bassClef")
  level1.belongTo(notesGame)
  level2.belongTo(notesGame)

  await StaffService.add(level1)
  await StaffService.add(level2)

  const staffs = await StaffService.findAll()

  console.log(staffs[0].name)
}

(async () => {
    try {
        await main()
    } catch (e) {
        console.log(e)
    }
})()







