angular.module("demoApp").directive("livre",function(){
	return {
		restrict: 'E',
		templateUrl:'templates/livre.html',
		scope: {
			roman: '=roman'
		}
	}
});