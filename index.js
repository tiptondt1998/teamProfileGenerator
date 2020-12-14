const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
//const index = require(./index);
let teamArray = [];
function index(){
const generateProfile = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name'
    },
    {
       type: 'input',
       name: 'id',
       message: 'Enter id. ' 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email. '
    },
    {
        type: 'list',
        name: 'role',
        message: 'select role. ',
        choices: ['manager','engineer','intern'],
    }
  ]).then(answers =>{
    switch(answers.role){
      case 'manager': 
      inquirer.prompt(
        {
          type: "input",
          name: 'officeNumber',
          message: 'Enter office number'
        }
      ).then(managerAnswers =>{
      let newManager = new manager(answers.name,answers.id,answers.email,managerAnswers.officeNumber)
      teamArray.push(newManager);
      loopOptions();  
    })
      break;
      case 'engineer':
        inquirer.prompt(
          {
          type: 'input',
          name: 'github',
          message: 'Enter github username'
          }
         ).then(engineerAnswers =>{
           let newEngineer = new engineer(answers.name,answers.id,answers.email,engineerAnswers.github)
           teamArray.push(newEngineer);
           loopOptions();
         })
         break;
         case 'intern':
           inquirer.prompt({
             type: 'input',
             name: 'school',
             message: 'enter school'
           }).then(internAnswers => {
             let newIntern = new intern(answers.name,answers.id,answers.email,internAnswers.school)
             teamArray.push(newIntern);
             loopOptions();
           })
        }
  });
};
generateProfile();

  function loopOptions(){
    inquirer.prompt({
      type: 'list',
      name: 'resp',
      message: 'Add another employee?',
      choices: ['yes','no']
    }).then(answer => {
      if(answer.resp == 'yes'){
        generateProfile();
      }
      else{
        console.log(teamArray)
        fs.writeFile('../dist/index.html',generateTeam(teamArray), err =>{
        if(err) throw err});
      }
    })
  }

const generateTeam = team => {
  const generateManager = manager => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta http-equiv="X-UA-Compatible" content="ie=edge" />
 <title>My Team</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <link rel="stylesheet" href="style.css">
 <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
 <div class="container-fluid">
     <div class="row">
         <div class="col-12 jumbotron mb-3 team-heading">
             <h1 class="text-center">My Team</h1>
         </div>
     </div>
 </div>
 <div class="container">
     <div class="row">
         <div class="team-area col-12 d-flex justify-content-center">

    <h1>${manager.getRole()}</h1>
    <div id="manager">
    <p>Manager Name: ${manager.name}</p>
    <p> Manager ID: ${manager.id}</p>
    <p> Manager email: ${manager.email}</p>
    <p> Manager Office Number: ${manager.officeNumber}</p>
    </div>
    `;
  };
  const generateEngineer = engineer => {
    return `
    <div id = "engineer">
    <h1>${engineer.getRole()}</h1>
    <p> Engineer Name: ${engineer.name}</p>
    <p> Engineer ID: ${engineer.id}</p>
    <p> Engineer email: ${engineer.email}</p>
    <p> Engineer github: <a href=https://github.com/${engineer.github}>Github</a></p>   
    </div>
    `;
  };
  const generateIntern = intern =>{
    return `
    <div id = "intern">
    <h1>${intern.getRole()}</h1>
    <p>Intern name: ${intern.name}</p>
    <p>Intern ID: ${intern.id}</p>
    <p>Intern email: ${intern.email}</p>
    <p>Intern school: ${intern.school}</p>
    </div>
    </div>
    </div>
</div>
</body>
</html>
    `;
  };
  const html = [];
  html.push(team
    .filter(employee => employee.getRole() === 'manager')
    .map(manager => generateManager(manager))
    );
    html.push(team
      .filter(employee => employee.getRole() === 'engineer')
      .map(engineer => generateEngineer(engineer))
      .join("")
      );
      html.push(team
        .filter(employee => employee.getRole() === 'intern')
        .map(intern => generateIntern(intern))
        .join("")
);
        return html.join("");
}
module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
   <title>My Team</title>
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
       integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
   <link rel="stylesheet" href="style.css">
   <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
   <div class="container-fluid">
       <div class="row">
           <div class="col-12 jumbotron mb-3 team-heading">
               <h1 class="text-center">My Team</h1>
           </div>
       </div>
   </div>
   <div class="container">
       <div class="row">
           <div class="team-area col-12 d-flex justify-content-center">
               ${generateTeam(team)}
           </div>
       </div>
   </div>
</body>
</html>
   `;
};

module.exports = generateProfile;
}