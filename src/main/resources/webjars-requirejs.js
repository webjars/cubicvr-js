/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'CubicVR': [ 'webjars!ammo.js', 'webjars!pdf.js', 'webjars!jquery.js' ]
    }
});
