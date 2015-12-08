var crypto = require('crypto')

function findLowestNumber (input, zeroes) {
  var number = 0
  while (true) {
    var md5 = crypto.createHash('md5')
    md5.update(input + number)
    if (md5.digest('hex').indexOf(zeroes) === 0) {
      break
    }
    number += 1
  }
  return number
}

function partOne (input, zeroes) {
  console.log(findLowestNumber(input, zeroes))
}

function partTwo (input, zeroes) {
  console.log(findLowestNumber(input, zeroes))
}

partOne('ckczppom', '00000')
partTwo('ckczppom', '000000')
