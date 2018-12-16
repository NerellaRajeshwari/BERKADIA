
const express=require('express');
const router=express.Router();
const app=express();


const emps= [
    {id: 1, name:'rajee'},
    {id: 2, name:'rajee2'},
    {id: 3, name:'rajee3'},
     ];

 //routing the middleware
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

//home page of our application
router.get('/', function(req, res) {
    res.send('welcome!! we are in the home page!');  
});

//sub page of our home page 
router.get('/details', function(req, res) {
    res.send(emps); 
});

// apply the routes to our application
app.use('/', router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
