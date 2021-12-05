'use strict';

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const stringArr = [];
  for (let i = 0; i < arr.length; i++) {
    stringArr.push(` ... ${arr[i]}˚C in ${i + 1} days`);
  }
  return console.log(stringArr.join());
};

printForecast(data1);
printForecast(data2);
