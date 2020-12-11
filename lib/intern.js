const employee = require('./employee');

//school
//getSchool()
//getRole overridden to return intern

// function intern(){
//     this.school = school;
// };
// intern.prototype.getSchool = function(){
//     return{
//         school: this.school
//     };
// };
// module.exports = intern;

class intern{
    constructor(school =''){
        this.school = school;
    }
    getRole(){
        return{
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school
        }
        printIntern();
    }
    printIntern(){
        console.log(`Name: ${intern.name}, id: ${intern.id}, email: ${intern.email}, school: ${intern.school}`);
    }
}
module.exports = intern;