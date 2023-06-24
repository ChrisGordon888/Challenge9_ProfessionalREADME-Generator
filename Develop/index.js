// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    // Add more questions here...
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README file generated!')
    );
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      const generatedMarkdown = generateMarkdown(data); // Render the template using your chosen template engine
      writeToFile('README.md', generatedMarkdown); // Write the generated README file to disk
    });
  }
// Function call to initialize app
init();
