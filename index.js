//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
// const generateHTML = require("./output/generateHTML.js");

const teamMembers =[];

inquirer
    .prompt([
    {
        type: "input",
        name: "managerName",
        message: "Enter team manager name",
    },
    {
        type: "input",
        name: "managerID",
        message: "Enter team manager ID",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter team manager email",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter team manager officeNumber",
    },

    {
        type: "list",
        name: "teamMembers",
        message: "What type of team member would you like to add?",
        choices:["Engineer", "Intern"
        ]
    },  
   
])

.then(answers => {
    const newManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(newManager)
   
    if(answers.teamMembers === "Engineer")
    {
     addEngineer();
    }
    else if(answers.teamMembers === "intern")
    {
     addIntern();
    }
    else
    {
        generateHTML();
    }

})
// .catch(error => {
//     if(error.isItyError) { 
//     } else {

//     }
//  });

 function addIntern() {
    inquirer
    .prompt([
    {
        type: "input",
        name: "internName",
        message: "Enter intern's name",
    },
    {
        type: "input",
        name: "internID",
        message: "Enter intern's ID",
    },
    {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email",
    },
    {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school",
    },

    {
        type: "list",
        name: "addTeamMember",
        message: "What type of team member would you like to add?",
        choices:["Engineer", "Intern", "exit"
        ]
    },
    
])
 .then(answers => {
    const newIntern = new Intern(answers.interName, answers.internID, answers.internEmail, answers.internSchool);
    teamMembers.push(newIntern)
    if (answers.addTeamMember === "intern")
    {
        addIntern();

    }else {
       generateHTML();            
        }
    })

.catch(error => {
    if(error.isItyError) { 
    } else {

    }
 })


 function addEngineer() {
    inquirer
    .prompt([
    {
        type: "input",
        name: "engineerName",
        message: "Enter intern's name",
    },
    {
        type: "input",
        name: "engineerID",
        message: "Enter intern's ID",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter Engineer's email",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "Enter Enginneer's github",
    },

    {
        type: "list",
        name: "addTeamMember",
        message: "What type of team member would you like to add?",
        choices:["Engineer", "Intern", "exit"
        ]
    },
    
])
 .then(answers => {
    const newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
    teamMembers.push(newEngineer)
    if (answers.addTeamMember === "Engineer")
    {
        addEngineer();
    }else {
       generateHTML();            
        }
    })

.catch(error => {
    if(error.isItyError) { 
    } else {

    }
 });
}
function generateHTML() {
    fs.writeFileSync(generateHTML,"");

}}





