//Param callback functions are local to the router on which they are defined. They are not inherited by mounted apps or routers
//A param callback will be called only once in a request-response cycle, even if the parameter is matched in multiple routes


const express=require('express');
const router=express.Router();
const app=express();

     router.param(function(param, option) {
        return function (req, res, next, val) {
          if (val == option) {
            next();
          }
          else {
            res.send('Invalid User');
          }
        }
      });
      
      // using the customized router.param()
      router.param('id', 1);
      
      // route to trigger the capture
      router.get('/api/courses/:id', function (req, res) {
        res.send('Valid User');
      });
      
      app.use(router);

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
