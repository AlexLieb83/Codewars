// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers) {
  let resultArr = [];

  for (let i = 0; i < numbers.length; i++) {
    resultArr.push(numbers.reduce((acc, c) => acc * c) / numbers[i]);
  }

  return resultArr;
}

//p - array of nums
//r - array of nums, products of original array, with the current i value removed
//ps - create new array, to store results, loop over array, multiplying values,
//then divide by arr[i]
