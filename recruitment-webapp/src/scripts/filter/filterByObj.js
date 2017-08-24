'use strict';
angular.module('app').filter('filterByObj',function(){
	return function(list,obj){
		var result = [];
		angular.forEach(list, function(item){
			var isEqual = true;
			// 判断对象中的每个属性是否都相等
			for(var e in obj){
				if (item[e] !== obj[e]) {
					isEqual = false;
				}
			}
			if (isEqual) {
				result.push(item);
			}
		});
		return result;
	};
});