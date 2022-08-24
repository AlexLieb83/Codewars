// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  let split = string.split("");

  for (let i = 0; i < split.length; i++) {
    if (split[i] === split[i].toUpperCase()) {
      split.splice(split.indexOf(split[i]), 1, ` ${split[i]}`);
    } else {
      continue;
    }
  }

  return split.join("");
}

//p - string of letters
//r - return string split at capital letters
//ps - split to array, loop over array. find capital letter, add space to array, continue, then join together
