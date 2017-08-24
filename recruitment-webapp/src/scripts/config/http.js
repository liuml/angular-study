'use strict';
angular.module('app').config(['$provide',function($provide) {
	$provide.decorator('$http', ['$delegate','$q', function($delegate,$q){
		var get = $delegate.get;
		$delegate.post = function(url,data,config){
			var defer = $q.defer();
			get(url).success(function(response){
				defer.resolve(response);
			}).error(function(error) {
				defer.reject(error)
			});
			return {
				success: function(cb){
					defer.promise.then(cb);
				},
				error: function(cb){
					defer.promise.then(null, cb);
				}
			};
		}
		return $delegate;
	}]);
}]);