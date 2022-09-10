// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

function dontGiveMeFive(start, end) {
  //count how many nums
  let results = 0;
  //loop from start to end
  for (let i = start; i <= end; i++) {
    //split each num into it's own array, [1,5],[1,6]
    const numArr = i.toString().split("");
    //filter out anything with 5 in it
    const fiveCounts = numArr.filter((digit) => digit == "5").length;
    //count elements without 5's
    if (fiveCounts == 0) {
      results++;
    }
  }
  return results;
}

//p - two ints, start and end
//r - count of ints from start to end, excluding numbers with 5 in it
//ps - first, count from start to end, so loop. push each to array,
//then loop over array, and remove any num that includes 5
