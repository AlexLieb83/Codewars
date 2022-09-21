// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

const flyBy = (lamps, drone) => {
  for (letter of drone) {
    if (letter === "=" || letter === "T") lamps = lamps.replace("x", "o");
  }
  return lamps;
};

//p = 2 strings with lamps represented by x, and the drone's flight path
//represented by = and ending point represented by T
//r = return string with flight path
//ps = loop over drone, if drone = or T, replace the x with o, and return lamps
