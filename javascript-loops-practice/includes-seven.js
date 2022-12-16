/* exported includesSeven */
// for loop i = 0, i < array.length
// if statement if array[i] === 7, then return true / else return false

function includesSeven(array) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      result = true;
    }
  }
  return result;
}
