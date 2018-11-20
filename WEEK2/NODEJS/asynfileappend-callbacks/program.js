function appending() {
    const fs = require('fs'); 
    for (let i = 1; i <= 10; i++) {
        fs.readFile("file"+i+".txt","utf8",function(err,data) {
            if (err) throw err;
            fs.appendFile("write.txt",data+"\n", function (err) {
                if (err) throw err;
              });               
        });
    }
       
}

appending();
console.log("successfully written")

output:


PS C:\Users\Rajeshwary\Desktop\Typescripting> node ex1.js
successfully written
