EXAMPLE:
//callbackhell
var fs = require("fs");

fs.readFile('hiii.txt', function(err, data) {
   if (err) {
      return console.error(err);
   }
   console.log(" " + data.toString());
   
   fs.readFile('hii.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log(" "  + data.toString());

     fs.readFile('ab.txt', function (err, data) {
         if (err) {
             return console.error(err);
            }
           console.log(" "  + data.toString());
       });
   });
});


OUTPUT:

PS C:\Users\Rajeshwary\Desktop\hello.html> node sum.js
 Simply Easy Learning!
 WELCOME TO BERKADIA
 RAJEE
