// TODO: Refactor and shorten the function

function describeAge(age) {
  let p;
  age <= 12
    ? (p = "kid")
    : age <= 17
    ? (p = "teenager")
    : age <= 64
    ? (p = "adult")
    : (p = "elderly");
  return `You're a(n) ${p}`;
}
