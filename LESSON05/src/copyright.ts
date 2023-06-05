// ORIGINAL JS
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear

// 1RST VARIATION
// let year: HTMLElement| null;
// year = document.getElementById('year');
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if(year){
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }

// 2ND VARIATION
const year = document.getElementById('year') as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;