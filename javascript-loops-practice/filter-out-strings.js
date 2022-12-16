/* exported filterOutStrings */
// make var new array
// run for loop that checks each index, then make if statement
// that checks value != '', push it into new array

function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
