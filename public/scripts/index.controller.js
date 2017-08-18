angular.module('restfullConsumerApp')
.controller('IndexController',IndexController);

function IndexController(EmployeeAPIService) {
  var ctrl = this;

  EmployeeAPIService.getEmployeeData().then(function(response){
        //array of data from api
        ctrl.employeeData = response;
        console.log('whats the response',ctrl.employeeData);
    });

}//end of IndexController Function
