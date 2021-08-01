//node modules
const inquirer = require('inquirer');
const fs = require('fs');

const styleCSS = require("../style.css")
const generateHTML = require('../generateHTML.js')

// //links to profiles
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const teamArray = []

function addTeamManager() {
    inquirer.prompt([
        // {
        //     type: "list",
        //     name: "team",
        //     Message: "Please add new team, or generate current team.",
        //     choices: 
        //         ["Add Team Name", 
        //         "Generate current team"]
        // },
        {
            type: "input",
            name: "name",
            Message: "Please enter team manager's name",
        },

        {
            type: "input",
            name: "id",
            Message: "Please enter team manager's ID."
        },

        {
            const: "input",
            name: "email",
            Message: "Please enter team manager's email."
        },

        {
            const: "input",
            name: "officeNumber",
            Message: "Please enter team manager's officeNumber"
        },

    ])
     
    .then(function (data) {
            const teamName = data.team;
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = manager(teamName, name, id, email, officeNumber);
            teamArray.push(teamMember)

            addTeamMember();     

        });
        
}





// function createFile() {
//     if(!fs.existsSync(outputDir)) {
//         fs.mkdirSync(OUPUT_DIR)
//     }

//     fs.writeFileSync(outputPath, renderHTML(questionsArray), "UTF-8");
// }

// start();



// start();









// return inquirer.prompt([
        // const questionOne {
        //     type: "input",
        //     name:"name",
        //     message: "Please enter team member's name.",
        // },
        // {
        //     type: "input",
        //     name: "id",
        //     message: "please enter team member's id",        
        // },
        // {
        //     type: "input",
        //     name: "email",
        //     message:"please enter team member's email"

        // },






