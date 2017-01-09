'use strict'

const fs = require('fs');

module.exports = (data) => {
  const header = data[0]

  return data.map((row) => {
    let hash = {}
    for(var i = 0; i < row.length; i++) {
      hash[header[i]] = row[i]
    }
    return hash
  })
}
