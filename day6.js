var readInput = require('./helpers').readInput

function createGrid (x, y) {
  return [new Array(x).fill(false), new Array(y).fill(false)]
}

function numberOfTruthyValues (arr) {
  return _.filter(arr, x => x).length
}

function executeInstruction (instruction, grid) {
  switch (instruction.command) {
    case 'turn on':
      grid[instruction.bottomLeft, instruction.topRight]
      break;
    case 'turn off':
      break;
    case 'toggle':
      break;
    default: break;
  }
}

function parseInstruction (instruction) {
  var parsed = instruction.match(/(.*)\s(\d{0,3},\d{0,3}) through (\d{0,3},\d{0,3})/)
  return {
    command: parsed[1],
    bottomLeft: parsed[2],
    topRight: parsed[3]
  }
}

function partOne () {
  var grid = createGrid(1000, 1000)
  console.log(executeInstruction(parseInstruction('turn on 0,0 through 999,999'), grid))
  // console.log(readInput('./day6input.txt'))
}

partOne()
