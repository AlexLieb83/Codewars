// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  let above = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }

  return true;
}

//p - array with nums
//r - return true if whole array is less than or equal to limit val
//ps - loop over array, if any num is over limit, return false
//else return true
