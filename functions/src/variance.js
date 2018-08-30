'use strict';

module.exports = numbers => {

    const calculateAverage = require( './average' );
    const average = calculateAverage( numbers );

    return numbers.reduce ((acc, number ) =>
        acc + Math.pow( number - average, 2 )
    , 0) / numbers.length ;

};
