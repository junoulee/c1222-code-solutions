/* exported isLowerCased */
// run for loop i=0; i<word.length; i++
// use toLowerCase() to convert word to lowercase and compare it to itself ===
// if elsestatement - if true -> return true;

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) { var result = word.toLowerCase(); }
  if (result === word) {
    return true;
  } else {
    return false;
  }
}
