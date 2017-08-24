angular.module('restfullConsumerApp')
.service('EmployeeAPIService', EmployeeAPIService);

function EmployeeAPIService($http) {

  //url for api
  var apiURL ='http://10.1.252.20:8080/api/';
  var employeeURL = 'employee/';
  var addressURL = 'address/';
  var projectURL = 'project/';

  //get the employee info
  this.getEmployeeData = function () {
   return $http.get(apiURL + employeeURL)
       .then(function(response){
         console.log('whats the response',response);
         // returns response
         return response.data;
    });
  };

  //post new/update employee info
  this.saveEmployeeData = function (employeeObj) {
    return $http({
      method: 'POST',
      url: apiURL + employeeURL,
      data: employeeObj
    }).then(function successCallback() {
        //returns saved of mp errorCallback
        return 'Employee Saved';
      }, function errorCallback(response) {
        console.log('Error in Call back',response);
      });
  };

  //delete employee info
  this.deleteEmployeeData = function(id) {
    return $http({
      method: 'DELETE',
      url: apiURL + employeeURL + id
    }).then(function successCallback() {
        //returns response
        return 'data deleted';
      }, function errorCallback(response) {
        console.log('Error in Call back',response);
      });
  };

  //delete project info
  this.deleteProjectData = function(id) {
    return $http({
      method: 'DELETE',
      url: apiURL + projectURL + id
    }).then(function successCallback() {
        //returns response
        return 'data deleted';
      }, function errorCallback(response) {
        console.log('Error in Call back',response);
      });
  };

  //delete address info
  this.deleteProjectData = function(id) {
    return $http({
      method: 'DELETE',
      url: apiURL + addressURL + id
    }).then(function successCallback() {
        //returns response
        return 'data deleted';
      }, function errorCallback(response) {
        console.log('Error in Call back',response);
      });
  };

}
