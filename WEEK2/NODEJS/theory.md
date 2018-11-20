
ASYNC/AWAIT:

 The async/await feature was officially rolled out by the Node to deal with Promises and function chaining. 
 The functions need not to be chained one after another, simply await the function that returns the Promise. 
 But the function async needs to be declared before awaiting a function returning a Promise
 
EXAMPLE:

async function load() {
    return await new Promise((resolve, reject) => {
        TableImport.findAll().then((tables) => {
           for (let table of tables) {
               await loadData(table.fileName, table.tableName);
       
EXAMPLE IMPLEMENTING PROMISES USING asyncFunc():

function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}
asyncFunc()
.then(x => console.log('Result: '+x));

Output:
Result: DONE

 NOTE:
 Always a await will be implemented inside a async function.

CALLBACK:

Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task.
Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks. 
For example, a function to read a file may start reading file and return the control to the executiol environment 
immediately so that the next instruction can be executed. Once file I/O is complete, it will call the callback
function while passing the callback function, the content of the file as a parameter. So there is no blocking or wait for File I/O. 
This makes Node.js highly scalable, as it can process a high number of requests without waiting for any function to return results.

ADVANTAGES:
DISADVANTAGES:
             
EXAMPLE:
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

Program Ended
Hello, this is rajee.

CALLBACK HELL:

Callback hell is any code where the use of function callbacks in async code becomes obscure or difficult to follow.
Generally, when there is more than one level of indirection, code using callbacks can become harder to follow, 
harder to refactor, and harder to test. A code smell is multiple levels of indentation due to passing multiple layers 
of function literals.
This often happens when behaviour has dependencies, i.e. when A must happen before B must happen before C
getDetails(function(a){  
    getDetails1(a, function(b){
        getDetails2(b, function(c){ 
           getDetails3(c, function(d){ 
                getDetails4(d, function(e){ 
                     getDetails5(e, function(f){ 
                    ...
                });
            });
        });
    });
 });

HTTP AND HTTPS MODULES:
Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
Node.js provides an http module which can be used to create an HTTP client of a server. Following is the bare minimum structure of the HTTP server which listens at 8081 port.
To include the HTTP module, use the require() method:
var http = require('http');

EXAMPLE:

Adding a HTTP Header:

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

Reading the Query String:

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

MODULES IN NODEJS:

Module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate .js file under a separate folder. Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application. Node.js implements CommonJS modules standard. CommonJS is a group of volunteers who define JavaScript standards for web server, desktop, and console application. There are three types of modules: 1.Core Modules 2.Local Modules 3.Third Party Modules

CORE MODULES:

Node.js is a light weight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application. In order to use Node.js core or NPM modules, you first need to import it using require() function as shown below. var module = require('module_name');

LOCAL MODULES:

Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders. You can also package it and distribute it via NPM, so that Node.js community can use it. For example, if you need to connect to MongoDB and fetch data then you can create a module for it, which can be reused in your application. Loading Local Module To use local modules in your application, you need to load it using require() function in the same way as core module. However, you need to specify the path of JavaScript file of the module. The following example demonstrates how to use the above logging module contained in Log.js. app.js var myLogModule = require('./Log.js'); myLogModule.info('Node.js started');

THIRD PARTY MODULES:

Third party modules are those that are provided by other external sources.

NET MODULE:

Node.js net module is used to create both servers and clients.The Net module provides a way of creating TCP servers and TCP clients.
This module provides an asynchronous network wrapper and it can be imported using the following syntax.
var net = require("net")

METHODS:

1. net.createServer([options][, connectionListener])
   Creates a new TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.
2. net.connect(options[, connectionListener])
   A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.
3. net.createConnection(options[, connectionListener])
   A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.
4. net.connect(port[, host][, connectListener])
   Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
5. net.createConnection(port[, host][, connectListener])
   Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
6. net.connect(path[, connectListener])
   Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
7. net.createConnection(path[, connectListener])
   Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
8. net.isIP(input)
   Tests if the input is an IP address. Returns 0 for invalid strings, 4 for IP version 4 addresses, and 6 for IP version 6 addresses.
9. net.isIPv4(input)
   Returns true if the input is a version 4 IP address, otherwise returns false.
10.	net.isIPv6(input)
    Returns true if the input is a version 6 IP address, otherwise returns false.
    

PROMISES:

The core idea behind promises is that a promise represents the result of an asynchronous operation. 
A promise is in one of three different states:
  1.pending - The initial state of a promise.
  2.fulfilled - The state of a promise representing a successful operation.
  3.rejected - The state of a promise representing a failed operation.
Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).

ADVANTAGES:

1.No inversion of control:
  Similarly to synchronous code, Promise-based functions return results, they don’t (directly) continue – and control – execution via
  callbacks. That is, the caller stays in control.
2.Chaining is simpler: 
   If the callback of then() returns a Promise then then() returns that Promise.
   As a consequence, you can chain then() method calls.
3.Error handling: 
  As we shall see later, error handling is simpler with Promises, because, once again, there isn’t an inversion of control. 
  Furthermore, both exceptions and asynchronous errors are managed the same way4.
4.Cleaner signatures: 
  With callbacks, the parameters of a function are mixed; some are input for the function, others are
  responsible for delivering its output. With Promises, function signatures become cleaner; all parameters are input.
  
  DISADVANTAGES:
  
EXAMPLE:

function readFile(filename, enc){
  return new Promise(function (fulfill, reject){
    fs.readFile(filename, enc, function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
});

PROMISES LIBRARIES:

Promises are a pattern that helps with one particular kind of asynchronous programming: a function (or method) that returns a single result asynchronously. One popular way of receiving such a result is via a callback (“callbacks as continuations”):

asyncFunction(arg1, arg2, result => { console.log(result); });

Bluebird and Q are famous promise library. BLUEBIRD:

Bluebird is a fully-featured Promise library for JavaScript. The strongest feature of Bluebird is that it allows you to "promisify" other Node modules in order to use them asynchronously. Promisify is a concept applied to callback functions. This concept is used to ensure that every callback function which is called returns some sort of value. npm install bluebird Include by writing:

var Promise = require('bluebird'); Var mongo=promise.promisifyAll(require(‘mongodb’)).Mongoclient;

you can use BlueBird to make the MongoDB module run asynchronously, The next step is to include the bluebird module in your code and promisify the entire MongoDB module. By promisify, we mean that bluebird will ensure that each and every method defined in the MongoDB library returns a promise.

Q LIBRARY:

var Q = require('q');

function async() { return Q.delay(4000) }

async() .then(function() { console.log('async called back'); });

OUTPUT: async called back//after 4 secs output displayed.

MAJOR DIFFERENCE: Bluebird attempts to follow and augment the ES6 promise standard, while Q uses its own API. Either of these libraries can be used to help you manage and coordinate asynchronous operations.

NPM: NPM is a package manager for Node.js packages. A package in Node.js contains all the files we need for a module.Modules are JavaScript libraries we can include in your project. Node Package Manager (NPM) provides two main functionalities: 1.Online repositories for node.js packages/modules which are searchable on search.nodejs.org 2.Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.


PACKAGES IN NPM:

1.ANGULAR: Angular.js allows its users to build fast client-side web apps that would resemble a modern browser. Angular has a certain vibe to it, it makes the process of building rich-and-modern web applications so easy, yet so flexible, that it leaves you wondering… what were you doing without this framework all this time.
2.REACT: React is a JavaScript UI framework. It is developed by Facebook, React lets you build fast interfaces that scale and focus only on the important parts of your UI. Combining React with Node.js makes for an amazingly fast web application experience.
3.Async.js: Asynchronous JavaScript has rebuilt the way JavaScript content interacts with your web pages, allowing you to increase performance by getting rid of render-blocking JavaScript.The library is meant to be used with Node.js, originally, but these days it will work with browsers too, so you can inject it in any project, whether it uses Node.js or not. There are more than twenty functions that this library gives you control over.
4.EXPRESS: Express is the leading Node.js framework for quickly creating and publishing applications, and APIs. All common programming languages share similar structures in the way things are built, one of the fastest ways to get a programming language to serve your needs, is through a framework. Combine it with any of the other packages we will discuss, and you will quickly realize just how amazing this framework truly is.
5.Request – Simplified HTTP Client: Apps constantly have to deal with external HTTP calls, whether to fetch data, or to load data directly from an external source. Having a reliable way to do HTTP calls is essential, which is why Request has grown to be the most reliable HTTP Client library of them all. With Request, making HTTP calls becomes an easy, secure, and reliable way of accessing external content on the web, in any form imaginable. It works well with authentication methods too.
6.Socket.IO: Socket lets you build truly real-time communication apps that would require real-time streams of content, whether directly from the data that you are working with. Examples like apps like Twitter bot for collecting latest tweets, a Facebook bot for watching news, and other interesting combinations of APIs that work with data in real-time. Communication methods could do analytics, truly real-time analytics are still being actively developed even by large companies such as Google Analytics, but with Socket we can get early access to all that.
7.Browserify: JavaScript libraries usage is a difficult process, we constantly have to go back and forth between templates to analyze which libraries and widgets are using the specific scripts, and eventually these scripts begin to add up as we start to lose track of what is working for what. Node.js projects tend to stack up on packages, libraries and scripts, and Browserify helps to structure everything neatly together.There are many uses for Browserify, but the most important one is that Browserify allows us to create the kind of client-side codebase that’s organized, structured, and easy to navigate.
8.BOWER: To keep track of all libraries, tools, frameworks and other js utilities can turn into a strenuous task, there is so much to control and keep in check.. it only makes sense that package managers such as Bower exist. Bower manages your components for you, if they are of JS, CSS, or HTML nature. Bower carefully allocates all the packages that you are using, and then helps you to keep the updated, and regularly checked against any potential risks.
9.MOCHA: Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Testing is so important to understand how well the application is performing, where we can locate any particular leaks.
10.Cheerio: Cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server. Sending email is one of the most sensitive things that you will do with your apps. Email is a big deal, and having a secure way of doing email transactions is essential to your reputation. That’s why they built Nodemailer, a secure framework for doing email management within your Node.js applications. Documentation provides extensive amounts of samples on how to get Nodemailer to work with SMTP.
11.Node MySQL: MySQL, the world’s most recognized database server. Where would the world be, if it wasn’t for MySQL and all that it has brought about. True, in modern development, many choose to go for more simple database servers, like MongoDB, but to deny popularity of MySQL; it’s just pure ignorance. The Node MySQL library is a native implementation of the MySQL Protocol for the Node.js JS Client. GitHubbers are starring this one faster than we can blink, get it on the party wagon!
12.MongoDB Node.JS Driver MySQL is very popular amongst database managers, but so is MongoDB. This library will provide a necessary driver for those who wish to implement a full version of MongoDB within their Node.js projects. This will give you the necessary room to use MongoDB to its full potential within your Node projects.
13.LESS: LESS is a recognized and reputable CSS pre-processor that significantly improves your CSS workflow, and overall front-end development experience. Pre-processors transform CSS to act more as a programming language, rather than just a scripting environment. Many reasons to choose LESS, but most important one: it’s free, it’s reliable, and hundreds of thousands of developers use it daily.
14.JSHint: Weeding through code to find and fix bugs is never fun, in fact..it can have a huge imprint on your productivity, and the way you code. This is why linting tools came about, linting tools help you to analyse common bugs and errors in your code, without your focused attention. Instead, a linter just analyses the code itself, and gives you potential errors and fixes that could drastically improve the code you are writing. Any code base eventually becomes huge at some point, and simple mistakes—that would not show themselves when written—can become show stoppers and waste hours of debugging. And this is when static code analysis tools come into play and help developers to spot such problems. JSHint scans a program written in JavaScript and reports about commonly made mistakes and potential bugs. The potential problem could be a syntax error, a bug due to implicit type conversion, a leaking variable or something else.
15.MORGAN: With millions of downloads each month, Morgan is one of the top priority libraries for Node devs. Morgan is a HTTP request logger, storing HTTP requests and giving you concise insight into how your app is being used, and where there could be potential errors or other issues that you haven’t yet explored. Easily the most reliable HTTP logger known to the Node.js community.
16.GraphicsMagick: GraphicsMagick and ImageMagick are two highly acclaimed tools for manipulating visual content on the web. Now, you have the chance to use both GraphicsMagick and ImageMagick within your Node.js projects to optimize visual content as you go. Easy to navigate documentation offers all the insights, tips and tricks to help you get started with the GraphicsMagick library right away.
17.MARKED: Markdown is a minified, more elegant, version of HTML. Markdown lets you convert text to HTML by using specific markdown syntaxes and tags. While HTML focuses on making everything appealing to the web, Markdown on the other hand wants to put the focus on text, specifically on the way text is presented, and how to best help online editors to output beautiful text, with less trouble and learning of HTML. The Marked Node.js library will implement Markdown in any project, app or website that you’re working on.
18.RESTIFY: APIs remain as one of the most important parts of any Node.js application, it’s what makes the real-time actually become real. If you are looking to build a RESTful API, then Restify library will give you the quirks and tools required to perform the task. In more ways than one; Restify is the library you will want to use when building REST services for the web. It’s simply that good.

19.WebPack: WebPack lets you use dozens of modules in your project, without having to worry about their locations and overall performance. WebPack, as the name suggest, packs all your modules in separate JS, CSS, and HTML files and gives you back an easy workspace for the browser. You can split, bundle and allocate code as you like thanks to WebPack.

20.NPM UPPERCASE: Once the package is installed, it is ready to use. Include the "upper-case" package the same way you include any other module: var uc = require('upper-case');

