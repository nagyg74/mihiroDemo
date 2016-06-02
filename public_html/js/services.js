angular.module('mihiroDemo')
        .factory('companiesSrvc', function ($q) {

            var companies = demoData;

            function getCompanies(from, to) {

                from = from-1 || 0;
                to = to || companies.length;
                if (to > companies.length) {
                    to = companies.length;
                }

                return $q(function (resolve, reject) {
                    setTimeout(function () {
                            resolve(companies.slice(from, to));
                    }, serviceLatency);
                });
            }

            function getCompanyCount() {
                return companies.length;
            }

            return {
                getCompanies: getCompanies,
                getCompanyCount: getCompanyCount
            };
        });