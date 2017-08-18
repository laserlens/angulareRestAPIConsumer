const router = require('express').Router();

function adresssObjModel(idInt, versionInt, typeString, streetAddressString
                          , cityString, stateString, zipcodeString){
  return address = {
    id:idInt,
    version:versionInt,
    type:typeString,
    streetAddress:streetAddressString,
    city:cityString,
    state:stateString,
    zipcode:zipcodeString
  };

}

module.exports = {
  createAdresssObj:createAdresssObj
}
