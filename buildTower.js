// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let space = "";
  let star = "";
  let result = [];

  for (let i = 1; i <= nFloors; i++) {
    //this will add our spaces, so if we have 3 floors, it will add 3 - 1 or two spaces before the star
    space = " ".repeat(nFloors - i);
    //this will add our stars according to floors,
    //so floor 1 = 2*1-1 or 1*
    //floor 2 = 2*2-1 or 3*
    //floor 3 = 2*3-1 or 5*
    star = "*".repeat(2 * i - 1);
    //this will push the space star space combo into our results, we need space star space, to add the proper space to both sides of our star
    result.push(space + star + space);
  }
}
