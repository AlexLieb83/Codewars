// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    let product = array[i] * array[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}

//p - array of nums
//r - max product of 2 adjacent nums, one int
//ps - set maxProduct = first 2 elements in array. Then loop over rest of array
//set maxProduct to product if it is greater than what max product already is
