/* exported zip */
// .concat both arrays into an empty array;
// create another empty array, and push pairs into this new array using for loop;
// set conditions if first and second arrays don't have the same length;

function zip(first, second) {
  var array = first.concat(second);
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push([array[i], array[i + (array.length / 2)]]);
    if (newArray.length === (first.length + second.length) / 2) {
      return newArray;
    }
  }

  if (first.length > second.length) {
    first.pop();
    array = first.concat(second);
    newArray = [];
    for (i = 0; i < array.length / 2; i++) {
      newArray.push([array[i], array[i + (array.length / 2)]]);
    }
    return newArray;
  }

  if (second.length > first.length) {
    second.pop();
    array = first.concat(second);
    newArray = [];
    for (i = 0; i < array.length / 2; i++) {
      newArray.push([array[i], array[i + (array.length / 2)]]);
    }
    return newArray;
  }

}
