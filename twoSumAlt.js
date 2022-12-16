// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr, target) {
  //pairs will hold our return values
  const pairs = [];
  //holds are number values to match with
  const map = {};

  //loop over the given array
  for (const num1 of arr) {
    //we are looking for a number that matches are target - number we are looking at, compmliment number
    const num2 = target - num1;
    // check our map for our compliment number
    if (map[num2]) {
      // if we find it, push the pair of numbers to our return arr
      pairs.push([num1, num2]);
    } else {
      //else store that number in our map
      map[num1] = 1;
    }
  }
  return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4)); //[[2,2], [3,1]]

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });
