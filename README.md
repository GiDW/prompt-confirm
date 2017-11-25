# Prompt confirm

Ask a yes/no question with a default answer.

[![NPM version](https://img.shields.io/npm/v/@gidw/prompt-confirm.svg)](https://www.npmjs.com/package/@gidw/prompt-confirm)
[![License](https://img.shields.io/github/license/GiDW/prompt-confirm.svg)](https://github.com/GiDW/prompt-confirm/blob/master/LICENSE)

## Usage

```js
const promptConfirm = require('@gidw/prompt-confirm');

// What is your answer? [y/N]
promptConfirm(
    'What is your answer?',
    false,
    result => {
        console.log('Answer was', result);
    }
);
```
