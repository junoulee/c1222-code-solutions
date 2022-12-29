/* exported capitalizeWord */
// set variable result
// lowercase each word (word.toLowerCase())
// make if statement for JavaScript to uppercase indexes 0 and 4 and slice out unneeded letters; (for JavaScript)
// set result to toUpperCase index 0 and slice index 1

function capitalizeWord(word) {
  var result;

  result = word.toLowerCase();

  if (result.charAt(4) === 's') {
    result = result.charAt(0).toUpperCase() + result.slice(1, 4) + result.charAt(4).toUpperCase() + result.slice(5);
    return result;

  }
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
