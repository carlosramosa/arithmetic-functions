'use strict';

module.exports = numbers => {
    numbers.sort ((a,b) => a - b);
    const half = Math.floor (numbers.length/2);
    return numbers.length % 2 
        ? numbers[half]
        : (numbers[half-1] + numbers[half]) / 2.0;
};
