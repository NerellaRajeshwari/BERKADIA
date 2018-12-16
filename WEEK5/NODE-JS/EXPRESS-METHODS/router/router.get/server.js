//it provide the routing functionality in Express, where METHOD is one of the HTTP methods, such as GET, PUT, POST
//this is sample program for router.get() method

let express=require('express');
let router=express.Router();
let app=express();

const courses= [
    {id: 1, name:'rajee'},
    {id: 2, name:'rajee2'},
    {id: 3, name:'rajee3'},
     ];
    router.get('/api/courses',(req, res)=>{
        res.send(courses);
        });
  app.use('/', router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
