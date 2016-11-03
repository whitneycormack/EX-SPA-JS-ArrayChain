
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// * Sort the numbers in descending order (10, 9, 8, 7, etc).
// * Remove any integers greater than 19.
// * Multiply each remaining number by 1.5 and then subtract 1.
// * Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var NewChain = integers.sort(function(a,b) { return b - a })
.filter(function(value) { return value < 19})
.map(function(value) { return (value * 1.5) - 1})
.reduce(function(a,b) {return a + b});



console.log("NewChain", NewChain );


// ***********
// Notes:

// to sort numbers:
// var numbers = [8, 1, 42, 13, 22, 7, 4, 53];
// numbers.sort(); // [1, 13, 22, 4, 42, 53, 7, 8]
// numbers.sort(function(first, second) { return first - second; }) // [1, 4, 7, 8, 13, 22, 42, 53]

// filter
// function isBigEnough(value) {
//   return value >= 10;
// }
// var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

// The map() method creates a new array with the results of calling a provided function on every element in this array. -> math functions

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.



