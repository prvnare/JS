'use strict';
//Arrays Destructuring
//Object Destructuring
// ||
// &&
// ...
// ??
// ?.
// Arrays looping Object.entries(),.keys()
//Object looping By Object



// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   }
// };

// const mainMenu = ['Pizza', 'Pasta', 'Risotto'];

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu,
//   openingHours,
//   order(starterIndex, mainCourseIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainCourseIndex]];
//   },
//   orderPizza(mainIngredaiant, ...remainingIngrediants) {
//     console.log(mainIngredaiant, remainingIngrediants)
//   }
// };

// const arr = [1, 2, 3];
// //Array destructuring : []
// //let [a, , d] = arr;
// //console.log(a, d);
// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

// //Object Destructuring : {}
// const { name: RestaurantName, openingHours: { fri: { open: OpeningTime, close: ClosingTime } } } = restaurant;
// console.log(RestaurantName, OpeningTime, ClosingTime);
// console.log(OpeningTime);

// const arr1 = [1, 2];
// const [a, b, arr2] = arr1;
// console.log(arr2);


// // spread Operator (...)
// const arr3 = [1, 2];
// const newArray2 = [3, 4, ...arr3];
// console.log(...newArray2);
// const main = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...main);
// //console.log(...restaurant);
// const backypRest = { ...restaurant, 'foundec by': 'Gretchen' };
// console.log(backypRest);

// // Rest Operator
// const [q, e, ...rest] = main;
// console.log(rest, q, e)
// restaurant.orderPizza('pizza');


// //|| &&
// // ||  ==> returns first truthy value or last falsy value
 //console.log(false || 3);
 //console.log(false || 0)
// // && returns first falsy value or last truthy value
// console.log(3 && undefined);
// console.log('r' && 'k');
 //console.log('' || (null && 'a'));
//const na = false ?? 0 ;
//console.log(na);

// //Challenge ==> 1

// const game =
// {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const game1 =
// {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //Task 1:
// let [player1, player2] = game.players;
// //console.log(...player1, ...player2);

// //Task 2
// const [gk, ...otherPlayers] = player1;

// //Task 3
// const [allPlayers] = [...player1, ...player2];

// player1 = [...player1, 'Thiago', 'Countinuo', 'Perisic']

// // const { odds: { team1: team1 }, odds: { team2: team2 }, odds: { x: draw } } = game;
// // console.log(team1, team2, draw);

// function printGoals(...playerNames) {
//   //of for Array Loop
//   for (let i of playerNames) {
//     console.log(playerNames[i], i);
//   }
// }
// // printGoals(...game.scored)
// // team1 > team2 && console.log('Team 2 more likely to Win');
// // team2 > team1 && console.log('Team 1 more likely to Win');

// // in for Object 
// for (let key in game) {
//   console.log(key);
// }
// console.log( 0 ?? '1'); // nullish operator
// console.log(game ?.test ?.do) // optional chaining


// // for(const key of game.keys(players)){
// //   console.log(key);
// // }

// const valus  = Object.values(game);
// console.log(valus);

// const entries = Object.entries(game);
// console.log(entries);

// for(const [index , player] of game.scored.entries()){
//   console.log(`Goal ${index} : ${player}`);//
// }
// let count =0;
// let avg=0;
// // for(const [key , value] of Object.entries(game.odds) ){
// //   count++;
// //   avg = avg+value;
// // } 


// for(const val of Object.values(game.odds)){
//   count++;
//     avg = avg+val;
// }
// console.log('avg' , avg/Object.values(game.odds).length);

// // const{team1, x: draw, team2}= game.odds;
// // console.log(`Odd of Victory ${game.team1} : ${team1}`);
// // console.log(`Odd of Draw : ${draw}`);
// // console.log(`Odd of Victory ${game.team2} : ${team2}`);

// for(const[t1,t2] of Object.entries(game.odds)){
//   const value = t1==='x' ? 'Draw' : `Victory  ${game[t1]}`;
//   console.log(`odd of ${value} : ${t2} `);
// }

// const scorers ={};
// for(const id of game.scored){
//   scorers[id]  ? scorers[id]++ : (scorers[id] = 1);
// }
// console.log(scorers);
// // const scorers = {};
// // for (const player of game.scored) {
// //   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// // }
// // console.log(scorers);

// // Array Looping and with valeus and keys 
// for(const i of game.scored.entries()){
//   console.log(i);
// }
// for(const i of game.scored.values()){
//   console.log(i);
// }
// for(const i of game.scored.entries()){
//   console.log(i);
// }
// for(const i of game.scored.keys()){
//   console.log(i);
// }
// for(const i of Object.entries(game.scored)){
//   console.log(i);
// }
// for(const i of Object.keys(game.scored)){
//   console.log(i);
// }


// // Object Looping and with valeus and keys 
// for(const i of Object.entries(game)){
//   console.log(i);
// }
// for(const i of Object.keys(game)){
//   console.log(i);
// }

// // || --> checks for truth value
// // both are truth or false -- gives last value
// //anything is true then gives that truth value
// // game.name == undefined(Falsy Value)
// console.log(game.name || 'hello'); //
// //'Truth' == Truth value
// console.log('Truth' || 'False'); //

// //both are falsy values 
// console.log(''|| undefined);

// // 0 is falsy value
// console.log('ABc'|| 0)

//   //&&
//   //checks for false value ang gives that false value
//   console.log('abc' && 0);
//   //give the false value
//   console.log(false && 0)
//   //if both are truth values then give the last  truth  value
//   console.log('false' && 'tr')

// //sets
//  const usingSet = new Set([1,2,3,4,5,6,2,3,4,5]);
//  console.log(...usingSet);
// for(const set of usingSet){
//   console.log(set);
// }
// usingSet.add(10);
// usingSet.add(20);
// console.log(...usingSet);
// console.log('size of the Set : ' ,usingSet.size);

// //Maps:

// const usingMap = new Map();
// usingMap.set('Name','Value');
// usingMap.set('Name1','Value');
// usingMap.set('Name2','Value');
// usingMap.set('Name3','Value');
// usingMap.set('Name3','Value1');
// usingMap.set(undefined,'Value1');
// usingMap.set(null,'Value1');
// usingMap.set(NaN,'Value1');
// console.log(usingMap);
// console.log(game===game1);

// const key = {};
// const key1 = {};
// //usingMap.clear();
// usingMap.set([1,2], [12,2,2]);
// console.log(usingMap)
// console.log(usingMap.get([1,2]));
// const gameMap =  new Map(Object.entries(game));
// console.log(gameMap);
// console.log(game.team1);
// console.log(gameMap.get('team1'));

//Strings
const stringuse = 'Sample String usecase';
console.log(stringuse[10]);
console.log('String Length  :' ,stringuse.length);
function checkMiddleSeat(seat){
    return seat.slice(-1)==='B' || seat.slice(2)==='E' ? 'Middle Seat' : 'Not a Middle Seat';
}
console.log(checkMiddleSeat('12E '));
console.log('abca'.replace('a','m'));
console.log('abca'.replaceAll('a','m'));
function nameCapitalize(passingerName) {
    const lowerPassengerName = passingerName.toLowerCase();
    const correctName = lowerPassengerName[0].toUpperCase()+lowerPassengerName.slice(1);
    return correctName;     
}
console.log(nameCapitalize('prAveeNARE'));