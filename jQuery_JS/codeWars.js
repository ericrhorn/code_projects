function multiply(a, b){
    a * b
}
multiply(5,5);

function maskify(cc) {
    var maskedCard = '';
    for (var x = 0; x < cc.length; x++){
      if (x < cc.length-4){
        maskedCard = maskedCard + "#"
      }else {
        maskedCard = maskedCard + cc.charAt(x);
      };
    }
    return maskedCard;
  }
  console.log(maskify('4556364607935616'));


  function maskify(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
      if(i < cc.length - 4) {
        maskedString = maskedString + "#";
      } else {
        maskedString = maskedString + cc.charAt(i);
      };
    }
    return maskedString;
  }
  console.log(maskify("4556364607935616"));

  function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  }
  console.log(maskify(4556364607935616));



  function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }
  console.log(maskify('4556364607935616'));



  function persistence(num) {
    // change the number into a string and 
    // split the number into individual numbers.
    var numArray = num.toString().split('');

    // Initialize a count variable to count its
    // multiplicative persistence.
    let count = 0;

    // Initialize a total variable.
    let total;

    // While loop to make function run only when the split
    // number has more than 1 element.
    while (numArray.length > 1) {

        // Set the total variable equal to the reduce function
        // which gets the sum and gets multiplied by the current
        // value in the loop.
        total = numArray.reduce(function (sum, currentValue) {
            return sum * currentValue;
        })

        // Increment the count variable
        count++;

        //split the new number and reset the function.
        numArray = total.toString().split('');
    }

    // If the new number is no longer greater than 1,
    // then that means we reached the end.
    // Return the count.
    return count;
}
console.log(persistence("999"))



function persistence(num) {

    var newArray = num.toString().split('');
    let count = 0;
    let total;

    while (newArray.length > 1) {
        total = newArray.reduce(function (sum, currentValue) {
            return sum * currentValue;
        })
        count++;

        newArray = total.toString().split('');
    }

    return count;
}
console.log(persistence("999"));



function persistence(num) {
    
    var numArray = num.toString().split('');

    return numArray;
}
console.log(persistence("999"))

function validatePIN (pin) {
    var newArr = pin.toString().split('');
    var goodPin = false;
    for (var x=0; x < pin.length; x++){
      if (newArr < 6 ){
      } 
      else if (newArr != NaN){
        // goodPin = false;
    }
      else {
          goodPin = true;
      }
    }
    return goodPin;
  }
  console.log(validatePIN("1234"))


function validatePIN (pin) {
    var newArr = pin.toString().split('');
    var goodPin = false;
    for (var x=0; x < pin.length; x++){
        if (newArr.length === 4 || newArr.length === 6){
          goodPin = true
      }
      else {
          goodPin = false
      }
    }
    return goodPin;
  }
  console.log(validatePIN("12345"))


function validatePIN (pin) {
    var goodPin = ;
    for (var x=0; x < pin.length; x++){
      if (newArr.includes(NaN)){
          goodPin = false
      }
      if ((newArr.length === 4 || newArr.length === 6) && !isNaN){
          goodPin = true
      }
      else {
          goodPin = false
      }
    }
    return goodPin;
  }
  console.log(validatePIN("1234"))


  function grow(x){
    var sum = 1;
    for (var y=0; y<x.length; y++){
      sum *= x[y];
    }
    return sum;
  }
  console.log(grow([1,2,3,4]))



function zeroFuel(dist, mpg, fuel){
  if (fuel * mpg < dist){
    return false
  }
  if (fuel * mpg >= dist){
    return true
  }
}
console.log(zeroFuel(50, 25, 2))


// return string and int

function sleepSheep(num){
  var sheep = '';
  for (var x=1; x <= num; x++){
    sheep += x + ' sheep... '
  }
  return sheep;
}
console.log(sleepSheep(3))


function sleepSheep(num){
  var sheep = '';
  for (var x=1; x <= num; x++){
    sheep += `${x} sheep... `;
  }
  return sheep;
}
console.log(sleepSheep(3))

var countSheep = function (num){
  var sheep = '';
  for (var x=1; x <= num; x++){
    sheep += x + " sheep...";
  }
  return sheep;
}
countSheep(3)


sleepSheep = (num) => {
  const sheep = '';
  for (var x=1; x <= num; x++){
    sheep + x + ' sheep... '
  }
  return sheep;
}
console.log(sleepSheep(3))

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // var dna = "GCAT"
  // var dnaArr = dna.split("");
  // console.log(dnaArr)
  var rna = '';
  for (var x=0; x < dna.length; x++){
    if (dna[x] == 'T'){
      rna += 'U'
    } else {
      rna += dna[x]
    }
  }
  return rna;
}
console.log(DNAtoRNA('GCAT'))

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
console.log(DNAtoRNA("GCAT"))


function digitize(n) {
  return n.toString().split('').map(Number).reverse()
  console.log(numArr)
}
digitize(348597)