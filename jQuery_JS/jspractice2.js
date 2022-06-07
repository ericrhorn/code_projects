// Operator	Description	Examples
// ==	equal	1 == 2 => false; 1 == 1 => true
// !=	not equal	1 != 2 => true; 1 != 1 => false
// >	greater than	1 > 2 => false; 2 > 1 => true
// <	less than	1 < 2 => true; 1 < 2 => false
// >=	greater than or equal to	1 >= 2 => false; 2 >= 2 => true
// <=	less than or equal to	1 <= 2 => true; 2 <= 2 => true

// 3 ways to reverse a string

// reverse a string with built in methods

function reverse(str){
    // var newString = ''

    var splitStr = str.split("");
        console.log(splitStr)
    var reverseArr = splitStr.reverse("");
        console.log(reverseArr)
    var joinArr = reverseArr.join("")
        console.log(joinArr)
    return joinArr;
}
console.log(reverse("hello"))

// chaining the methods together

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// reverse a string with a decrementing for loop

function reverseSrt(string){
    var newString = "";
    for (var x = string.length - 1; x >= 0; x --){
        newString += string[x] // or newString = newString + string[x]
    }
    return newString;
}
console.log(reverseSrt("helloooo"))




// reverse string with recursion
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
    // "hello".substr(1); // "ello"
//The charAt() method returns the specified character from a string.
    //"hello".charAt(0); // "h"
//The depth of the recursion is equal to the length of the String. This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.
function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  }
  console.log(reverseString("hello"));


// Write a program that will take an integer and print Fizz if the number is divisible by 3, Buzz if the number is divisible by 5, FizzBuzz if the number is divisible by 3 and 5, and the number itself for all other cases.

function fizzBuzz(){
    for (var x=1; x <= 50; x++){
        if (x % 3 == 0 && x % 5 == 0){
            console.log("FizzBuzz");
        } 
        else if (x % 3 == 0){
            console.log("Fizz");
        } 
        else if (x % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(x)
        }
    }
    return x;
}
console.log(fizzBuzz())


function fizzBuzz(n) {
    const arr = [];
    
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        }
        else if (i % 3 === 0) {
            arr.push('Fizz');
        }
        else if (i % 5 === 0) {
            arr.push('Buzz');
        }
        else {
            arr.push(i.toString());
        }
    }
    return arr;
};
console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))



// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function count(){
    const newArr = [];
    for (var x=1; x <= 255; x++){
        newArr.push(x);
    }
    return newArr;
}
console.log(count())


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function even(){
    var sum = 0;
    for (var x=1; x <= 1000; x++){
        if (x % 2 ==0){
            sum = sum + x;
        }
    }
    return sum;
}
console.log(even())



// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd(){
    var sum = 0;
    for (var x=1; x <= 5000; x++){
        if (x % 2 == 1){
            sum = sum + x;
        }
    }
    return sum;
}
console.log(odd())


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterate(arr){
    var sum = 0;
    for (var x=0; x < arr.length; x++){
        sum = sum + arr[x];
    }
    return sum;
}
console.log(iterate([1,2,5]))
console.log(iterate([-5,2,5,12]))


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max = arr[0];
    for (var x=0; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    return max;
}
console.log(findMax([-3,3,5,7]))


// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function average(arr){
    var sum = 0;
    for (var x=0; x < arr.length; x++){
        sum = sum + arr[x];
    }
    var avg = 0
    avg = sum / arr.length;
    return avg;
}
console.log(average([1,3,5,7,20]))


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odd(){
    var newArr = [];
    for (var x=1; x <= 50; x++){
        if (x % 2 ==1){
            newArr.push(x)
        }
    }
    return newArr
}
console.log(odd())


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThan(arr, y){
    var counter = 0;
    for (var x=0; x < arr.length; x++){
        if (arr[x] > y){
            counter ++
        }
    }
    return counter
}
console.log(greaterThan([1, 3, 5, 7, 8], 3))


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr){
    for (var x=0; x < arr.length; x++){
        arr[x] = arr[x] * arr[x];
    }
    return arr;
}
console.log(square([1,5,10,-2]))


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNeg(arr){
    for (var x=0; x < arr.length; x++){
        if (arr[x] < 0){
            arr[x] = 0;
        }
    }
    return arr;
}
console.log(noNeg([1,5,10,-2]))


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    var newArr = [];

    for (var x=0; x < arr.length; x++){
        sum += arr[x];
            // console.log(sum)
        if (max > arr[x]){
            max = arr[x];
            
        }
        if (min < arr[x]){
            min = arr[x];
            
        }
    }
    var avg = sum / arr.length;
        newArr.push(max)
        newArr.push(min)
        newArr.push(avg)
    return newArr
}
console.log(minMaxAvg([1,5,10,-2]))


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    for (var x=0; x < arr.length; x++){
        if (arr.length < 2){
            return "false"
        }
        [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]]
    }
    console.log("greater than 2")
    return arr;
}
console.log(swap([1,2,3,4,5]))
console.log(swap([1]))


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].




// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].




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



// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).




// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).




// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). 

// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);




// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.





// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.




// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.




// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].