// Ex-05 reverseObject()

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.


// input: object
// output: object

var reverseObject= function(inputObject){
  var outputObject= {};
  for (var property in inputObject){
    outputObject[inputObject[property]]=property;

    // object1["occupants"] --> 4

  }return outputObject;


}







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var object1 = {
    occupants: 4,
    apartment_no: "2b",
    structuralIntegrity: "failing",
    squareFeet: 700
}

var object2 = {
   name: "Abby",
    gender: "female",
    description: "dog",
     paws: 4
}

var reversedObj_1 = reverseObject(object1)
var reversedObj_2 = reverseObject(object2)


console.assert( reversedObj_1['2b'] === 'apartment_no' )
console.assert( reversedObj_1.failing === 'structuralIntegrity' )
//-----------------------------
console.assert( reversedObj_2.dog === 'description')
console.assert( reversedObj_2.female === 'gender')
