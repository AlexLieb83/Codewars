// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

function maskify(cc) {
  //if cc is only 4 chars or less, just return that,
  if (cc.length <= 4) {
    return cc;
    //if cc is more than 4 chars, run
  } else {
    //slice the 4 chars to keep
    let show = cc.slice(cc.length - 4);
    //we will grab everything from the beginning to the final 4 characters, split into an array, then map over turning the chars into #, then join back into a string
    let hash = cc
      .slice(0, cc.length - 4)
      .split("")
      .map((num) => (num = "#"))
      .join("");

    //then put the two together and return
    return hash + show;
  }
}
