/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('mihiroDemo')
        .controller('companiesCtrl', ['$scope', 'companiesSrvc', function ($scope, companiesSrvc) {
                $scope.title = 'Mihiro Demo Companies';
                $scope.companies = [];

                $scope.listFrom = 1;
                $scope.listTo = $scope.listFrom + $scope.pageSize;
                $scope.pageSize = 12;

                $scope.state = false;

                $scope.companyCount = companiesSrvc.getCompanyCount();
                $scope.pageCount = 0;
                $scope.activePage = 1;

                $scope.isLastPage = false;
                $scope.isFirstPage = true;
                
                function refreshPageDetails() {
                    $scope.pageCount = Math.ceil(parseInt($scope.companyCount) / parseInt($scope.pageSize));
                    $scope.activePage = Math.ceil(parseInt($scope.listFrom) / parseInt($scope.pageSize));
                }

                function getCompanyData() {
                    $scope.state = false;
                    var from = parseInt($scope.listFrom);
                    var ps = parseInt($scope.pageSize);
                    $scope.listTo = from + ps - 1;
                    companiesSrvc.getCompanies($scope.listFrom, $scope.listTo).then(function (data) {
                        $scope.companies = data;
                        $scope.state = true;
                    });
                }

                function updateBounds(){
                    if ($scope.activePage == 1){
                        $scope.isFirstPage = true;
                    } else {
                        $scope.isFirstPage = false;
                    }
                    
                    if ($scope.activePage == $scope.pageCount){
                        $scope.isLastPage = true;
                    } else {
                        $scope.isLastPage = false;
                    }
                }
                
                $scope.gotoNext = function () {
                    var from = parseInt($scope.listFrom);
                    var ps = parseInt($scope.pageSize);
                    if ($scope.listTo < $scope.companyCount) {
                        $scope.listFrom = from + ps;
                        refreshPageDetails();
                        getCompanyData();
                        updateBounds();
                    }
                };

                $scope.gotoPrevious = function () {
                    var from = parseInt($scope.listFrom);
                    var ps = parseInt($scope.pageSize);
                    if ($scope.listFrom > 0) {
                        $scope.listFrom = from - ps;
                        refreshPageDetails();
                        getCompanyData();
                        updateBounds();
                    }
                };

                $scope.changePageSize = function () {
                    refreshPageDetails();
                    $scope.listFrom = ($scope.activePage - 1) * $scope.pageSize + 1;
                    refreshPageDetails();
                    getCompanyData();
                    updateBounds();
                };

                refreshPageDetails();
                getCompanyData();
                updateBounds();
            }]);