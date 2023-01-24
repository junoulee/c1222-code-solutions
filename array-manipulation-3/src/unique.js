/* exported unique */
// set variable for empty array;
// run for loop to push array[i] to new array;
// set if statement that if newArray.includes(array[i]) is false, push it to newArray;

function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {

    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }

  }
  return newArray;
}
