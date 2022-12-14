// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//p - string of words, string of words
//r - boolean, can you make the ransom note from the magazine string
//ps - use map, loop over ransom note, storing each word and word count
//then loop over magazine, storing each word and word count
//then check if we have word from ransom note, if not, return false, if so, check that we have the same or more value in magazine, if not, return false
//if we make it out of our ransome note loop, then we have the correct words and enough words in magazine, so return true

function ransomNote(str, magazine) {
  let ransomWords = {};
  let magazineWords = {};

  let ransomArr = str.split(" ");
  let magazineArr = magazine.split(" ");

  // adding ransom words and values to map
  for (let i = 0; i < ransomArr.length; i++) {
    let value = ransomArr[i];
    if (ransomWords[value] !== undefined) {
      ransomWords[value]++;
    } else {
      ransomWords[value] = 1;
    }
  }
  // adding magazine words and values to map
  for (let i = 0; i < magazineArr.length; i++) {
    let value = magazineArr[i];
    if (magazineWords[value] !== undefined) {
      magazineWords[value]++;
    } else {
      magazineWords[value] = 1;
    }
  }

  // now check that enough of each word from ransom note exists in magazine
  for (const key in ransomWords) {
    // if magazineWords has the same key as ransomWords, we need to make sure we have enough count
    if (!magazineWords.hasOwnProperty(key)) {
      return false;
    } else {
      if (magazineWords[key] < ransomWords[key]) {
        return false;
      }
    }
  }
  // We will get to here if we have enough words from magazine for our ransom note
  return true;
}

// TESTS
// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });
