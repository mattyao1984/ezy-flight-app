'use strict';

angular.module('controllers')
.controller('bookingsController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	$scope.userId = $route.current.params.userId;
}]);