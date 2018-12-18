//program to implement app properties

const express=require('express');
const app=express();
 // creating a sub app
 var user = express();

user.get('/', function (req, res) {
// app.mountpath property contains one or more path patterns on which a sub-app was mounted
  console.log(user.mountpath); 
  res.send('User Homepage');
});

app.get('/', function(req, res){
  res.send('hello!!! welcome to berkadia');
});

//The app.locals object has properties that are local variables within the application
app.locals.title = 'My App';

app.use('/users', user); // mounting the sub app

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
