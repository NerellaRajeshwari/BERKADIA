//is extremely useful for mapping “global” logic for specific path prefixes or arbitrary matches

let express=require('express');
let router=express.Router();
let app=express();
router.all('/', function(req, res){
    res.send('hello world');
  });
  app.use('/', router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
