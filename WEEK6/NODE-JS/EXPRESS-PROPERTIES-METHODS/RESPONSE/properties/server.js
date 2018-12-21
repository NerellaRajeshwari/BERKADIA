code:

//implementing properties of response

const express=require('express');
const app=express();


app.get('/user/:id', function(req, res){
  res.send('user ' + req.params.id);
});

app.get('/', function (req, res) {
  console.log(res.headersSent); // false
  res.send('using headersSent property');
  console.log(res.headersSent); // true
});

app.use(function(req, res, next){
  res.locals.user = req.user;
  res.send('using local response property')
  next();
});

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
