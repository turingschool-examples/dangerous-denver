'use strict'

const fs = require('fs')
const readData = require('./read_data.js')
const parseData = require('./parse_data.js')
const calculateData = require('./calculate_data.js')

console.time('entire process')

let trafficData = parseData(readData('./data/traffic-accidents.csv'))
let crimeData = parseData(readData('./data/crime.csv'))

let trafficCount = calculateData(trafficData, 3, 'Traffic')
let crimeCount = calculateData(crimeData, 3, 'Crime')

console.timeEnd('entire process')
