
var BEADLE = angular.module('BEADLE', ['ngRoute', 'appRoutes']);

(function (define, angular, app) {
    
    define(['app'], function () {
       
        app.controller('MainCtrl', ['$route', '$routeParams', '$location', '$scope', '$filter', function () { 
                console.log('Main Controller Loaded')
            }]);
        return BEADLE;
    });
})(define, angular, BEADLE);

