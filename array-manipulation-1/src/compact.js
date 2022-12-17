/* exported compact */
// make empty array as variable = newArray []
// run for loop (i=0, i<array.length < i++)
// make var x to convert array[i] to boolean
// if statement - if x's value is true, push it to new array
// return newArray

function compact(array) {

  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var x = Boolean(array[i]);
    if (x.valueOf() === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
