/* exported isUpperCased */
// run for loop i=0; i<word.length; i++
// use toUpperCase() to convert word to uppercase and compare it to itself ===
// if statement - if true -> return true;

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    var result = word.toUpperCase();
    if (result === word) {
      result = true;
    } else {
      return false;
    }
  }
  return result;
}
