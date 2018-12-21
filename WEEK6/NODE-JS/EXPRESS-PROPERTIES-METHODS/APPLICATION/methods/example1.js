//app.all() and app.delete()

const express=require('express');
const app=express();

//app.all()
app.all('/courses', function (req, res, next) {
  console.log('seeing the courses ...')
  next()
});

//app.delete()
app.delete('/', function (req, res) {
  res.send('delete request has been accepted');
});


const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));

output:

PS C:\Users\Rajeshwary\Desktop\nodoc> nodemon server.js
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
listening to 3000....
seeing the courses .
