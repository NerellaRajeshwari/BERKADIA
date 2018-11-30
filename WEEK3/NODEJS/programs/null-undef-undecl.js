1.EXAMPLE 1:

//NULL is a JavaScript keyword that indicates the absence of a value.

var foo = {};
console.log("foo is a type: " + typeof foo); //foo is a type: object
var foo = null;
console.log("foo is a type: " + typeof foo); 
console.log("the value of foo is: " + foo); //the value of foo is: null

//UNDEFINED in JavaScript, “undefined” is a global variable, that is created at run time. This global variable represents something  that has not been initialized. It also represents an object property or array index that does not exist

console.log("foo is a type: " + typeof foo); //foo is a type: undefined
console.log("the value of foo is: " + foo); // ReferenceError: foo is not defined

//UNDECLARED if a variable is not declared then the browser throws error.

console.log(nonDeclaredVariable);
console.log(typeof nonDeclaredVariable); //undefined

OUTPUT:

PS C:\Users\Rajeshwary\nodeweek> node example.js
foo is a type: object
foo is a type: object
the value of foo is: null
foo is a type: object
the value of foo is: null
C:\Users\Rajeshwary\nodeweek\example.js:15
console.log(nonDeclaredVariable);
            ^

ReferenceError: nonDeclaredVariable is not defined
    at Object.<anonymous> (C:\Users\Rajeshwary\nodeweek\example.js:15:13)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
    
    2.EXAMPLE 2:
    
 // UNDEFINE means a variable has been declared but has not yet been assigned a value

    var a;
   console.log(a); //undefined
   console.log(typeof a); // undefined

// NULL  can be assigned to a variable to represent no value. It is an assignment value

  var b = null;
  console.log(b); //null
  console.log(typeof b); //object

//UNDECLARE a variable is not declared then the browser throws error.

    console.log(name);
    // Uncaught ReferenceError: name is not defined
   console.log(typeof name); //undefined
   
    OUTPUT:
    PS C:\Users\Rajeshwary\nodeweek> node example.js
undefined
undefined
null
object
C:\Users\Rajeshwary\nodeweek\example.js:15
console.log(name);
            ^

ReferenceError: name is not defined
    at Object.<anonymous> (C:\Users\Rajeshwary\nodeweek\example.js:15:13)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
