// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

function sumMul(n, m) {
  let firstNum = n;
  let sum = 0;

  if (m <= n) {
    return "INVALID";
  } else {
    for (let i = firstNum; i < m; i += firstNum) {
      sum += i;
    }
  }
  return sum;
}

//p - two numbers, first being start, second being end
//r - return one number, add all multiples of n together
//p - loop from n to less than m, keep running sum of n + n*2
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
