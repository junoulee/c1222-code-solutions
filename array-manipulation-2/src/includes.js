/* exported includes */
// set condition for blank array (array.length === 0 returns false);
// run traditional for loop with if statement for (value === array[i]);
// if found, return true. All else, return false;
function includes(array, value) {
  if (array.length === 0) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
