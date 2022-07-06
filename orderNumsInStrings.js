// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  //turn sentance into array of words
  let arr = words.split(" ");
  //array for results
  let result = [];

  //loop over array of words
  for (let i = 1; i <= arr.length; i++) {
    //filter each word for including i, so th1s, 2econd, 3rd, etc
    //turn it into a string
    let it = arr.filter((word) => word.includes(i.toString()));
    //push that string into results
    result.push(it);
  }

  //return the results array, flatten it to infinity, so we remove all the nested arrays, then push the array back into a sentance with join
  return result.flat(Infinity).join(" ");
}
