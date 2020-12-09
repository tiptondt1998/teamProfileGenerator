const fs = require('fs');
const inquirer = require('inquirer');
const promptUser = () => {
    console.log(`
    =====================
    Generate team profile
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team member name: '
        }
    ]);
}