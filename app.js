// Include File System Core Module to access its methods
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

// 1st Argument = File Name, 2nd Argument = Data being Written
// 3rd Argument = Error Handling Callback Function
fs.writeFile('index.html',generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});



