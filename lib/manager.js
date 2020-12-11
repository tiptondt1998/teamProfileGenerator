const employee = require('./employee');
//officeNumber
//getRole overridden to return manager

// function manager(){
//  this.officeNumber = officeNumber
// };
// manager.prototype.getOfficeNumber = function(){
//     return{
//         officeNumber: this.officeNumber
//     };
// };
// module.exports = manager;

class manager{
    constructor(officeNumber = ''){
        this.officeNumber = officeNumber;
    }
    getRole(){
        return{
            name: this.name,
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber
        }
        printManager();
    }
    printManager(){
        console.log(`Name: ${manager.name}, id: ${manager.id}, email: ${manager.email}, office number: ${manager.officeNumber}`);
    }
}

module.exports = manager;