/* exported intersection */
// create an empty array and assign it to newArray;
// .concat first & second arrays into one;
// run for loop to push non-duplicates to newArray;
// assign a new array to newNewArray;
// filter out newArray to make check for duplicates in first and second arrays;
// if there are duplicates, push the duplicate into newNewArray;';

function intersection(first, second) {
  var newArray = [];
  var array = first.concat(second);
  for (var i = 0; i < array.length; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  var newNewArray = [];
  for (i = 0; i < newArray.length; i++) {
    if (first.includes(newArray[i]) && second.includes(newArray[i])) {
      newNewArray.push(newArray[i]);
    }
  }

  return newNewArray;
}
