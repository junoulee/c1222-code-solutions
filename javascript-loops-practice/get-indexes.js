/* exported getIndexes */
function getIndexes(array) {
// need to return new array so make array variable
// do for loop i=0, i < array.length, i++
// push index i of array as a number into newArray
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}
