// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//Prep
//Parameters
//What are they giving me? What are the expected arguments? Will it only ever be one type of data, or do I need to account for others? Will there ever be an invalid input? Do I need to account for unexpected edge cases?

//they are telling me that an interger will be passed in

//Returns
// What do they want me to return? Are they expecting a string? array? object? Is there a certain format the return is expected in? Will the expected return ever change for invalid inputs or edge cases?

//they want me to return Even or Odd, string.

//Examples
// Check your understanding! Are tests provided that you can reference as examples? What would happen in invalid or edge situations? Aim for at least 3 examples.

//I can't think of an edge case for this one, pretty simple.

//Pseudocode
//the best way to find even and odd numbers is to check if they can be divided by 2 with no remainder
//so if number can be divided into 2 with no remainder, then return Even
//else, if the number has a remainder, then return Odd
