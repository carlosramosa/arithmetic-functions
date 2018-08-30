'use strict';

const { average, median, variance, standardDeviation, percentile, medianAbsoluteDeviation, coefficient, mode } = require ('./functions');

const array = [5, 5, 10, 10, 20];
const array2 = [43,65,23,54,12,65,76,34];
const array3 = [16, 10, 12, 8, 15, 18, 20, 9, 11, 1, 13, 17, 9, 10, 14];
const array4 = [0, 4, 1, 0, 0, 7, 2, 1, 4, 0, 3, 9, 2, 0, 0, 4, 8, 1, 0, 9, 4];
const vitutor = [3, 5, 2, 7, 6, 4, 9];

const arr54 = [5, 3, 6, 5, 4, 5, 2, 8, 6, 5, 4, 8, 3, 4, 5, 4, 8, 2, 5, 4];



console.log (average(array2));
console.log (median(array2));
console.log (variance(array));
console.log (variance(array2));

console.log (standardDeviation(array));
console.log (standardDeviation(array2));

console.log (percentile(array3)(40));

console.log (percentile(array4)(90));

console.log (percentile(vitutor)(85));

console.log(medianAbsoluteDeviation(arr54));

console.log(mode(arr54));