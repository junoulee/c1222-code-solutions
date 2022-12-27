/* exported lastChars */
// set variables for empty strings (doesn't matter if newString is set as empty string either)
// split string into words string.split('  ') and set the array to newResult
// convert newResult array to string again (newString.toString());
// run for loop BUT var i = newResult.length - length;
// add newResult[i] to result in the loop
// set if statement for lastChars(20, 'LearningFuze');

function lastChars(length, string) {
  var newString = [];
  var result = '';
  newString = string.split('  ');
  var newResult = newString.toString();

  for (var i = newResult.length - length; i < newResult.length; i++) {
    result += newResult[i];
  }
  if (length > newResult.length) {
    return newResult;
  }
  return result;
}
