const employee = require('./employee');
//officeNumber
//getRole overridden to return manager
function manager(){
 this.officeNumber = officeNumber
};
manager.prototype.getOfficeNumber = function(){
    return{
        officeNumber: this.officeNumber
    };
};
module.exports = manager;