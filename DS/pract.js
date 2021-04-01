const game =
{
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Here Object is a predefined JS thing
for (const iterator of Object.keys(game)) {
    console.log(iterator);
}
for(const [index , player] of game.scored.entries()){
    console.log(`Goal ${index} : ${player}`);//
  }
// ||
// game.name == undefined(Falsy Value)
console.log(game.name || 'hello'); //
//'Truth' == Truth value
console.log('Truth' || 'False'); //

//both are falsy values 
console.log(''|| undefined);

