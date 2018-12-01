/*One of the greatest features of the JavaScript language is closure. A closure is an inner function that has access to the outer 
(enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope
(variables defined between its curly brackets),
it has access to the outer function’s variables, and it has access to the global variables*/





CODE:

persondetails.js
//create a class and use it in various codes
// Define the constructor
function Person(name, age)
  {
    this.message = name + ", who is " + age + " years old, says hi!";
  };
  
  // Define a sync method
  Person.prototype.hello = function hello() 
  {
    console.log(this.message);
  };
  // Define a method with async internals
  Person.prototype.shello = function shello() 
  {
    var self = this; // Use a closure to preserve `this` in code
    setTimeout(function () {
      console.log(self.message);
    }, 1000);
  };
  
  // Export this file as a module
  module.exports = Person;
  
  example.js
  
  var Person = require('./persondetails');
  var obj = new Person("Rajee", 20);
  obj.hello();
//in this code we call the class functions

  OUTPUT:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
Rajee, who 20 is years old, says hi
