const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const buildTeam = team => {
let employeeString = ""
for (let i = 0; i < team.length; i++) {
    const employee = team[i];

    if (employee.getRole() === "Manager"){
        employeeString += `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getRole()}</h5>
          <p class="card-text">${employee.getName()}</p>
          <p class="card-text">${employee.getId()}</p>
          <p class="card-text">${employee.getEmail()}</p>
          <p class="card-text">${employee.getOfficeNum()}</p>
        </div>
      </div>`
    }
    
     else if (employee.getRole() === "Engineer"){
        employeeString += `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getRole()}</h5>
          <p class="card-text">${employee.getName()}</p>
          <p class="card-text">${employee.getId()}</p>
          <p class="card-text">${employee.getEmail()}</p>
          <p class="card-text">${employee.getGithub()}</p>
        </div>
      </div>`
    }

    else{
        employeeString += `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.getRole()}</h5>
          <p class="card-text">${employee.getName()}</p>
          <p class="card-text">${employee.getId()}</p>
          <p class="card-text">${employee.getEmail()}</p>
          <p class="card-text">${employee.getSchoolName()}</p>
        </div>
      </div>`
    }
}

return employeeString

}
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
<nav class="navbar fixed-top navbar-light bg-light">
  <a class="navbar-brand" href="#">Team</a>
</nav>
    ${buildTeam(team)}
</body>
</html>
    `
}