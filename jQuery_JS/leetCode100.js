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