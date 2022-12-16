/* exported filterOutNulls */
// make variable for new array
// run a for loop i = 0 , i < values.length; i++
// if values[i] !=  null then push it into new array
// else newArray.push(values[i])

function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
