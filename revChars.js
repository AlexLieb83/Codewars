// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

//O(n) - Linear
function revChars(str) {
  let revStr = "";

  for (let char of str) {
    revStr = char + revStr;
  }

  return revStr;
}

//examples
str = "hello"; // 'olleh'
str2 = "world"; // 'dlrow'

console.log(revChars(str));
console.log(revChars(str2));

//p - string of chars
//r - string with chars reversed
//ps - make empty str, loop over original string, each loop add char in front of empty str, so o then l then l then e then h = olleh
