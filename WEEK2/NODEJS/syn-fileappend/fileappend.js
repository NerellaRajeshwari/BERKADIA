//program to append files intp  single file using synchronous
function appending() {
    const fs = require('fs');
    let data; 
    for (let i = 1; i <= 10; i++) {
        data = fs.readFileSync("file"+i+".txt");
        fs.appendFileSync("write.txt",data+"\n");
    }      
}

appending();
console.log("successfully copied")

output:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node ex1.js
successfully written
