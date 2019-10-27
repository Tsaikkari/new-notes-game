const fs = require('fs')

const save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
}

const load = function(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8')) //read a string and convert it to a json.
  }

module.exports = { save, load }