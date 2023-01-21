/* exported initial */
// make var newArray = []
// if array === [] - return newArray;
// else for loop (i=0; i < array.length-1; i++) {newArray.push[i]}
// return newArray

function initial(array) {
  var newArray = [];
  if (array === []) {
    return newArray;
  } else {
    for (var i = 0; i < array.length - 1; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
