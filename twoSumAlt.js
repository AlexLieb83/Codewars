// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(arr, target) {
  const pairs = [];
  const map = {};

  for (const num1 of arr) {
    const num2 = target - num1;
    if (map[num2]) {
      pairs.push([num1, num2]);
    } else {
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
