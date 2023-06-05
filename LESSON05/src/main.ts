type One = string;
type Two = string | number;
type Three = 'Hola';

// CONVERT TO MORE OR LESS SPECIFIC
let a: One = 'Hola';
let b = a as Two // LESS SPECIFIC
let c = a as Three // MORE SPECIFIC

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// ! TS SEES NO PROBLEM, BUT A STRING IS RETURNED
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// 10 AS A STRING
(10 as unknown) as string;

// THE DOM
const img = document.querySelector('img')!;
const myImg = document.querySelector('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement> document.querySelector('#img');


img.src
myImg.src