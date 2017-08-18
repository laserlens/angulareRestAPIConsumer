angular.module('restfullConsumerApp')
.service('EmployeeAPIService', EmployeeAPIService);

function EmployeeAPIService($http) {

  //url for api
  var employeeAPI ='http://10.1.252.20:8080/api/employee/'

  //get the employee info
  this.getEmployeeData = function () {
   return $http.get(employeeAPI)
       .then(function(response){
         console.log('whats the response',response);
         // returns response
         return response.data;
    });//end of get
  };//end of getEmployeeData

  //post new employee info

  //update/put employee info

  //delete employee info

  //delete Contact info

  

}
