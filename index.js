"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopPlane = exports.addPlane = exports.Days = exports.testFunction = void 0;
const testFunction = () => {
    console.log("Hello to Typescript");
};
exports.testFunction = testFunction;
var parent;
parent = "myString";
parent = 500;
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("myName");
otherArray.push("newName");
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days = exports.Days || (exports.Days = {}));
const addPlane = (data) => {
};
exports.addPlane = addPlane;
function addPlane2(data) {
}
var planeList = [];
const loopPlane = () => {
    planeList.forEach((item) => {
        console.log(item);
    });
};
exports.loopPlane = loopPlane;
(0, exports.testFunction)();
