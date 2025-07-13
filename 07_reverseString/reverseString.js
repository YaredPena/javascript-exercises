const reverseString = function(string) {
    /*

    split the string
    reverse the characters 
    then join the characters back into a string.

    */

    let result = string.split("").reverse().join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
