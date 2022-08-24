function removeDuplicateWords(s) {
  let split = s.split(" ");
  return split
    .filter((word, i, allWords) => i === allWords.indexOf(word))
    .join(" ");
}
//split the string, get the array, filter it to remove duplicate items, join them back.
