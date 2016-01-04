'use strict';

const _ = require('lodash');

module.exports = (dataset, id) => {
  return _.chain(dataset)
          .filter(row => row[id])
          .countBy(row => row[id])
          .pairs()
          .sortBy(row => -row[1])
          .zipObject()
          .value();
};
