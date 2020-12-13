const employee = require('./employee');

class intern extends employee{
    constructor(name,id, email, school){
        super(name,id,email);
        this.school = school;
    }
    getRole(){
        return 'intern'
    }
    printIntern(){
        console.log(`Name: ${intern.name}, id: ${intern.id}, email: ${intern.email}, school: ${intern.school}`);
    }
}
module.exports = intern;