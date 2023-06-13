// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result += string[i];
    }
  }
  return result;
}

//p - string of letters
//r - string of letters w/o vowels
//e
//p - store vowels, loop over string, checking for letters not included in vowels and add them to result string, return result string
