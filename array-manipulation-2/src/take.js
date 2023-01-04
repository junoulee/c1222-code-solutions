/* exported take */
// create empty array and set a condition for task with empty array (array.length = 0);
// run for loop but make i < count (instead of array.length), and push it to result array

function take(array, count) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    for (var i = 0; i < count; i++) {
      result.push(array[i]);
    }
  }

  return result;

}
