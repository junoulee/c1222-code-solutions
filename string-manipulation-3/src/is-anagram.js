/* exported isAnagram */
// split both strings into arrays;
// using .sort(), sort the array in alphabetical order;
// using.join, turn it back into a string with quotations removed;
// using .trim(), remove whitespace for strings that are 2 words;
// compare stringOne to stringTwo;
function isAnagram(firstString, secondString) {
  var stringOne = firstString.split('').sort().join('').trim();
  var stringTwo = secondString.split('').sort().join('').trim();
  if (stringOne === stringTwo) {
    return true;
  }

  return false;
}
