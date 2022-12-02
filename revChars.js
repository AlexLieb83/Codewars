// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

function revChars(str) {
  let newArr = [];
  let strArr = str.split("");

  strArr.forEach((letter) => newArr.unshift(letter));

  return newArr.join("");
}

//examples
str = "hello"; // 'olleh'
str2 = "world"; // 'dlrow'

console.log(revChars(str));
console.log(revChars(str2));

//p - string of chars
//r - string with chars reversed
//ps - make empty arr, split str into array
//then go through the array pushing each letter to new array, then join and return
