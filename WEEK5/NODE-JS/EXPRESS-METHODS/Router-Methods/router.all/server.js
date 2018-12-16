let express=require('express');
let router=express.Router();
let app=express();
router.get('/', function(req, res){
    res.send('hello world');
  });
  app.use('/', router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
