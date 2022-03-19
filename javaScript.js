//Basic Foundation

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.


// console.log inside the loop will print all the numbers 
// this function will print number 1-255
function array (){
    for (var x=1; x <= 255; x++) {
        console.log(x)
    }
}
array();

//this function expects a start parameter 
function array (start){
    for (var x=start; x <= 255; x++) {
        console.log(x)
    }
}
array(254);
//enter the argument or start number here


// console.log to print an arr must be outside the loop or it will print an array evertime the fuunction goes through the loop
// the push method add x to Arr1
// this function will print an array with number 1-255
function array (){
    var Arr1 = [];
    for (var x=1; x <= 255; x++) {
        Arr1.push(x)
    }
    console.log(Arr1)
}
array();


// this function is a combination of the two above with the addition of the return function so the values can presist outside the function
function array (num){
    var NewArr=[];
    for (var x=1; x <= num; x++) {
        NewArr.push(x);
        
    }
    console.log(x)
    return NewArr;
}

var y = array(10);
console.log(y)



// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenNum () {
    var num = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0) {
            num = num + i;
        }
    }
    return num;
}
var sum = evenNum();
console.log(sum)



// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function oddNum () {
    var sum = 0;
    for (var x = 1; x <= 5000; x++){
        if (x % 2 == 1){
            sum = sum + x;
        }
    }
    return sum;
}
var y = oddNum();
console.log(y)
// can also console.log and call the function at the same time
console.log(oddNum())


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterArr (newArr) { //this function is expecting a parameter, newArr, in order to run. needs arguments when calling function.
    var sum = 0;
    for(var x=0; x < newArr.length; x++){
        sum = sum + newArr[x];
    }
    return sum
}
console.log(iterArr([1,2,3,4,5,100])) // argument is an array


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxNum(arrMax) {
    var max = arrMax[0];    // sets the max to the first value of hte arr
    for (var i = 0; i < arrMax.length; i++){
        // check if the next value is larger than the first value in the arr
        if (arrMax[i] > max){
            // if it is, then make it the new max
            max = arrMax[i];
        }
    }
    return max
}
console.log(maxNum([-1,-2,-3,5]))



// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function average(arr) {
    var sum = 0;
    var avg = 0;
    for (var x=0; x < arr.length; x++){
        sum = sum + arr[x];
        avg = sum / arr.length;
    }
    console.log("sum = " + sum)
    console.log("length = " + arr.length)
    return avg;
}
console.log("average = " + average([1,2,3,4,5]))


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr(){
    var newArr = [];
    for(var j = 0; j <= 50; j++){
        if (j % 2 == 1){
            newArr.push(j)
        }
    }
    return newArr
}
console.log(oddArr())


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThan(arr, y) {
    var num = 0
    for (var x = 0; x < arr.length; x++){
        if (arr[x] > 3){
            num++
        }
    }
    return num;
}
console.log(greaterThan([1,3,5,7], 3))



// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr){
    for (var i = 0; i < arr.length; i++ ){
        arr[i] = arr[i] * arr[i]

    }
    return arr;
}
console.log(square([1,2,3,4,5]));


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function neg(arr){
    for (var x = 0; x < arr.length; x++){
        if (arr[x] < 0){
            arr[x] = 0;
        }
    }
    return arr
}
console.log(neg([1,-5,10,-2]))


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function MaxMinAvg(arr){
    //start to check the arr value at the 0 index
    var max = arr[0];
    var min = arr[0];
    var newArr = [];
    //sets the value of sum to 0
    var sum = 0;
    for (var j = 0; j < arr.length; j++){
        sum = sum + arr[j]

        if (arr[j] > max){
            max = arr[j]
        }
        else if (arr[j] < min){
            min = arr[j]
        }
    }
    // var newArr = [];
    newArr.push(max)
    newArr.push(min)
    var avg = 0;
    avg = sum / arr.length;
    newArr.push(avg)

    return newArr
}
console.log(MaxMinAvg([1,5,10,-2]))


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    var temp =  arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
}
var y = [1,5,10,-2];
swap(y)
console.log(y);


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numString(arr) {
    for ( var x = 0; x < arr.length; x++){
        if (arr[x] < 0){
            arr[x] = 'Dojo'
        }
    }
    return arr
}
console.log(numString([-1,-3,2]))


// ------------------------------------------------------------------
// Basic Foundation II

// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function big (arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0)
            arr[i] = 'big';
    }
    return arr
}
console.log(big([-1,3,5,-5]))


// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.




// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.




// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.




// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.




// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".




// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.




// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?




// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.




// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).




// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].




// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.




// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.




// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].



// ------------------------------------------------------------------
// Intermediate Foundation


// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).




// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).




// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). 





// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.





// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.




// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.




// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].