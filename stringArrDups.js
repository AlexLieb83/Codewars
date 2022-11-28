// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
  // word.split will turn ["kelless","keenness"] ->
  //[[k,e,l,l,e,s,s], [ k,e,e,n,n,e,s,s]]
  //.filtered will remove dup letters so,
  //turns it into -> [[k,e,l,e,s], [k,e,n,e,s]]
  //.join will turn into [[keles], [kenes]]
  return s.map((word) =>
    word
      .split("")
      .filter((letter, i, arr) => letter !== arr[i - 1])
      .join("")
  );
}

//p - array of strings
//r - array of strings with consecutive repeated letters removed
//ps - map over array, filtering string, keeping letters that are NOT the same as
//letter before
//Then map over that arr, joining each array of letters into strings
