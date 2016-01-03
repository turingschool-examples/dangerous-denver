'use strict';

const loadData = require('./load-data');
const parseData = require('./parse-data');

module.exports = (file) => {
  return parseData(loadData(file));
};