const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const temp = require("./src/template.js");

const team = [];

function buildTeam()
{
    inquirer.prompt([
        {
            type: 'list',
            message: 'Who do you want to add?',
            choices: ["Intern", "Engineer", "Manager", "Quit"],
            name: 'employeeRole',
        },
    ]).then(answers => {
        if(answers.employeeRole === "Intern")
        {
            createIntern();
        }

        if(answers.employeeRole === "Engineer")
        {
            createIntern();
        }

        if(answers.employeeRole === "Manager")
        {
            createIntern();
        }
    })
}

function createManager()
{
    inquirer.createPromptModule([
        {
            type: 'input',
            message: 'Whats the Name of the Manager?',
            name: 'mName',
        },
        {
            type: 'input',
            message: 'Whats an ID of the manager?',
            name: 'mId',
        },
        {
            type: 'input',
            message: 'Whats the email address of the manager?',
            name: 'mEmail',
        },
        {
            type: 'input',
            message: 'Whats the office number?',
            name: 'mOffice',
        },
    ]).then(answers => {
        const namager = new Manager(answers.mName, answers.mId, answers.mEmail, answers.mOffice);
        team.push(manager);
        buildTeam()

        /*
            const html = temp(team);
            fs.writeFile("./disy/index.html", html, 'utf-8');
        */
    })
}

createManager();