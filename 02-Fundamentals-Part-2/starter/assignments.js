// 'use strict';

// //Functions

// const describeCountry = (country, population, capitalCity) => {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
// };

// const stringRussia = describeCountry('Russia', 144.1, 'Moscow');
// const stringUsa = describeCountry('USA', 329.5, 'Washington');
// const stringChina = describeCountry('China', 1402, 'Beijing');

// console.log(stringChina, stringRussia, stringUsa);

// //Function Declarations vs. Expressions

// function percentageOfWorld1 (population) {
//     return population / 7900 * 100;
// };

// const percentPopulatuinRussia =(percentageOfWorld1(144.1).toFixed(2));
// const percentPopulationUsa = (percentageOfWorld1(329.5).toFixed(2));
// const percentPopulationChina = (percentageOfWorld1(1402).toFixed(2));

// console.log(percentPopulatuinRussia, percentPopulationUsa, percentPopulationChina);

// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// };

// const percentPopulatuinRussia2 =(percentageOfWorld2(144.1).toFixed(2));
// const percentPopulationUsa2 = (percentageOfWorld2(329.5).toFixed(2));
// const percentPopulationChina2 = (percentageOfWorld2(1402).toFixed(2));

// console.log(percentPopulatuinRussia2, percentPopulationUsa2, percentPopulationChina2);

// //Arrow Functions

// const percentageOfWorld3 = (population) => population / 7900 * 100;

// const percentPopulatuinRussia3 =(percentageOfWorld1(144.1).toFixed(2));
// const percentPopulationUsa3 = (percentageOfWorld1(329.5).toFixed(2));
// const percentPopulationChina3 = (percentageOfWorld1(1402).toFixed(2));

// console.log(percentPopulatuinRussia3, percentPopulationUsa3, percentPopulationChina3);

// // Functions Calling Other Functions

// const describePopulation = (country, population) => {
// return `${country} has ${population} million people, which is about ${percentageOfWorld1(population).toFixed(2)} of the world.`
// };

// console.log(describePopulation('Russia', 144.1));
// console.log(describePopulation('USA', 329.5));
// console.log(describePopulation('China', 1402));

// //Introduction to arrays

// const populations = [144.1, 329.5, 1402, 69.4];
// console.log(populations.length === 4);
// const percentages = [percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld3(populations[3])];

// //Basic array operations

// const neighbours = ['Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Monaco', 'Italy', 'Andorra', 'Spain'];
//  neighbours.push('Utopia');
//  neighbours.pop();
//  if (neighbours.includes('Germany')) {console.log('Probably not a central European country :D')};
//  let i = neighbours.indexOf('Belgium');
//  neighbours[i] = 'Belgique';

//  console.log(neighbours);

//  // Introduction to Objects

//  const myCountry = {
//     country: 'France',
//     capital: 'Paris',
//     language: 'french',
//     population: 69.4,
//     neighbours: ['Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Monaco', 'Italy', 'Andorra', 'Spain'],
//     describe:  function() {
//         console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
//     },
//     checkIsland: function() {
//         this.isIsland = !Boolean(this.neighbours.length);
//     }
//  };

//  //Dot vs. Bracket Notation

//  console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//  myCountry.population += 2;
//  console.log(myCountry);
//  myCountry['population'] -= 2;
//  console.log(myCountry);

//  // Object Methods

//  //Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }; 
 
// // Looping Arrays, Breaking and Continuing

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// };

// console.log(`arrays compare (${percentages}) 
// (for cycle ${percentages2})`)

// //Looping Backwards and Loops in Loops

// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//     for (let e = 0; e < listOfNeighbors[i].length; e++) {
//         console.log(`Neighbour: ${listOfNeighbors[i][e]}`);
//     };
// };

// // The while Loop
// let ind = 0;
// const percentages3 = [];
// while (ind < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[ind]));
//     ind++;
// };
// console.log('##while', percentages3);