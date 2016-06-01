/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('mihiroDemo')
        .controller('companiesCtrl', ['$scope', 'companiesSrvc', function ($scope, companiesSrvc) {
                $scope.title = 'Mihiro Demo Companies';
                $scope.companies = [];

                $scope.listFrom = 0;
                $scope.listTo = $scope.listFrom + $scope.pagesize;
                $scope.pagesize = 10;

                $scope.state = false;

                $scope.companyCount = companiesSrvc.getCompanyCount();

                function getCompanyData() {
                    $scope.state = false;
                    var from = parseInt($scope.listFrom);
                    var ps = parseInt($scope.pagesize);
                    $scope.listTo = from + ps;
                    companiesSrvc.getCompanies($scope.listFrom, $scope.listTo).then(function (data) {
                        $scope.companies = data;
                        $scope.state = true;
                    });

                }

                $scope.gotoNext = function () {
                    var from = parseInt($scope.listFrom);
                    var ps = parseInt($scope.pagesize);
                    if ($scope.listTo < $scope.companyCount) {
                        $scope.listFrom = from + ps;
                        getCompanyData();
                    }
                };

                $scope.gotoPrevious = function () {
                    var from = parseInt($scope.listFrom);
                    var ps = parseInt($scope.pagesize);
                    if ($scope.listFrom > 0) {
                        $scope.listFrom = from - ps;
                        getCompanyData();
                    }
                };

                $scope.changePageSize = function () {
                    getCompanyData();
                };
                getCompanyData();
            }]);