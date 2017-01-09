'use strict'

const fs = require('fs');

module.exports = (data) => {
  return fs.readFileSync(data)
            .toString()
            .split(`\r\n`)
            .slice(0, -1)
            .map(row => row.split(','))
}
