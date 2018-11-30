EXAMPLE 1:
// IMPLEMENTING CALL,APPLY,BIND
function getCount(a,b,c){
    return this.count + a + b + c;
  }
   var obj1 = { count: 10 };

   //Call invokes the function and allows you to pass in arguments one by one.call is used to call a function which is defined and execute the current function immediately.
var t1= getCount.call(obj1,4,5,6);
console.log(t1);

 //Apply invokes the function and allows you to pass in arguments as an array.apply execute the current function immediately.
 var t2= getCount.apply(obj1, [4,5,6]);
console.log(t2);

//Bind returns a new function, allowing you to pass in a this array and any number of arguments.bind returns a new function.
var bound = getCount.bind(obj1);
var t3= bound(4,5,6);
console.log(t3);

OUTPUT:
PS C:\Users\Rajeshwary\nodeweek> node example.js
25
25
25

EXAMPLE 2:
// IMPLEMENTING CALL,APPLY,BIND

//CALL
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); 
say.call(person2, 'Hello'); 


//APPLY
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello']); 
say.apply(person2, ['Hello']); 


//BIND
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};

function say() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); 
sayHelloKelly();

OTPUT:

PS C:\Users\Rajeshwary\nodeweek> node example.js
Hello Jon Kuperman
Hello Kelly King
Hello Jon Kuperman
Hello Kelly King
Hello Jon Kuperman
Hello Kelly King
