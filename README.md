# The Most Dangerous Corners in Denver

In this challenge, we'll use open data from the City and County of Denver to figure out which corners and neighborhoods have the highest number of traffic accidents as well as the most incidents of crime for each neighborhood in Denver.

There are a few main focuses for this challenge:

- Write performant code that iterates through hundreds of thousands of records quickly and efficiently.
- Write well-factored functional JavaScript using Lodash.
- Write DRY, reusable code.

## Installing Dependencies

```
npm install
```

## Fetching the Dataset

In order to fetch the most recent dataset, run the following command from inside the project:

```
npm run fetch-data
```

It's going to pull down 100 megabytes of data, so you'll have to be patient.

## Your Mission

### Restrictions

You cannot not use any libraries aside from Lodash and anything in the Node standard library.

### Phase One

- Read the file
- Parse the CSV
- Tabulate the data

Parse the CSV rows into objects with the column name as the key and the column data as the value. For example, the first row should look something like this:

```js
{ INCIDENT_ID: '2013331486.0',
  OFFENSE_ID: '2013331486544100',
  OFFENSE_CODE: '5441',
  OFFENSE_CODE_EXTENSION: '0',
  OFFENSE_TYPE_ID: 'traffic-accident',
  OFFENSE_CATEGORY_ID: 'traffic-accident',
  FIRST_OCCURRENCE_DATE: '2013-07-17 16:34:00',
  LAST_OCCURRENCE_DATE: '',
  REPORTED_DATE: '2013-07-17 18:33:59',
  INCIDENT_ADDRESS: '',
  GEO_X: '3143142.0',
  GEO_Y: '1684301.0',
  GEO_LON: '-104.9912072',
  GEO_LAT: '39.7111075',
  DISTRICT_ID: '3',
  PRECINCT_ID: '311',
  NEIGHBORHOOD_ID: 'baker',
  BICYCLE_IND: '',
  PEDESTRIAN_IND: '' }
```

#### Goals

1. Get it working.
2. Make it fast.

As of this writing, Steve's best time was somewhere around 1088 milliseconds. That said, don't get too hung up on that number, because he had to remove some stuff in Phase Two.

#### Validating Your Solution

The first five rows of your dataset should look something like this. You don't necessarily need to have an array of arrays. You just need to have the data in the correct order.

```js
[ [ 'I25 HWYNB / W 6TH AVE', 502 ],
  [ 'I25 HWYNB / W ALAMEDA AVE', 446 ],
  [ 'I25 HWYSB / 20TH ST', 397 ],
  [ 'I70 HWYEB / N HAVANA ST', 355 ],
  [ 'I25 HWYSB / W ALAMEDA AVE', 349 ] ]
```

##### Some Tips

- There is a blank line at the end of the file. Make sure you slice that off before you begin parsing and whatnot.
- The lines all end with `\r\n`. So, you'll want to split on those escape characters.
- Try different ways of iterating through the data.
- Figure out ways to reduce the amount of data that you need to iterate over or just iterate over it fewer times.
- Feel free to use more `console.time()` and `console.timeEnd()` pairs to figure out where the pain points are in your algorithm.

### Phase Two

Phase Two is a lot like Phase One, except you're looking to tabulate accidents by neighborhood as well as by corner.

#### Validating Your Solution

```js
[ [ 'baker', 4942 ],
  [ 'stapleton', 4828 ],
  [ 'capitol-hill', 3268 ],
  [ 'five-points', 2993 ],
  [ 'lincoln-park', 2892 ] ]
```

#### Goals

In Phase Two, you want to balance performance and clarity.

- Aim for under 1600 milliseconds on average.
- Reduce duplication of code as much as possible. Aim for six or less variables/functions.

### Phase Three

So, you've kept your code dry and abstracted away a lot of your loading, parsing, and tabulating, right? Can your code handle a totally different dataset?

Alongside the traffic data, there is also a table of crime data from the last five years. It's about three times the size of the traffic data. These data also have a `NEIGHBORHOOD_ID` column. Can you tabulate the neighborhoods with the most incidents of crime?

One quick this: each datum is classified as a traffic offense or an actual crime. We're only interested in the crimes. Make sure you filter out the traffic offenses.

#### Validating Your Data

The first five rows of the output should look something like this:

```js
[ [ 'five-points', 13487 ],
  [ 'cbd', 11030 ],
  [ 'capitol-hill', 8786 ],
  [ 'montbello', 8418 ],
  [ 'stapleton', 7892 ] ]
```

#### Goals

In this phase you should continue to abstract your code into reuseable functions. When all is said and done, there should about be 2 or 3 more lines of code than for parsing just the traffic data.

- Move reusable functions into their only module files.
- You should be able to parse and display all of the data from Phase One, Phase Two, and Phase Three in under 10 seconds. (Ideally, it would be great if you could parse this all in under 8 seconds.)