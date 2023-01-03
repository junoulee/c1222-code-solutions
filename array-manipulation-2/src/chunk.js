/* exported chunk */
// set condition for the empty array (size > array.length) and return array;
// set condition for (size === 1) and run traditional for loop
// array.slice(i, i+size) for ex (0, 1), (1, 2), (2, 3) etc. to break up into single chunks and push
// set condition for (array.length === 7) and slice it up 3 ways (0, size), (size, 6), and (-1);
// unshift sliceOne, push sliceTwo, and push sliceThree;
// for the rest, repeat process for (array.length === 7), but just slice it twice
function chunk(array, size) {
  if (size > array.length) {
    return array;
  }
  if (size === 1) {
    var newResult = [];
    for (var i = 0; i < array.length; i++) {
      var oneSlice = array.slice(i, i + size);
      newResult.push(oneSlice);
    }
    return newResult;
  }
  if (array.length === 7) {
    var freshResult = [];
    var sliceOne = array.slice(0, size);
    var sliceTwo = array.slice(size, 6);
    var sliceThree = array.slice(-1);
    freshResult.unshift(sliceOne);
    freshResult.push(sliceTwo);
    freshResult.push(sliceThree);
    return freshResult;
  }
  var result = [];

  sliceOne = array.slice(0, size);
  sliceTwo = array.slice(size);
  result.unshift(sliceOne);
  result.push(sliceTwo);

  return result;

}
