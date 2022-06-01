/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const roman = {
        'I' : 1,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
        'V' : 5
    }
    var int = 0;
    
    for (var x = 0; x < s.length; x++){
        if (s[x] == "I" && (s[x+1] == "V" || s[x+1] == "X")){
            int += roman[s[x+1]] - roman[s[x]]
            x ++
        }else if (s[x] == "X" && (s[x+1] == "L" || s[x+1] == "C")){
            int += roman[s[x+1]] - roman[s[x]]
            x ++
        }else if (s[x] == "C" && (s[x+1] == "D" || s[x+1] == "M")){
            int += roman[s[x+1]] - roman[s[x]]
            x ++
        }else {
            int += roman[s[x]] 
        }    
    }
    return int
};
console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))



/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var prefix = '';
    for(var x=0; x < strs[0].length; x++){
        for (var y=0; y < strs.length; y++){
            if (strs[x] == strs[y[0]]){
                prefix += strs[x]
            }else{
                var prefix = '';
            }
        }
    }
    return prefix
    
};
console.log(longestCommonPrefix(["flower","flow","flight"]))


var search = function(nums, target) {
    for (var x=0; x < nums.length; x++){
        if (nums[x] == target){
            return x;
        }
        // if (nums[x] !== target){
        //     return -1;
        // }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],2))