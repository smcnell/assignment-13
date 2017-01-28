/**
 * Ex-03: getCapitalLetters()
 *
 * Write a function called getCapitalLetters()that returns
 * an array of all of the capital letters of a string
 *
**/


// input: string
// output: array

var getCapitalLetters= function(inputString){
  // var splitIt= inputString.split("");
  var arrayOfLetters= [];

  for (var i= 0; i < inputString.length; i++){
    if (inputString.charAt(i) === inputString.charAt(i).toUpperCase() && inputString[i] != " "){
      arrayOfLetters.push(inputString.charAt(i));
      // console.log(arrayOfLetters)
    }

  } return arrayOfLetters
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')
var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.assert( output_1.length === 8 )
console.assert( output_1[3] === 'S' )
console.assert( output_1[4] === 'M' )
//---------------------
console.assert( output_2.length === 7 )
console.assert( output_2[3] === 'R' )
console.assert( output_2[6] === 'X' )

//Explorer Mode: Make these tests pass
//---------------------
// var output_3 = getCapitalLetters('TLDR; My mother gave Nancy nothing for Xmas.')
// console.assert( output_2.length === 7 )
// console.assert( output_2[3] === 'R' )
// console.assert( output_2[6] === 'X' )
