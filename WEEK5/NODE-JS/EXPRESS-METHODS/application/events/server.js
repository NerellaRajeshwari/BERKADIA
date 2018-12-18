//implementing 'on' event
//app.on('mount', callback(parent)):
//The mount event is fired on a sub-app, when it is mounted on a parent app. The parent app is passed to the callback function.


const express=require('express');
const app=express();
 // creating a sub app
 var user = express();

 user.on('mount', function (parent) {
   console.log('User Mounted');
   console.log(parent); // refers to the parent app
 });
 
 user.get('/', function (req, res) {
   res.send('welcome to homepage');
 });
 
 app.use('/users', user);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
