// Reverse

function reverse(arr) {
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]));

// Rotate

function rotateArr(arr, shiftBy) {
    for (var x = shiftBy; x > 0; x--){
        var temp = arr[arr.length - 1];
        for (var i = arr.length - 2; i >= 0; i--) {
            arr[i + 1] = arr[i];
        }
        arr[0] = temp;
    }
    return arr;
};
console.log(rotateArr([1,2,3,4],2));
console.log(rotateArr([4,5,6],3));