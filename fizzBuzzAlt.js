// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//O(n) - Linear, everytime we add a new number, we run 1 loop
function fizzBuzzAlt(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 6) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else if (i % 2 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzzAlt(10)); // 1, Fizz, Buzz, Fizz, 5, Fizz Buzz, 7, Fizz, Buzz, Fizz

//p - int
//r - int, if divisible by 2 'Fizz', 3 'Buzz', 2 and 3 'Fizz Buzz'
//ps - loop from 1 to number, if n % 6 log Fizz Buzz, if n % 3 log Buzz, if n % 2 log Fizz
//else log n
