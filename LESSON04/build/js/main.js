"use strict";
// LITERAL TYEPES
let myName;
let username;
username = "Pablo";
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hello World');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 3));
// OPTIONAL PARAMETERS
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// DEFAULT PARAM VALUE 
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(3, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// REST PARAMETERS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMgs) => {
    throw new Error(errMgs);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// USE OF THE NEVER TYPE
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happend!');
};
// CUSTOM TYPE GUARD
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
