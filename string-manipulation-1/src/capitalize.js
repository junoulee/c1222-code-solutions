/* exported capitalize */
// run for loop i=0; i < word.length; i++
// lowercase entire word toLowercase() and assign it to result
// make it return RESULT.charAt(0).toUppercase();

function capitalize(word) {
  var result;
  for (var i = 0; i < word.length; i++) {
    result = word.toLowerCase();
  }
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
