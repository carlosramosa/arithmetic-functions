'use strict';

module.exports = numbers =>
    ( require ('./variance') ( numbers ) / require ('./average') ( numbers ) ) * 100;
