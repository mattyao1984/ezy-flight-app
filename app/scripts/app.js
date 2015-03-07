'use strict';

/**
 * @ngdoc overview
 * @name ezyFlightApp
 * @description
 * # ezyFlightApp
 *
 * Main module of the application.
 */
var ezyFlightApp = angular
  .module('ezyFlightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'controllers',
    'directives',
    'services',
    'angular-datepicker'
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

var isLoggedIn = (typeof(Storage) !== 'undefined') ? localStorage.getItem('isLoggedIn') : false;
localStorage.setItem('isLoggedIn', isLoggedIn);

ezyFlightApp.run(function($location, $rootScope){
  $rootScope.$on('$routeChangeStart', function(){
    if(localStorage.getItem('isLoggedIn') === 'false'){
      $location.path('/');
    }
  });
});