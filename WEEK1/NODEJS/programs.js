1.code: addition 
//addition 
var n = Number(process.argv[2]);
var m = Number(process.argv[3]);
var result=n + m;
console.log('sum is '+result);

output:
C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 1 2
sum is 3

2. code:division
//division
var n = Number(process.argv[2]);
var m = Number(process.argv[3]);
var result=n / m;
console.log('division is '+result);

output:
C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 10 5
division is 2

3. code:duplicates
//duplicates
var a =process.argv.slice(2);
var free = [];
var repeat = [];
for(var i = 0; i < a.length; i++)
{
  if(free.includes(a[i]) && !repeat.includes(a[i]))
    repeat.push(a[i])
  else
    free.push(a[i]);
}
console.log('repeated elements are:'+repeat);


output:
 
 C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 9 1 2 1 4 3 2
repeated elements are:1,2

4.code:
//factorial
var i, n,fact;
f=1;
n=process.argv[2];
for(i=1; i<=n; i++)  
 {
   f= f*i;
 } 
console.log('factorial is:'+f);


output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 5
factorial is:120

5.code:
//fibonacci
function fib(n) {
  var array1=[0,1];
  for (var i=2; i <=n; i++) 
  {
    array1.push(array1[i-1] + array1[i-2]);
  }
  return array1;
}
var t=process.argv[2]-1;
console.log(fib(t));

output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 5
[ 0, 1, 1, 2, 3 ]

6.code:
//max element
function large(a)
      {
          var max=Number(a[0]);
          for(var i=1;i<a.length;i++)
          {
              if(a[i]>max)
                max=Number(a[i]);
          }
          return max;
      }
      var n=process.argv.slice(2);
      console.log(large(n));

output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 9 1 2 1 4 3 2
9

7.code:
function Min(a){
   //min element
    var min=Number(a[2]);
    for(var i=1;i<a.length;i++) 
    {
     if(a<min)
       min=Number(a[i]);
    }
    console.log(" Minimum element:",min);
  }
  Min(process.argv.slice(2));
 

output:


C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 7 9 5
 Minimum element: 5

8.code:
//multiplication
var n = Number(process.argv[2]);
var m = Number(process.argv[3]);
var result=n * m;
console.log('mul is '+result);

output:
C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 10 5
sub is 50

9.code:
//prime numbers
var n=process.argv[2];
var array1=[];
for (i = 1; i <=n; i++)
  {
    count = 0;
     for (j = 1; j <= i; j++) 
       {
         if ((i % j)== 0)
         count++;
       }
       if (count == 2)
         array1.push(i);
  }
    console.log('prime nmbrs till '+n+' are:'+array1);
    
output:
C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 11
prime nmbrs till 11 are:2,3,5,7,11

10.code:
//seraching element
function Searching(a){
    var n= Number(a[2]);
    var flag=0;
    for(var i=1;i<a.length;i++)
    {
     if(Number(a[i])==n) 
     {
         flag=1;
         break;
     }
    }
    if(flag==1)
    {
     console.log('number exits');
     }
     else console.log('number doesnt exists');
  }
  Searching(process.argv.slice(2));
 
 
output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 1 2 5 4
number exits

11.code:
//sorting
function Sorting(a)
{
  var l=a.length;
  for (var i=l-1; i>=0; i--)
  {
    for(var j = 1; j<=i; j++)
    {
      if(Number(a[j-1])>Number(a[j]))
       {
          var temp = Number(a[j-1]);
          a[j-1] =Number(a[j]);
          a[j] = temp;
       }
    }
  }
  return a;
}
console.log(Sorting(process.argv.slice(2)));

output:

C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 9 1 5
[ 1, 5, 9 ]

12.code:
//substraction
var n = Number(process.argv[2]);
var m = Number(process.argv[3]);
var result=n - m;
console.log('sub is '+result);

output:
C:\Users\Rajeshwary\Desktop\javascripting\my-dream-app>node index.js 10 5
sub is 5
