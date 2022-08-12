// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  let youngest = sorted[0];
  let oldest = sorted[sorted.length - 1];
  let diff = oldest - youngest;

  return [youngest, oldest, diff];
}

//p - array of ints
//r - array [lowest, oldest, diff]
//e
//p - sort array, lowest = array[0], highest = array[length - 1], diff is highest - lowest, return
