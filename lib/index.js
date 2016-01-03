'use strict';

const fs = require('fs');
const _ = require('lodash');

const loadAndParseData = require('./load-and-parse-data');
const tabulate = require('./tabulate-data');

console.time('entire process');

let trafficData = loadAndParseData('./data/traffic-accidents.csv');
let crimeData = loadAndParseData('./data/crime.csv').filter(row => {
  return row.IS_CRIME === '1';
});

let corners = tabulate(trafficData, 'INCIDENT_ADDRESS');
let neighborhoods = tabulate(trafficData, 'NEIGHBORHOOD_ID');
let crimes = tabulate(crimeData, 'NEIGHBORHOOD_ID');

console.timeEnd('entire process');

console.log(corners.slice(0, 5));
console.log(neighborhoods.slice(0, 5));
console.log(crimes.slice(0, 5));