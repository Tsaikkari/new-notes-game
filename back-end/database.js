const fs = require('fs')

const save = function(filename, data) {
    fs.writeFile(filename, JSON.stringify(data, null, 2))
}

const load = function(filename, handler) {
  fs.readFile(filename, 'utf8', (err, file) => {
    if (err) {
      console.log('there is a read error', err)
      handler(err) //call handler with the error
      return //the execution ended
    }
    else {
    handler(null, JSON.parse(file));
    }
  })
}

module.exports = { save, load }