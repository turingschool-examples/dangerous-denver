'use strict';

const _ = require('lodash');

module.exports = (data) => {
  let columns = _.first(data);

  return _.chain(data)
          .rest()
          .map(row => _(columns).zip(row).zipObject().value())
          .value();
};