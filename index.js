// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project? (Required)",
        validate: titleInput => {
            if(titleInput){
                return true;
            } else {
                console.log("You must enter a Project name")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project (Required)',
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            } else {
                console.log("You must enter a Project name")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project? (Required)",
        validate: installationInput => {
            if(installationInput){
                return true;
            } else {
                console.log("You must enter steps required to install")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use',
        validate: usageInput => {
            if(usageInput){
                return true;
            } else {
                console.log("You must provide instructions")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Do you want to add a license?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license to add to your README',
        choices: ['MIT', 'ISC', 'Apache', 'Boost', 'IBM', 'Mozilla'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please describe how someone can contribute to your project',
        validate: contributingInput => {
            if(contributingInput){
                return true;
            } else {
                console.log("You must provide contribution instructions")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add test instructions',
        validate: testsInput => {
            if(testsInput){
                return true;
            } else {
                console.log("You must provide test instructions")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please provide your Github username',
        validate: githubUsernameInput => {
            if(githubUsernameInput){
                return true;
            } else {
                console.log("You must provide your GitHub username")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
        validate: emailInput => {
            if(emailInput){
                return true;
            } else {
                console.log("You must provide an email address")
                return false;
            }
        }
    }
];
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
       return generateMarkdown(data);
    })
    .then(readMeMD =>{
         fs.writeFile('./dist/README.md', readMeMD, err => {
            if(err){
             throw err;
         };
             console.log("Your readme has been created!");
         })
     })
 };

// Function call to initialize app
init()
