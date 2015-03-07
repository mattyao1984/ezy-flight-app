'use strict';

describe('Controller: bookingsController', function () {

  // load the controller's module
  beforeEach(module('ezyFlightApp'));

  var bookingsController, scope, $httpBackend, route = {};

  route.current = {
    params: {
      'userId': 'testID'
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, $route) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    bookingsController = $controller('bookingsController', {
      $scope: scope,
      $route: route
    });
  }));

  describe('Initialize values', function() {
    it('should init with correct values', function () { 
      expect(scope.userId).toBe('testID'); 
      expect(scope.dataReady).toBe(false);
      expect(scope.showModal).toBe(false);
      expect(scope.allBookings.length).toBe(0);
      expect(scope.submitted).toBe(false);
    });
  });

  describe('when addFlight button is clicked', function() {
    it('should show the modal and init the booking object', function () { 
      scope.addFlight();
      expect(scope.showModal).toBe(true);
      expect(scope.booking).not.toBeUndefined();
    });
  });

  describe('when cancel button is clicked', function() {
    it('should hide the modal', function () { 
      scope.cancelBooking();
      expect(scope.showModal).toBe(false);
      expect(scope.submitted).toBe(false);
    });
  });

  describe('test isNumberic()', function() {
    it('should return false if the value is not a number', function () { 
      expect(scope.isNumeric('abc')).toBe(false);
      expect(scope.isNumeric('%^%')).toBe(false);
      expect(scope.isNumeric('1@$')).toBe(false);
    });
  });
});
