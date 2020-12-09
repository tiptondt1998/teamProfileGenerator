
//getName(),getId(),getEmail(),getRole
//getRole returns employee object
function employee(name = ''){
    this.name = name;
    this.id = id;
    this.email = email;
}
employee.prototype.getName = function(){
    return{
        name: this.name
    };
};
employee.prototype.getId = function(){
    return {
        id: this.id
    };
};
employee.prototype.getEmail = function(){
    return{
        email: this.email
    };
};
employee.prototype.getRole = function(){
    return{

    }
};

module.exports = employee;