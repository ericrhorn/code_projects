// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arr(){
    var newArr = [];
    for (var x=1; x<=255; x++){
        newArr.push(x);
    }
    return newArr;
}
console.log(arr())

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function even(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(even())


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd(){
    var sum = 0;
    for (var j = 1; j <= 5000; j++){
        if (j % 2 == 1){
            sum = sum + j;
        }
    }
    return sum;
}
console.log(odd())


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterate(arr){
    var sum = 0;
    for (var z = 0; z < arr.length; z++){
        sum = sum + arr[z];
    }
    return sum;
}
console.log(iterate([1,2,3,4,5,10]))


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max = 0;
    for (var x = 0; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5,6,10,101]))


// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
console.log(findAvg([1,2,3,4,5]))


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArr(){
    var newArr = [];
    for (var i = 1; i <= 50; i++){
        if(i % 2 == 1){
            newArr.push(i)
        }
    }
    return newArr
}
console.log(oddArr())


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThan(arr, y){
    var counter = 0;
    for (var j = 0; j < arr.length; j++){
        if (arr[j] > y){
            counter ++
        }
    }
    return counter;
}
console.log(greaterThan([1,3,5,7,-1,-2,8,9], 2))
var test = greaterThan([1,3,4,5,6,7,8,9],7)
console.log("test = " + test)


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr){
    for(var j = 0; j < arr.length; j++){
        arr[j] = arr[j] * arr[j];
    }
    return arr;
}
console.log(square([1,2,3,4,5]))


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function neg(arr){
    for(var x=0; x<arr.length; x++){
        if (arr[x] < 0){
            arr[x] = 0;
        }
    }
    return arr;
}
console.log(neg([-1,2,-3,4,-5]))


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr){
    var newArr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        else if( arr[i] < min){
            min = arr[i]
        }
    }
    newArr.push(max);
    newArr.push(min);
    var avg = 0;
    avg = sum / arr.length;
    newArr.push(avg)
    return newArr
}
console.log(maxMinAvg([1,2,3,4,5,6,7,8,9,10]))


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    for(var x=0; x < arr.length; x++){
        temp = arr[0]
        arr[0] = arr[arr.length-1]
        arr[arr.length-1] = temp
    }
    return arr;
}
console.log(swap([1,2,3,4,5]))


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToString(arr){
    for(var x=0; x < arr.length; x++){
        if(arr[x] < 0){
            arr[x] = "dojo"
        }
    }
    return arr;
}
console.log(numToString([-1,2,-3,4,-5,6]))




// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function get(){
    var newArr = [];
    for (var x=1; x <= 255; x++){
        newArr.push(x)
    }
    return newArr;
}
console.log(get())


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function even(){
    var sum = 0;
    for(var x = 1; x <= 1000; x++){
        if(x % 2 == 0){
            sum = sum + x;
        }
    }
    return sum
}
console.log(even())



// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd(){
    var sum = 0;
    for (var x = 0; x <= 5000; x++){
        if (x % 2 ==1){
            sum = sum + x;
        }
    }
    return sum;
}
console.log(odd())


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterate(arr){
    var sum = 0;
    for(var x=0; x < arr.length; x++){
        sum = sum + arr[x];
    }
    return sum;
}
console.log(iterate([1,2,3,4,5,10]))
var y = [10,20,30,40,50,60,70,80]
console.log(iterate(y))


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function max(arr){
    var max = arr[0];
    for (var x=0; x < arr.length; x++){
        if (arr[x] > max){
            max = arr[x];
        }
    }
    return max;
}
console.log(max([1,2,3,4,5,100, 200]))



// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function avg(arr){
    var sum = 0;
    var avg = 0;
    for (var x=0; x < arr.length; x++){
        sum = sum + arr[x];
    }
    avg = sum / arr.length;
    return avg;
}
console.log(avg([1,2,3,4,5,6,7,8,9,10]))


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odd(arr){
    var newArr = [];
    for (var x=0; x <= 50; x++){
        if (x % 2 == 1){
            newArr.push(x)
        }
    }
    return newArr;
}
console.log(odd())


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greater(arr, y){
    var counter = 0;
    for (var x=0; x < arr.length; x++){
        if (arr[x] > y){
            counter ++
        }
    }
    return counter;
}
console.log(greater([1,2,3,4,5,6,7,8,9,10], 2))



// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr){
    for(var x=0; x < arr.length; x++){
        arr[x] = arr[x] * arr[x];
    }
    return arr;
}
console.log(square([2,4,6,8,10]))


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function neg(arr){
    for(var x=0; x < arr.length; x++){
        if(arr[x] < 0){
            arr[x] = 0;
        }
    }
    return arr;
}
console.log(neg([-1,2,-3,4,-5,6]))


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr){
    var newArr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var x=0; x < arr.length; x++){
        sum = sum + arr[x];
        if (arr[x] > max){
            max = arr[x];
        }
        if (arr[x] < min){
            min = arr[x];
        }
    }
    console.log(sum);
    newArr.push(max)
    newArr.push(min)
    var avg = 0;
    avg = sum / arr.length;
    newArr.push(avg)
    return newArr;
}
console.log(maxMinAvg([1,2,3,4,5,6,7,8,9,10]))


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
console.log(swap([1,2,3,4,5]))


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function string(arr){
    for(var x = 0; x < arr.length; x++){
        if (arr[x] < 0){
            arr[x] = "dojo";
        }
    }
    return arr;
}
console.log(string([-1,-2,-3,-4, 5,6,7,8]))