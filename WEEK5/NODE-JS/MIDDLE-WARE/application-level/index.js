const Joi= require('joi');
const express= require('express');
const app= express();

app.use(express.json());
function validate(req,res,next)
{
let uname=req.body.uid;
let pass=req.body.pass;
if(uname=="raji"&&pass=="123")
{
  res.send("valid user");
}
else{
  res.send("Invalid user");
}
next();
}
const courses= [
       {id: 1, name:'rajee'},
       {id: 2, name:'rajee2'},
       {id: 3, name:'rajee3'},
        ];

app.get('/', (req, res)=>{
res.send('hello world!');
});
app.post('/api/courses/',validate,(req, res)=>{

});

// creating a dynamic port to have a secure connecction 
const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
