const sanitize = require('sanitize-filename'); 

// Input string 
const fileName = 'My/File:Name.txt'; 

// Sanitize function 
const sanitizedFileName = sanitize(fileName); 

console.log(sanitizedFileName); // Output
