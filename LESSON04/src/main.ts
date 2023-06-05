// TYPE ALIASES 
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
    name: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// LITERAL TYEPES
let myName: 'Joaquin';

let username: 'Joaquin' | 'Alvaro' | 'Pablo';
username = "Pablo";

const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (msg: any): void => {
    console.log(msg);
}

logMsg('Hello World');
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
    return c - d;
}

// type MathFunction = (a: number, b: number) => number;
interface MathFunction {
    (a: number, b: number): number;
}

let multiply: MathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(3, 3));

// OPTIONAL PARAMETERS

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// DEFAULT PARAM VALUE 
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(3, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// REST PARAMETERS
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4));

const createError = (errMgs: string): never => {
    throw new Error(errMgs);
}

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) break;
    }
}

// USE OF THE NEVER TYPE
const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string';
    if(typeof value === 'number') return 'number';
    return createError('This should never happend!');
};

// CUSTOM TYPE GUARD
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}