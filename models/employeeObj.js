const router = require('express').Router();

function employeeObjModel(idInt, versionInt, firstNameString, lastNameString,
                          backgroundString , ListOfProjects, ListOfAdresses){
  return employee = {
    id:idInt,
    version:versionInt,
    firstName:firstNameString,
    lastName:lastNameString,
    background:backgroundString,
    projects:ListOfProjects,
    addressList:ListOfAdresses
  };

}

module.exports = {
  createEmployeeObj:createEmployeeObj
}
