const reverseString = function(word) {
    word = word.toString().split("").reverse().join("");
    return (word);
};

reverseString("Mood");

// Do not edit below this line
module.exports = reverseString;
