//In other object-oriented programming languages such as C++, Java, C#, you define classes and create objects from the classes. 
A class is a blueprint of objects. In case you want to reuse the functionality of another class, you just need to extend it. This is called classical inheritance.
JavaScript uses prototypal inheritance i.e., an object can inherit properties from another object. 
The prototypal inheritance is achieved via the prototype linkage.

1.CODE
// inheritance using prototypes
function Animal(legs)
  {
  this.legs = legs;
  }
Animal.prototype.walk = function()
 {
  console.log('walking on ' + this.legs + ' legs');
 }
function Dog(legs)
 {
  Animal.call(this, legs);
 }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;
Dog.prototype.eat = function() 
{
  console.log('eating');
}
var obj = new Dog(4);
obj.walk();
obj.eat();

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
walking on 4 legs
eating

2.CODE
//innheritance using extend and super

class Animal {
  constructor(legs) {
      this.legs = legs;
  }
  walk() {
      console.log('walking on ' + this.legs + ' legs');
  }
}

class Dog extends Animal {
  constructor(legs) {
      super(legs);
  }
  eat() {
      console.log('eating');
  }
}

OUTPUT:

PS C:\Users\Rajeshwary\Desktop\Typescripting> node example.js
walking on 4 legs
eating
