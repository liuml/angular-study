'use strict';
angular.module('moviecat', ['ngRoute','moviecat.movie_detail','moviecat.movie_list'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider.otherwise({redirectTo:'/in_theaters/1'});
}]).controller('SearchController', ['$scope','$route', function($scope,$route){
	$scope.keyword = '';
	$scope.search = function(){
		$route.updateParams({category:'search',q:$scope.keyword});
	}
}]).controller('NavController', ['$scope','$location', function($scope,$location){
	$scope.$location = $location;
	$scope.$watch('$location.path()', function(newValue) {
		if (newValue.startsWith('/in_theaters')) {
			$scope.type = 'in_theaters';
		}else if (newValue.startsWith('/coming_soon')) {
			$scope.type = 'coming_soon';
		}else if(newValue.startsWith('/top250')){
			$scope.type = 'top250';
		}else{
			$scope.type = '';
		}
	});
}]);