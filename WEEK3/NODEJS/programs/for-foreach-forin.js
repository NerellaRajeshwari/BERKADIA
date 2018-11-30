1.//EXAMLE FOR 'FOR EACH'

var name = { 'Ram': { a: '1', b: '2' }, 'Sita': { a: '3' }};
var people = Object.keys(name);
people.forEach(function(person) {
  var items = Object.keys(name[person]);
  items.forEach(function(item) {
    var value = name[person][item];
    console.log(person+': '+item+' = '+value);
  });
});
 
 OUTPUT:
 
 PS C:\Users\Rajeshwary\nodeweek> node example.js
Ram: a = 1
Ram: b = 2
Sita: a = 3

2.//EXAMPLE FOR "FOR AND FOR EACH"

const num = [1, 2, 3, 4]; 
// Create an array of numbers.
 
const first = num[0]; 

const second = num["1"]; 
 
// Append an element to the array.
num[num.length] = 5; 

num.push(6); 
 
// Print the entire array as a value.
console.log(num); // prints "[1, 2, 3, 4, 5, 6]"
 
// Print the elements in the array, one per line.
num.forEach(number => { 
  console.log(number);
});
 
// Create a new array containing the square of each number in the original.
const numbersSquared = num.map(number => number * number);
 
// Print each number and its square, using a for loop.
for (let i = 0; i < num.length && i < numbersSquared.length; i += 1) {
  const number = num[i];
  const numberSquared = numbersSquared[i];
 
  console.log(number + ' squared is ' + numberSquared);
}
 
// Put them in an object.
const numbersAndTheirSquares = {
  numbers: num,
  numbersSquared: numbersSquared
};
 
// Access them via the object.
numbersAndTheirSquares.numbers.forEach(number => {
  console.log(number);
});

OUTPUT:

PS C:\Users\Rajeshwary\nodeweek> node example.js
[ 1, 2, 3, 4, 5, 6 ]
1
2
3
4
5
6
1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25
6 squared is 36
1
2
3
4
5
6

3.EXAMPLE FOR ""
