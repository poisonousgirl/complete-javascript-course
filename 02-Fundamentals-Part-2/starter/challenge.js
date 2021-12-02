// 'use strict';

// const dolphinsScore1 = [44, 23, 71];
// const dolphinsScore2 = [85, 54, 41];
// const koalasScore1 = [65, 54, 49];
// const koalasScore2 = [23, 34, 27];

const calcAverage = (array) => {
    let sum = array.reduce(function(a, b) {
        return a + b;
    }, 0);
    // console.log(`${sum} summ of calc1`)
    return sum / array.length;
};

// const averageDolphinsScore1 = calcAverage(dolphinsScore1);
// const averageDolphinsScore2 = calcAverage(dolphinsScore2);
// const averageKoalasScore1 = calcAverage(koalasScore1);
// const averageKoalasScore2 = calcAverage(koalasScore2);

// const findWinner = (team1, team2) => {
//     if (team1 > team2 * 2) {
//         console.log(`The winner is Dolphins with average score of (${team1} - ${team2}).`)
//     } else if ( team2 > team1 * 2) {
//         console.log(`The winner is Koalas with average score of (${team2} - ${team1}).`)
//     } else {
//         console.log(`No winners.`);
//     }
// };

// findWinner(averageDolphinsScore1, averageKoalasScore1);
// findWinner(averageDolphinsScore2, averageKoalasScore2);

// //#2
let tip = 0;
const calcTip = (bill) => {
    return bill > 50 && bill < 300?
        tip = bill * 0.15:
        tip = bill * 0.2;
};

// console.log(calcTip(100));

// const bills =[125, 555, 44];
// const tips = bills.map(calcTip);
// console.log(tips);
// const total = [];
// const arraySum = (array1, array2, arrayNew) => {
//     for (let i = 0; i < array1.length; i++) {
//        arrayNew.push(array1[i] + array2[i]);
//     };
//     return arrayNew;
// }
// arraySum(bills, tips, total);
// console.log(total);

// //#3

// const dataMark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };

// const dataJohn = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//      },
// };
// dataMark.calcBMI();
// dataJohn.calcBMI();
// dataJohn.bmi > dataMark.bmi ?
// console.log(`${dataJohn.firstName}'s BMI (${dataJohn.bmi}) is higher than ${dataMark.firstName}'s (${dataMark.bmi})!`):
// console.log(`${dataMark.firstName}'s BMI (${dataMark.bmi}) is higher than ${dataJohn.firstName}'s (${dataJohn.bmi})!`);

//#4
const BILLS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const TIPS = [];
const TOTALS = [];

for (let i = 0; i < BILLS.length; i++) {
    TIPS.push(calcTip(BILLS[i]));
    TOTALS.push(TIPS[i] + BILLS[i]);
};

console.log(`${TIPS},
 ${TOTALS}`);

const calcAverage2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    // console.log(`${sum} summ of calc2`)
    return sum / arr.length;
};

console.log('#2 ' + calcAverage2(TOTALS));
console.log('#1 ' + calcAverage(TOTALS));