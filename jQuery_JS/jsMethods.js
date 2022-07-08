// .slice() -- returns elements from original array minus the elements instructed to be sliced. does not modify the original array. takes two parameters (start, end) array.slice(start, end)

const numsArr = [1,2,3,4,5,6,7,8,9,10]
var newArr = numsArr.slice(0, ...numsArr)
console.log(newArr)



// .concat() -- joins two or more arrays returning a new array and does not change the existing arr. array1.concat(array2, array3, ..., arrayX)

const concatArr1 = [1,2,3,4,5], concatArr2 = [6,7,8,9,10]
var newArr = concatArr1.concat(concatArr2)
console.log(newArr)



// .splice() -- adds and/or removes array elements. overwrites the original array. array.splice(index, howmany, item1, ....., itemX)

// remove 3 from the array and print array
const spliceArr = [1,2,3,4,5,6,7,8,9,10]
    spliceArr.splice(2, 1)
console.log(spliceArr)

// remove 3 from the array and print 3 (the removed element)
const spliceArr2 = [1,2,3,4,5,6,7,8,9,10]
var newArray = spliceArr2.splice(2, 1)
console.log(newArray)



// .pop() -- removes the last element from an array

const popArr = [1,2,3,4,5]
var newArray2 = popArr.pop()
console.log(newArray2)
console.log(popArr)



// .push() -- adds elements to the end of the array 

const pushArr = [1,2,3,4,5]
console.log(pushArr.length)
pushArr.push(6,7,8,9,10)
console.log(pushArr)
console.log(pushArr.length)


// .map() creates a new array from calling a function for every array element. calls a function once for each element in an array, does not execute the function for empty arrays, does not change the original array.

const numbers = [1,2,3,4,5,6,7,8,9,10]
var newArr = numbers.map(newFunction)
console.log(newArr)

function newFunction(num){
    return num * 10
}

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  var newPerson = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }
  console.log(persons)
  console.log(newPerson)


// .sort() -- sorts the elements of an array, overwrites the original array, sorts teh elements as strings in alphabetical and ascending order
  // numerical sort requires parameters and a compare function 

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  console.log(fruits)


  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a-b});
  console.log(points)


  const points2 = [40, 100, 1, 5, 25, 10];
  points2.sort(function(a, b){return b-a});
  console.log(points2)

// find the lowest value using sort

const points3 = [40, 100, 1, 5, 25, 10];
points3.sort((a,b) => (a-b))
let lowest = points3[0]
console.log(lowest)


// find the highest value using sort

const points4 = [40, 100, 1, 5, 25, 10];
points4.sort((a,b) => (b-a))
let highest = points4[0]
console.log(highest)

const points5 = [40, 100, 1, 5, 25, 10];
points5.sort((a,b) => (a-b))
let highest2 = points5[points5.length -1]
console.log(highest2)



// .join() -- returns an array as a string. does not change the original array. array.join(separator)default separator is a comma

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let text = fruit.join(" and ");
console.log(text)


// .filter()
// removing items from an array 

var arr = [1,2,3,4,5,6]
var newArr = arr.filter(arr => arr !== 3)
console.log(newArr)
console.log(arr)


var arr = [1,2,3,4,5,6]
var newArr = arr.filter(function(arr) {
    return arr !== 3
})
console.log(newArr)

