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
    var brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    var arr = []

    for (var x = 0; x < s.length; x++){
        if (arr.length > 0 && brackets[arr[arr.length-1]] === s[x]){
            arr.pop()
        }
        else {
            arr.push(s[x])
        }
    }
    return arr.length === 0
}
console.log(isValid('(), [], {}'))
console.log(isValid('(}'))



// es6 soloution
function isValid(s){
    var brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    var newArr = []

    for (let char of s){
        if (brackets[char]){
            newArr.push(brackets[char])
        }
        else{
            if(newArr.pop() !== char){
                return false
            }
        } 
    }
    return (!newArr.length)
}
console.log(isValid('(), [], {}'))
console.log(isValid('(}'))

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


// merge two sorted linked list 

// 1 create a new head pointer to an empty list
// 2 check the first values of both linked lists 
// 3 whichever node from L1 or L2 is smaller append it to the new list and move the pointer to the next node 
// 4 continue this process untill you reack the end of a linked list.

function ListNode(val, next){
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(list1, list2) {
    var newList = new ListNode(null, null);
    var prev = newList;

    while (list1 !== null && list2 !== null){
        if (list1.val <= list2.val) {
            prev.next = list1
            list1 = list1.next;
        }
        else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    if (list1 === null) {prev.next = list2}
    if (list2 === null) {prev.next = list1}
    return newList.next;
};

// another way

var mergeTwoLists = function(list1, list2) {
    // initilize a linked list with a dummy Listnode
    var newList = new ListNode(null, null);
    // pointer to head of new linked list
    var headOfNewList = newList;

    // while both list contain elements 
    while (list1 !== null && list2 !== null){
        // if l1 value is smaller
        if (list1.val <= list2.val) {
            // add l1 value to new list
            newList.next = list1
            // move l1 to its next elements
            list1 = list1.next;
        }
        else {
            newList.next = list2
            list2 = list2.next
        }
        newList = newList.next
    }
    if (list1 === null) {newList.next = list2}
    if (list2 === null) {newList.next = list1}
    return headOfNewList.next;
};



var mergeTwoLists = function(l1, l2) {
    const head = new ListNode(0);
    let merged = head;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            merged.next = l1;
            l1 = l1.next;
        } else {
            merged.next = l2;
            l2 = l2.next;
        }
        
        merged = merged.next;
    }
    
    if (l1) {
        merged.next = l1;
    } else {
        merged.next = l2;
    }
    
    return head.next;
};




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



// climbing stairs (fibonacci)
// recursive
var climbStairs = function(n) {
    if (n <= 1) {
        return 1
    }
    return climbStairs(n-1) + climbStairs(n-2);
};
console.log(climbStairs(3))

var climbStairs2 = function (n){
    var vals = [0,1];
    for (var x=0; x < n; x++){
        vals = [vals[1], vals[0] + vals[1]]
    }
    return vals[1]
}
console.log(climbStairs2(2))
console.log(climbStairs2(3))
console.log(climbStairs2(5))

// the only one that meets the time complexity

var climbStairs3 = function (n){
    var total = 0;
    var first = 0;
    var second = 1;
    var x = 0;

    while (x < n){
        total = first + second
        first = second
        second = total 
        x++
    }
    return total;
}
console.log(climbStairs3(2))
console.log(climbStairs3(3))
console.log(climbStairs3(5))

// systemic tree

var isSymmetric = function(root) {
    var broot = root[0];
    var left = 0;
    var right = 0;
    
    while (x < root){

    }
};


// best time to buy and sell stock

var maxProfit = function(prices) {
    var bestSellPrice = 0;

    for (var x = 0; x < prices.length -1; x++){
        for (var y = x+1; y < prices.length; y++){
            var currentVal = prices[y] - prices[x];

            if (currentVal > bestSellPrice){
                bestSellPrice = currentVal
            }
        }
      
    }
    return bestSellPrice
};

console.log(maxProfit([7,1,5,3,6,4]))


var maxProfit = function(prices){
    var maxProfit = 0;
    var buy = prices[0];

    for (var x = 0; x < prices.length; x++){
        var sell = prices[x]
        var profit = sell - buy

        maxProfit = Math.max(maxProfit, profit)

        if (sell < buy){
            buy = sell
        }
    }
    return maxProfit
}
console.log(maxProfit([7,1,5,3,6,4]))


// single number

var singleNumber = function(nums) {
    var sortedList = nums.sort((a,b) => (a-b))
    var list = sortedList.length;
    
    for (var x=0; x < list; x++){
        if (sortedList[x-1] !== sortedList[x] && sortedList[x+1] !== sortedList[x]){
            return sortedList[x]
        }
    }
};
console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))


// majority elements

var majorityElement = function(nums) {
    var majority = nums[0];

    for (var x=0; x < nums.length; x++){
        if ()
    }
};

// reverse linked list 

var reverseList = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

console.log(reverseList([1,2,3,4,5]))


var reverseList = function(head) {
    // pre will hold the reversed list
    var pre = null;
    // next will be a temporary variable to store the remaining nodes in the list at each loop
    var next = null;

    // while there are nodes remaining in the list
    while(head != null) {
        // temporarily store the remaining list without the current node
        next = head.next;
        // take the current node of the list, append the reversed nodes to it, then assign it back to the reversed list
        head.next = pre;
        pre = head;
        // assign the remaining list back so head points to the new current node, repeat until there are nodes remaining in the list
        head = next;
    }

    return pre;
};
console.log(reverseList([1,2,3,4,5]))




// move zeros

var moveZeroes = function(nums) {
    for (var x=0; x<nums.length; x++){
        if (nums[x] === 0){
            nums.pop(nums[x])
        }
    }
    return nums
};
console.log(moveZeroes([0,1,0,3,12]))



