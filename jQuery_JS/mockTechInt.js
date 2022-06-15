// sorting questions 
// for any sorting functions you need 2 for loops. The first loop will run through the array and the second loop will sort the remaining array (the unsorted arr)
// outer for loop only loops through the length -1 because you wont have to compair the last element with anything
// inner for loop can start at index x (var of the outer for loop) since after the first interation the first index (0) will already be locked in place 


// bubble sort - sort an array from lowest to hightst

function bubbleSort(arr){
    for (var x=0; x < arr.length -1; x++){
        for (var y=0; y < arr.length - x -1; y++){
            if (arr[y] > arr[y+1]){
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([6,5,3,1,8,7,2,4]))

function bubbleSort(arr){
    var newArr = arr.slice()
    for (var x=0; x < newArr.length -1; x++){
        for (var y=0; y < newArr.length - x -1; y++){
            if (newArr[y] > newArr[y+1]){
                [newArr[y], newArr[y+1]] = [newArr[y+1], newArr[y]]
            }
        }
    }
    return newArr
}
console.log(bubbleSort([6,5,3,1,8,7,2,4]))


// insertion sort
// insertion sort - starts at the second element and sorts left - second compairs to first, third compairs to second and so on

function insertionSort(arr){
    for (var x=1; x < arr.length; x++){
        for (var y=x; y > 0; y--){
            if (arr[y] < arr[y-1]){
                [arr[y], arr[y-1]] = [arr[y-1], arr[y]]
            }
            else {
                break
            }
        }
    }
    return arr
}
console.log(insertionSort([6,5,3,1,8,7,2,4]))

// another way to do this with a while loop.  

function insertionSort(){

}


// selection sort
// selection sort - find the minimum value in the arr and move it to the front

function selectionSort(arr){
    // var min = arr[0];
    for (var x=0; x < arr.length-1; x++){
        var min = x;
        for (var y = x; y < arr.length; y++){
            if (arr[y] < arr[min]){
                min = y;
            }
        }
        [arr[x], arr[min]] = [arr[min], arr[x]]
    }
    return arr;
}
console.log(selectionSort([10,9,8,7,6,5,4,3,2,1]))



// selection sort with a more pure function (this does not mutate or alter the original function)



// sort with built in js function

// assending 

function jsSort(arr){
    var arr = arr.sort((a,b) => (a-b))
    return arr
}
console.log(jsSort([6,5,3,1,8,7,2,4]))

// decending 

function jsSort(arr){
    var arr = arr.sort((a,b) => (b-a))
    return arr
}
console.log(jsSort([6,5,3,1,8,7,2,4]))

// reverse an array
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for (var x = 0; x < arr.length/2; x++){
        
    }
}



function reverseArr(arr){
    const length = arr.length;
    for (var x=0; x < length/2; x++){
        [arr[x], arr[length-x-1]] = [arr[length-x-1], arr[x]]
    }
    return arr
}
console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]))


// swap towards center
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
p
function swap(arr){
    const length = arr.length;
    for (var x=0; x < length/2; x+=2){
        [arr[x], arr[length-x-1]] = [arr[length-x-1], arr[x]]
    }
    return arr
}
console.log(swap([1,2,3,4,5,6,7,8,9,10]))

/*
Find the 2nd largest and 2nd smallest number in two arrays of numbers combined

[10,5,7,2,4,1,24]
[8,23,29,25,40,0,24]
2nd Largest: 29 , 2nd Smallest: 1
*/

const arr1 = [10,5,7,2,4,1,24];
const arr2 = [8,23,29,25,40,0,24];

const newArr = [...arr1, ...arr2];

console.log(newArr)



// fizzBuzz - print - and return an array 3 and 5 fizzBuzz, 3 fizz, 5 buzz

function fizzBuzz(){
    for (var x=1; x <= 100; x++){
        if (x % 3 == 0 && x % 5 == 0){
            console.log('FizzBuzz')
        }
        else if (x % 3 == 0){
            console.log('Fizz')
        }
        else if (x % 5 == 0){
            console.log('Buzz')
        }
        else {
            console.log(x)
        }
    }
}
fizzBuzz();


