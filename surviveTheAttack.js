// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// Conditions

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array

function hasSurvived(attackers, defenders) {
  let attackersWin = 0;
  let defendersWin = 0;
  let attackersTotal = 0;
  let defendersTotal = 0;
  let i = 0;

  // loop while there are still attackers or defenders
  while (attackers[i] || defenders[i]) {
    //check if no attackers left, or if defender > attacker
    if (!attackers[i] || attackers[i] < defenders[i]) {
      defendersWin++;
      // check if no defenders left, or if attacker > defender
    } else if (!defenders[i] || attackers[i] > defenders[i]) {
      attackersWin++;
    }
    // if there are attackers left and we run out of defenders
    if (attackers[i]) {
      attackersTotal += attackers[i];
    }
    // if there are defenders left and we run out of attackers
    if (defenders[i]) {
      defendersTotal += defenders[i];
    }
    i++;
  }
  // if there is a tie on wins, then check for winner by totals, else check for winner by wins
  return defendersWin === attackersWin
    ? attackersTotal <= defendersTotal
    : defendersWin > attackersWin;
}

// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]
// //0 survivors                4 survivors
// //return true

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]
// //1 survivors                3 survivors
// //return true
