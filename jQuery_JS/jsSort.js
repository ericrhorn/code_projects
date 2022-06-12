// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    for (var x=0; x < arr.length/2; x++){
        var temp = arr[x]
        arr[x] = arr[arr.length - 1 - x]
        arr[arr.length - 1 - x] = temp
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]))


function reverse(arr){
    for (var x=0; x < arr.length/2; x++){
        [arr[x], arr[arr.length -1 -x]] = [arr[arr.length-1-x], arr[x]]
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]))

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swap(arr){
    for (var x = 0; x < arr.length/2; x+=2){
        var temp = arr[x]
        arr[x] = arr[arr.length-1-x]
        arr[arr.length -1-x] = temp
    }
    return arr
}
console.log(swap([1,2,3,4,5,6]))


// SORTING

// for any sorting functions you need 2 for loops. The first loop will run through the array and the second loop will sort the remaining array (the unsorted arr)
// outer for loop only loops through the length -1 because you wont have to compair the last element with anything
// inner for loop can start at index x (var of the outer for loop) since after the first interation the first index (0) will already be locked in place 


// bubble sort. Sort an array from lowest to highest. 

function bubble(arr){
    for (var x=0; x < arr.length - 1; x++){
        for (var y=0; y < arr.length-x-1; y++){
            console.log('index', y, "value", arr[y]);
            console.log('compairing', arr[y], arr[y+1]);
            if (arr[y] > arr[y+1]){
                // can also use the below code instead of a temp
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]
                //the above code will replace the code below
                // var temp = arr[y]
                // arr[y] = arr[y+1]
                // arr[y+1] = temp
                console.log("swapped", arr[x], arr[x+1]);
                console.log("new arr", arr);
            }
        }
    }
    console.log(arr);
}
bubble([6,5,3,1,8,7,2,4])


function bubble(arr){
    for (var x=0; x < arr.length - 1; x++){
        for (var y=0; y < arr.length-x-1; y++){
            // console.log('index', y, "value", arr[y]);
            // console.log('compairing', arr[y], arr[y+1]);
            if (arr[y] > arr[y+1]){
                // can also use the below code instead of a temp
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]
                //the above code will replace the code below
                // var temp = arr[y]
                // arr[y] = arr[y+1]
                // arr[y+1] = temp
                // console.log("swapped", arr[x], arr[x+1]);
                // console.log("new arr", arr);
            }
        }
    }
    console.log(arr);
}
bubble([6,5,3,1,8,7,2,4])


function bubble(arr){
    for (var x=0; x < arr.length; x++){
        for (var y=0; y < arr.length; y++){
            if (arr[y] > arr[y+1]){
                [arr[y], arr[y+1]] = [arr[y+1], arr[y]]
            }
        }
    }
    console.log(arr);
}
bubble([6,5,3,1,8,7,2,4])

function sortArr(arr){
   return arr.sort((a, b) => a - b);
}
console.log(sortArr([6,5,3,1,8,7,2,4]))


// selection sort - find the minimum value in the arr and move it to the front

function select(arr){
    console.log(arr)
    for (var x = 0; x < arr.length-1; x++){
        // assume the first element in the iteration is the smallest so use index x as start for second loop. setting the index as the smallest element 
        var min = x;
        // this loop start at x becasue you do not need to start at 0 becasue after the first iteration the first low element it locked in place. Tecnically can start from x+1
        for (var y = x; y < arr.length; y++){
            if (arr[y] < arr[min]){
                // this min is now the y index which is the smallest in the current loop iteration
                // run through the loops to find the min index, then exit the loop and swap
                // the current iteration of j is now the min
                min = y;
            }
        }
        // now min in iteration of j will replace the value in x
        [arr[x], arr[min]] = [arr[min], arr[x]]
        //the above code will replace the code below
            // var temp = arr[x]
             // arr[x] = arr[min]
            // arr[min] = temp
    }
    return arr;
}
console.log(select([9,8,7,6,5,4,3,2,1]))

// selection sort with a more pure function (this does not mutate or alter the original function)

function select(arr){
    // .slice makes a copy of the arr
    var newArr = arr.slice();
    for (var x = 0; x < newArr.length-1; x++){
        // assume the first element in the iteration is the smallest so use index x as start for second loop. setting the index as the smallest element 
        var min = x;
        // this loop start at x becasue you do not need to start at 0 becasue after the first iteration the first low element it locked in place. Tecnically can start from x+1
        for (var y = x; y < newArr.length; y++){
            if (newArr[y] < newArr[min]){
                // this min is now the y index which is the smallest in the current loop iteration
                // run through the loops to find the min index, then exit the loop and swap
                // the current iteration of j is now the min
                min = y;
            }
        }
        // now min in iteration of j will replace the value in x
        [newArr[x], newArr[min]] = [newArr[min], newArr[x]]
        //the above code will replace the code below
            // var temp = arr[x]
             // arr[x] = arr[min]
            // arr[min] = temp
    }
    return newArr;
}
var arr = [9,8,7,6,5,4,3,2,1];
var output = select(arr);
console.log(output)
console.log(arr)


// insertion sort - starts at the second element and sorts left - second compairs to first, third compairs to second and so on

function insertion(arr){
    for(var x = 0; x < arr.length; x++){
        for (var y = x; y > 0; y--){
            if (arr[y] < arr[y-1]){
                [arr[y], arr[y-1]] = [arr[y-1], arr[y]]
            }
            else {
                break;
            }
        }
    }
    return arr
}
console.log(insertion([9,3,78,12,76,0,-2]))



// another way to do this with a while loop.  

function insertion(arr) {
    for (var x=1; x < arr.length; x++){
        var y = x -1
        var temp = arr[x]
        while ( y >=0 && arr[y] > temp){
            arr[y+1] = arr[y]
            y--
        }
        arr[y+1] = temp
    }
    return arr;
}
console.log(insertion([9,3,78,12,76,0,-2]))

//numeric sort using js sort function

const num = [10,8,6,3,1,2,5,7,4,9];
num.sort(function(a,b){return a-b});
console.log(num)

// js sort descending

const num2 = [10,8,6,3,1,2,5,7,4,9];
num2.sort(function(a,b){return b-a});
console.log(num2)

// ---------------------------------------------------------------------------

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).



// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.




// SORTING

// for any sorting functions you need 2 for loops. The first loop will run through the array and the second loop will sort the remaining array (the unsorted arr)
// outer for loop only loops through the length -1 because you wont have to compair the last element with anything
// inner for loop can start at index x (var of the outer for loop) since after the first interation the first index (0) will already be locked in place 


// bubble sort. Sort an array from lowest to highest. 







// selection sort - find the minimum value in the arr and move it to the front



// selection sort with a more pure function (this does not mutate or alter the original function)





// insertion sort - starts at the second element and sorts left - second compairs to first, third compairs to second and so on




// another way to do this with a while loop.  



//numeric sort using js sort function



// js sort descending

