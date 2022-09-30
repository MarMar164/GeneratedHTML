const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const temp = require("./src/template.js");
const { create } = require("domain");

const team = [];

function buildTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Who do you want to add?',
            choices: ["Intern", "Engineer", "Manager", "Quit"],
            name: 'employeeRole',
        },
    ]).then(answers => {
        if (answers.employeeRole === "Intern") {
            createIntern();
        }

        else if (answers.employeeRole === "Engineer") {
            createEngineer();
        }

        else if (answers.employeeRole === "Manager") {
            createManagers();
        }
        else {
            quitOut();
        }

    })
}

//for if teams have mutipul managers
function createManagers() {
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


    })
}

function createManager() {
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

    })
}

function createIntern() {
    inquirer.createPromptModule([
        {
            type: 'input',
            message: 'Whats the Name of the Intern?',
            name: 'iName',
        },
        {
            type: 'input',
            message: 'Whats an ID of the Intern?',
            name: 'iId',
        },
        {
            type: 'input',
            message: 'Whats the email address of the Intern?',
            name: 'iEmail',
        },
        {
            type: 'input',
            message: 'Whats school dose the intern go to?',
            name: 'iSchool',
        },
    ]).then(answers => {
        const interns = new Intern(answers.iName, answers.iId, answers.iEmail, answers.iSchool);
        team.push(intern);

        /*
            const html = temp(team);
            fs.writeFile("./disy/index.html", html, 'utf-8');
        */
    })
}

function createEngineer() {
    inquirer.createPromptModule([
        {
            type: 'input',
            message: 'Whats the Name of the Engineer?',
            name: 'eName',
        },
        {
            type: 'input',
            message: 'Whats an ID of the Engineer?',
            name: 'eId',
        },
        {
            type: 'input',
            message: 'Whats the email address of the Engineer?',
            name: 'eEmail',
        },
        {
            type: 'input',
            message: 'Whats the github username of the Engineer?',
            name: 'eSchool',
        },
    ]).then(answers => {
        const interns = new Intern(answers.eName, answers.eId, answers.eEmail, answers.eSchool);
        team.push(engineer);

        /*
            const html = temp(team);
            fs.writeFile("./disy/index.html", html, 'utf-8');
        */
    })
}

function quitOut() {
    const html = temp(team);
    fs.writeFile("./dist/index.html", html, 'utf-8');
}

createManager();