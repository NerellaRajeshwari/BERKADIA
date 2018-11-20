//file-reading using callbacks

EXAMPLE:

var fs = require("fs");

console.log("Going to write into existing file");
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
    
    fs.readFile('hi.txt', function (err, data) {
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
});

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\hello.html> node sum.js
Going to write into existing file
 Simply Easy Learning!
 WELCOME TO BERKADIA
 HOW YOU DOING?
 RAJEE
 
 IN CASE WHERE THERE IS NO FILE AND WE TRY TO READ THAT FILE USING CALLBACKS IT GIVES ERROR. FOR EXAMPLE:
 
 var fs = require("fs");

  console.log("Going to write into existing file");
  fs.readFile('hiii.txt', function(err, data) {
     if (err) {
        return console.error(err);
     }
     console.log(" " + data.toString());
     
     fs.readFile('app.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log(" "  + data.toString());
      
      fs.readFile('hi.txt', function (err, data) {
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
  });
  
  OUTPUT:
  
  PS C:\Users\Rajeshwary\Desktop\hello.html> node sum.js
Going to write into existing file
 Simply Easy Learning!
{ [Error: ENOENT: no such file or directory, open 'C:\Users\Rajeshwary\Desktop\hello.html\app.txt']
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Rajeshwary\\Desktop\\hello.html\\app.txt' }
