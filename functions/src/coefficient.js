'use strict';

module.exports = numbers =>
    ( require ('./ standardDeviation') ( numbers ) / require ('./average') ( numbers ) ) * 100;
