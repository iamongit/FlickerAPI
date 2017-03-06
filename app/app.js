angular.module('app', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl:'app/app.html',
		controller: 'appController'
	})
})
.controller('appController', function($scope, $http){
	$scope.tags = {},
	$scope.links = [],
	$scope.postRequest = function(){
		$http({
  		method: 'POST',
  		url: '/',
  		headers: {
   			'Content-Type': 'application/JSON'
 		},
  		data: { tag: $scope.tags.requiredTag }
		}).then(function successCallback(response) {
    	// console.log('post request successful response is', response.data)
    	var obj = JSON.parse(response.data);
    	for(var i=0;i<obj.photos.photo.length;i++){
    		var temp = obj.photos.photo[i];
    		var finLink = 'https://farm' + temp.farm + '.staticflickr.com/'+temp.server+'/'+temp.id+'_'+temp.secret+'.jpg';
    		$scope.links.push({link: finLink,title:temp.title });
    	}
    	console.log('links', $scope.links);
  		}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
    	console.log('post request failed')
  		});
  		$scope.tags.requiredTag = '';
	},
	$scope.reset = function(){
		$scope.links = [];
	}

})

//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

