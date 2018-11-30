CODE:

//IMPLEMENTING IIFE SOURCE CODE

(function(){          
    var Mathlibrary = function(){ 
    // private count variable
    var count = 0;
    
    // private method _add
    var _add = function(a, b){
      count++;
      console.log(a + b + "- count = " + count);
    };                                                                                                                                                                                                 
    // private method _sub
    var _sub = function(a, b){
      count++;
      console.log(a - b + "- count = " + count);
    }                                                                                                                                                                                                 
    // return public method add and sub as a JavaScript 
    // Object literal
    return{
      add : _add,
      sub : _sub
    }                            
    }
  // Create an object of Mathlibrary class
  var mathObj = new Mathlibrary();
  // Call methods add and sub on the mathObj object
  mathObj.add(300, 100);
  mathObj.sub(200, 100);
  }());       
  
  OUTPUT:
  
  PS C:\Users\Rajeshwary\nodeweek> node example.js
400- count = 1
100- count = 2
