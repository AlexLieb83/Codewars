// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(array1, array2) {
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    array1[i] === array2[i]
      ? (result += 4)
      : array2[i] === ""
      ? (result += 0)
      : (result -= 1);
  }

  return result < 0 ? 0 : result;
}

//p - array of strings, one letter
//r - one num, total score, +4 if match, -1 if no match, 0 if blank
//ps - arrays are same length, so one loop. compare index 0 of both arrays
//then index 1, etc etc
