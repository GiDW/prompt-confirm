'use strict'

var readline = require('readline')

/**
 * @callback CConfirmCallback
 * @param {boolean} result
 */

/**
 * Ask a yes/no question
 *
 * @param {string} question
 * @param {boolean} defaultAnswer
 * @param {CConfirmCallback} callback
 */
function promptConfirm (question, defaultAnswer, callback) {
  var rl, options, completeQuestion

  options = ''

  if (defaultAnswer === true) options += ' [Y/n] '
  if (defaultAnswer === false) options += ' [y/N] '

  completeQuestion = question + options

  rl = readline.createInterface({
    'input': process.stdin,
    'output': process.stdout
  })

  rl.question(completeQuestion, onResponse)

  /**
   * @param {string} answer
   */
  function onResponse (answer) {
    var cbAnswer, char0

    if (answer.length > 0) {
      char0 = answer.charAt(0)
      if (char0 === 'y' || char0 === 'Y') {
        cbAnswer = true
      } else if (char0 === 'n' || char0 === 'N') {
        cbAnswer = false
      }
    } else {
      cbAnswer = defaultAnswer
    }

    if (typeof cbAnswer === 'boolean') {
      rl.close()
      callback(cbAnswer)
    } else {
      rl.question(completeQuestion, onResponse)
    }
  }
}

module.exports = promptConfirm
