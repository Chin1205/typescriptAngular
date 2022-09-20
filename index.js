"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlace = exports.displayPlaces = exports.addWheels = void 0;
//1
var myList = [];
const addWheels = (...wheelsArray) => {
    wheelsArray.forEach((item) => {
        console.log("\"" + item + "\"");
        (0, exports.displayPlaces)();
    });
};
exports.addWheels = addWheels;
const displayPlaces = () => {
    let list = document.getElementById('myList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    myList.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        }
    });
};
exports.displayPlaces = displayPlaces;
const addPlace = (value) => {
    let list = document.getElementById('myList');
    myList.push(value);
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
};
exports.addPlace = addPlace;
//2
function check(isbn) {
    // length = 10
    let n = isbn.length;
    if (n != 10)
        return false;
    // Compute sum of first 9 digits
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let number = isbn[i] - 0;
        if (0 > number || 9 < number)
            return false;
        sum += (number * (10 - i));
    }
    // To check last digit.
    let lastDigit = isbn[9];
    if (lastDigit != 'X' && (lastDigit < '0' || lastDigit > '9'))
        return false;
    sum += ((lastDigit == 'X') ? 10 : (lastDigit - 0));
    return (sum % 11 == 0);
}
let isbn = "048665088X";
console.log("2. ISBN – 10 Validation");
console.log(isbn + " " + check(isbn));
//3
var txt = prompt("Please enter some text: ");
function change(consonant) {
    consonant = consonant.toLowerCase();
    return consonant.split(' ').map((word) => word.split('').map(letter => {
        if (letter === 'z')
            return 'A';
        if (letter === '0')
            return '0';
        let retNum = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
        if (/([aeiou])/g.test(retNum))
            return retNum.toUpperCase();
        return retNum;
    }).join('')).join(' ');
}
console.log("3. Change it up!");
console.log(change(txt));
//4
function moveZeros(array) {
    var length = array.length, i = length;
    while (--i) {
        if (array[i] !== 0)
            continue;
        length--;
        while (i < length) {
            [array[i + 1], array[i]] = [array[i], array[i + 1]];
            i++;
        }
    }
    return array;
}
var array = [false, 2, 0, 0, 3, 0, 5, 3, "a"];
console.log("4. Moving zeroes to the end");
console.log(...moveZeros(array));
