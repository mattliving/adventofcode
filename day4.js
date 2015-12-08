var crypto = require('crypto')

function findLowestNumber (input) {
  var number = 0
  while (true) {
    var md5 = crypto.createHash('md5')
    md5.update(input + number)
    if (md5.digest('hex').indexOf('00000') === 0) {
      break
    }
    number += 1
  }
  return number
}

function partOne (input) {
  console.log(findLowestNumber(input))
}

partOne('ckczppom')
