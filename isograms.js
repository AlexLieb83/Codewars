// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  //turn str into lowercase and sorted array
  //this will line up any duplicate letters for us
  let arr = str.toLowerCase().split("").sort();

  //loop over array, if any letters double up, return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }
  return true;
}
