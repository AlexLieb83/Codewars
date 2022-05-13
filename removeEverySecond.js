// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//This works because we start by removing index 1, then everything shifts down indexs, then we remove index 2, so on and so forth, the fact that the index always moves down one makes this work.

function removeEveryOther(arr){
  for(let i=1; i < arr.length; i++){
    arr.splice(i, 1)
  } return arr
}