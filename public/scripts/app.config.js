angular.module('restfullConsumerApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/astonHR', {
        templateUrl: 'views/astonHR.html',
        controller: 'astonHRController as astonHR'
        });
)};
