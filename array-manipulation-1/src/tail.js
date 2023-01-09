/* exported tail */
// make var newArray = []
// if array === [] - return newArray
// else for loop that starts at i=1; i < array.length; i++
// then newArray.push(i); return newArray

function tail(array) {

  var newArray = [];
  if (array === []) {
    return newArray;
  } else {
    for (var i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
