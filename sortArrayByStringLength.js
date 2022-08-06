// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

//prep
//parameters
//array of strings, none will be the same length

//return
//return an array of strings, with length smallest to largest

//examples
//(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]), (["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"])
//(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"])

//pseudo
//loop through array sort by each length
