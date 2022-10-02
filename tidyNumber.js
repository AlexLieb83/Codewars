// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n) {
  let arr = String(n)
    .split("")
    .sort((a, b) => a - b)
    .join("");
  return n == arr;
}

//p - int
//r - boolean, if numbers are in ascending order
//ps - compare original number to number after being sorted
