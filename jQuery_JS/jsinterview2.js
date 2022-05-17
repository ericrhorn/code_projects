function solution(inputString) {
    var reverse = inputString.split("").reverse().join("");
    
    if (inputString == reverse){
        return true;
    }
    if (inputString !== reverse){
        return false;
    }
}

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

function solution(n) {
    var poly = 1;
    for (var x =1; x < n; x++){
        poly += 4 * x;
    }
    return poly;
}
