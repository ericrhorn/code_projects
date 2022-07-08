// top 100 leetcode EASY


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

//es6
const twoSum3 = (nums, target) => {
    for (x in nums){
        for (y in nums){
            if (nums[x] + nums[y] == target){
                return [x, y]
            }
        }
    }
}
console.log(twoSum3([2,7,11,15], 9))


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



// climbing stairs (fibonacci)
// recursive
var climbStairs = function(n) {
    if (n <= 1) {
        return 1
    }
    return climbStairs(n-1) + climbStairs(n-2);
};
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(5))

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


// binary tree inorder traversal

//recursive

var inorderTraversal = function(root) {
    // declare an array to collect our data
    var listArr = []

    return checkTree(root, listArr)
    // build a recursive function with 2 areguments, root and our current listArr
    function checkTree (root, listArr){
        // if the root is an empty node return whatever data we have in the list.
        if (root === null){
            return listArr;
        }
        // now we can check the tree starting with the left side. Use recursion function on the left node
        listArr = checkTree(root.left, listArr)
        // now we have the left value of the list we add it to the new list
        listArr.push(root.val)
        // now wrap up everything with teh recusive function on the right side child
        return checkTree(root.right, listArr)
    }
};

var inorderTraversal2 = function (root) {
    var list = [];
    orderList(root);

    function orderList(root){
        if(!root){
            return list;
        }
        orderList(root.left)
        list.push(root.val)
        orderList(root.right)
    }
    return list;
}


// symetric tree

// recirsion

var isSymmetric = function(root) {
    var result = true;

    function compair(node1, node2){
        if (!node1 && !node2){
            return result;
        }
        if (!node1 || !node2 || node1.val !== node2.val){
            result = false
            return result;
        }
        compair(node1.left, node2.right)
        compair(node1.right, node2.left)
    }
    compair(root, root)
    return result
};


// max depth of a binary tree

var maxDepth = function(root) {
    var leftDepth = 0;
    var rightDepth = 0;

    if(!root){
        return 0
    }
    else{
        leftDepth = maxDepth(root.left);
        rightDepth - maxDepth(root.right);

        if (leftDepth > rightDepth){
            return (leftDepth++)
        }
        else {
            return (rightDepth++)
        }
    }
};


var maxDepth = function(root) {
    if(!root){
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


var maxDepth = function(root) {
    return counter(root, 0)
    
    function counter(root, depth){
        if(!root){
            return depth
        }
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
        // or this as a counter
        // return Math.max(counter(root.left, depth+1), counter(root.right, depth+1));
    }
};

var maxDepth = function(root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
};



var maxDepth = function(root) {
    // use a handler function since it's easier to write and think about recursive code this way. You start at a num/depth value of 1 because of the definition of depth.
    return maxDepthHandler(root,1)
     
 };
 var maxDepthHandler = function(root, num){
 // here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
 if(root == null){
       return 0
   }
 // this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
   if (root.right == null && root.left == null){
       return num
   }
 //Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
   if (root.right && root.left){
       return Math.max( maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num + 1))
   }  else if (root.right != null){
       return maxDepthHandler(root.right, num+1)
   } else {
       return maxDepthHandler(root.left, num+1)
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



// Linked List Cycle

var hasCycle = (head) => {
    let slow, fast;
    slow = fast = head;
  
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
        return true;
      }
    }
    return false;
  };


var hasCycle = function(head) {
    if (!head){
        return false;
    }

    var runner = head;
    var runner2 = head;
    
    while (runner){
        if (runner.next == null){
            return false;
        }
        else {
            runner = runner.next.next;
            runner2 = runner2.next
        }
        if (runner2 == runner){
            return true;
        }
    }
    return false;
};



// intersection of two linked lists

var getIntersectionNode = function(headA, headB) {
    var a = headA 
    var b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};


// majority elements

var majorityElement = function(nums) {
    var majority = nums[0];
    nums.sort((a,b) => (a-b))

    for (var x=0; x < nums.length/2; x++){
        for (var y=0; y < nums.length; y++){
            if (nums[x] === nums[y]){
                majority = nums[x];
            }
        }
    }
    return majority
};
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,3,4]))
console.log(majorityElement([6,6,6,7,7]))

var majorityElement = function(nums) {
    nums.sort((a,b) => (a-b))
    // faster with simple sort
    // nums.sort()
    var num = Math.floor(nums.length/2); 
    return nums[num];
};
console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,3,4]))
console.log(majorityElement([6,6,6,7,7]))


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


var reverseList = function(head) {
    var node = head;
    var pre = null;
    var next = null;

    // while there are nodes remaining in the list
    while(node) {
        // save next before we overwrite node.next
        next = node.next;
        // reverse pointer
        node.next = pre;

        // move forward in the list
        pre = node;
        node = next;
    }

    return pre;
};
console.log(reverseList([1,2,3,4,5]))



// invert binary tree
var invertTree = function(root) {
    if (!root){
        return root;
    }
    invertTree(root.left)
    invertTree(root.right)
    if (!root.left && !root.right){
        return root;
    }
    if (root.left || root.right){
        [[root.left, root.right] = [root.right, root.left]]
    }
    return root;
};

var invertTree = function(root) {
    if (!root){
        return root;
    }
    [[root.left, root.right] = [root.right, root.left]]
    return root;
};


var invertTree = function(root) {
    if (!root){
        return null;
    }
    var newNode = new TreeNode();

    newNode.val = root.val;
    newNode.left = invertTree(root.right);
    newNode.right = invertTree(root.left);
    return newNode;
};

// palindrome linked list

var isPalindrome = function(head) {
    var nodeVals = []
    while (!head){
        nodeVals.push(head.val)
        head = head.next;
    }
    var revNodeVals = nodeVals.reverse();

    if (nodeVals == revNodeVals){
        return true;
    }
    else {
        return false;
    }
};


// move zeros

var moveZeroes = function(nums) {
    var index = 0;

    for (var x = 0; x < nums.length; x++){
        if (nums[x] !== 0){
            nums[index] = nums[x];
            index++
        }
    }
    for (var x = index; x < nums.length; x++){
        nums[x] = 0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]))


var moveZeroes = function(nums) {
    var num = nums.length
    for (var x = num-1; x >=0; x--){
        if (nums[x] === 0){
            nums.push(0);
            nums.splice(x, 1)
        }
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]))




// counting bits 




// diameter of binary tree

var diameterOfBinaryTree = function(root) {
    var diameter = 0;

    function runner(node){
        if (!node){
            return 0
        }
        // get values from left and right side of the tree
        let l = runner(node.left)
        let r = runner(node.right)
        // compair current diameter to the left and right 
        diameter = Math.max(diameter, l + r)
        // return max or left or right then +1 for the curent level we are at
        return 1 + Math.max(l, r)
    }
    runner(root)
    return diameter;
};




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
