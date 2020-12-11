const employee = require('./employee');

//github username
//getGithub()
//getRole overridden to return engineer

// function engineer(){
//     this.github = github;
// }
// engineer.prototype.getGithub = function(){
//     return{
//         github: this.github
//     };
// }
// module.exports = engineer;

class engineer{
    constructor(github = ''){
        this.github = github;
    }
    getRole(){
        return{
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
        }
       printEngineer();
    } 
    printEngineer(){
        console.log(`Name: ${engineer.name}, id: ${engineer.id}, email: ${engineer.email}, github: ${engineer.github}`);
    }
}
module.exports = engineer;