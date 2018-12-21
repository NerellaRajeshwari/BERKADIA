//implementing request properties

const express = require("express");
const app = express();

app.get('/users/:id', (req, res, next) => {
    res.end("output will be displayed in the command prompt");
    
    console.log("req.params: "+req.params);
   
    console.log("req.query: "+req.query);
    
    console.log("req.body:  "+req.body);
    
    console.log("req.route: "+req.route);
    
    console.log("req.cookies:  "+req.cookies);

    console.log("req.signedCookies: "+req.signedCookies);

    console.log("req.ip: "+req.ip);

    console.log("req.ips: "+req.ips);

    console.log("req.path: "+req.path);

    console.log("req.host:  "+req.host);

    console.log("req.fresh:  "+req.fresh);

    console.log("req.stale: "+req.stale);

     console.log("req.xhr: "+req.xhr);

     console.log("req.protocol: "+req.protocol);

     console.log("req.secure: "+req.secure);

     console.log("req.subdomains: "+req.subdomains);

     console.log("req.originalUrl: "+req.originalUrl);

     console.log("req.app:  "+req.app);
   
    console.log("req.baseUrl:  "+req.baseUrl);
  
});

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