function fizzBuzz(){
    var newArr = []
    for (var x=1; x <= 100; x++){
        if (x % 3 == 0 && x % 5 == 0){
            newArr.push('FizzBuzz')
        }
        else if (x % 3 == 0){
            newArr.push('Fizz')
        }
        else if (x % 5 == 0){
            newArr.push('Buzz')
        }
        else {
            newArr.push(x)
        }
    }
    return newArr
}
console.log(fizzBuzz());



// remove duplicates 

function dups(arr){
    var newArr = [];
    for (var x = 0; x <= arr.length -1; x++){
        if (newArr.indexOf(arr[x]) === -1){
            //The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push().
            newArr.push(arr[x])
        }
    }
    return newArr
}
console.log(dups([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,10,10,10]))


function dups(arr){
    var newArr = [...new Set(arr)];
    return newArr
}
console.log(dups([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,10,10,10]))


// find palindrome

function palindrome(word){
    var revWord = word.split('').reverse().join('')
    if (word == revWord){
        return true
    }
    if (word !== revWord){
        return false
    }
}
console.log(palindrome('eye'))


// factorial 

function factorial(num){
    for (var x = num - 1; x >= 1; x--){
        num *= x;
    }
    return num
}
console.log(factorial(5))




for (let i = 0; i < 100; i++) {
    if (i === 10) { break; } // this ends the loop early (at 10 instead of 100)
    console.log('the current number is: ' + i)
  }

  for (let i = 0; i < 100; i++) {
    if (i%2 === 0) { continue; } // skips even numbers
    console.log('The number is odd: ' + i);
  }



//------------------------------------------------------------------------------------------------------------



// bubble sort - sort an array from lowest to hightst

