const repeatString = function(string, num) {
    /* 
        CREATE a variable to store the result (repeated string)

        IF the num of repeats to be done is negative 
            RETURN the string 'ERROR'.

        OTHERWISE
            LOOP up to the num of repeats
                CONCATENATE the string on each repeat
        
            RETURN the result.
    */
   
    let repeat = "";

   if (num < 0 ) {
        return 'ERROR';

   } else {
        for (let i = 0; i < num; i++) {
            repeat = repeat + string;
        }
        return repeat;
   }

};

// Do not edit below this line
module.exports = repeatString;

/*
string = hey
num = 3
"" --> repeat line 2

iter1 = result = hey --> string
iter2 = result = heyhey --> repeat.concat(string) @ i = 2
iter3 = result = heyheyhey

inside loop;
console.log(result);
hey
heyhey
heyheyhey

 */
