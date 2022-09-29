const buildTeam = team => {
    const generateManager = manager => {
        return `
            <div class="card">
            
            </div>
        `
    }

    const generateIntern = intern => {
        `
        
        `
    }

const html = [];

html.push(team.filter(employee => employee.getRole() === "Manager")
.map(manager => generateManager(manager))
);

return html.join("");
}

module.exports = team => {
    retuen `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${buildTeam(team)}
</body>
</html>
    `
}