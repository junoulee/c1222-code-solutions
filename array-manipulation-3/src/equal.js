/* exported equal */
// set if statements for two empty arrays and if first array length ! == second array length
// for loop through first array and check if each array's items match up at index i

function equal(first, second) {

  if (first.length === 0 && second.length === 0) {
    return true;
  }
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}
