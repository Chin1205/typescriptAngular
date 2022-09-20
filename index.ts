//1
var myList: string[] = [];

export const addWheels = (...wheelsArray: string[]) => {
    wheelsArray.forEach((item) => {
        console.log("\"" + item + "\"");
        displayPlaces();
    })
}

export const displayPlaces = () => {
    let list = document.getElementById('myList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    myList.forEach((item: string) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item
            list.appendChild(li)
        }
    })
}

export const addPlace = (value: string) => {
    let list = document.getElementById('myList');
    myList.push(value);
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
}
//2
function check(isbn: any) {
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

console.log("2. ISBN – 10 Validation")
console.log(isbn + " " + check(isbn));

//3
var txt: any = prompt("Please enter some text: ");

function change(consonant: string) {
    consonant = consonant.toLowerCase()

    return consonant.split(' ').map((word: string) =>
        word.split('').map(letter => {

            if (letter === 'z') return 'A'
            if (letter === '0') return '0'

            let retNum = parseInt(letter) ? letter : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)

            if (/([aeiou])/g.test(retNum)) return retNum.toUpperCase()
            return retNum
        }).join('')

    ).join(' ')
}
console.log("3. Change it up!")
console.log(change(txt));

//Sir Rain's Version
var c = "Cat30"; 

var checkList = "AabcdEefghIijklmnOopqrstUuvwxyz";
var newString = c.replace(/[a-z]/gi, s => checkList[(checkList.indexOf(s.toLowerCase()) + 1) % checkList.length]);

console.log("NEW STRING: " + newString);

//Another Version
export const newVersionString = (c: any) => {
    let checkList = "AabcdEefghIijklmnOopqrstUuvwxyz";
    let output = c.replace(/[a-z]/gi, (s: any) => checkList[(checkList.indexOf(s.toLowerCase()) + 1) % checkList.length]);
    console.log("New String: " + output);
}
newVersionString('Cat30'); 

//4
function moveZeros(array: any) {
    var length = array.length,
        i = length;

    while (--i) {
        if (array[i] !== 0) continue;
        length--;
        while (i < length) {
            [array[i + 1], array[i]] = [array[i], array[i + 1]];
            i++;
        }
    }
    return array;
}

var array = [false, 2, 0, 0, 3, 0, 5, 3, "a"];

console.log("4. Moving zeroes to the end")
console.log(...moveZeros(array));

//var newString = c.replace(/[a-z]/gi, s => checkList[(checkList.indexOf(s.toLowerCase()) + 1) % checkList.length]);