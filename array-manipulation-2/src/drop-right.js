/* exported dropRight */
// set condition for if count larger than array, return the array;
// run a for loop (var i = 0; i <= (array.length - 1) - count; i++);
// and push result to result array;

function dropRight(array, count) {
  if (count > array.length) {
    return array;
  } var result = [];
  for (var i = 0; i <= (array.length - 1) - count; i++) {
    result.push(array[i]);
  }
  return result;
}
