/*
Implement a function that takes an array and some other arguments then removes the other arguments from that array:

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

parameters: nums --> integer array
num --> integer 

when we input the array and a number from the array it should pop it  (it could be in the middle of the array...)
we return the modified array


.splice();
*/

/// rest operator ...a. let's us take an unlimited amount of parameters.. why don't I just use this....


let removeFromArray = function(array, ...args) {
  return array.filter(item => !args.includes(item));
}

console.log(removeFromArray([1, 2, 3, 4], 3, 2)); 


// Do not edit below this line
module.exports = removeFromArray;
