const findTheOldest = function (people) {
    let oldest;
    let maxAge = -1;

    for (const person of people) {
        const currentYear = new Date().getFullYear();
        const deathYear = person.yearOfDeath !== undefined ? person.yearOfDeath : currentYear;
        const age = deathYear - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;


// Do not edit below this line
module.exports = findTheOldest;
