angular.module('app', ['ngRoute'])

.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/app.html',
                controller: 'appController'
            })
})
.controller('appController', function($scope, $http) {
    $scope.tags = {},
        $scope.links = [],
        $scope.postRequest = function() {
            // $scope.switch = "top"
            $http({
                method: 'POST',
                url: '/',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                data: {
                    tag: $scope.tags.requiredTag || 'timessquare',
                    city: $scope.tags.requiredCity || 'new york city'
                }
            }).then(function successCallback(response) {
                for (var i = 0; i < response.data.length; i++) {
                    $scope.links.push({
                        link: response.data[i].url,
                        title: response.data[i].title
                    });
                }
            }, function errorCallback(response) {
                console.log('post request failed')
            });
            $scope.tags.requiredTag = '';
            $scope.tags.requiredCity = '';
            // $scope.switch = "top";
        },
        $scope.reset = function() {
            $scope.links = [];
        }

})