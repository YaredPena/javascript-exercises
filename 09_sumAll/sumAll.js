const sumAll = function(num1, num2) {
    result = 0;

    function isNumber() {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return 'ERROR';
        }
    };
    
    function isInteger() {
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            return 'ERROR';
        }
    };

    function isNegative() {
        if (num1 < 0 || num2 < 0) {
            return 'ERROR';
        }
    };

    if (isNumber() || isInteger() || isNegative()) {
        return 'ERROR';

    } else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
                result += i;
        };
        return result;
        
    } else {
        for (let i = num1; i <= num2; i++) {
            
           result += i; 
        };
        return result; 
    }
};

// Do not edit below this line
module.exports = sumAll;
