'use strict';

module.exports = numbers =>
    numbers.reduce((acc, number) =>
        number + acc
    , 0) / numbers.length;
