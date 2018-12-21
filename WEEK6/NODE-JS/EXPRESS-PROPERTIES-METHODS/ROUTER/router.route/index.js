//Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware
//Use router.route() to avoid duplicate route naming and thus typing errors


const express=require('express');
const router=express.Router();
const app=express();

router.param('emp_id', function(req, res, next, id) {
    req.user = {
      id: id,
      name: 'Rajee',
      age: 21
    };
    next();
  });
  
  router.route('/emp/:emp_id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function(req, res, next) {
    res.json(req.user);
  })
  
      app.use(router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
