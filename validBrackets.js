// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //Create a stack, holding the open bracket
  //stack is Last In First Out
  //our stack will be holding all of the ending pairs, so we loop over the string
  //if we run into an opening, we push the matching closing to the stack
  //if we run into a closing, then we need to make sure the end of the stack matches
  //it
  const stack = [];

  //loop over string
  for (const char of s) {
    //push the closing bracket of pair onto our stack
    if (char === "(") {
      stack.push(")");
    } else if (char === "{") {
      stack.push("}");
    } else if (char === "[") {
      stack.push("]");
    } //check if stack is empty, or the end of our stack doesn't match with the closing parenthesis, then false
    else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  //check if stack is empty, if so then all brackets have matched up and return true
  return stack.length === 0;
};

//what we need to check is that for opening, we have matching closing
//( ), { }, [ ]
//also, we can NEVER have a closing before an opening

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
