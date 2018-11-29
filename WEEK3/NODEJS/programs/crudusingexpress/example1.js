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
    //validate and objecct distruction
    const {error}= validateCourse(req.body);

    //if error return
    if(error)
    {
        res.status(400).send(result.error);
        return;
    }
    const course = {
         id: courses.length + 1,
         name: req.body.name,
     };
     courses.push(course);
     res.send(course);
});
app.put('/api/courses/:id', (req, res)=>{
    //if course not present
    const course=courses.find(c=> c.id===parseInt(req.params.id))    
    if(!course) res.status(404).send("the given id is not found");
    //validate
    const {error}= validateCourse(req.body);

    //if error return
    if(error)
    {
        res.status(400).send(result.error);
        return;
    }
    //updating course
    course.name=req.body.name;
    res.send(course);
});
app.delete('/api/courses/:id', (req, res)=>{
//if course not present
    const course=courses.find(c=> c.id===parseInt(req.params.id))    
    if(!course) res.status(404).send("the given id is not found");
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});
    
function validateCourse(course)
{
    const schema={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}
app.get('/api/courses/:id',(req,res)=>{
 const course=courses.find(c=> c.id===parseInt(req.params.id))    
    if(!course) res.status(404).send("the given id is not found");
    res.send(course);
});



// creating a dynamic port to have a secure connecction 
const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
