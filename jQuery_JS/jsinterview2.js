//write a function that returns the sum of 2 values
function solution(param1, param2) {
    var sum = 0;
    sum = param1 + param2;
    return sum
}
console.log(solution(5, 2))


// given a year return the century is is in

function solution(year) {
    var century = Math.ceil(year/100);
    return century
}

//given a string check to see if it is a palindrome

function solution(inputString) {
    var reverse = inputString.split("").reverse().join("");
    
    if (inputString == reverse){
        return true;
    }
    if (inputString !== reverse){
        return false;
    }
}


//given an array of integers, find the pair of adjacent elements that has the largest product and return that product

function solution(inputArray) {
    var largest = inputArray[0] * inputArray[1];
        
    for (var x=0; x < inputArray.length; x++){
        if (inputArray[x] * inputArray[x+1] > largest){
            largest = inputArray[x] * inputArray[x+1];
        }
    }
    return largest;
}

//shapeArea (interesting polygon)
// see screenshot on desktop for question

function solution(n) {
    var poly = 1;
    for (var x =1; x < n; x++){
        poly += 4 * x;
    }
    return poly;
}


//make array consecutive 2

function solution(statues) {
    statues.sort(function(a,b){
        return a-b
    });
    var counter = 0;
    for (var x=0; x < statues.length-1; x++){
        if (statues[x + 1] - statues[x] > 1){
            counter += statues[x + 1] - statues[x] - 1;
        }
    }
    return counter
}
console.log(solution([1,3,5,7,9]))
console.log(solution([6,2,3,8]))



function solution(statues) {
    statues.sort((a,b) => {
        return a-b;
    });
    var counter = 0;
    for (var x=0; x < statues.length-1; x++){
        if (statues[x+1] - statues[x] > 1){
            counter += statues[x+1] - statues[x] - 1;
        }
    }
    return counter 
}
console.log(solution([1,3,5,7,9]))
console.log(solution([6,2,3,8]))
console.log(solution([0,3]))
