/*setTimeout is simply like calling the function after delay has finished. Whenever a function is called it is not executed immediately, but queued so that it is executed after all the executing and currently queued eventhandlers finish first. setTimeout(,0) 
essentially means execute after all current functions in the present queue get executed. 
No guarantees can be made about how long it could take.
setImmediate is similar in this regard except that it doesn't use queue of functions.
It checks queue of I/O eventhandlers. If all I/O events in the current snapshot are processed, it executes the callback. It queues
them immedieately after the last I/O handler somewhat like process.nextTick. So it is faster.*/

1.CODE
//setTimeout(fn,0) can be used for preventing the browser from freezing in massive update. for example in
websocket.onmessage, you may have html changes, and if messages keep coming, the browser may freeze when using setImmidiate

var index = 0;
function test(name) {
    console.log((index++) + " " + name);
}
setImmediate(function() {
    test("setImmediate");
})
setTimeout(function() {
    test("setTimeout");
}, 0);
process.nextTick(function() {
    test("nextTick");
})
test("directCall");

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
0 directCall
1 nextTick
2 setTimeout
3 setImmediate

2.CODE
//reading a file and implementing settimeout and set immediate
const fs = require('fs');

fs.readFile("file1.txt", () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
immediate
timeout

3.CODE

//setInterval example

var count = 0; 
var object = setInterval(function () { 
        count++; 
        console.log(count, 'seconds passed'); 
        if (count == 10) { 
            console.log('exiting'); 
            clearInterval(object); 
        } 
    }, 1000); 
   
OUTPUT:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
1 'seconds passed'
2 'seconds passed'
3 'seconds passed'
4 'seconds passed'
5 'seconds passed'
6 'seconds passed'
7 'seconds passed'
8 'seconds passed'
9 'seconds passed'
10 'seconds passed'
exiting

4.CODE
//setinterval settimeout setimmediate

 setTimeout(function() {  
      console.log('We are in timeout timer');
       }, 5000);
  

  setInterval(function() {  
      console.log('We are in interval timer');
       }, 5000);
  
  setImmediate(function() {  
      console.log('We are in immediate timer');
      });
  
  console.log('Executing the timers');  
  
  OUTPUT:
  
  PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
Executing the timers
We are in immediate timer
We are in timeout timer
We are in interval timer
We are in interval timer
We are in interval timer........//it executes infinite until wee escape om the command for every 5sec it displays the statements
