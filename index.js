//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./output/generateHTML");

const teamMembers = [];

const managerQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Enter team manager's name",
            },
            {
                type: "input",
                name: "managerId",
                message: "Enter team manager's ID",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Enter team manager's email",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Enter team manager's officeNumber",
            },

        ]).then(managerData => {
            const { managerName, managerId, managerEmail, managerOfficeNumber } = managerData;
            const newManager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
            teamMembers.push(newManager);
        });
}

const teamQuestion = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "teamMembers",
                message: "What type of team member would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Exit",
                ]
            },
        ]).then(teamData => {
            const { teamMembers } = teamData;
            switch(teamMembers){
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                case 'Exit':
                    createWriteHtml();
                    break;
                default:
                    createWriteHtml();
                    break;                                        
            }
        });
}

const engineerQuestions = () => {
    inquirer
        .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter Engineer's name",
        },
        {
            type: "input",
            name: "engineerID",
            message: "Enter Engineer's ID",
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
        }   
    ]).then(engineerData => {
        const { engineerName, engineerID, engineerEmail, engineerGithub } = engineerData;
        const newEngineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        teamMembers.push(newEngineer);
        teamQuestion();
    });
}

const internQuestions = () => {
    return inquirer
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
            }
        ]).then(internData => {
            const { internName, internID, internEmail, internSchool } = internData;
            const newIntern = new Intern(internName, internID, internEmail, internSchool);
            teamMembers.push(newIntern);
            teamQuestion();
        });
}

const createWriteHtml = () => {
    const htmlData = generateHTML(teamMembers);
    writeFile(htmlData);
}

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./output/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

managerQuestions()
    .then(teamQuestion)





