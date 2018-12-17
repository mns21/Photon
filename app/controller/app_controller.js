angular.module('app')
    .controller('app_controller',function($scope, $http){
        $scope.maVariable="Hello World !!!!";
        $scope.myclic=function () {
            console.log($scope.ordre);
            $http({
                method: 'POST',
                url: 'https://api.particle.io/v1/devices/3c003c000f47363333343437/\n' +
                    'led?access_token=d1803f3cbfe1d1f45efddcafdbe02ac89b8f3fb7',
                data:{"arg":$scope.ordre}
            }).then(function successCallback(response) {
                console.log(response)
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log(response)
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
    });
