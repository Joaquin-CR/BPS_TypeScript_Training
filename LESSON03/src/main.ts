let stringArr = ['one', 'Hey', 'Joaquin',];

let guitars = ['Star', 'Les Paul', 5150];

let mixedData = ['EVH', 2001, true];

stringArr[0] = 'Hola';
stringArr.push('Yep');

guitars[0] = 2023;
guitars.unshift('Jimmy');

let test = [];
let bands: string[] = [];
bands.push('Van Halen');

// TUPLE
let myTuple: [string, number, boolean] = ['Joaquin', 22, true];

let mixed = ['John', 1, false];

myTuple[1] = 24;

// OBJECTS
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: 'Joaquin',
    prop2: true,
};

exampleObj.prop1 = 'Pablo';

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[],
};

let evh: Guitarist = {
    name: 'Bruno',
    active: true,
    albums: ['Star', 1549, 5150],
};

let jp: Guitarist = {
    active: false,
    albums: ['I', 'II', 'IV'],
};

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
}

console.log(greetGuitarist(jp));

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.B);