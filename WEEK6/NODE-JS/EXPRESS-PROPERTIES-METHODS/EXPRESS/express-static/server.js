//we can reuse the app.js in various programs
//server.js uses app.js to implement express.static() method

const app = require('./app');  
const port = 5000;

app.listen(port, function() {  
    console.log('Express server listening on port ' + port);
});
