const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]
const getTheTitles = function () {
    let titleArray = [];
    titleArray.push(books.at(0).title, books.at(1).title);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
