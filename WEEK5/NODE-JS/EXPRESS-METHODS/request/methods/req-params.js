CODE:
//implementing params()

const express=require('express');
const app=express();

app.param('id',(req, res, next, id)=>{
    console.log('you are using a param it will be called only once');
    next();
  });
  
  app.get('/users/:id',  (req, res, next)=>{
    console.log('match found');
    next();
  });
  
const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));


OUTPUT:

PS C:\Users\Rajeshwary\Desktop\nodoc> nodemon server.js
[nodemon] 1.18.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
listening to 3000....
you are using a param it will be called only once
match found
