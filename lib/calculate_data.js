'use strict'

const fs = require('fs');

module.exports = (data, n, crime) => {
  let topNAddresses = topAddresses(getCrimeCount(getStreets(data)), n)
  console.log(`Worst ${n} ${crime} Corners: \n`, topNAddresses);
}

const getStreets = (data) => {
  return data.map((crime) => {
    if(crime['INCIDENT_ADDRESS'] !== '') {
      return crime['INCIDENT_ADDRESS']
    }
  })
}

const getCrimeCount = (data) => {
  return data.reduce((hash, current) => {
    if (!hash[current]) {
      hash[current] = 1;
    } else {
      hash[current] += 1;
    }
    return hash
  }, {})
}

const topAddresses = (data, n) => {
  return Object.keys(data).map(function(key) {
                  return { address: key, crimeCount: this[key] }
                }, data)
                .sort((a, b) => {
                  return b.crimeCount - a.crimeCount;
                })
                .slice(1, n+1)
}
