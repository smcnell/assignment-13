/**
 * Ex-07: showStats()
 *


 * Write a function called showStats() that takes a number and an array of numbers
 * it should return an object with 3 properties:
 *    1) inputGreaterThan: the number of elements in the array that the input number is greater than
 *    2) inputLessThan: the number of elements in the array that the input is less than
 *    3) inputEqualTo : the number of elements in the array that the input is equal to.
 *    4) setSize: the quantity of elements in the set (not including input, obvs.)
 *
 *  Ex:   showStats(3, [1,2,3,4,5,6,5,4,3,2,1])
 *          => {
  *                count_inputEqualTo: 2,
 *					    count_inputGreaterThan: 4,
 *                 count_inputLessThan: 5,
 *                 setSize: 11
 *              }
**/

// input: number, arrayOfNumbers;
// ouput: objects{inputGreaterThan: number of elements that are less than input number, inputLessThan: number of elements that are greater than input, inputEqualto: number of elements equal to input }

 var showStats= function(inputNumber, inputArray){
   var outputObject= {
     count_inputGreaterThan: 0,
     count_inputLessThan: 0,
     count_inputEqualTo:0,
     setSize: 0
   }
   var countGreater=1
   var countLess=1
   var countEqual=1



   for (var i=0; i < inputArray.length; i++){


   if (inputNumber > inputArray[i]){
     outputObject.count_inputGreaterThan= countGreater++
   } else if (inputNumber < inputArray[i]){
     outputObject.count_inputLessThan= countLess++
   } else if (inputNumber === inputArray[i]){
     outputObject.count_inputEqualTo= countEqual++
   } outputObject.setSize=inputArray.length;
 } return outputObject;
 }





//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var parkingTicketsCount = [33, 44, 22, 21, 92, 63, 12, 42, 56, 11, 99,
482, 42, 56, 42, 19, 20, 88, 38, 18, 12, 64, 42, 21,
33, 31, 10, 84, 53, 13, 42, 4493, 31, 24, 55, 32, 42, 11, 56]

var stats_1  = showStats(42, parkingTicketsCount)
var stats_2 =  showStats(56, parkingTicketsCount)

// console.log(stats_1)
// console.log(stats_2)

console.assert( stats_1.setSize === 39  );
console.assert( stats_1.count_inputEqualTo === 6  ) ;
console.assert( stats_1.count_inputGreaterThan === 19  ) ;

console.assert( stats_2.count_inputGreaterThan === 28 ) ;
console.assert( stats_2.count_inputLessThan === 8 ) ;
