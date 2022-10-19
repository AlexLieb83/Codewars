// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url) {
  //remove all things besides site name and .com
  url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".");

  return arr[0];
}

//Tests
console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
