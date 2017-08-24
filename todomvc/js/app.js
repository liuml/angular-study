(function (angular) {
	'use strict';
})(angular);
angular.module('todosApp',[]).controller('mainController',['$scope','$location',function($scope,$location){
	//	文本框需要一个模型
	$scope.text = '';
	//	任务列表
	$scope.todoList = [];
	$scope.add = function (event) {
		if ($scope.text !== '' && event.keyCode === 13){
			$scope.todoList.push({
				id:new Date().getTime(),
				text:$scope.text,
				completed:false
			});
			$scope.text = '';
		}
	};
	$scope.delete = function(id){
		for (var i = 0; i < $scope.todoList.length; i++){
			if ($scope.todoList[i].id === id){
				$scope.todoList.splice(i,1);
			}
		}
	};
	$scope.existCompleted = function(){
		for (var  i = 0; i < $scope.todoList.length; i++){
			if ($scope.todoList[i].completed){
				return true;
			}
		}
		return false;
	};
	$scope.clear = function () {
		for (var i = 0; i < $scope.todoList.length; i++){
			if ($scope.todoList[i].completed){
				$scope.todoList.splice(i,1);
			}
		}
	};
	$scope.currentEidtId = 0;
	$scope.editing = function(id){
		for (var i = 0; i<$scope.todoList.length; i++){
			if($scope.todoList[i].id === id){
				if(!$scope.todoList[i].completed){
					$scope.currentEidtId = id;
				}
			}
		}

	};
	$scope.removeEditing = function (event) {
		if (event.keyCode === 13){
			$scope.currentEidtId = 0;
		}
	};
	var checkAll = true;
	$scope.toggleAll = function () {
		for (var i = 0; i < $scope.todoList.length; i++){
			$scope.todoList[i].completed = checkAll;
		}
		checkAll = !checkAll;
	};
	$scope.selector = {};
	$scope.$location = $location;
	$scope.$watch('$location.path()',function (newVal, oldVal) {
		switch (newVal){
			case '/active':
				$scope.selector = {completed:false};
				break;
			case '/completed':
				$scope.selector = {completed:true};
				break;
			default:
				$scope.selector = {};
		}
	});
	// filter 默认的是模糊匹配，需要自定义精确匹配
	$scope.comparator = function(actual, expected) {
		return actual === expected;
	}
}]);
