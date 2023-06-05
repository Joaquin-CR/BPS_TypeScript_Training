"use strict";
// CONVERT TO MORE OR LESS SPECIFIC
let a = 'Hola';
let b = a; // LESS SPECIFIC
let c = a; // MORE SPECIFIC
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// ! TS SEES NO PROBLEM, BUT A STRING IS RETURNED
let nextVal = addOrConcat(2, 2, 'concat');
// 10 AS A STRING
10;
// THE DOM
const img = document.querySelector('img');
const myImg = document.querySelector('#img');
const nextImg = document.querySelector('#img');
img.src;
myImg.src;
