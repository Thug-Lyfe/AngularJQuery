'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngAnimate',
    'angular-jwt',
    'ui.bootstrap',
    'ngTable'
])
        .controller('myAppCtrl', function ($http, $scope, NgTableParams) {
            //ca-mb1337.rhcloud.com/SemesterSeed/api/Currency/getRates


                
                    $http({
                        method: "GET",
                        url: "api/generic/factory"
                    }).then(function (response) {

                        var data = response.data;
                        $scope.tableParams = new NgTableParams({page: 1, count: 10}, {dataset: data});
                    });
                
            

        });




