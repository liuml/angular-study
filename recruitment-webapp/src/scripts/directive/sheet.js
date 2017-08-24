'use strict';
angular.module('app').directive('appSheet',[function(){
	return {
		restrict:'A',
		templateUrl:'view/template/sheet.html',
		replace:true,
		scope:{
			list:'=',
			visible:'=',
			select:'&'
		}
	};
}]);