/* exported drop */
// create empty array and set a condition for task with empty array (array.length = 0);
// run for loop but make i = count (instead of i=0), and push array[i] to result array
function drop(array, count) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    for (var i = count; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  }

}
