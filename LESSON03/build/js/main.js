"use strict";
let stringArr = ['one', 'Hey', 'Joaquin',];
let guitars = ['Star', 'Les Paul', 5150];
let mixedData = ['EVH', 2001, true];
stringArr[0] = 'Hola';
stringArr.push('Yep');
guitars[0] = 2023;
guitars.unshift('Jimmy');
let test = [];
let bands = [];
bands.push('Van Halen');
// TUPLE
let myTuple = ['Joaquin', 22, true];
let mixed = ['John', 1, false];
myTuple[1] = 24;
// OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Joaquin',
    prop2: true,
};
exampleObj.prop1 = 'Pablo';
;
let evh = {
    name: 'Bruno',
    active: true,
    albums: ['Star', 1549, 5150],
};
let jp = {
    active: false,
    albums: ['I', 'II', 'IV'],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
