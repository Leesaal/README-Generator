// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your github username? ",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? ",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? ",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project? ",
    },
    {
        type: "input",
        name: "installation",
        message: "What installation is required to run this program? ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the intended use of this program? ",
    },
    {
        type: "input",
        name: "credits",
        message: "Who do credits for this program belong to? ",
    },
    {
        type: "list",
        name: "license",
        message: "What licenses are required to use this program/code? ",
        choices: [
            "MIT",
            "APACHE",
            "BSD",
            "GPL",
            "N/A"
        ]
    },
    {
        type: "input",
        name: "features",
        message: "What are the features of this program? ",
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests for the program? ",
    },
    {
        type: "input",
        name: "limitations",
        message: "What are the limitations of the project?",
    },
    {
        type: "input",
        name: "repoLink",
        message: "What is the link to the github repo? ",
    },
    {
        type: "input",
        name: "video",
        message: "Do you have a link for a video to embed into the readme? ",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log("Complete");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        fs.writeFile("../README.md", generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Successfully created Readme.md!'))
    });
}

// Function call to initialize app
init();
