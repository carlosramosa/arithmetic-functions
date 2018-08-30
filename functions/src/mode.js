'use strict';

module.exports = numbers => {

    const map = numbers.reduce(( acc, number ) => {
        const repetitions = acc[number] || 0;
        acc[number] = repetitions + 1;
        return acc;
    }, {} );
    return Object.keys( map ).reduce(( acc, n ) =>
        map[n] > acc
            ? map[n]
            : acc
        , map[Object.keys( map )[ 0 ] ])
};
