(function(angular){
	'use strict';
	// 创建正在热映模块
	var module = angular.module('moviecat.movie_list', ['ngRoute','moviecat.services.http']);
	// 配置模块的路由
	module.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/:category/:page', {
			templateUrl: 'movie_list/view.html',
			controller: 'MovieListController'
		})
	}])
	.controller('MovieListController', ['$scope','$route','$routeParams','HttpService', function($scope,$route,$routeParams,HttpService){
		$scope.subjects = [];
		$scope.total = 0;
		$scope.totalPage = 0;
		$scope.loading = true;
		$scope.title = 'Loading...';
		var page = parseInt($routeParams.page);
		$scope.currentPage = page;
		var count = 10;
		var start = (page-1)*count 
		var url = 'http://api.douban.com/v2/movie/'+$routeParams.category;
		HttpService.jsonp(url,{start:start,count:count,q:$routeParams.q},function(result){
			$scope.subjects = result.subjects;
			$scope.total = result.total;
			$scope.title = result.title;
			$scope.totalPage = Math.ceil($scope.total/count);
			$scope.loading = false;
			$scope.$apply();
		});
		// 分页跳转的函数
		$scope.goPage = function(page){
			if (page>=1 && page <= $scope.totalPage) {
				$route.updateParams({page:page});
			}
		}
	}]);
})(angular);