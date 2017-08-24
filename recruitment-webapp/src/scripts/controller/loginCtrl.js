'use strict';
angular.module('app').controller('loginCtrl', ['$scope','$http','$state','cache', function($scope,$http,$state,cache){
	$scope.submit = function(){
		$http.post('data/login.json',$scope.user).success(function(response){
			cache.put('id',response.id);
			cache.put('name',response.name);
			cache.put('image',response.image);
			$state.go('main');
		});
	}
}]);