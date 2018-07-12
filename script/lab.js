(function(angular) {
    'use strict';
    var ngApp = angular.module('ngApp', []);
    //var module = angular.module('onlineSearchEngine', []);
    ngApp.controller('homeController', ['$scope','$http', function($scope,$http){
    	
    	$scope.init = function() {
	    	$http.get("./json/home.json").then($scope.bindhomeJson.bind($scope));	
    	};

    	$scope.bindhomeJson = function( root ) {
    		$scope.items = [];
    		if ( root ) {
    			$scope.items = root.data;
    			console.log($scope.items);
    		}
    		if ( !$scope.$$phase ) {
    			$scope.$apply();
    		}
    	};

    	$scope.init();
}]);
})(window.angular);