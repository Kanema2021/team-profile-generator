//node modules
const inquirer = require('inquirer');
const fs = require ('fs');

const path = require ("path");
const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "team.html");


// html page link
// const renderHtml = require("./assets/index.html")

// //links to profiles
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
// const { start } = require("reply");

const questionsArray = [
{
    type: "list",
    name: "team",
    Message: "Please add a team member, or generate current team.",
    choices: 
    ["Add team member", "Generate current team"]
},
{
    type: "input",
    name: "Team Member",
    Message: "Please choose type of team member",
    choices:
    ["Add Manager", "Add Engineer", "Add Employee", "Add Intern"]
},

{
    type: "input",
    name: "id",
    Message: "Please enter team member's ID."
},

{
    const: "input",
    name: "email",
    Message: "Please enter team member's email."
},
]


function createFile() {
    if(!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    
    fs.writeFileSync(outputPath, renderHTML(questionsArray), "UTF-8");
}

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
            
    
    
    


