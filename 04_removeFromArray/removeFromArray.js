const removeFromArray = function(array, ...itemsToRemove) {
    for (let i = 0; i < array.length; i++) {
        if(itemsToRemove.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    } 
    return array;
};

removeFromArray([1, 2, 3], 2);

// Do not edit below this line
module.exports = removeFromArray;
