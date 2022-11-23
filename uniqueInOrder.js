// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  //use this to check if the iterable is a string, if so, turn it into an array
  let arr = iterable;
  if (typeof iterable === "string") {
    arr = iterable.split("");
  }

  return arr.filter((element, i, array) => element !== array[i - 1]);
};

//p - string of letters or array of numbers
//r - array without repeating elements
//ps - check if array, if not - turn to array. then filter, keep elements
//that are not like the element before them
