// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function maxChar(str) {
  let map = {};

  //loop over string, counting letters and storing values in map
  for (const char of str) {
    if (map[char] !== undefined) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  //Object keys grabs all of the keys in map and makes them into an array
  //then we reduce over that array, return the key with the larger value - a, b are the values
  return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
}
