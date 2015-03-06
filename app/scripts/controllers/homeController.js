'use strict';

angular.module('controllers', [])
.controller('homeController', ['$rootScope', '$scope', '$location', 'dataService', 'authService', function($rootScope, $scope, $location, dataService, authService) {

	$scope.errorMessage = '';
	$scope.dataLoading = false;

	//Get and set config settings 
	dataService.getServerConfig().then(function(server_res){
		console.log(server_res);
		dataService.setConfig(server_res.data);
		authService.setConfig(server_res.data);
	});

	$scope.login = function(){
		$scope.dataLoading = true;
		authService.getLogin($scope.username, $scope.password).then(function(res){
			$scope.errorMessage = '';
			$scope.dataLoading = false;
			var user_id = res.data.objectId;
			$location.path('/bookings/' + user_id);
		}, function(error){
			$scope.dataLoading = false;
			$scope.errorMessage = 'Username/Password is not correct';
		});
	};
}]);