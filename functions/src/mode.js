'use strict';

module.exports = numbers => {

    const map = numbers.reduce(( acc, number ) => {
        const repetitions = acc[number] || 0;
        acc[number] = repetitions + 1;
        return acc;
    }, {} );
    const position = Object.keys( map ).reduce(( acc, n ) =>
        map[n] >  map[acc]
            ? n
            : acc
        , Object.keys( map )[ 0 ] );
    return position;
};
