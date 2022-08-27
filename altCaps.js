// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
  let odds = []
  let evens = []
  
  for(let i=0; i<s.length; i++){
    if(i % 2 != 0){
      odds.push(s[i].toUpperCase())
    } else{
      odds.push(s[i])
    }
    }
  
    for(let i=0; i<s.length; i++){
    if(i % 2 === 0){
      evens.push(s[i].toUpperCase())
    } else{
      evens.push(s[i])
    }
    }  
    return [evens.join(''), odds.join('')]
    
    
  }


//p - string with lowercase letters, no spaces
//r - array with two strings inside, opposite capitalization
//ps - loop over string, cap 1, 3, 5... then push to return array
//     then loop over 2, 4, 6... then push to return array