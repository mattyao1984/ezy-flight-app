'use strict';

angular.module('services', [])
.factory('dataService', ['$http','$q', function($http, $q) {
	var myConfig;
	var env = 'staging';

	return {
		setConfig: function(_data){
      this.myConfig = _data;
    },

    getConfig: function(){
        return this.myConfig;
    },
    
		getServerConfig: function(){
        var promise = $http({ method: 'GET', url: 'scripts/models/config.json' }).success(function(data, status, headers, config) {
            return data;
        });

        return promise;
    }
	}
}]);