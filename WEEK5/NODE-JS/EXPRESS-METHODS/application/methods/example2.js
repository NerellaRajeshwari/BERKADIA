//code to do param() and set()

const express=require('express');
const app=express();

app.param('id', function (req, res, next, id) {
  res.send('Param callback functions are local to the router on which they are defined ');
  next();
});

app.get('/user/:id', function (req, res, next) {
  console.log('users use param id');
  next();
});

app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1' || ip === '123.123.123.123')
   console.log(true) ;
  else 
  console.log(false) ;
});

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));


output:

[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
listening to 3000....
users use param id
false
