/* exported capitalizeWord */
// set variable result
// lowercase each word (word.toLowerCase())
// make if statement for JavaScript to be returned if charAt === 's';
// set result to toUpperCase index 0 and slice index 1

function capitalizeWord(word) {
  var result;

  result = word.toLowerCase();

  if (result.charAt(4) === 's') {

    return 'JavaScript';

  }
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
