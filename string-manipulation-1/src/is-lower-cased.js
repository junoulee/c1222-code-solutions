/* exported isLowerCased */

// use toLowerCase() to convert word to lowercase and compare it to itself ===
// if elsestatement - if true -> return true;

function isLowerCased(word) {
  var result = word.toLowerCase();
  if (result === word) {
    return true;
  } else {
    return false;
  }
}
