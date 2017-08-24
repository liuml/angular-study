'use strict';
angular.module('app').controller('positionCtrl', ['$scope','$http','$state','$q','cache', function($scope,$http,$state,$q,cache){
	$scope.isLogin = !!cache.get('name');
	$scope.message = $scope.isLogin ? '投递简历':'去登录'
	function getPosition(){
		var def = $q.defer();
		$http.get('./data/position.json?id='+$state.params.id).success(function(result){
			$scope.position = result;
			if (result.posted) {
				$scope.message = '已投递';
			}
			def.resolve(result);
		}).error(function(error) {
			def.reject(error)
		});
		return def.promise;
	}
	function getCompany(id){
		$http.get('./data/company.json?id='+id).success(function(result){
			$scope.company = result;
		});
	}
	getPosition().then(function(obj){
		getCompany(obj.companyId);
	});
	$scope.post = function(){
		if ($scope.message !== '已投递') {
			if ($scope.isLogin) {
				$http.post('data/handle.json', {
					id:$scope.position.id
				}).success(function(response){
					$scope.message = '已投递';
				});
			}else{
				$state.go('login');
			}
		}
	}
}]);