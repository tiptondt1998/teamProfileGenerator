class employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
     }
    getRole(){
        return 'employee'
    }

    printEmployee(){
        console.log(`Name: ${employee.name}, id: ${employee.id}, email: ${employee.email}`);
    }
}

module.exports = employee;