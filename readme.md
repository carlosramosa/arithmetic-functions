# arithmetic-functions

This module groups different arithmetic functions
```js

const arr = [5, 10, 5, 10];
const arrAverage = average (arr); // --> 7,5

```
# Install
```
npm i arithmetic-functions
```

# Usage


Just require the module like any other npm module 
```js
    ArithmeticFunctions = require ('arithmetic-functions');
```
or
```js
const {
    average
    , median
    , variance
    , standardDeviation
    , percentile
    , medianAbsoluteDeviation
    , coefficient
    , mode 
} = require ('arithmetic-functions');
```

# Methods

This module contains numerous arithmetic functions

* average: calculate the arithmetic mean
* median: calculate the median
* variance: calculate the variance
* standardDeviation: calculate standard deviation
* percentile: calculate a certain percentile
* medianAbsoluteDeviation: calculate median abolute deviation
* coefficient: calculate coefficient
* mode: calculate mode

# Examples
* Average

Input:
```js
const { average } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const averageCalculation = average ( array );
console.log ( averageCalculation );

```
Output:
```js
46.5
```
* Median

Input:
```js
const { median } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const medianCalculation = median ( array );
console.log ( medianCalculation );

```
Output:
```js
48.5
```
* Standard Deviation:

Input:
```js
const { standardDeviation } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const sDeviationCalculation = standardDeviation ( array );
console.log ( sDeviationCalculation );

```
Output:
```js
20.982135258357285
```
* Percentile:

Input:
```js
const { percentile } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const percentileArray = percentile ( array );
const percentile30Calculation = percentile ( 30 );
const percentile95Calculation = percentile ( 90 );

console.log ( percentile30Calculation );
console.log ( percentile95Calculation );

```
Output:
```js
17.5
65
```
* Median Absolute Deviation:

Input:
```js
const { medianAbsoluteDeviation } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const mAbsDeviationCalculation = medianAbsoluteDeviation ( array );

console.log ( mAbsDeviationCalculation );

```
Output:
```js
18.5
```
* Coefficient:

Input:
```js
const { coefficient } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const coefficientCalculation = coefficient ( array );

console.log ( coefficientCalculation );

```
Output:
```js
45.122871523349
```
* Mode:

Input:
```js
const { mode } = require ( 'arithmetic-functions' );
const array = [43,65,23,54,12,65,76,34];
const modeCalculation = mode ( array );

console.log ( modeCalculation );

```
Output:
```js
65
```