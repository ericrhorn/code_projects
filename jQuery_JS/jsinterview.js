// ziggzagg

function solution(numbers) {
  var index = 0
  var newArr = [];
  
  for (var x = 0; x < numbers.length-2; x++){
      if ((numbers[x] < numbers[x+1] && numbers[x+1] > numbers[x+2]) || 
          (numbers[x] > numbers[x+1] && numbers[x+1] < numbers[x+2])) {
          newArr[index++]=1;
      }
      else {
        newArr[index++]=0;
      }
  }
  return newArr;
}
console.log(solution([1,2,1,3,4]))



// lexicographical order



// You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values, so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.
// Each group should contain a set of indices (i, j, etc), such that the corresponding arrays (a[i], a[j], etc) all have the same mean. Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.




// Given an array of positive integers a, your task is to calculate the sum of every possible a[i] ∘ a[j], where a[i] ∘ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

function concatSum(a){
  var sum = 0;

  for (var x=0; x<a.length; x++){
    for (var y=0; y<a.length; y++){
      sum += Number("" + a[x] + a[y])
    }
  }
  return sum;
}
console.log(concatSum([10,2]))

function findTwoSum(arr, sum) {
    // Your code goes here
    var index = [];

    for (var x = 0; x < arr.length; x++){
      for (var y = x + 1; y < arr.length; y++){
        if (arr[x] + arr[y] === sum){
          index.push(x);
          index.push(y);
        return index
        } else {
            console.log("null")
        }
      }
    }
  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
  console.log(indices);



  function createCheckDigit(membershipId) {
    // Write the code that goes here.
    var newArr = membershipId.split("")
    idArr = newArr.map(x => parseInt(x));
        console.log(idArr)
    var sum = 0;
    var checkNum = 0;    
    for (var x = 0; x < idArr.length; x++){
        sum = sum + idArr[x];
    }

    var check = sum.toString().split("");
        console.log(check)
    newNum = check.map(y => parseInt(y));
    //     console.log(newNum + " " + "newNum arr")
    for (var y = 0; y < newNum.length; y++){
        console.log(newNum[y])
        checkNum = checkNum + newNum[y];
    }

    return checkNum;
  }
  
  console.log(createCheckDigit("55555"));
  console.log(createCheckDigit("1198765234567"));


  function createCheckDigit(membershipId) {
    let sumMembershipId = aggregator(membershipId);
    while (parseInt(sumMembershipId) > 9) sumMembershipId = aggregator(sumMembershipId);
    return sumMembershipId;
  }
  
  function aggregator(strMembershipId) {
    return strMembershipId.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
  
  console.log(createCheckDigit("55555"));




  const myNumber = 1245;
function numberToArray(number) {
  	let array = number.toString().split("");//stringify the number, then make each digit an item in an array
  	return array.map(x => parseInt(x));//convert all the items back into numbers
}
//use the function
var myArray = numberToArray(myNumber);
console.log(myArray)


function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var newDateArr = [];
    var newDate = userDate.split("/");
        console.log(newDate);
    var newArr = newDate.map(Number)

    var newNewArr = newArr+'';
        while (newNewArr.length < 10) newNewArr = '0' + newNewArr;
        console.log(newArr)
    
    
    for (var x = 0; x < newNewArr.length; x++){
        var temp = newNewArr[x]
        newNewArr[x] = newNewArr[newNewArr.length -1]
        newNewArr[newNewArr.length -1] = temp
        newDateArr.push(newNewArr[x])
    }
    console.log(newDateArr)
    var newDateString = newDateArr.join('')
    return newDateString
  }
console.log(formatDate("12/31/2014"));
console.log(formatDate("01/01/2014"));


function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var newDateArr = [];
    var newDate = userDate.split("/");
        console.log(newDate);
    var newArr = newDate.map(Number)
        console.log(newArr)
    
    
    for (var x = 0; x < newArr.length; x++){
        var temp = newArr[x]
        newArr[x] = newArr[newArr.length -1]
        newArr[newArr.length -1] = temp
        newDateArr.push(newArr[x])
    }
    console.log(newDateArr)
    var newDateString = newDateArr.join('')
    return newDateString
  }

console.log(formatDate("12/31/2014"));

//   formatDate("12/31/2014")

function formatDate(userDate) {
    const x = userDate.split('/');
    return `${x[2]}${x[0]}${x[1]}`;
  }
  
  console.log(formatDate("12/31/2014"));
  console.log(formatDate("01/01/2014"));


  function formatDate(userDate) {
    var parts = userDate.split('/');
        console.log(parts)
    if (parts[0].length == 1) parts[0] = '0' + parts[0];
    if (parts[1].length == 1) parts[1] = '0' + parts[1];
    return parts[2] + parts[0] + parts[1];
  }
  console.log(formatDate("12/31/2014"));
  console.log(formatDate("01/01/2014"));


function setup() {
    // Write your code here.
    var btn = document.getElementsByClassName("remove");

    for (var x=0; x < btn.length; x++){
        btn[x].addEventListener('click', function(){
            this.parentNode.remove();
        })
    }
  }
  
  // Example case. 
  document.body.innerHTML = `
  <div class="image">
    <img src="https://bit.ly/3lmYVna" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj" alt="Second">
    <button class="remove">X</button>
  </div>`;
  
  setup();
  
  document.getElementsByClassName("remove")[0].click();
  console.log(document.body.innerHTML);




  function removeProperty(obj, prop) {
    return null;
  }

  function removeProperty(obj, prop) {
    return (Object.keys(obj).indexOf(prop) > -1) ? delete obj[prop] : false;
  }


  function ensure(value) {
    // Your code goes here
  }
  
  try {
    console.log(ensure());
  } catch(err) {
    console.log(err);
  }

  function ensure(value) {
    if (value !== undefined) return value;
    throw 'Error';
  }