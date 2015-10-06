 var app = angular.module('walkdad');

 app.directive('walkdad', function(){
 	return{
 		restrict: "E",
 		template: '<div class="search in app"> {{quotes}} </div>',
 		replace: false
 	};
 });