// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(str){
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  for(let i=0; i<vowels.length; i++){
    if(str.indexOf(vowels[i]) === -1){
      return i
    } 
  }
  return 'uh o'
}

//loop through array of vowels and check for the indexOf in the original 
//string. If -1 you found the missing one!

//p - string of words
//r - int 0 - 4, depending on which vowel is missing
//ps - array of vowels, loop over, check string for each vowels, once one is not found,
//return it's index