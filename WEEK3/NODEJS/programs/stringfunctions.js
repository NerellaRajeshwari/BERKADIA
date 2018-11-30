//STRING FUNCTONS
//CODE

//indesOf() is used to find the index of a string
var i = "welcome to berkadia".indexOf("to");
console.log(i);

//substr() and slice()
//difference between substr and slice is substr takes the starting index and length of string to extract. splice takes the starting index and ending index:
var s = "welcome to berkadia".substr(16, 3);
var s1 = "welcome to berkadia".slice(16, 19);
console.log(s);
console.log(s1);

//split() is used to split string into substrings, use the split function and get an array as the result
var s = "a|b|c|d|e|f|g|h".split("|");
console.log(s);

//lastIndeOf() 
var str = "hello everyone welcome to class";
var pt = str.lastIndexOf("welcome");
console.log(pt);

//length() is used to find the length of a string
var st = "coding is easy";
var len = st.length;
console.log(len)

//splice() is used to return the removed item(s) in an array
var array=[1,2,3,4,5,6,7,8];
console.log(array.splice(3));

//search() is used to search for a particular word in a string and returns the position of the match
var str1 = "my name is 'rajee' nerella!";
var pt1 = str1.search("rajee");
console.log(pt1);

//String.trim() is used to remove whitespace from both sides of a string
var text = "       welcome everyone!        ";
var der=text.trim();
console.log(der);

//replace() method replaces a specified value with another value in a string

text2 = "welcome to berkadia";
var str3 = text2.replace("berkadia", "vardhaman");
console.log(str3);

OUTPUT:

PS C:\Users\Rajeshwary\nodeweek> node example.js
8
dia
dia
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
15
14
[ 4, 5, 6, 7, 8 ]
12
welcome everyone!
welcome to vardhaman
