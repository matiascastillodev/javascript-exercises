const sumAll = function (firstNumber, secondNumber) {
    if (firstNumber > 0 && secondNumber > 0 && typeof firstNumber == 'number' && typeof secondNumber == 'number' &&
        Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        let total = 0;

        if (firstNumber <= secondNumber) {
            for (let i = firstNumber; i <= secondNumber; i++) {
                total += i;
            }
        }
        else {
            for (let i = firstNumber; i >= secondNumber; i--) {
                total += i;
            }
        }

        return total;
    } else {
        return "ERROR";
    }
};

console.log(sumAll(4, 2));


// Do not edit below this line
module.exports = sumAll;
