'use strict';
angular.module('app').directive('appPositionInfo', ['$http', function($http){
	return {
		restrict: 'A',
		templateUrl: 'view/template/positionInfo.html',
		replace: true,
		scope: {
			isLogin:'=',
			position:'='
		},
		link:function($scope){
			$scope.$watch('position', function(newValue, oldValue, scope) {
				if (newValue) {
					$scope.position.select = $scope.position.select||false;
					$scope.imageSrc = $scope.position.select ? 'image/star-active.png' : 'image/star.png';
				}
			});
			$scope.favorite = function(){
				$http.post('data/myFavorite.json', {
					id: $scope.position.id,
					select:!$scope.position.select
				}).success(function(response){
					$scope.position.select = !$scope.position.select;
					$scope.imageSrc = $scope.position.select ? 'image/star-active.png' : 'image/star.png';
				});
			}
			
		}
	};
}]);