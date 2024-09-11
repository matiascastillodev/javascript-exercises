const palindromes = function (str) {
    if (typeof str == "string") {
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
        let revStr = cleanStr.split('').reverse().join('');
        if (cleanStr == revStr) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Error. Not a String";
    }
};

// Do not edit below this line
module.exports = palindromes;
