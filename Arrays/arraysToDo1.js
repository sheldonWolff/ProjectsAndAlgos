// #1
var arr = [3,5,8,9];
arr.unshift(7);
console.log(arr);

// #2
var arr = [2,0,9,1];
arr.shift();
console.log(arr);

// #3
var arr = [20,10,5,1];
arr.splice(2, 0, 14);
console.log(arr);

// #4 Bonus
var arr = [100,20,90,53,44];
arr.splice(2,1);
console.log(arr);

// #5 Bonus
var arr = [12,2,33,64,25];
var temp = arr[2];
arr[2] = arr[arr.length-1];
arr[arr.length-1] = temp;
console.log(arr);