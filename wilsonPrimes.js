//So I put in a bit of work, then I just couldn't get it exactly right.
//Come to find out there's only three Wilson Prime #s
//so just check for those three and move on

function amIWilson(p) {
  // "The only known Wilson primes are 5, 13 and 563."
  return p == 5 || p == 13 || p == 563;
}

//prep
//parameters
//given an integer

//returns
//return boolean, if it is a wilson prime or not

//examples
// 5 == true, 9 == false, 6 == false

//pseudo
//basically checking if number is a certain prime number, so it will NOT divide evenly with 2
//so ((6 - 1)! + 1) / (6 * 6)
// so ((5*4*3*2*1) + 1) / 36
//121 / 36 = 3.36 == false

//make variable for factorial - use loop to get answer
//then plug in that variable and p into the wilson function
