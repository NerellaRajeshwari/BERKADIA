const Joi= require('joi');
const express= require('express');
const app= express();

app.use(express.json());

const courses= [
       {id: 1, name:'rajee'},
       {id: 2, name:'rajee2'},
       {id: 3, name:'rajee3'},
        ];

app.get('/', (req, res)=>{
res.send('hello world!');
});
app.get('/api/courses',(req, res)=>{
res.send(courses);
});
app.post('/api/courses',(req, res)=>{
   const schema={
        name: Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body, schema);
    if(result.error)
    {
        res.status(400).send(result.error);
        return;
    }
    // post values using postman 
    const course = {
         id: courses.length + 1,
         name: req.body.name,
     };
     courses.push(course);
     res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
 const course=courses.find(c=> c.id===parseInt(req.params.id))    
    if(!course) res.status(404).send("not found");
    res.send(course);
});
// creating a dynamic port 
const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
