/* exported omit */
// create empty object;
// for in loop to find var prop in source object;
// if the keys array does not include prop;
// set the value of prop from source equal to object[prop];
function omit(source, keys) {
  var object = {};
  for (var prop in source) {
    if (keys.includes(prop) === false) {
      object[prop] = source[prop];
    }

  }
  return object;
}
