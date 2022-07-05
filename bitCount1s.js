// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  //this turns n into binary
  let binary = n.toString(2);
  //then we want to break the binary into an array
  //then filter and hold all the 1s into our ones variable
  //then we can return the length
  let ones = binary.split("").filter((n) => n == 1);
  return ones.length;
};
