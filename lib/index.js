'use strict';

const fs = require('fs');
const _ = require('lodash');

console.time('entire process');

let trafficData = fs.readFileSync('./data/traffic-accidents.csv').toString();

console.timeEnd('entire process');

console.log(trafficData);