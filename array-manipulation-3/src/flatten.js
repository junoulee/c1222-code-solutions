/* exported flatten */
// assign empty array to variable flat;
// pass two arguments (flat, array) to the apply method;
// concatenate all the sub-arrays into an empty array(flat) using .concat;

function flatten(array) {
  var flat = [];
  flat = flat.concat.apply(flat, array);
  return flat;

}
