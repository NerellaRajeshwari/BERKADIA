//we use router for routing the applications
//A router object is an isolated instance of middleware and routes

let express=require('express');
let router=express.Router();
let app=express();
router.get('/', function(req, res){
    res.send('hello world');
  });
  app.use('/', router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
