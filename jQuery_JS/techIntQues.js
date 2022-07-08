// Sql - write a sql query that returns a table 


// givin a non=empty array A of N and int K 
const fruit = [1,2,0,0];
let text = fruit.join("");
console.log(text)


function addToArrayForm(num, k) {
    var newArr = []
    let int = num.join("")
    var nums = int.map(str => Number(str))
    var sum = 0;
    console.log(int)
    newArr.push(int,k)
    console.log(newArr)
    
    for (var x = 0; x < newArr.length; x++){
        sum += newArr[x];
    }
    return sum
 };
 console.log(addToArrayForm([1,2,0,0], 34))


 var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {return ""}
    if (strs.length === 1) {return strs[0]}
    
    let prefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] === strs[0][i]) {
                continue
            } else {
                return prefix
            }
        }
        prefix += strs[0][i]
    }
    return prefix
};