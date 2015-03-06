'use strict';

/**
 * @ngdoc overview
 * @name ezyFlightApp
 * @description
 * # ezyFlightApp
 *
 * Main module of the application.
 */
angular
  .module('ezyFlightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'controllers',
    'directives',
    'services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/bookings/:userId', {
        templateUrl: 'views/bookings.html',
        controller: 'bookingsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
