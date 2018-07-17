//take an array and makes it a string with a dot between them

function addDotBetween(arr){
//CODE HERE
//return a string with arr[0] through arr[length-1] with . 

//set up args and vars
var index = index || 0;
var currentString = currentString || arr[index];
//set up base case
if (index === arr.length-1){
    return currentString
}
//start working towards base case
index++
currentString = currentString +  '.' + arr[index];
//initiate recursion
addDotBetween(arr, currentString, index)
//return results of recursion 
return currentStrong;
}

const testArray = ['this', 'com']

console.log(addDotBetween(testArray)); //this.com