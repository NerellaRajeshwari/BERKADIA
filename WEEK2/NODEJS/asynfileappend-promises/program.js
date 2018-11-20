//asyn-promises-fileread

function copy( opfile,infile){
    const fs = require('fs');
    let promise = new Promise((resolve,reject)=>
    {
       fs.readFile(infile,function(error,data){
            if(error){
                reject(error);
            }
                resolve(data.toString());
                
        });
    });
    promise.then((data)=>{
        fs.appendFile(opfile,data+"\n",function(err){
           if(err) return console.log(err);
        });
    })
    .catch((error)=>{
        console.log(error);
    }); 
}
for (let i = 1; i <= 10; i++) {
    copy('write.txt','file'+i+'.txt');
}
console.log("successfully written")

output:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node ex1.js
successfully written
