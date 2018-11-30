1.FILTER
// filters to check and print even numbers
var numberArray = [1,2,3,4,5,6,7,8,9,10];
var evenNumbers = [];
for (var counter=0; counter < numberArray.length; counter++){
    if (numberArray[counter] %2 === 0){
        evenNumbers.push(numberArray[counter])
    }
}
console.log(evenNumbers);
//forEach Version
var evenNumbers1 = [];
numberArray.forEach(number => {
    if (number%2 === 0){
        evenNumbers1.push(number)
    }
})
console.log(evenNumbers1);
//filter version
var evenNumbers2 = numberArray.filter(number => number%2===0);
console.log(evenNumbers2);
// es5 style
var evenNumbers2 = numberArray.filter(function(number){
   return number%2===0;
});

output:

PS C:\Users\Rajeshwary\nodeweek> node example.js
[ 2, 4, 6, 8, 10 ]  //output for "for each"
[ 2, 4, 6, 8, 10 ]  // output for filter
[ 2, 4, 6, 8, 10 ]  // output for es5

2.MAP
//EXAMPLE FOR MAP TO FIND SQUARES OF NUMBER
var numArray = [1,2,3,4,5,6,7,8,9,10];
//for Version
var sqNum = [];
for (var count=0; count < numArray.length; count++){
   sqNum.push(numArray[count] * numArray[count])
}
console.log(sqNum);
//forEach Version
var sqNum1 = [];
numArray.forEach(num => {
    sqNum1.push(num*num);
})
console.log(sqNum1);
//Map version
var sqNum2 = numArray.map(num => num*num);
//es5 version
var sqNum2 = numArray.map(function(num){
     return num*num;
});
console.log(sqNum2);

OUTPUT:
PS C:\Users\Rajeshwary\nodeweek> node example.js
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]   //output for "for each"
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]   // output for filter
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]   // output for es5

3.REDUCE:
//EXAMPLE FOR REDUCE TO PERFORM SUMMATION OF ARRAY
var numArray = [1,2,3,4,5,6,7,8,9,10];
//for version
var sum = 0;
for (var count=0; count < numArray.length; count++){
     sum += numArray[count]
}
console.log(sum);
//forEach Version
var sum1 = false;
numArray.forEach(num => {
     sum1 += num;
})
console.log(sum1);
//Reduce version
var sum2 = numArray.reduce(((acc, num) => acc + num), 0);
//es5 version
var sum2 = numArray.reduce(function(acc, num){
   acc += num;
   return acc;
}, 0);
console.log(sum2);

OUTPUT:

PS C:\Users\Rajeshwary\nodeweek> node example.js
55   //output for "for each"
55   // output for filter
55  // output for es5


