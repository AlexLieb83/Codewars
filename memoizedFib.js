// Classic Fibonacci Problem, using memoization

// we use memoization to store the answers that we have already seen
// for example: fib(5) means we need fib(4) + fib(3)
// to find fib(4) we need fib(3) + fib(2), and to find fib(3) we need fib(2) + fib(1)
// if we use memoization, then we will not need to run fib(3) and fib(2) and fib(1) twice or more, we can just store it's answer and return it when needed
// this helps a ton if we were to run fib(100) or more.

let memo = {};

let fib = function (n) {
  // base case
  if (n === 0 || n === 1) {
    return n;
    // check memo for n, if found return result
  } else if (memo[n]) {
    return memo[n];
    // else calc new fib number and add it to memo, return result
  } else {
    let result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    return result;
  }
};

fib(5);
