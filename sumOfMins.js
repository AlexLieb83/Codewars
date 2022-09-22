function sumOfMinimums(arr) {
  return arr.reduce((acc, c) => acc + Math.min(...c), 0);
}

//p - arrays of ints
//r - one int, sum of all smallest num
//from each array
//ps - reduce over arrays, take min from each array
