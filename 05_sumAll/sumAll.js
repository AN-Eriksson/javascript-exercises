const sumAll = function(num1, num2) {

    let smallest = 0;
    let largest = 0;
    let totalSum = 0;

    /* Return ERROR if any number is less than 0 or is not an integer. */

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    /* Find the smallest number for the loop */

    if (num1 > num2) {
        smallest = num2;
        largest = num1;
    } else {
        smallest = num1;
        largest = num2;
    }

    /* Loop from smallest to largest in one integer steps, summing to totalSum */

    for (let i = smallest; i <= largest; i++ ){
        totalSum += i;
    }

    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;