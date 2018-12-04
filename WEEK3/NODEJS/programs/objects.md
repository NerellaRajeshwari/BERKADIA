1.Implement different ways to create Objects in Javascript and explain their differences:
    JavaScript is an Object Oriented Programming (OOP) language. A programming language can be called object-oriented if it provides four basic capabilities to developers -
   Encapsulation - the capability to store related information, whether data or methods, together in an object.
   Aggregation - the capability to store one object inside another object.
   Inheritance - the capability of a class to rely upon another class (or number of classes) for some of its properties and methods.
  Polymorphism - the capability to write one function or method that works in a variety of different ways.
  User-Defined Objects
  All user-defined objects and built-in objects are descendants of an object called Object.
  The new Operator
  The new operator is used to create an instance of an object. To create an object, the new operator is followed by the constructor method.
  In the following example, the constructor methods are Object(), Array(), and Date(). These constructors are built-in JavaScript functions.
  var employee = new Object();
  var books = new Array("C++", "Perl", "Java");
  var day = new Date("August 15, 1947");
  
  
different ways:

a)Using the Object() constructor:
   var d = new Object();
   This is the simplest way to create an empty object.
   
   
   
b)Using Object.create() method:
   var a = Object.create(null);
   This method creates a new object extending the prototype object passed as a parameter.
   
   
c)Using the bracket's syntactig sugar:
   var b = {};
   This is equivalent to Object.create(null) method, using a null prototype as an argument.
   
   
d)Using a function constructor
  var Obj = function(name) {
  this.name = name
  }
  var c = new Obj("hello"); 
  The new operator call a function and setting this of the function to a fresh new Object, 
  and binding the prototype of that new Object to the function's prototype. As is:
  function f {};
  new f(a, b, c);
  Would be equivalent to: 
  // Create a new instance using f's prototype.
  var newInstance = Object.create(f.prototype)
  var result;
  // Call the function
  result = f.call(newInstance, a, b, c),
  // If the result is a non-null object, use it, otherwise use the new instance.
  result && typeof result === 'object' ? result : newInstance
  
  
e)Using the function constructor + prototype:
   function myObj(){};
   myObj.prototype.name = "hello";
   var k = new myObj();
   
   
f)Singleton pattern:
   var l = new function(){
  this.name = "hello";
  }
  
  
g)The 'with' Keyword
   The ‘with’ keyword is used as a kind of shorthand for referencing an object's properties or methods.
   The object specified as an argument to with becomes the default object for the duration of the block that follows. The properties and methods for the object can be used 
   without naming the object.
    Syntax:
   with (object){
   properties used without the object name and dot
    }

