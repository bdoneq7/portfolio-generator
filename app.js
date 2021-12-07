const inquirer = require('inquirer');
// Include File System Core Module to access its methods
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// 1st Argument = File Name, 2nd Argument = Data being Written
// 3rd Argument = Error Handling Callback Function
// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });

inquirer
.prompt([
    {
        type: 'input',
        name: 'name', // key and user input
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers)); // answer object

