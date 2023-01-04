/* exported takeRight */
// set condition for if count larger than array, return the array;
// run a backwards for loop (var i = array.length - 1; i >= array.length - count; i--)
// and unshift result to result array;

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var result = [];
  for (var i = array.length - 1; i >= array.length - count; i--) {
    result.unshift(array[i]);
  }
  return result;
}
