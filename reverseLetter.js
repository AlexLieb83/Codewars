// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  let reversedString = "";
  // loop over string backwards
  for (let i = str.length - 1; i >= 0; i--) {
    //       this is an easy way to check if char is letter or not
    if (str[i].toLowerCase() === str[i].toUpperCase()) {
      continue;
    }
    reversedString += str[i];
  }
  return reversedString;
}
