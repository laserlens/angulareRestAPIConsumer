angular.module('restfullConsumerApp')
.service('EmployeeObjService', EmployeeObjService);

var ListOfProjects = [];//array to hold project objects
var ListOfAdresses = [];//array to hold address objects

//service funtion so contollers have acess to object creation
function EmployeeObjService() {

  //create an employee obj
  this.createEmployeeObj = function (idInt, versionInt, firstNameString, lastNameString,
                            backgroundString) {
    var employee = {
      id:idInt,
      version:versionInt,
      firstName:firstNameString,
      lastName:lastNameString,
      background:backgroundString,
      projects:ListOfProjects,
      addressList:ListOfAdresses
    };

    ListOfProjects = [];//clears project array
    ListOfAdresses = [];//clears address array
    return employee;
  };

  //create an andress object and push to list
  this.createAddressObj = function(idInt, versionInt, typeString, streetAddressString
                                    , cityString, stateString, zipcodeString){
    var address = {
      id:idInt,
      version:versionInt,
      type:typeString,
      streetAddress:streetAddressString,
      city:cityString,
      state:stateString,
      zipcode:zipcodeString
    };

    ListOfAdresses.push(address);
  };

  //create a project object and push to list
  this.createProjectObj = function (idInt, versionInt, projectNameString,
                                      clientNameString , fieldRateInt) {
    var project = {
      id:idInt,
      version:versionInt,
      projectName:projectNameString,
      clientName:clientNameString,
      fieldRate:fieldRateInt
    };

    ListOfProjects.push(project);
  };

}//end of EmployeeObjService function
