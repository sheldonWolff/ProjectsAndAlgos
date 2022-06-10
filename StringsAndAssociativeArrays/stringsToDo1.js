// Remove Blanks
function removeBlanks(chars) {
    temp = "";
    for (i = 0; i < chars.length; i++) {
        if(chars[i] != " "){
            temp += chars[i];
        }
    }
    return temp;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

// Get Digits
function getDigits(chars) {
    temp = "";
    for (i = 0; i<chars.length; i++) {
        if(!isNaN(chars[i])){
                temp += chars[i];
        }
    }
    return temp;
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
function acronym(chars) {
    temp = chars.split(" ")
    neww = ""
    for(i = 0; i < temp.length; i++){
        neww += temp[i][0]
    }
    return neww.toUpperCase()
}
console.log(acronym("there's no free lunch - gotta pay yer way."));
console.log(acronym("Live from New York, it's Saturday Night!"));


// Count Non-Spaces
function countNonSpaces(chars){
    temp = 0
    for(i = 0; i < chars.length; i++){
        if(chars[i] != " "){
            temp += 1
        }
    }
    return temp
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));


// Remove Shorter Strings
function removeShorterStrings(arr, num){
    temp = []
    nextValue = 0
    for (i = 0; i < arr.length; i++){
        if(arr[i].length >= num){
            temp[nextValue++] = arr[i]
        }
    }
    return temp;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
