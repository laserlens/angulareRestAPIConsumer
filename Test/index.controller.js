angular.module('restfullConsumerApp')
.controller('IndexController',IndexController);

function IndexController(EmployeeAPIService,EmployeeObjService) {
  var ctrl = this;
  var employee;
  var idInt;
  var versionInt;

  EmployeeAPIService.getEmployeeData().then(function(response){
    //array of data from api
    ctrl.employeeData = response;
    //test to see what comes back from api through the EmployeeAPIService
    console.log('whats the response',ctrl.employeeData);
  });

  employee = EmployeeObjService.createEmployeeObj("NEW", "lastNameString",
                            "backgroundString");
  //test to see if employee object was created from EmployeeObjService
  console.log('what is the employee object created',employee);

  EmployeeAPIService.saveEmployeeData(employee).then(function(response){
    //test if employee was saved response from EmployeeAPIService
    console.log('Emloyee saved?: ', response);
  });

  EmployeeAPIService.deleteEmployeeData(2).then(function(response) {
    //test if employee Deleted repsonse from EmployeeAPIService
    console.log('Employee deleted?: ', response);
  });

  EmployeeAPIService.deleteProjectData(1).then(function functionName(response) {
    //test if project Deleted response from EmployeeAPIService
    console.log('Project Deleted?: ', response);
  });

}
