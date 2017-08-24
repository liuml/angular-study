'use strict';
angular.module('app').controller('mainCtrl', ['$scope','$http', function($scope,$http){
	$http.get('./data/positionList.json').success(function(result){
		$scope.list = result;
	});
}]);