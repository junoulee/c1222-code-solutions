/* exported difference */
// create an empty array and assign it to newArray;
// .concat first & second arrays into one;
// run for loop to push non-duplicates to newArray;
// filter out newArray to make sure none are included in both first and second arrays;
// if there are duplicates, get index of newArray[i] and splice it out at its index;
function difference(first, second) {
  var newArray = [];
  var array = first.concat(second);
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }

  for (i = 0; i < newArray.length; i++) {
    if (first.includes(newArray[i]) && second.includes(newArray[i])) {
      var index = newArray.indexOf(newArray[i]);
      newArray.splice(index, 1);
    }
  }

  return newArray;
}
