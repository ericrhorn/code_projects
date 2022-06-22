// two sum 
// brute force
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++){
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
console.log(twoSum([2,7,11,15], 9))

// better soloution

const twoSum2 = (nums, target) => {
    let newObj = {}
    for (var i = 0; i < nums.length; i++){
        var solution = target - nums[i];
        if (newObj[solution] !== undefined){
            return [newObj[solution], i] 
        }
        newObj[nums[i]] = i
    }
}
console.log(twoSum2([2,7,11,15], 9))


// O(n) - One-pass Hash Table
var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}
console.log(twoSum([2,7,11,15], 9))


// ----------------------------------------------------------------------------------------------------
// top 100 leetcode EASY

// valid parentheses

function isValid(s){
    var newArr = []
    var brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (var x = 0; x < s.length; x++)
}


// merge two sorted lists

function merge(one, two){
    one = one.concat(two).sort((a,b) => (a-b))
    return one
}
console.log(merge([1,2,4], [1,3,4]))

var mergeTwoLists = function(list1, list2) {
    list1 = list1.concat(list2).sort((a,b) => (a-b))
    return list1
};
console.log(mergeTwoLists([1,2,4], [1,3,4]))


var mergeTwoLists = function(list1, list2,) {
    list1.splice(0, list2)
    // list1.sort((a,b) => (a-b))
    // list1 = list1.concat(list2).sort((a,b) => (a-b))
    return list1
};
console.log(mergeTwoLists([1,2,4], [1,3,4]))



const spliceArr = [1,2,3,4,5,6,7,8,9,10]
    spliceArr.splice(2, 1)
console.log(spliceArr)


// Search insert position

var searchInsert = function (nums, target){
    var targetNum = target;
    for (var x = 0; x < nums.length; x++){
        // >= will return the index value if the target doesnt exist in the arr. == will only return the index if the target exists
        if (nums[x] >= targetNum){
            return x
        } 
    }
    // will return the length which is the last index value
    return nums.length;
}
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))

// better and faster search

searchInsert2 = (nums, target) => {
    var start = 0;
    var end = nums.length;

    while (start < end) {
        const middle = Math.floor((start + end) / 2)

        if (nums[middle] < target){
            start = middle + 1;
        }
        else {
            end = middle;
        }
    }
    return start;
}
console.log(searchInsert2([1,3,5,6], 5))



// Maximum subarray

// Solution #1 Brute Force:

// We need to iterate over the array with one for loop and we need an additional for loop to scan the elements to the right of it, with this in mind, we can accumulate the combinations of the sub array to achieve the largest sum.

// The reason we need to accumulate the combinations is because we need to keep track of the locally optimal max sum sub array while simultaneously comparing it to the global max sum sub array. Also, by accumulating the numbers in the sub array we might run into negative numbers that will decrease the total value of the sum, which is why we need to always compare the local sum to the global sum.

// After going through the entire array with double for loops, you should be able to return the global max sum sub array.

var maxSubArray = function(nums) {
    var maxSum = nums[0];
    // loop through the entire array because the whole arr migh be the max sub arr
    for (var x = 0; x < nums.length; x++){
        var localSum = 0;
        // y starts at x because we are compairing all conbinations of nums[x]
        // every iteration of nums[x] localMax will reset ans the second loop y will accumulate all the combinaitons 
        for(var y = x; y < nums.length; y++){
            localSum += nums[y]
            if (localSum > maxSum){
                maxSum = localSum;
            }
        }
    }
    return maxSum
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// Solution #2 Kadane's Algorithm:

// Kadane's algorithm is a combination of the greedy algorithm and dynamic programming.

// Greedy algorithm:
// We keep track of the locally optimal solution while simultaneously comparing it to our global solution.

// Dynamic programming:
// Once we solved the sub problem, in this case, the maximum sum of the sub array then we can use memoization to keep track of the solution. By keeping track of our previous solution (local solution), it allows us to solve the problem once and we can build the next solution. These overlapping sub problems plus the greedy algorithm allows us to build the solution piece by piece in O(n) time.

function maxSubArray2(nums){
    var maxSum = 0;
    var localSum = 0;
    // start the loop at index 1 because maxSum + localMax has already been solved 
    // now we can take the previous soloution and apply it to index 1
    for (var x = 1; x < nums.length; x++){
        // we keep track of the prev soloution (localMax[x-1] and memorize it by storing it in localMax)
        localSum = Math.max(nums[x], localSum + nums[x]);
        // Greedy algorithm, compait local soloution to the global soloution
        maxSum = Math.max(localSum, maxSum);
    }
    return maxSum
}
console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]))



// climbing stairs

