// DESCRIPTION:
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

//Original
// var replaceDots = function(str) {
//   return str.replace(/./, '-');
// }

//Fixed
//split at the . then join back with -
var replaceDots = function (str) {
  return str.split(".").join("-");
};