'use strict';

angular.module('controllers')
.controller('bookingsController', ['$rootScope', '$scope', '$route', '$location', 'dataService', function($rootScope, $scope, $route, $location, dataService) {
	$scope.userId = $route.current.params.userId;
	$scope.showModal = false;
	$scope.dataReady = false;
	$scope.allBookings = [];
	$scope.bookingForm = {};

	$scope.submitted = false;

	//Get and set config settings 
	dataService.getServerConfig().then(function(server_res){
		dataService.setConfig(server_res.data);
		$scope.syncData();
	});

	$scope.addFlight = function(){
		$scope.showModal = true;
		$scope.booking = {};
	};

	$scope.cancelBooking = function(){
		$scope.showModal = false;
		$scope.submitted = false;
	};

	$scope.logout = function(){
		localStorage.setItem('isLoggedIn' ,false);
		$location.path('/');
	};

	$scope.setFormScope= function(scope){
    $scope.bookingForm = scope;
	}

	$scope.syncData = function(){
		$scope.dataReady = false;
		dataService.getMyBookings($scope.userId).then(function(bookingsRes){
			$scope.allBookings = bookingsRes.data.results;
			$scope.dataReady = true;
		});
	};

	$scope.saveBooking = function(){
		$scope.booking.capacity = parseInt($scope.booking.capacity);
		var data = $.extend($scope.booking, {
			userId: $scope.userId
		});

		$scope.submitted = true;

		if($scope.bookingForm.bookingForm.$invalid == false && $scope.validCapacity()){
			dataService.postAddFlight(data).then(function(res){
				$scope.showModal = false;
				$scope.submitted = false;

				var newId = res.data.objectId;
				$scope.booking = $.extend($scope.booking, {
					objectId: newId
				});

				$scope.allBookings.push($scope.booking); //Update allBookings list
			});
		}
	};

	$scope.isNumeric = function(n){
	  return !isNaN(parseFloat(n)) && isFinite(n);
	};

	$scope.validCapacity = function(){
		if($scope.isNumeric($scope.booking.capacity)){
			return true;
		}else{
			return false;
		}
	};

	$scope.removeBooking = function(objectId){
		var answer = confirm('Are you sure to remove this flight from the system?');
		if(answer){
			dataService.deleteBooking(objectId).then(function(res){
				//remove the booking from the list
				$scope.allBookings = _.without($scope.allBookings, _.findWhere($scope.allBookings, {objectId: objectId}));
			});
		}
	};
}]);