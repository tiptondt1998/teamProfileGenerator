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

class engineer extends employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return 'engineer'
    } 
    printEngineer(){
        console.log(`Name: ${engineer.name}, id: ${engineer.id}, email: ${engineer.email}, github: ${engineer.github}`);
    }
}
module.exports = engineer;