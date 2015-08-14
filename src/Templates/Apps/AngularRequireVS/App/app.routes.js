//Author: Shavin Fonseka
(function (angular, app) {
    'use strict';
    
    define('app_routes', function () {

    var appRoutes = angular.module('appRoutes', ['ngRoute']);
    
    appRoutes.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
             var  homepage = '/';
            
            $routeProvider
                .when('/', {
                redirectTo: homepage

            }).otherwise({
                redirectTo: '/'
            });
            
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            });
            }]);

        return appRoutes;

    });

})(angular);