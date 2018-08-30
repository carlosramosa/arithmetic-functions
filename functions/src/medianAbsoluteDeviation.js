'use strict';

module.exports = numbers => {

    const calculateAverage = require( './average' );
    const average = calculateAverage( numbers );

    return numbers.reduce ((acc, number ) =>
        acc + Math.abs( number - average )
    , 0) / numbers.length ;

};