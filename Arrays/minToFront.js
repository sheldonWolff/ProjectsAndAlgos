function minFront(arr) {
    var min = Math.min(...arr);
    for(let i = arr.length; i>0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = min;
    newArr = [...new Set(arr)]
    return newArr;
}

console.log(minFront([4,2,1,3,5]))





// Solution
function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}