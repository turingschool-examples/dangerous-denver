'use strict';

const fs = require('fs');
const _ = require('lodash');

console.time('entire process');

let rawTrafficData = fs.readFileSync('./data/traffic-accidents.csv')
  .toString()
  .split('\r\n');

// remove empty last item
rawTrafficData.pop();

const trafficObjects = rawTrafficData.map((data) => {
  let dataPoints = data.split(',');
  return(
    {
      INCIDENT_ID: dataPoints[0],
      OFFENSE_ID: dataPoints[1],
      OFFENSE_CODE: dataPoints[2],
      OFFENSE_CODE_EXTENSION: dataPoints[3],
      OFFENSE_TYPE_ID: dataPoints[4],
      OFFENSE_CATEGORY_ID: dataPoints[5],
      FIRST_OCCURRENCE_DATE: dataPoints[6],
      LAST_OCCURRENCE_DATE: dataPoints[7],
      REPORTED_DATE: dataPoints[8],
      INCIDENT_ADDRESS: dataPoints[9],
      GEO_X: dataPoints[10],
      GEO_Y: dataPoints[11],
      GEO_LON: dataPoints[12],
      GEO_LAT: dataPoints[13],
      DISTRICT_ID: dataPoints[14],
      PRECINCT_ID: dataPoints[15],
      NEIGHBORHOOD_ID: dataPoints[16],
      BICYCLE_IND: dataPoints[17],
      PEDESTRIAN_IND: dataPoints[18]
    }
  );
});

// remove header row from array
trafficObjects.shift();

let rawCrimeData = fs.readFileSync('./data/crime.csv')
  .toString()
  .split('\r\n');

// remove empty last item
rawCrimeData.pop();

const crimeObjects = rawCrimeData.map((data) => {
  let dataPoints = data.split(',');
  return (
    {
      INCIDENT_ID: dataPoints[0],
      OFFENSE_ID: dataPoints[1],
      OFFENSE_CODE: dataPoints[2],
      OFFENSE_CODE_EXTENSION: dataPoints[3],
      OFFENSE_TYPE_ID: dataPoints[4],
      OFFENSE_CATEGORY_ID: dataPoints[5],
      FIRST_OCCURRENCE_DATE: dataPoints[6],
      LAST_OCCURRENCE_DATE: dataPoints[7],
      REPORTED_DATE: dataPoints[8],
      INCIDENT_ADDRESS: dataPoints[9],
      GEO_X: dataPoints[10],
      GEO_Y: dataPoints[11],
      GEO_LON: dataPoints[12],
      GEO_LAT: dataPoints[13],
      DISTRICT_ID: dataPoints[14],
      PRECINCT_ID: dataPoints[15],
      NEIGHBORHOOD_ID: dataPoints[16],
      IS_CRIME: dataPoints[17],
      IS_TRAFFIC: dataPoints[18]
    }
  );
});

// remove header row from array
crimeObjects.shift();

console.timeEnd('entire process');
