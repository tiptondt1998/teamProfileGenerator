const employee = require('./employee');

class manager extends employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'manager'
    }
    printManager(){
        console.log(`Name: ${manager.name}, id: ${manager.id}, email: ${manager.email}, office number: ${manager.officeNumber}`);
    }
}

module.exports = manager;