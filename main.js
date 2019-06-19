//////Reem's Solution///////

const isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) { return true; }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else return false;
}


//////Waleed's Solution///////

const isLeapYear2 = (year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

console.log(isLeapYear(1990))
console.log(isLeapYear(1996))
console.log(isLeapYear2(1997))
console.log(isLeapYear2(2000))