'use strict';

angular.module('app').directive('appFoot', [function(){
	// Runs during compile
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'view/template/foot.html',
		replace: true
	};
}]);