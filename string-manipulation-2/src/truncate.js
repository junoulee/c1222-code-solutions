/* exported truncate */
// make a variable for an empty string
// set separate if statements with differing conditions
// if length >= 1, have it return [length-1]
// if length is less or greater than the string's length:
// run for loop (i=0, i < string.length, i++)
// in the code block - concatenate string.length with ellipses

function truncate(length, string) {

  var result = '';
  if (length <= 1) {
    result = result + string[length - 1];
    result += '...';
    return result;
  }
  if (length < string.length) {
    for (var i = 0; i < length; i++) {
      result = result + string[i];
    }
  }
  if (length > string.length) {
    for (i = 0; i < string.length; i++) {
      result = result + string[i];
    }
  }
  result += '...';
  return result;
}
