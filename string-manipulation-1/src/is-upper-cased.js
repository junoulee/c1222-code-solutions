/* exported isUpperCased */

// use toUpperCase() to convert word to uppercase and compare it to itself ===
// if statement - if true -> return true;

function isUpperCased(word) {

  var result = word.toUpperCase();
  if (result === word) {
    result = true;
  } else {
    return false;
  }

  return result;
}
