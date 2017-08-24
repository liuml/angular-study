'use strict';
angular.module('app').directive('appPositionClass', [function(){
	return {
		restrict: 'A',
		templateUrl: 'view/template/positionClass.html',
		replace: true,
		scope:{
			com:'='
		},
		link:function($scope){
			$scope.showPositionList = function(idx){
				$scope.isActive = idx;
				$scope.positionList = $scope.com.positionClass[idx].positionList;
			}
			$scope.$watch('com', function(newValue) {
				if (newValue) {
					$scope.showPositionList(0);
				}
			});
			
		}
	};
}]);