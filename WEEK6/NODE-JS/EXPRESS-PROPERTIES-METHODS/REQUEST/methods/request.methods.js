code:

//req.get(), req.accept(), req.is()

const express=require('express');
const app=express();
app.get('/',(req,res)=>{

  req.get('text/plain');
  req.get('Something');
  req.accepts('html');
  req.accepts(['html', 'json']);
  req.is('html');
  req.is('text/html');
  req.is('text/*');
  res.send("request methods");
  
});

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));


OUTPUT:

request methods
