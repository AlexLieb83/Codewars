// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.
// Examples

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//first we make the wolf variable, which is reversing the queue array, so we can just grab the index of 'wolf'
//then we check, if wolf is in the index of 0, then it will be next to us and will eat us, if not, then return it's index, which will be the same as the sheep number in line
function warnTheSheep(queue) {
  let wolf = queue.reverse().indexOf('wolf')
  if(wolf === 0){
    return 'Pls go away and stop eating my sheep'
  } else {
    return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
  }
}