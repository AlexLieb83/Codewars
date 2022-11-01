function stringTransformer(str) {
  //reverse the words in the string, split them into an array of letters
  let words = str.split(" ").reverse().join(" ").split("");

  for (let i = 0; i < words.length; i++) {
    //loop over the array of letters, if letter is === lowercase letter, make it uppercase
    if (words[i] === words[i].toLowerCase()) {
      words[i] = words[i].toUpperCase();
    } else {
      //else make it lowercase
      words[i] = words[i].toLowerCase();
    }
  }
  return words.join("");
}
