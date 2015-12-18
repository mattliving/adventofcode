var fs = require('fs')

function readInput (input) {
  try {
    var data = fs.readFileSync(input, 'utf8')
    return data.split('\n')
  } catch (e) {
    throw e
  }
}

module.exports = {
  readInput
}
