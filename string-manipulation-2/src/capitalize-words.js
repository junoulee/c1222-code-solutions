/* exported capitalizeWords */
// make variable for empty string
// lower case everything
//  run a for loop with if statement (if i === ' ', uppercase i + 1) using ternary operator
// account for the first letter of string in case it's lowercased

function capitalizeWords(string) {

  var result = '';
  var newResult = '';
  result = string.toLowerCase();
  for (var i = 0; i < result.length; i++) {
    newResult += result[i] === ' ' ? result.charAt(i + 1).toUpperCase() : result.charAt(i + 1);

  }

  newResult = string.charAt(0).toUpperCase() + newResult;
  return newResult;
}
