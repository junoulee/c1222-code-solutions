/* exported invert */
// create empty object;
// for loop to find var key in source;
// set key equal to source[key] and pushed it in the empty object;

function invert(source) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}
