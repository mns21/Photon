angular.module('app')
    .controller('device_controller',function($scope, $http){

            $http({
                method: 'GET',
                url: '/devices'
                // data:{"arg":$scope.ordre}
            }).then(function successCallback(response) {
                console.log(response)
                var datas = response.data;
                $scope.devices = datas;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                console.log(response)
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    });
