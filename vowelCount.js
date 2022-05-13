// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//def our vowels and our count to 0, then run a for loop over the string, if a vowel exists at an index, then add 1 to our count, return the count
function getCount(str) {
  let vowels = 'aeiou';
  let vowelsCount = 0;
      
   for(let i = 0; i < str.length ; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        vowelsCount += 1;
    }
  }
   return vowelsCount
}