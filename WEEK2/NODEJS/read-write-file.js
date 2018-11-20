//READ FILE using http
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('hello.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//WRITE FILE:

var fs = require('fs');

fs.writeFile('write.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//READ AND WRITE FILE:
file11.txt:
Writing to a file from node.js


var fs = require('fs');
fs.writeFile('file11.txt', "Writing to a file from node.js", {"encoding":'utf8'}, function(err){
  if ( err ) { throw err; }
  console.log("File written successfully");
  // we are reading same file 
  fs.readFile('file11.txt', "utf8", function(err, data){
    if ( err ){ throw err;}
    console.log("*** Reading just written file");
    console.log(data);
  });

});

output:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node ex1.js
File written successfully
*** Reading just written file
Writing to a file from node.js

