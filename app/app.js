angular.module('app', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'app/app.html',
		controller: 'appController'
	})
})
.controller('appController', function($scope, $http){
	
	$http({
  		method: 'POST',
  		url: 'localhost:2000',
  		data: { tag: $scope.requiredTag }
		}).then(function successCallback(response) {
    	// this callback will be called asynchronously
    	// when the response is available
    	console.log('post request successful')
  		}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
    	console.log('post request failed')
  		});

})