const bubbleSort = (arr) => {
    for (var x=0; x < arr.length - 1; x++){
        for (var j=0; j < arr.length - 1 - x; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))

function bubbleSort(arr){
    for (var x = 0; x < arr.length -1; x++){
        for (var y = 0; y < arr.length - x -1; y++){
            if (arr[y] > arr[y+1]){
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))


// insertion sort
// insertion sort - starts at the second element and sorts left - second compairs to first, third compairs to second and so on

const inserSort = (arr) => {
    for(var x = 1; x < arr.length; x++){
        for (var j = x; j > 0; j--){
            if (arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr
}
console.log(inserSort([10,9,8,7,6,5,4,3,2,1]))


// another way to do this with a while loop.  




// selection sort
// selection sort - find the minimum value in the arr and move it to the front


function selectionSort(arr) {
    for (var x = 0; x < arr.length; x++){
        var min = x;
        for (var j = x; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[x], arr[min]] = [arr[min], arr[x]]
    }
    return arr
}
console.log(selectionSort([10,9,8,7,6,5,4,3,2,1]))


// selection sort with a more pure function (this does not mutate or alter the original function)



// sort with built in js function

// assending 

var arr = [10,9,8,7,6,5,4,3,2,1];

arr.sort((a,b) => (a-b));

console.log('sorted arr; ' + arr)


sortAssending = (arr) => {
    var arr = arr.sort((a,b) => (a-b))
    return arr
}
console.log(sortAssending([10,9,8,7,6,5,4,3,2,1]))

// decending 

var arr = [1,2,3,4,5,6,7,8,9,10];

arr.sort((a,b) => (b-a));

console.log('sorted arr; ' + arr)


sortAssending = (arr) => {
    var arr = arr.sort((a,b) => (b-a))
    return arr
}
console.log(sortAssending([1,2,3,4,5,6,7,8,9,10]))



// reverse an array
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for (var x=0; x < arr.length/2; x++){
        [arr[x], arr[arr.length-1-x]] = [arr[arr.length-1-x], arr[x]]
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5,6]))


// swap towards center
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.


function swap(arr){
    for (var x=0; x < arr.length/2; x+=2){
        [arr[x], arr[arr.length-1-x]] = [arr[arr.length-1-x], arr[x]]
    }
    return arr
}
console.log(swap([1,2,3,4,5,6,7]))


/*
Find the 2nd largest and 2nd smallest number in two arrays of numbers combined

[10,5,7,2,4,1,24]
[8,23,29,25,40,0,24]
2nd Largest: 29 , 2nd Smallest: 1
*/

// var array1 = [10,5,7,2,4,1,24];
// var array2 = [8,23,29,25,40,0,24];
// let newArr1 = [...array1, ...array2];
// console.log(newArr1)

function largeSmall(arr){
    var array1 = [10,5,7,2,4,1,24];
    var array2 = [8,23,29,25,40,0,24];
    let newArr1 = [...array1, ...array2];
    console.log(newArr1)

    var SortedArr = newArr1.sort((a,b) => (a-b))
    console.log(SortedArr)

    for (var x = 0; x < SortedArr.length; x++){
        var secondLargest = SortedArr[SortedArr.length-2]
        var secondSmallest = SortedArr[SortedArr[1]]
    }
    console.log(secondLargest)
    console.log(secondSmallest)
   
}
largeSmall();



// fizzBuzz - print - and return an array 3 and 5 fizzBuzz, 3 fizz, 5 buzz

function fizzBuzz(){
    for (var x=1; x <= 50; x++){
        if (x % 3 == 0 && x % 5 == 0){
            console.log('FizzBuzz')
        }
        if (x % 3 == 0){
            console.log('Fizz')
        }
        if (x % 5 == 0){
            console.log('Buzz')
        }
        else{
            console.log(x)
        }
    }
}
fizzBuzz()


/*
Write a program to find the most repeated word in a string and the count of the word
“Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.”
*/



/*
Write a function to represent a Triangle,
    given input is the number of rows of the triangle

Example if the number of rows is 3
Result:
1
2 3
4 5 6
*/





// remove duplicates 

function dups(arr){
    var newArr = [];
    for (var x=0; x < arr.length; x++){
        if (newArr.indexOf(arr[x]) === -1){
            newArr.push(arr[x])
        }
    }
    return newArr
}
console.log(dups([1,1,2,2,3,3,4,4,5,5,6,6]))

function dups2(arr){
    var newArr = [...new Set(arr)]
    return newArr
}
console.log(dups2([1,1,2,2,3,3,4,4,5,5,6,6]))

// find palindrome

function pal(word){
    var revWord = word.split('').reverse().join('');
    if (word == revWord){
        return true
    }
    if (word !== revWord){
        return false
    }
}
console.log(pal('eye'))
console.log(pal('hello'))


// factorial 

function fact(num){
    for (var x = num -1; x >= 1; x--){
        num *= x;
    }
    return num
}
console.log(fact(5))





//------------------------------------------------------------------------------------------------------------



// bubble sort - sort an array from lowest to hightst

const bubbleSort = (arr) => {
    for (var x=0; x < arr.length - 1; x++){
        for (var j=0; j < arr.length - 1 - x; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))

function bubbleSort(arr){
    for (var x = 0; x < arr.length -1; x++){
        for (var y = 0; y < arr.length - x -1; y++){
            if (arr[y] > arr[y+1]){
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1]))


// insertion sort
// insertion sort - starts at the second element and sorts left - second compairs to first, third compairs to second and so on

const inserSort = (arr) => {
    for(var x = 1; x < arr.length; x++){
        for (var j = x; j > 0; j--){
            if (arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr
}
console.log(inserSort([10,9,8,7,6,5,4,3,2,1]))


// another way to do this with a while loop.  




// selection sort
// selection sort - find the minimum value in the arr and move it to the front


function selectionSort(arr) {
    for (var x = 0; x < arr.length; x++){
        var min = x;
        for (var j = x; j < arr.length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[x], arr[min]] = [arr[min], arr[x]]
    }
    return arr
}
console.log(selectionSort([10,9,8,7,6,5,4,3,2,1]))


// selection sort with a more pure function (this does not mutate or alter the original function)



// sort with built in js function

// assending 

var arr = [10,9,8,7,6,5,4,3,2,1];

arr.sort((a,b) => (a-b));

console.log('sorted arr; ' + arr)


sortAssending = (arr) => {
    var arr = arr.sort((a,b) => (a-b))
    return arr
}
console.log(sortAssending([10,9,8,7,6,5,4,3,2,1]))

// decending 

var arr = [1,2,3,4,5,6,7,8,9,10];

arr.sort((a,b) => (b-a));

console.log('sorted arr; ' + arr)


sortAssending = (arr) => {
    var arr = arr.sort((a,b) => (b-a))
    return arr
}
console.log(sortAssending([1,2,3,4,5,6,7,8,9,10]))



// reverse an array
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr){
    for (var x=0; x < arr.length/2; x++){
        [arr[x], arr[arr.length-1-x]] = [arr[arr.length-1-x], arr[x]]
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5,6]))


// swap towards center
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.


function swap(arr){
    for (var x=0; x < arr.length/2; x+=2){
        [arr[x], arr[arr.length-1-x]] = [arr[arr.length-1-x], arr[x]]
    }
    return arr
}
console.log(swap([1,2,3,4,5,6,7]))


/*
Find the 2nd largest and 2nd smallest number in two arrays of numbers combined

[10,5,7,2,4,1,24]
[8,23,29,25,40,0,24]
2nd Largest: 29 , 2nd Smallest: 1
*/

// var array1 = [10,5,7,2,4,1,24];
// var array2 = [8,23,29,25,40,0,24];
// let newArr1 = [...array1, ...array2];
// console.log(newArr1)

function largeSmall(arr){
    var array1 = [10,5,7,2,4,1,24];
    var array2 = [8,23,29,25,40,0,24];
    let newArr1 = [...array1, ...array2];
    console.log(newArr1)

    var SortedArr = newArr1.sort((a,b) => (a-b))
    console.log(SortedArr)

    for (var x = 0; x < SortedArr.length; x++){
        var secondLargest = SortedArr[SortedArr.length-2]
        var secondSmallest = SortedArr[SortedArr[1]]
    }
    console.log(secondLargest)
    console.log(secondSmallest)
   
}
largeSmall();



// fizzBuzz - print - and return an array 3 and 5 fizzBuzz, 3 fizz, 5 buzz

function fizzBuzz(){
    for (var x=1; x <= 50; x++){
        if (x % 3 == 0 && x % 5 == 0){
            console.log('FizzBuzz')
        }
        if (x % 3 == 0){
            console.log('Fizz')
        }
        if (x % 5 == 0){
            console.log('Buzz')
        }
        else{
            console.log(x)
        }
    }
}
fizzBuzz()


/*
Write a program to find the most repeated word in a string and the count of the word
“Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.”
*/



/*
Write a function to represent a Triangle,
    given input is the number of rows of the triangle

Example if the number of rows is 3
Result:
1
2 3
4 5 6
*/





// remove duplicates 

function dups(arr){
    var newArr = [];
    for (var x=0; x < arr.length; x++){
        if (newArr.indexOf(arr[x]) === -1){
            newArr.push(arr[x])
        }
    }
    return newArr
}
console.log(dups([1,1,2,2,3,3,4,4,5,5,6,6]))

function dups2(arr){
    var newArr = [...new Set(arr)]
    return newArr
}
console.log(dups2([1,1,2,2,3,3,4,4,5,5,6,6]))

// find palindrome

function pal(word){
    var revWord = word.split('').reverse().join('');
    if (word == revWord){
        return true
    }
    if (word !== revWord){
        return false
    }
}
console.log(pal('eye'))
console.log(pal('hello'))


// factorial 

function fact(num){
    for (var x = num -1; x >= 1; x--){
        num *= x;
    }
    return num
}
console.log(fact(5))