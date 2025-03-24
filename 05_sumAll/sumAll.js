const sumAll = function(a, b) {

    // Declares sum value
    let sum = 0;

    // Check if numbers are positive
    if (a <= 0 || b <= 0) {
        return "ERROR"
    } 
    
    if (Number.isInteger(a) === false || (Number.isInteger(b) === false)) {
        return "ERROR"
    } 

    console.log()

    // Declares the first, second number and result variables. 
    const lowVal = Math.min(a, b);
    const highVal = Math.max(a, b);

    // Reference
    console.log(highVal);
    console.log(lowVal);

    // Create a for loop that iterates till reach "highVal" number
    function numbersBetween(start, end) {
        return Array.from({length: end - start + 1}, 
            (_, index) => start + index);
    }
    const result = numbersBetween(lowVal, highVal);

    // Reference
    console.log(result);

    // Create a for loop that iterates till reach "highVal" number
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
