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