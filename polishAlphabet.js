// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters(string) {
  const str = string.split("");
  const lookupLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
  };

  return str.map((x) => (lookupLetters[x] ? lookupLetters[x] : x)).join("");
}

//p - string
//r - string with replaced polish chars
//ps - split string into array, loop over array and check if letter is equal to any of the
//polish chars, if it is then replace, if not move on. Then join and return
