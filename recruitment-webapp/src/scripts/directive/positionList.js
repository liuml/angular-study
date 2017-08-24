'use strict';
angular.module('app').directive('appPositionList', ['$http',function($http){
	return {
		restrict: 'A',
		templateUrl: 'view/template/positionList.html',
		replace: true,
		scope:{
			data:'=',
			filterObj:'=',
			isFavorite:'='
		},
		link:function($scope){
			$scope.select = function(item){
				$http.post('data/myFavorite.json', {
					id:item.id,
					select:!item.select
				}).success(function(response){
					item.select = !item.select;
				});
			}
		}
	};
}]);