// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//sort the array, this will insure that the ONE STRAY will either be first or last
//so all we need to do is compare the first two integers,
//if they are the same, then we know that the last is the diff one,
//if they are diff, then we know that the first one is the stray.

//for example [17, 17, 3, 17, 17, 17, 17]
// sort = [3, 17, 17, 17, 17, 17, 17]
//return 3 === 17 ? 17 : 3
// 3 !== 17 so return 3

function stray(numbers) {
  let sort = numbers.sort((a, b) => a - b);
  let first = sort[0];
  let second = sort[1];
  let last = sort[sort.length - 1];

  return first === second ? last : first;
}
