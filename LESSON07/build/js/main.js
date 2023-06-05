"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Jo: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Joaquin']);
const student = {
    name: 'Joaquin',
    GPA: 3.5,
    classes: [100, 90]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 10000,
    bonus: 2000,
    sidehustle: 3000
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
