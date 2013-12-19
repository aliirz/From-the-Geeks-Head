/*
Name: sqUID.js
Author: John Newman
Date: 8/3/2012
License: MIT
Version: 0.1
URL: github.com/jgnewman/sqUID
Description: A unique ID generator for JavaScript. (Not UUID/GUID)
*/

(function (global) {
    'use strict';

    var idIncrementor = 999999,
        output = {};

    // Define the function

    output.gen = function (prefix, strlen) {
        var newStr = '',
            len    = strlen || 25,
            chars  = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz",
            i;

        // Start with a timestamp in milliseconds
        newStr += (new Date()).getTime();

        // Add 1 to the incrementor and add on the new number
        idIncrementor += 1;
        newStr += ("-" + idIncrementor + "-");

        // Reset the incrementor if it's getting too large
        if (idIncrementor === 9999999) {
            idIncrementor = 999999;
        }

        // Add on a random 25 char string
        for (i = 0; i < len; i += 1) {
            newStr += chars[Math.floor(Math.random() * chars.length)];
        }

        // If there was a prefix, add it to the beginning and end
        return (prefix) ? prefix + '-' + newStr : newStr;
    };

    // Export the module

    // AMD
    if (global.define && typeof global.define === 'function' && global.define.amd) {
        global.define('squid', [], output);

    // Weird stuff
    } else if (global.module && global.module.exports) {
        global.module.exports = output;

    // Browser & node
    } else {
        global.squid = output;
    }


}(this));