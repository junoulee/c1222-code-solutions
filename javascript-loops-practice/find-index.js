/* exported findIndex */
// for loop i = 0 ; i<array.length; i++
// if value === array[i] -> return i

function findIndex(array, value) {
  var result = -1;
  for (var i = 0; i < array.length; i++) {
    // how to check if the result got updaated?????
    if (result === -1) {
      if (value === array[i]) {
        result = i;
      }
    }
  }
  return result;
}
