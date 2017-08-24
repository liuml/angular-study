(function(angular){
	'use strict';
	var module = angular.module('moviecat.movie_detail', ['ngRoute','moviecat.services.http']);
	module.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetailController'
		})
	}])
	.controller('MovieDetailController', ['$scope','$routeParams','HttpService', function($scope,$routeParams,HttpService){
		$scope.movie = {};
		$scope.loading = true;
		var id = $routeParams.id;
		var url = 'http://api.douban.com/v2/movie/subject/'+id;
		HttpService.jsonp(url,{},function(result){
			$scope.movie = result;
			$scope.loading = false;
			$scope.$apply();
		});
	}]);
})(angular);