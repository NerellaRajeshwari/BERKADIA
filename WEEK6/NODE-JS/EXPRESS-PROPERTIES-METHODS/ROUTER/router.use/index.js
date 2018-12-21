//method is similar to app.use()
//requests start at the first middleware function defined


const express=require('express');
const router=express.Router();
const app=express();

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

  //only invoked if the path starts with /bar from the mount point
  router.use('/bar', function(req, res, next) {
   res.send('welcome to berkadia');
    next();
  });
  // always invoked
  router.use(function(req, res, next) {
    res.send('Hello World');
  });
  app.use('/foo', router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
