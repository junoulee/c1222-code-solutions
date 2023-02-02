/* exported chunk */
// set condition for the empty array (size > array.length) and return array;
// run for loop but make final statement (i += size) ex: if size is 7, (i= 3, i = 6, etc.)
// push chunks into array of ex: if size is 7 (slice index 0 to 3), (slice index  3 to 6), (slice index  6 to 9)
function chunk(array, size) {
  if (size > array.length) {
    return array;
  }

  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;

}
