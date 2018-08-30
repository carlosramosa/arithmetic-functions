'use strict';

module.exports = numbers =>
    percentile => 
    {
        const average = require ('./average');
        numbers.sort ((a,b) => a - b);
        const x = ( numbers.length * percentile ) / 100;
        return x % 1
            ? average ([ numbers[ Math.round ( x - 2 ) ], numbers[ Math.round ( x - 1 ) ] ])
            : numbers[ x - 1 ];

    };
