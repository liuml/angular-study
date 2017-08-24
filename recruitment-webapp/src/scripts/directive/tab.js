'use strict';
angular.module('app').directive('appTab', [function(){
	return {
		restrict:'A',
		templateUrl:'view/template/tab.html',
		replace:true,
		scope:{
			tabClick:'&',
			list:'='
		},
		link: function($scope){
			$scope.click = function(tab){
				$scope.selectId = tab.id;
				$scope.tabClick(tab);
			}
		}
	};
}]);