angular.module('restfullConsumerApp')
.service('EmployeeObjService', EmployeeObjService);

const Employee = require('../models/employeeObj');

//service funtion so contollers have acess to object creation
function EmployeeObjService() {

  this.createEmployeeObj = function (idInt, versionInt, firstNameString, lastNameString,
                            backgroundString , ListOfProjects, ListOfAdresses) {
    return Employee.employeeObjModel(idInt, versionInt, firstNameString, lastNameString,
                              backgroundString , ListOfProjects, ListOfAdresses);
  }



}//end of service function
