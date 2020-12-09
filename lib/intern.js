const employee = require('./employee');

//school
//getSchool()
//getRole overridden to return intern
function intern(){
    this.school = school;
};
intern.prototype.getSchool = function(){
    return{
        school: this.school
    };
};
module.exports = intern;