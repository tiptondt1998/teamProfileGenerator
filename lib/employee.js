//getName(),getId(),getEmail(),getRole
//getRole returns employee object

// function employee(name = '', id = '', email = ''){
//     this.name = name;
//     this.id = id;
//     this.email = email;
// }
// employee.prototype.getName = function(){
//     return{
//         name: this.name
//     };
// };
// employee.prototype.getId = function(){
//     return {
//         id: this.id
//     };
// };
// employee.prototype.getEmail = function(){
//     return{
//         email: this.email
//     };
// };
// employee.prototype.getRole = function(){
//     return{

//     }
// };

// module.exports = employee;

const fs = require('fs');
const inquirer = require('inquirer');

class employee{
    constructor(name ='', id = '', email = ''){
        this.name = name;
        this.id = id;
        this.email = email;
        // inquirer.prompt({
        //     type: 'list',
        //     name: 'role',
        //     message: 'What is the employee role?',
        //     choices: ['manager','engineer','intern']
        //   }).then(({ role }) => {
        //     if(role = 'manager'){ 
        //     inquirer.prompt({
        //         type: 'text',
        //         name: 'officeNumber',
        //         message: 'Enter office Number. '
        //     )}
        //     this.manager = new manager(officeNumber);
        //     }

        //     else if(role = 'engineer'){
        //         this.engineer = new engineer(github);
        //     }
        //     else if (role = 'intern'){
        //         this.intern = new intern(school);
        //     }
        //   });
     }
    getRole(){
        return{
        name: this.name,
        id: this.id,
        email: this.email
        }
        printEmployee();
    }

    printEmployee(){
        console.log(`Name: ${employee.name}, id: ${employee.id}, email: ${employee.email}`);
    }
}

module.exports = employee;