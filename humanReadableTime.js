// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  //we are dividing how many hours we have based on our seconds, then we are storing that remainder in timeLeft
  let hours = Math.floor(seconds / 3600).toString();
  let timeLeft = seconds % 3600;

  //then we do the same for mins
  //we have to store these as strings, so that we can add 0 and it returns string
  let mins = Math.floor(timeLeft / 60).toString();
  timeLeft = timeLeft % 60;
  let secs = timeLeft.toString();

  //we add 0 to all of them then just return the last 2 nums using slice for each, so that it reads like a stopwatch
  return `${("0" + hours).slice(-2)}:${("0" + mins).slice(-2)}:${(
    "0" + secs
  ).slice(-2)}`;
}
