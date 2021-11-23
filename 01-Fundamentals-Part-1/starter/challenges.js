
let calculateBmi = (mass, height) => {
    const Bmi = mass / height ** 2
    return Bmi;
};
const heightMark = 1.88;
const heightJohn = 1.76;
const massMark = 95;
const massJohn = 85;

let bmiMark = calculateBmi(massMark, heightMark);
let bmiJohn = calculateBmi(massJohn, heightJohn);

let markHigherBMI = bmiMark > bmiJohn ?
console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`):
console.log(`Mark's BMI (${bmiMark}) is lower than John's (${bmiJohn})!`);


//#3
const dayOneDolphins = (96 + 108 + 89) / 3;
const dayOneKoalas = (88 + 91 + 110) / 3;

const dayTwoDolphins = [97, 112, 101];
const dayTwoKoalas = [109, 95, 123];

const dayTreeDolphins = {
    1: 97,
    2: 112,
    3: 101,
};
const dayThreeKoalas = {
    1: 109,
    2: 95,
    3: 106,
}

if (dayOneDolphins > dayOneKoalas) {
    console.log(`the winner is Dolphins with a score ${dayOneDolphins} against ${dayOneKoalas} for Koalas`);
    } else if (dayOneDolphins === dayOneKoalas) {
        console.log(`Dolphins ${dayOneDolphins}-${dayOneKoalas} Koalas. Draw! Play again`);
    } else {
        console.log(`the winner is Koalas with a score ${dayOneKoalas} against ${dayOneDolphins} for Dolphins`);
    };


const countAverage = (array) => {
     let sum = array.reduce(function(a, b) {
         return a + b;
     }, 0);
     return sum / array.length + 1;
    };

    const averageDolphins = countAverage(dayTwoDolphins);
    const averageKoalas = countAverage(dayTwoKoalas);

 if (averageDolphins >= 100 || averageKoalas >= 100) {
      if (averageDolphins > averageKoalas) {
        console.log(`the winner is Dolphins with a score ${averageDolphins} against ${averageKoalas} for Koalas`);
    } else if (averageDolphins === averageKoalas) {
        console.log(`Dolphins ${averageDolphins}-${averageKoalas} Koalas. Draw! Play again`);
    } else {
        console.log(`the winner is Koalas with a score ${averageKoalas} against ${averageDolphins} for Dolphins`);
    };
 };

const averageDolphinsLast = countAverage(Object.values(dayTreeDolphins));
const averageKoalasLast = countAverage(Object.values(dayThreeKoalas));

if (averageDolphinsLast >= 100 || averageKoalasLast >= 100) {
    if (averageDolphinsLast > averageKoalasLast) {
      console.log(`the winner is Dolphins with a score ${averageDolphinsLast} against ${averageKoalasLast} for Koalas`);
  } else if (averageDolphinsLast === averageKoalasLast) {
      console.log(`Dolphins ${averageDolphinsLast}-${averageKoalasLast} Koalas. Draw! Play again`);
  } else {
      console.log(`the winner is Koalas with a score ${averageKoalasLast} against ${averageDolphinsLast} for Dolphins`);
  }
} else {
    console.log('No one reach requested points, maybe next time.')
}

// #4

let tip;
let bill = 430;

bill >= 50 && bill <=300 ?
tip = bill * 0.15:
tip = bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${Math.round(tip)}, and the total value
   ${bill + tip}`);
