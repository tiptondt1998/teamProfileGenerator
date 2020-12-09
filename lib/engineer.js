const employee = require('./employee');

//github username
//getGithub()
//getRole overridden to return engineer

function engineer(){
    this.github = github;
}
engineer.prototype.getGithub = function(){
    return{
        github: this.github
    };
}
module.exports = engineer;