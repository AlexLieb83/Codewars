// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  //spilt string into array and make it all lowercase
  let arr = s.toLowerCase().split("");
  let result = [];

  //loop twice through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      //if its the first letter of the group, add a - at the front and uppercase letter
      if (j == 0) {
        result.push("-" + arr[i].toUpperCase());
        //push the rest of the letters, according to the index num
      } else if (j <= i) {
        result.push(arr[i]);
      }
    }
  }
  //return with the string put back together and removing the very first -
  return result.join("").slice(1);
}

//codewars way
// function accum(s) {
//   return (
//     s
//       //split into array
//       .split("")
//       //map over array
//       .map(
//         (letter, index) =>
//           //for the first letter, make it uppercase, follow by lower case letters, repeating to match the index num
//           letter.toUpperCase() + letter.toLowerCase().repeat(index)
//       )
//       //join array back together by -
//       .join("-")
//   );
// }
