/* exported union */
// create an empty array and assign it to newArray;
// .concat first & second arrays into one;
// run for loop to push non-duplicates to newArray;
function union(first, second) {
  var newArray = [];
  var array = first.concat(second);
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
