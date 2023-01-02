/* exported capitalize */

// lowercase entire word toLowercase() and assign it to result
// make it return RESULT.charAt(0).toUppercase();

function capitalize(word) {
  var result;

  result = word.toLowerCase();

  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
