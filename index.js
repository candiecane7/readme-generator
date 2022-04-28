// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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
        message: "What are the steps required to install your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use'
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
        choices: ['MIT', 'ISC', 'Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
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
        name: 'Contributing',
        message: 'Please describe how someone can contribute to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add test instructions'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please provide your Github Username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(readmeData => {
        console.log(readmeData);
    })
}

// Function call to initialize app
init();
