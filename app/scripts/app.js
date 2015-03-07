'use strict';

/**
 * @ngdoc overview
 * @name ezyFlightApp
 * @description
 * # ezyFlightApp
 *
 * Main module of the application.
 */

var isLoggedIn = (typeof(Storage) !== 'undefined') ? localStorage.getItem('isLoggedIn') : false;
localStorage.setItem('isLoggedIn', isLoggedIn);

angular
  .module('ezyFlightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'directives',
    'services',
    'controllers',
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
  })
  .run(function($location, $rootScope){
    $rootScope.$on('$routeChangeStart', function(){
      if(localStorage.getItem('isLoggedIn') === 'false'){
        $location.path('/');
      }
    });
  });


