/* exported reverse */
// make var newArray = []
// if array === [] - return newArray;
// else do for loop (i=array.length-1; i >= 0; i--) {newArray.push(array[i])}
// return newArray
function reverse(array) {
  var newArray = [];
  if (array === []) {
    return newArray;
  } else {
    for (var i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
