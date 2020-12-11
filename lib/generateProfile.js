const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./employee');
const engineer = require('./engineer');
const manager = require('./manager');
const intern = require('./intern');

inquirer.prompt({
    type: 'text',
    name: 'name',
    message: 'What is the employee name?'
  },
  {
      type: 'text',
      name: 'id',
      message: "enter employee id."
  },
  {
      type: 'text',
      name: 'email',
      message: 'Enter employee email.'
  }).then(({ name,id,email }) => {
    this.employee = new employee(name,id,email);
  });

  inquirer.prompt({
      type: 'list',
      name: 'role',
      message: 'Select employee role. ',
      choices: ['manager', 'engineer', 'intern']
  })
  if(role = 'manager'){
      inquirer.prompt({
          type: 'text',
          name: 'officeNumber',
          message: "Enter office number: "
      }).then(({ officeNumber }) => {
        this.manager = new manager(officeNumber);
      });
  }
  else if(role = 'engineer'){
    inquirer.prompt({
        type: 'text',
        name: 'github',
        message: "Enter github username: "
    }).then(({ github }) => {
        this.engineer = new engineer(github);
      }); 
  }
  else if(role = 'intern'){
    inquirer.prompt({
        type: 'text',
        name: 'school',
        message: "Enter school: "
    }).then(({ school }) => {
        this.intern = new intern(school);
      }); 
  }
//module.exports = generateProfile;