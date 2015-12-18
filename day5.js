var fs = require('fs')

if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement, fromIndex ) {
    'use strict'
    var O = Object(this)
    var len = parseInt(O.length, 10) || 0
    if (len === 0) {
      return false
    }
    var n = parseInt(arguments[1], 10) || 0
    var k
    if (n >= 0) {
      k = n
    } else {
      k = len + n
      if (k < 0) {k = 0}
    }
    var currentElement
    while (k < len) {
      currentElement = O[k]
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true
      }
      k++
    }
    return false
  }
}

function readInput (input) {
  try {
    var data = fs.readFileSync(input, 'utf8')
    return data.split('\n')
  } catch (e) {
    throw e
  }
}

function numberOfNiceWords (words) {
  var niceWords = 0
  words.forEach(function (c) {
    if (isNiceWord(c)) {
      niceWords++
    }
  })
  return niceWords
}

function isNiceWordOld (word) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var numberOfVowels = 0
  var containsDoubleChar = false
  var noBadStrings = true
  var prevChar, currentChar
  for (var i = 0; i < word.length; i++) {
    currentChar = word[i]
    prevChar = word[i - 1]
    if (vowels.includes(currentChar)) {
      numberOfVowels++
    }
    if (prevChar === currentChar) {
      containsDoubleChar = true
    }
    if (['ab', 'cd', 'pq', 'xy'].includes(prevChar + currentChar)) {
      noBadStrings = false
    }
  }
  return (numberOfVowels >= 3 && containsDoubleChar && noBadStrings)
}

function isNiceWord (word) {
  return findTwiceOccurringPair(word) && findRepeatedCharacter(word)

  function findTwiceOccurringPair (string) {
    if (string.length < 4) return false
    for (var i = 0; i < string.length - 1; i++) {
      var current = string[i] + string[i + 1]
      for (var j = i + 2; j < string.length; j++) {
        if (current === (string[j] + string[j + 1])) {
          return true
        }
      }
    }
    return false
  }

  function findRepeatedCharacter (string) {
    for (var i = 2; i < string.length; i++) {
      var prevChar = string[i - 2]
      var curChar = string[i]
      if (prevChar === curChar) {
        return true
      }
    }
    return false
  }
}

function partOne () {
  // console.log(`Part One: ${numberOfNiceWords(readInput('./day5input.txt'))}`)
}

function partTwo () {
  console.log(`Part Two: ${numberOfNiceWords(readInput('./day5input.txt'))}`)
}

partOne()
partTwo()
