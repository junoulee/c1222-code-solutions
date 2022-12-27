/* exported firstChars */
// set variables for an emptry string and empty array
// set if statement to return empty string for firstChars(5, '')
// split string into array (several spaces between '   ') to separate into words(not characters)
// newString.toString() to turn back to a string
// do for loop (i < length **not i < newResult.length) and return result += newResult[i];
// set if statement for firstChars(20, 'LearningFuze');

function firstChars(length, string) {

  var newString = [];
  var result = '';
  if (string === ('')) {
    return result;
  }
  newString = string.split('  ');

  var newResult = newString.toString();

  for (var i = 0; i < length; i++) {
    result += newResult[i];
  }

  if (length > newResult.length) {
    return newResult;
  }
  return result;
}
