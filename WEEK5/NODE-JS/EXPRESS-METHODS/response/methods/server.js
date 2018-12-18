//implementing response methods

const express=require('express');
const app=express();


app.get('/user', function(req, res){
  res.get('text/plain');
  res.format({
    text: function(){
      res.send('hello');
    }
  });
});

app.get('/', function(req, res){
res.json({ name: 'rani' });
});

app.get('/app', function(req, res){
res.jsonp({ name: 'rajee' });
});


const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
