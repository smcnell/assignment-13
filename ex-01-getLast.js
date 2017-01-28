/**
 * Ex-01: getLast()
 *
 * Write a function called getLast() that returns the last element of an array.
 *
**/


var getLast= function(inputArray){
  var lastElement= inputArray.slice(-1)[0];
return lastElement
}
// input: array
// output: element (number or string or boolean)
//
// var getLast= function(inputArray){
//   var finalprint=""
//
// var lastElement= inputArray.length-1
// console.log(lastElement)
//
// for (var i=0; i < inputArray.length; i++){
// if (inputArray[i]===lastElement){
//
// }
//
// }
// }



console.assert( getLast([1,8,4,3]) === 3 )
console.assert( getLast([1,8,4,3,5]) === 5 )
console.assert( getLast(['a','b','c','d','e','f']) === 'f' )
console.assert( getLast([true, false, false, true, false]) === false )
