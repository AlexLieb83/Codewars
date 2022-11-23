// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  // make arr of each letter
  let arr = str.split("");

  return (
    arr
      // map over array, looking at letter and index
      .map((letter, i) => {
        // if we run into a letter that is a delimeter
        if (letter === "-" || letter === "_") {
          // then set the letter after the delimeter to uppercase
          letter = arr[i + 1].toUpperCase();
          // then basically move forward a letter using splice
          arr.splice(i + 1, 1);
        }
        // return each letter
        return letter;
      })
      .join("")
  );
}

// REGEX
// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }

//p - string of letters and delimeters
//r - string turned into camelcase, if str[0] is upper then return newStr[0] with upper also
//ps - split string into array, then loop over array, if we run into a delimeter, - or _ ,
//then we need to cap the next letter and skip that letter using splice.
//return string
