hii.txt
WELCOME TO BERKADIA

FILE.JS:
var fs = require("fs");

// Asynchronous file readinng
fs.readFile('hii.txt', function (err, data) {
   if (err) {
      return console.error(err);
   } 
   console.log("Asynchronous file reading: " + data.toString());
});

// Synchronous file reading
var data = fs.readFileSync('hii.txt');
console.log("Synchronous file reading: " + data.toString());

console.log("Program terminated");

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\hello.html> node sum.js
Synchronous file reading: WELCOME TO BERKADIA
Program terminated
Asynchronous file reading: WELCOME TO BERKADIA
