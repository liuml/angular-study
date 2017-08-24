(function(angular){
	var http = angular.module('moviecat.services.http', []);
	http.service('HttpService', ['$window','$document', function($window,$document){
		this.jsonp = function(url,data,callback){
			// 挂载回调函数
			var cbFnName = 'my_callback' + Math.random().toString().replace('.','');
			$window[cbFnName] = callback;
			// 处理URL中的回调参数
			var queryString = url.indexOf('?')==-1 ? '?':'&';
			for (var key in data){
				queryString += key+'='+data[key]+'&';
			}
			queryString += 'callback='+cbFnName;
			// 创建一个script标签
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + queryString;
			// 将script标签放到页面中
			$document[0].body.appendChild(scriptElement);
		}
	}]);
})(angular);