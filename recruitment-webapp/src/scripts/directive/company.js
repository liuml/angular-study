'use strict';
angular.module('app').directive('appCompany', [function(){
	return {
		restrict: 'A',
		templateUrl: 'view/template/company.html',
		replace: true,
		scope:{
			com:'='
		}
	};
}]);