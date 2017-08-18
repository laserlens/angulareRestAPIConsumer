const router = require('express').Router();

function projectObjModel(idInt, versionInt, projectNameString,
                          clientNameString , fieldRateInt){
  return project = {
    id:idInt,
    version:versionInt,
    projectName:projectNameString,
    clientName:clientNameString,
    fieldRate:fieldRateInt
  };

}

module.exports = {
  createProjectObj:createProjectObj
}
