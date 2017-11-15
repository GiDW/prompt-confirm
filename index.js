'use strict';

var readline = require('readline');

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

    var rl;
    var options, completeQuestion;

    options = '';

    if (defaultAnswer === true) options += ' [Y/n] ';
    if (defaultAnswer === false) options += ' [y/N] ';

    completeQuestion = question + options;

    rl = readline.createInterface({
        'input': process.stdin,
        'output': process.stdout
    });

    rl.question(completeQuestion, onResponse);

    /**
     * @param {string} answer
     */
    function onResponse (answer) {

        var cbAnswer;

        if (answer.length === 0) {

            cbAnswer = defaultAnswer;

        } else if (answer.charAt(0) === 'y' || answer.charAt(0) === 'Y') {

            cbAnswer = true;

        } else if (answer.charAt(0) === 'n' || answer.charAt(0) === 'N') {

            cbAnswer = false;

        }

        if (cbAnswer === true || cbAnswer === false) {

            rl.close();

            callback(cbAnswer);

        } else {

            rl.question(completeQuestion, onResponse);

        }
    }
}

module.exports = promptConfirm;
