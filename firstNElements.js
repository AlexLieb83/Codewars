// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []
// Examples

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//we set n=1 because the default is 1, then we are just returning a slice of the arr from the beginning to whatever is called for.
function first(arr, n=1) {
  return arr.slice(0,n);
}