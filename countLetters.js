//Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(str) {
  let map = {};

  //loop over string
  for (let i = 0; i < str.length; i++) {
    //if key exists in map already, then add one to it's value
    if (map.hasOwnProperty(str[i])) {
      map[str[i]] += 1;
      //else create new key value pair in map
    } else {
      map[str[i]] = 1;
    }
  }

  return map;
}

//p - string of letters or empty string
//r - if empty {}, else return object with letter as key and letter count as value of that key
//ps - set up an empty object, then loop over string, at each letter, add letter to empty object and plus value by 1

//p - string of letters or empty string
//r - if empty {}, else return object with letter as key and letter count as value of that key
//ps - set up an empty object, then loop over string, at each letter, add letter to empty object and plus value by 1
