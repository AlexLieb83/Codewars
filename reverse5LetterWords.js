// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  //string into array of words
  let arr = string.split(" ");
  //new array to hold return values
  let newStr = [];

  for (let i = 0; i < arr.length; i++) {
    //if word is 5 letters or more, break it into an array, reverse it, then join back together and push it into our return array
    if (arr[i].length >= 5) {
      let revWord = arr[i].split("").reverse().join("");
      newStr.push(revWord);
      //push remaining words into our return array
    } else {
      newStr.push(arr[i]);
    }
  }
  //join the array into a string of words and return
  return newStr.join(" ");
}
