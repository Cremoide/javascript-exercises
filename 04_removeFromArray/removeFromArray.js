const removeFromArray = function(array, ...args) {
    
    var result = [];

    for (let i = 0; i < array.length; i++) {
        if ((!args.includes(array[i]))) {
            result.push(array[i]);
        }
    }

    console.log(result)

    return result;
}

// Do not edit below this line
module.exports = removeFromArray;