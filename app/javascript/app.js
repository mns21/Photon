"use strict";

angular.module('app', ['ngRoute']).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider

            .when('/led', {
                templateUrl: 'views/led.html',
                controller: 'app_controller'
            })
            .when('/devices', {
                templateUrl: 'views/devices.html',
                controller: 'device_controller'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);


