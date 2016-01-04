'use strict';

const fs = require('fs');

module.exports = (file) => {
  return fs.readFileSync(file)
            .toString()
            .split('\r\n')
            .slice(0, -1)
            .map(row => row.split(','));
};
